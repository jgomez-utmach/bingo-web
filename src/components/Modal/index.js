function Modal({ cerrarModal, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
        <button className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded" onClick={cerrarModal}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
