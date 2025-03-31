import { Section } from '../types';
import { TextField } from './TextField';
import { SelectField } from './SelectField';
import { CheckboxField } from './CheckboxField';

interface FormSectionProps {
  section: Section;
}

export function FormSection({ section }: FormSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
      <div className="space-y-4">
        {section.fields.map((field) => {
          switch (field.type) {
            case 'text':
            case 'email':
              return <TextField key={field.id} field={field} />;
            case 'select':
              return <SelectField key={field.id} field={field} />;
            case 'checkbox':
              return <CheckboxField key={field.id} field={field} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
} 