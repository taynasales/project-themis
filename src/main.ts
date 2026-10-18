import "./style.css";

import { el } from "./utils/el";

import welcome from "./steps/0-welcome";
import firstStep from "./steps/1-step";
import secondStep from "./steps/2-step";
import result from "./steps/3-result";

const steps = [welcome, firstStep, secondStep, result];

let currentStep = 0;

const app = document.querySelector<HTMLDivElement>("#app")!;

function nextStep(): void {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
}

function previousStep(): void {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function createNavigation(): HTMLDivElement {
  const navigationButtons = el(
    "div",
    { class: "navigation-buttons" },
    el("button", { onclick: previousStep }, "Previous"),
    el("button", { onclick: nextStep }, "Next"),
  );
  return navigationButtons;
}

function renderStep(): void {
  app.replaceChildren(steps[currentStep].render(), createNavigation());
}

renderStep();
