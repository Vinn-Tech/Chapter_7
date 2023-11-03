// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeBrand,
//   changeListBedak,
//   minusTotal,
//   plusTotal,
// } from "../../../redux/action/KotakMakeUp";

const QuizButtonRedux = () => {
  // const dispatch = useDispatch();
  // const arrBedak = useSelector((state) => state.makeUp.listBedak);
  // const [itemBedak, setitemBedak] = useState("");

  // const deleteBedak = () => {
  //   let newBedak = [...arrBedak];
  //   if (newBedak.length > 0) {
  //     newBedak.pop();
  //     dispatch(changeListBedak({ listBedak: newBedak }));
  //   } else {
  //     alert("Bedak is Empty");
  //   }
  // };

  // const pushBedak = () => {
  //   if (itemBedak.trim() !== "") {
  //     let newBedak = [...arrBedak, itemBedak];
  //     dispatch(changeListBedak({ listBedak: newBedak }));
  //     setitemBedak(" ");
  //   } else {
  //     alert("masukkan itemnya");
  //   }
  // };

  // return (
  //   <div className="flex flex-col justify-center gap-6">
  //     <div className="brand-section flex justify-center items-center gap-6">
  //       <input
  //         placeholder="Nama Brand"
  //         className="border-2 border-yellow-600 px-2 py-1 font-montserrat"
  //         onChange={(e) => {
  //           if (e.target.value.trim() !== "") {
  //             dispatch(
  //               changeBrand({
  //                 namaBrand: e.target.value,
  //                 penerbit: "sedang dicari...",
  //               })
  //             );
  //           } else
  //             dispatch(
  //               changeBrand({
  //                 namaBrand: "lato-lato",
  //                 penerbit: "sari roti",
  //               })
  //             );
  //         }}
  //       />
  //       <button
  //         onClick={() => {
  //           dispatch(plusTotal());
  //         }}
  //         className="bg-blue-600 py-2 px-4 font-montserrat text-white"
  //       >
  //         Plus
  //       </button>
  //       <button
  //         onClick={() => {
  //           dispatch(minusTotal());
  //         }}
  //         className="bg-red-600 py-2 px-4 font-montserrat text-white"
  //       >
  //         Minus
  //       </button>
  //     </div>

  //     <div className="array-section flex justify-center items-center gap-6">
  //       <input
  //         placeholder="Input Bedak"
  //         className="border-2 border-yellow-600 px-2 py-1 font-montserrat"
  //         value={itemBedak}
  //         onChange={(e) => {
  //           setitemBedak(e.target.value);
  //         }}
  //       />

  //       <button
  //         onClick={() => {
  //           pushBedak();
  //         }}
  //         className="bg-purple-600 py-2 px-4 font-montserrat text-white"
  //       >
  //         Tambah Item Bedak
  //       </button>

  //       <button
  //         onClick={() => {
  //           deleteBedak();
  //         }}
  //         className="bg-amber-600 py-2 px-4 font-montserrat text-white"
  //       >
  //         Hapus Array
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default QuizButtonRedux;
