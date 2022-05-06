import './App.css';
import logo from "./imagenes/logo.png";


function App() {
  return (
    <div className="aplicacion-tarea">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-listas-principal'>
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
