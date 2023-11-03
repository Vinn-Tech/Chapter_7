import React from "react";
import { useSelector } from "react-redux";

const QuizViewRedux = () => {
  const dataMakeUp = useSelector((state) => state.makeUp);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="font-montserrat text-bold">
        Jumlah : {dataMakeUp.jumlahMakeup}
      </h1>
      <h1 className="font-montserrat text-bold">
        Brand : {dataMakeUp.namaBrand}
      </h1>
      <h1 className="font-montserrat text-bold">
        Penerbit : {dataMakeUp.penerbit}
      </h1>
      <h1 className="font-montserrat text-bold">
        List Bedak : {dataMakeUp.listBedak}
      </h1>
    </div>
  );
};

export default QuizViewRedux;
