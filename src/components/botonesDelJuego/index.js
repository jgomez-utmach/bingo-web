function BotonesDelJuego({ generarNumeroAleatorio, reiniciarNumeros }) {
  return (
    <div className="flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={generarNumeroAleatorio}>
        Girar
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={reiniciarNumeros}>
        Reiniciar
      </button>
    </div>
  );
}

export default BotonesDelJuego;
