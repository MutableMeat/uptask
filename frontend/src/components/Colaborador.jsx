import useProyectos from "../hooks/useProyectos";

const Colaborador = ({ colaborador }) => {
  const { nombre, email } = colaborador;
  const { handleModalEliminarColaborador, modalEliminarColaborador } =
    useProyectos();

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p>{nombre}</p>
        <p className="text-sm text-gray-700">{email}</p>
      </div>

      <div>
        <button
          type="button"
          className="bg-red-600 rounded-lg px-4 py-3 text-white text-xs font-bold uppercase"
          onClick={() => handleModalEliminarColaborador(colaborador)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Colaborador;
