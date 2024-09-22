import React, { ReactNode, useRef } from "react";
import {
  ControlledFieldBaseProps,
  ExcludeDefaultAttributes,
} from "../../../types/form-fields.types";
import { composeRefs } from "../../../helpers/ref";

interface InputProps
  extends ControlledFieldBaseProps<string>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      ExcludeDefaultAttributes
    > {
  startSlot: ReactNode;
  endSlot: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { startSlot, endSlot, onChange, type, isInvalid, errorMessages, ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dataAttribute = isInvalid ? "data-invalid" : "data-valid";

    const onCustomizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    const handleOnClick = () => {
      inputRef?.current?.focus();
    };

    return (
      <div>
        <div
          className="border-solid border-transparent border-[1px] rounded-[3px] flex "
          onClick={handleOnClick}
          {...{ [dataAttribute]: true }}
        >
          {startSlot && <div>{startSlot}</div>}
          <input
            ref={composeRefs(inputRef, ref)}
            type={type}
            onChange={onCustomizeChange}
            className="p-2 text-[14px] bg-lightgray focus:outline-none"
            {...props}
          />
          {endSlot && <div>{startSlot}</div>}
        </div>
        {errorMessages && <span>{errorMessages}</span>}
      </div>
    );
  }
);

export default Input;
