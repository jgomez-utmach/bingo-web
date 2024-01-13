function ultimosNumeros({ numeros }) {
  // El signo negativo indica que queremos contar desde el final del array. En otras palabras, estamos seleccionando los últimos 5 elementos del array.
  const numerosUltimos = numeros.slice(-5).reverse();

  return (
    <div className="flex space-x-3">
      {numerosUltimos.map((numero, index) => (
        <div key={index} className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full text-white text-xl font-semibold">
          {numero}
        </div>
      ))}
    </div>
  );
}

export default ultimosNumeros;
