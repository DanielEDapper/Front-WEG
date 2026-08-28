import Header from "./components/Header/Header";


function App()
{
  return(
    <div className="app-container">
      <Header 
      
      titulo="React + TS"
      subtitulo="Aprendendo Props, Componentização e Separação de Estilos na Prática"/>

      <div className="app-card-modulo">
        <Contador/>
      </div>

      <FormularioNome/>
      <BuscadorUsuarios/>
    </div>
  );
}

export default App;
