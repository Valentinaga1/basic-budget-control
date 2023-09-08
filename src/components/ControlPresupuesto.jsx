import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setIsValidPresupuesto
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos?.reduce((total, gasto) => {
      return gasto.cantidad + total;
    }, 0);
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentajeGastado = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentajeGastado);
    }, 1500);
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  const handleResetApp = () => {
    const resultado = confirm("Deseas reiniciar app?");
    if (resultado) {
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3b82f6",
            textColor: porcentaje > 100 ? "#DC2626" : "#3b82f6",
            trailColor: "f5f5f5"
          })}
          text={`${porcentaje}% gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" onClick={handleResetApp}>
          Reset
        </button>
        <p>
          <span>Presupuesto: </span>
          {formatearPresupuesto(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>
          {formatearPresupuesto(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
