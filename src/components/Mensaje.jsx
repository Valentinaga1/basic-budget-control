const Mensaje = ({ alert, tipo }) => {
  return <div className={`alerta ${tipo}`}>{alert}</div>;
};

export default Mensaje;
