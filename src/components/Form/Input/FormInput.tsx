import Input, { InputProps } from "./Input";
import { FieldValues, Path, Control, useController } from "react-hook-form";

interface FormInputProps<T extends FieldValues>
  extends Omit<InputProps, "onChange" | "value"> {
  name: Path<T>;
  control: Control<T>;
}

const FormInput = <T extends FieldValues>({
  name,
  control,
  ...restProps
}: FormInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Input
      {...restProps}
      {...field}
      isInvalid={Boolean(error)}
      errorMessages={error?.message}
    />
  );
};

export default FormInput;
