import { TextFieldProps, FormData } from "../../types.ts";
import { UseFormRegister } from "react-hook-form";

interface ComponentProps {
  field: TextFieldProps;
  register: UseFormRegister<FormData>;
}

export function TextField({ field, register }: ComponentProps) {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor={field.id}
      >
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        placeholder={field.placeholder}
        {...register(field.id, { required: field.required })}
        id={field.id}
        type={field.type}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
