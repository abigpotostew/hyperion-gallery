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
import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";

export function useQueryParam(
  key: string
): [string | undefined, (newQuery: string) => void] {

  const router = useRouter()
  const queryValue = router.query[key];
  let paramValue: string | undefined;
  if (queryValue === undefined || typeof queryValue === 'string') {
    paramValue = queryValue
  } else {
    paramValue = queryValue.join('');
  }

  let value = useMemo(() => paramValue, [paramValue]);
  let setValue = useCallback(
    (newValue: string) => {
      if (!router.isReady) {
        return;
      }
      router.query[key] = newValue
      router.push(router)
    },
    [key, router]
  );

  if (!router.isReady) return [undefined, () => {
  }]

  return [value, setValue];
}
