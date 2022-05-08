import './App.css';
import logo from "./imagenes/logo.png";
import ListaDeTareas from './componentes/ListaDeTarea.js';



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
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
