import { formatearFecha } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSucripciones from "../img/icono_suscripciones.svg";
import IconoOcio from "../img/icono_ocio.svg";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSucripciones
};

const Gasto = ({ gasto, gastoEditar, setGastoEditar, eliminarGasto }) => {
  const leadIngActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={(e) => setGastoEditar(gasto)}>Editar</SwipeAction>
      </LeadingActions>
    );
  };

  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction onClick={(e) => eliminarGasto(gasto.id)}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadIngActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[gasto.categoria]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombre}</p>
              <p className="fecha-gasto">
                Agregado El: <span>{formatearFecha(gasto?.fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">$ {gasto.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
