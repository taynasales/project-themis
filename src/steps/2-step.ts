import { step } from "../utils/step";

const SecondStep = {
  render: (onNext: () => void, onPrevious: () => void) => {
    return step("second-step");
  },
};

export default SecondStep;
