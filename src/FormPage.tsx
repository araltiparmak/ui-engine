import { useEffect, useState } from "react";
import { ContentType } from "./types";
import { FormView } from "./components/FormView";
import { WizardView } from "./components/WizardView";
import { useFormJson } from "./hooks/useFormJson.ts";
import { useParams } from "react-router-dom";

function FormPage() {
  const { formId } = useParams();

  const [content, setContent] = useState<ContentType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string>(""); //TODO: handle error

  const { data } = useFormJson(formId);

  console.log("data: ", data?.content[0][0]);

  useEffect(() => {
    setContent(data?.content[0][0]);
    setLoading(false);
  }, [data]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="p-4 m-4 border border-red-500 text-red-500 rounded-md">
        {error}
      </div>
    );
  if (!content) return <div className="text-center p-4">No data available</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{content.title}</h1>

      {content.type === "form" ? (
        <FormView form={content} />
      ) : (
        <WizardView wizard={content} />
      )}
    </div>
  );
}

export default FormPage;
