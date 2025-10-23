import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PersistentStateOptions<T> {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
  validate?: (value: T) => boolean;
}

/**
 * Like useState but saves to localStorage automatically
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
  // Get the initial value (either from localStorage or the default)
  const [value, setValue] = useState<T>(() => {
    // Server-side rendering check
    if (typeof window === 'undefined') {
      return typeof initialValue === 'function'
        ? (initialValue as () => T)()
        : initialValue;
    }

    // Try to load from localStorage
    const stored = localStorage.getItem(key);
    if (!stored) {
      return typeof initialValue === 'function'
        ? (initialValue as () => T)()
        : initialValue;
    }

    try {
      // Deserialize the stored value
      const parsed = options?.deserialize
        ? options.deserialize(stored)
        : (JSON.parse(stored) as T);

      // Validate if a validator was provided
      if (options?.validate && !options.validate(parsed)) {
        return typeof initialValue === 'function'
          ? (initialValue as () => T)()
          : initialValue;
      }

      return parsed;
    } catch (error) {
      console.warn(`Failed to parse localStorage key "${key}":`, error);
      return typeof initialValue === 'function'
        ? (initialValue as () => T)()
        : initialValue;
    }
  });

  // Save to localStorage whenever value changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

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
