/**
 * This custom hook is a wrapper around `useSearchParams()` that parses and
 * serializes the search param value using the JSURL library, which permits any
 * JavaScript value to be safely URL-encoded.
 *
 * It's a good example of how React hooks offer a great deal of flexibility when
 * you compose them together!
 *
 * TODO: rethink the generic type here, users can put whatever they want in the
 * URL, probably best to use runtime validation with a type predicate:
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
import { NavigateOptions } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";

export function useQueryParam(
  key: string
): [string | undefined, (newQuery: string, options?: NavigateOptions) => void] {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key) || undefined;

  let value = useMemo(() => paramValue, [paramValue]);

  let setValue = useCallback(
    (newValue: string, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams);
      // @ts-ignore
      newSearchParams.set(key, newValue);
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}
