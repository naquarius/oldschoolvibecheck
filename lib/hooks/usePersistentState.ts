import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface PersistentStateOptions<T> {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
  validate?: (value: T) => boolean;
}

/**
 * Like useState but saves to localStorage automatically
 *
 * The first render always uses the default value so it matches the
 * server-rendered HTML (no hydration mismatch); the stored value is
 * loaded right after mount.
 *
 * @param key - localStorage key to store the value under
 * @param initialValue - default value if nothing in storage
 * @param options - optional serialize/deserialize/validate functions
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T | (() => T),
  options?: PersistentStateOptions<T>
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);
  const hasLoaded = useRef(false);

  // Load the stored value once, after hydration
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed = options?.deserialize
          ? options.deserialize(stored)
          : (JSON.parse(stored) as T);

        if (!options?.validate || options.validate(parsed)) {
          setValue(parsed);
        }
      }
    } catch (error) {
      console.warn(`Failed to read localStorage key "${key}":`, error);
    }
    hasLoaded.current = true;
    // Load only once per key
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Save to localStorage whenever value changes (after the initial load)
  useEffect(() => {
    if (!hasLoaded.current) return;

    try {
      const serialized = options?.serialize
        ? options.serialize(value)
        : JSON.stringify(value);

      localStorage.setItem(key, serialized);
    } catch (error) {
      console.warn(`Failed to save to localStorage key "${key}":`, error);
    }
  }, [key, value, options?.serialize]);

  return [value, setValue];
}
