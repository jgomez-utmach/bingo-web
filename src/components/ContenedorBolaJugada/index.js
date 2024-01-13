//import PropTypes from 'prop-types';

const ContenedorBolaJugada = ({ children }) => {
  return <div className="w-72 h-72 rounded-xl bg-green-500 grid place-content-center border-4 border-white shadow-xl">{children}</div>;
};
/*
ContenedorBolaJugada.propTypes = {
  number: PropTypes.number.isRequired,
};
*/
export default ContenedorBolaJugada;
