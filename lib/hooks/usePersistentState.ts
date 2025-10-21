import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type InitialValue<T> = T | (() => T);

interface PersistentStateOptions<T> {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
  validate?: (value: T) => boolean;
}

const defaultSerialize = <T>(value: T) => JSON.stringify(value);
const defaultDeserialize = <T>(value: string) => JSON.parse(value) as T;

// CODEX wrote this ugly ass code and i can't be bothered to make it pretty but holy shit
export function usePersistentState<T>(
  key: string,
  initialValue: InitialValue<T>,
  options?: PersistentStateOptions<T>
): [T, Dispatch<SetStateAction<T>>] {
  const serialize = options?.serialize ?? defaultSerialize<T>;
  const deserialize = options?.deserialize ?? defaultDeserialize<T>;
  const validate = options?.validate;

  const getInitial = () => {
    const base =
      typeof initialValue === 'function'
        ? (initialValue as () => T)()
        : initialValue;

    if (typeof window === 'undefined') {
      return base;
    }

    const stored = window.localStorage.getItem(key);
    if (stored === null) {
      return base;
    }

    try {
      const parsed = deserialize(stored);
      if (validate && !validate(parsed)) {
        return base;
      }
      return parsed;
    } catch {
      return base;
    }
  };

  const [value, setValue] = useState<T>(() => getInitial());
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(key, serialize(value));
    } catch {
      // Ignore serialization errors.
    }
  }, [key, serialize, value]);

  return [value, setValue];
}
