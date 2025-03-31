// Common types
export interface Field {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  defaultValue?: boolean | string;
}

export interface Section {
  id: string;
  title: string;
  fields: Field[];
}

// Form types
export interface Form {
  type: "form";
  id: string;
  title: string;
  sections: Section[];
}

// Tab types
export interface Tab {
  type: "tab";
  id: string;
  title: string;
  content: Form;
}

export interface Tabs {
  type: "tabs";
  id: string;
  title: string;
  tabs: Tab[];
}

// Step types
export interface Step {
  type: "step";
  id: string;
  title: string;
  content: Form | Tabs;
}

type WizardStepContent = Form;

export interface WizardStep {
  id: string;
  title: string;
  content: WizardStepContent;
}

export interface Wizard {
  type: "wizard";
  id: string;
  title: string;
  steps: WizardStep[];
}

export type ContentType = Form | Wizard;
