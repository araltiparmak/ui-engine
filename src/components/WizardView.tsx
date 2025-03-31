import { useState } from "react";
import { Wizard } from "../types";
import { StepContent } from "./StepContent";

interface WizardViewProps {
  wizard: Wizard;
}

export function WizardView({ wizard }: WizardViewProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === wizard.steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = wizard.steps[currentStep];

  return (
    <div className="space-y-6">
      <div className="flex justify-between mb-8">
        {wizard.steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center ${
              index !== wizard.steps.length - 1 ? "flex-1" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
            {index !== wizard.steps.length - 1 && (
              <div
                className={`h-1 flex-1 mx-2 ${
                  index < currentStep ? "bg-blue-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <StepContent
        step={currentStepData}
        showSubmit={isLastStep}
        onNext={handleNext}
      />

      <div className="flex justify-between mt-6">
        <div>
          {!isFirstStep && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
        </div>
        <div>
          {!isLastStep && (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
