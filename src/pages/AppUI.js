import { useContext } from 'react';
import { BingoContext } from 'components/bingoContext';
import TablaNumerosJugados from 'components/tablaNumerosJugados';
import ContenedorBolaJugada from 'components/ContenedorBolaJugada';
import BotonesDelJuego from 'components/botonesDelJuego';
import UltimosNumeros from 'components/ultimosNumeros';
import Modal from 'components/Modal';
import Mensaje from 'components/Mensaje';
import Image from 'next/image';
import presentador from '@images/presentador.jpg';
import ranaLogo from '@images/rana.jpg';
import LoadingSpinner from '@common/Loading';

function AppUI() {
  const { numerosJugados, generarNumeroAleatorio, reiniciarNumeros, modalVisible, cerrarModal, bola, isLoading } = useContext(BingoContext);
  return (
    <div className="w-screen p-4 h-screen bg-gradient-to-r from-lime-500 to-green-600">
      <div className="grid grid-cols-3 place-items-center">
        <div>
          <h3 className="text-4xl uppercase text-white">Bingo</h3>
          <TablaNumerosJugados numerosJugados={numerosJugados} />
        </div>
        <div className="h-full grid place-items-center">
          <h1 className="text-6xl font-extrabold text-center text-white">BINGO DE LA RANA</h1>
          <ContenedorBolaJugada>
            {isLoading && <LoadingSpinner />}
            {bola == null && isLoading == false && (
              <div className="w-72 h-72 rounded-xl overflow-hidden border-4 border-white">
                <Image src={ranaLogo} alt="Logo" className="object-cover w-full h-full" />
              </div>
            )}
            {bola != null && isLoading == false && <div className="z-[1] text-9xl font-bold text-yellow-300">{bola}</div>}
          </ContenedorBolaJugada>
          <BotonesDelJuego generarNumeroAleatorio={generarNumeroAleatorio} reiniciarNumeros={reiniciarNumeros} />
        </div>
        <div className="h-full grid place-items-center">
          <div className="h-10">
            <UltimosNumeros numeros={numerosJugados} />
          </div>
          <div className="bg-white w-80 h-96 border-2 border-white">
            <Image src={presentador} alt="Presentador" className="object-cover w-full h-full" />
          </div>
          <div className="justify-self-start ml-4">
            <p className="text-white font-bold text-4xl">Contacto</p>
            <p className="text-white font-semibold text-3xl tracking-widest">0988888888</p>
          </div>
        </div>
        {modalVisible && (
          <Modal cerrarModal={cerrarModal}>
            <Mensaje />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AppUI;
