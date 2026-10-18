import { el, type Child } from "./el";

export function step(name: string, ...children: Child[]): HTMLDivElement {
  return el("div", { "data-screen": name }, ...children);
}
