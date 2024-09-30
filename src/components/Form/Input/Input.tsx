import React, { ReactNode, useRef } from "react";
import {
  ControlledFieldBaseProps,
  ExcludeDefaultAttributes,
} from "../../../types/form-fields.types";
import { composeRefs } from "../../../helpers/ref";

export interface InputProps
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
          className="border-solid border-transparent border-[1px] rounded-[3px] flex justify-between w-full relative"
          onClick={handleOnClick}
          {...{ [dataAttribute]: true }}
        >
          {startSlot && (
            <div className="absolute top-1/2 left-[1.2rem] order-0 -translate-y-1/2 inline-flex">
              {startSlot}
            </div>
          )}
          <input
            ref={composeRefs(inputRef, ref)}
            type={type}
            onChange={onCustomizeChange}
            className="p-[15px] tracking-wide bg-lightgray focus:outline-none text-sm text-black font-light"
            style={{
              paddingLeft: startSlot ? "3rem" : undefined,
              paddingRight: endSlot ? "3rem" : undefined,
            }}
            {...props}
          />
          {endSlot && (
            <div className="absolute top-1/2 right-[1.2rem] -translate-x-[20%] -translate-y-1/2 order-2 inline-flex">
              {endSlot}
            </div>
          )}
        </div>
        {errorMessages && <span>{errorMessages}</span>}
      </div>
    );
  }
);

export default Input;
