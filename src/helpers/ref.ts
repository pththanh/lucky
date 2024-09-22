type PossibleRef<T> = React.Ref<T> | undefined | null;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && typeof ref == "object" && "current" in ref) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

export function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T | null) => refs.forEach((ref) => setRef(ref, node));
}
