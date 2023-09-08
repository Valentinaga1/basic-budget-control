import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  gastoEditar,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos?.length > 0 ? "Gastos" : "No hay gastos aún!"}</h2>
      {filtro.length
        ? gastosFiltrados?.map((gasto) => (
            <>
              <Gasto
                key={gasto.id}
                gasto={gasto}
                gastoEditar={gastoEditar}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            </>
          ))
        : gastos?.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
    </div>
  );
};

export default ListadoGastos;
