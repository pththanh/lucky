export interface ControlledFieldBaseProps<T> {
  isInvalid?: boolean;
  name: string;
  id: string;
  isDisabled?: boolean;
  errorMessages?: React.ReactNode;
  onChange: (value: T) => void;
  value: T;
}

export type ExcludeDefaultAttributes = "id" | "name" | "onChange" | "value";
