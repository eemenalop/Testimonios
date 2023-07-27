import './App.css';
import Testimonio from "./componets/Testimonio";

function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de este curso</h1>
      </div>
      <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
      />
      <Testimonio
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='shawn'
        cargo='Ingeniero de Software'
        empresa='Spotify'
        testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged' />
      <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sarah'
        cargo='Publicista'
        empresa='Spotify'
        testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged' />
    </div>
  );
};

export default App;
