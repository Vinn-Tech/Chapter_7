import React from "react";
import { useDispatch } from "react-redux";
import { changeName, minusAge, plusAge } from "../../../redux/action/EditDataRedux";

const ButtonRedux = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center gap-6">
      <input placeholder="Favorite Color" className="border-2 border-yellow-600 px-2 py-1 font-montserrat" onChange={(e)=> {
        dispatch(changeName({
            name : e.target.value
        }))
      }}/>
      <button
        onClick={() => {
          dispatch(plusAge());
        }}
        className="bg-blue-600 py-2 px-4 font-montserrat"
      >
        Plus
      </button>
      <button
        onClick={() => {
          dispatch(minusAge());
        }}
        className="bg-red-600 py-2 px-4 font-montserrat"
      >
        Minus
      </button>
    </div>
  );
};

export default ButtonRedux;
