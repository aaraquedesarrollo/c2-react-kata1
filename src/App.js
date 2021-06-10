import { Circulo } from "./components/Circulo";

function App() {
  const circulos = ["circulo1", "circulo2", "circulo3", "circulo4"];

  return (
    <ul className="lista">
      {circulos.map((circulo) => (
        <Circulo key={circulo}></Circulo>
      ))}
    </ul>
  );
}

export default App;
