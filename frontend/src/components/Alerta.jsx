import React, { useEffect } from "react";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alerta = ({ alerta }) => {
  return (
    //?Se comenta la alerta personalizada, para usar toastify
    /*   <div
      className={`${
        alerta.error ? "from-red-400 to-red-500" : "from-sky-400 to-sky-600"
      } bg-gradient-to-br text-center p-2 rounded-md text-white font-bold text my-10`}
    >
      {alerta.msg}
    </div> */
    useEffect(() => {
      {
        alerta.error ? toast.error(alerta.msg) : toast.success(alerta.msg);
      }
    }, [alerta])
  );
};

export default Alerta;
