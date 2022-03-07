import { useState } from "react";

export function useLocalStorage(key: string, initialValue: string, expiration?: number) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      if (!item) {
        return initialValue
      }
      const value = JSON.parse(item)
      if (value.exp > Date.now()) {
        return value.value
      } else {
        window.localStorage.removeItem(key)
        return initialValue
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: string) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value;
      const data = { exp: Date.now(), value: valueToStore }
      // Save state
      setStoredValue(data);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
