import { useEffect } from "react";
import useProyectos from "../../hooks/useProyectos";
import useAuth from "../../hooks/useAuth";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import PreviewProyectos from "../../components/PreviewProyectos";
import Alerta from "../../components/Alerta";

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos();
  const { auth } = useAuth();

  useEffect(() => {
    toast.success(`Bienvenido ${auth.nombre}`);
  }, [alerta]);

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      <ToastContainer />
      {msg && <Alerta alerta={alerta} />}
      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyectos key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="text-gray-600 uppercase text-xs text-center p-5">
            Aun no existen proyectos
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
