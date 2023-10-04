import React, { memo } from "react"; // Importa React y memo

export const Son = memo(({ numero, increment }) => {
  console.log("Recargado componente hijo");
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => {
        increment(numero);
      }}
    >
      {numero}
    </button>
  );
});

