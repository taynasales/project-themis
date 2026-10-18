import { step } from "../utils/step";

const FirstStep = {
  render: (onNext: () => void, onPrevious: () => void) => {
    return step("first-step");
  },
};

export default FirstStep;
