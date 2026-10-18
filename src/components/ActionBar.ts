import { el } from "../utils/el";

function ActionBar(
  onNext: () => void,
  nextTitle: string,
  summary: string,
): HTMLDivElement {
  const container = el("div", { class: "action-bar" });
  return container;
}
