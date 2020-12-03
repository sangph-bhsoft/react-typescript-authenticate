import React, { useState } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  id?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  name: string;
  className?: string;
  label?: string;
  error?: FieldError;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

type Ref = HTMLInputElement;

const InputForm = React.forwardRef<Ref, Props>(
  ({ id, type, placeholder, name, label, error, onKeyPress }, ref) => {
    return (
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 outline-none text-gray-700"
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          aria-label={placeholder}
          name={name}
          onKeyPress={onKeyPress}
        />
        {error && (
          <p className="text-red-500 text-xs italic">{error.message}</p>
        )}
      </div>
    );
  }
);

export default InputForm;
