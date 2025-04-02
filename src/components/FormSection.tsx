import { FormData, Section } from "../types";
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { UseFormRegister } from "react-hook-form";

interface FormSectionProps {
  section: Section;
  register: UseFormRegister<FormData>;
}

export function FormSection({ section, register }: FormSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
      <div className="space-y-4">
        {section.fields.map((field) => {
          if (!field.id) {
            console.error(`Field ${field.id} is missing a name property`);
            return null;
          }

          switch (field.type) {
            case "text":
            case "email":
              return (
                <TextField register={register} key={field.id} field={field} />
              );
            case "select":
              return <SelectField key={field.id} field={field} />;
            case "checkbox":
              return <CheckboxField key={field.id} field={field} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
