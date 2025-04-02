import { Step } from "../types";

interface StepContentProps {
  step: Step;
  showSubmit: boolean;
  onNext: () => void;
}

export function StepContent({ step }: StepContentProps) {
  if (step.content.type === "form") {
    return (
      // <FormView form={step.content} showSubmit={showSubmit} onNext={onNext} />
      <></> //TODO: implement StepFormView
    );
  }
  return null;
}
