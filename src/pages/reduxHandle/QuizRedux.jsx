import React from "react";
import QuizButtonRedux from "../../assets/components/renderListRedux/QuizButtonRedux";
import QuizViewRedux from "../../assets/components/renderListRedux/QuizViewRedux";

const QuizRedux = () => {
  return (
    <div className="py-6">
      {/* Handle Data Secara Dinamis */}
      <div className="flex flex-col gap-6">
        <span>
          <QuizViewRedux />
        </span>

        <span>
          <QuizButtonRedux />
        </span>
      </div>
    </div>
  );
};

export default QuizRedux;
