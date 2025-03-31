export const useFormId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("formId") || "";
};
