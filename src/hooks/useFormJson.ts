import { useFetchData } from "./useFetchData.ts";

export const useFormJson = (formId: string) => {
  const formLink =
    "https://dlmx7yo7g5.execute-api.eu-central-1.amazonaws.com/dev/forms/" +
    formId;
  return useFetchData(formLink);
};
