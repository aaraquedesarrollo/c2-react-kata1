import { useState } from "react";

export const Circulo = () => {
  const [seleccionado, setSeleccionado] = useState(false);

  const cambiarEstado = () => {
    if (seleccionado) {
      setSeleccionado(false);
    } else {
      setSeleccionado(true);
    }
  };

  return (
    <li>
      <div
        className="circulo"
        style={{ backgroundColor: seleccionado ? "orange" : "grey" }}
        onClick={cambiarEstado}
      ></div>
    </li>
  );
};
