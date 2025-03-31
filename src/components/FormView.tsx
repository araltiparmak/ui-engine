import { Form } from "../types";
import { FormSection } from "./FormSection";
import { SubmitButton } from "./SubmitButton";
import { CancelButton } from "./CancelButton";

interface FormViewProps {
  form: Form;
  showSubmit?: boolean;
  onNext?: () => void;
}

export function FormView({ form, showSubmit = true, onNext }: FormViewProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showSubmit && onNext) {
      onNext();
    } else {
      // Handle final form submission
      console.log("Form submitted");
    }
  };

  const handleCancel = () => {
    // Handle cancellation
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">{form.title}</h2>
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 rounded-lg p-6"
      >
        {form.sections.map((section) => (
          <FormSection key={section.id} section={section} />
        ))}
        <div className="flex justify-end mt-6">
          {showSubmit ? (
            <>
              <SubmitButton />
              <CancelButton onClick={handleCancel} />
            </>
          ) : null}
        </div>
      </form>
    </div>
  );
}
