import { el } from "../utils/el";

function ProgressBar(
  onPrevious: () => void,
  currentStep: number,
  totalSteps: number,
  stepTitle: string,
  label: string,
): HTMLDivElement {
  const container = el(
    "div",
    { class: "progress-bar" },
    el("div", { class: "progress" }),
  );
  return container;
}
