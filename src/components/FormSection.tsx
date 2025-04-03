import { FormData, Section } from "../types";
import { TextField } from "./fields/TextField.tsx";
import { SelectField } from "./fields/SelectField.tsx";
import { CheckboxField } from "./fields/CheckboxField.tsx";
import { UseFormRegister } from "react-hook-form";
import { TextAreaField } from "./fields/TextArea.tsx";

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
            case "tel":
            case "number":
            case "password":
            case "url":
            case "date":
              return (
                <TextField key={field.id} register={register} field={field} />
              );
            case "textarea":
              return (
                <TextAreaField
                  key={field.id}
                  register={register}
                  field={field}
                />
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
