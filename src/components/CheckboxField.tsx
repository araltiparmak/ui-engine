import { Field } from '../types';

interface CheckboxFieldProps {
  field: Field;
}

export function CheckboxField({ field }: CheckboxFieldProps) {
  return (
    <div className="mb-4">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          id={field.id}
          name={field.name}
          defaultChecked={field.defaultValue as boolean}
          className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
        />
        <span className="text-sm font-medium text-gray-700">{field.label}</span>
      </label>
    </div>
  );
} 