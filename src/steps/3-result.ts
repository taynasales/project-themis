import { step } from "../utils/step";

const Result = {
  render: (onNext: () => void, onPrevious: () => void) => {
    return step("result");
  },
};

export default Result;
