import { Form, FormData } from "../types";
import { FormSection } from "./FormSection";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Result } from "./Result.tsx";

interface FormViewProps {
  form: Form;
}
const webhookId = "60e1932d-c73a-4d1b-a983-97d90e7fb278"; //TODO

export function FormView({ form }: FormViewProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`https://webhook.site/${webhookId}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
      const result = await response.json(); // TODO: fix this
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-200 rounded-lg p-6"
      >
        {form.sections.map((section) => (
          <FormSection key={section.id} section={section} register={register} />
        ))}
        <div className="flex justify-end mt-6">
          <SubmitButton />
          {/*<CancelButton onClick={handleCancel} />*/}
        </div>

        {submitted && (
          <div className="flex justify-end mt-6">
            <Result webhookId={webhookId} />
          </div>
        )}
      </form>
    </div>
  );
}
