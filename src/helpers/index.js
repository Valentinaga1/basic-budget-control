import { v4 as uuidv4 } from "uuid";

export const generarId = () => {
  const random = uuidv4();
  return random;
};

export const formatearFecha = (fecha) => {
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };

  return new Date(fecha).toLocaleDateString("es-ES", opciones);
};
