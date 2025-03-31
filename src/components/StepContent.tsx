import { Step } from "../types";
import { FormView } from "./FormView";

interface StepContentProps {
  step: Step;
  showSubmit: boolean;
  onNext: () => void;
}

export function StepContent({ step, showSubmit, onNext }: StepContentProps) {
  if (step.content.type === "form") {
    return (
      <FormView form={step.content} showSubmit={showSubmit} onNext={onNext} />
    );
  }
  return null;
}
