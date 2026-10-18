import { el } from "../utils/el";
import { step } from "../utils/step";

const Welcome = {
  render: (onNext: () => void) => {
    return step(
      "welcome",
      el(
        "div",
        { class: "hero" },
        el("h1", {}, "Rachou."),
        el(
          "h2",
          {},
          "Divida a conta do bar item por item, sem cadastro e sem briga.",
        ),
        el(
          "div",
          { class: "actions" },
          el(
            "button",
            { onclick: onNext, class: "primary" },
            "Começar a rachar",
          ),
          el(
            "button",
            { onclick: () => {}, class: "secondary" },
            "Ver com uma mesa de exemplo",
          ),
        ),
      ),
      el("div", {}, el("h1", {}, ""), el("p", {}, "")),
    );
  },
};

export default Welcome;
