import { useState, createContext } from 'react';
const BingoContext = createContext();

function BingoProvider(props) {
  const [numerosJugados, setNumerosJugados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [bola, setBola] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const generarNumeroAleatorio = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Cancelar el temporizador anterior
    }
    if (numerosJugados.length < 80) {
      setIsLoading(true);
      let numero;
      do {
        numero = Math.floor(Math.random() * 80) + 1;
      } while (numerosJugados.includes(numero));
      const newTimeoutId = setTimeout(() => {
        setNumerosJugados([...numerosJugados, numero]);
        setBola(numero);
        setIsLoading(false);
      }, 1500);
      setTimeoutId(newTimeoutId); // Almacenar el nuevo ID del temporizador
    } else {
      abrirModal();
    }
  };

  const reiniciarNumeros = () => {
    setNumerosJugados([]);
    setBola(null);
  };

  return (
    <BingoContext.Provider
      value={{
        numerosJugados,
        generarNumeroAleatorio,
        reiniciarNumeros,
        cerrarModal,
        modalVisible,
        bola,
        isLoading,
      }}
    >
      {props.children}
    </BingoContext.Provider>
  );
}

export { BingoProvider, BingoContext };
