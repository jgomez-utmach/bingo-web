function TablaNumerosJugados({ numerosJugados }) {
  return (
    <table className="table-auto border-separate border-spacing-2">
      <tbody>
        {Array.from({ length: 10 }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 8 }, (_, colIndex) => {
              const numero = rowIndex * 8 + colIndex + 1;
              const esNumeroJugado = numerosJugados.includes(numero);
              return (
                <td key={colIndex} className={`p-2.5 text-center ${esNumeroJugado ? 'bg-green-500 text-white' : 'bg-yellow-200'}`}>
                  {numero}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaNumerosJugados;
