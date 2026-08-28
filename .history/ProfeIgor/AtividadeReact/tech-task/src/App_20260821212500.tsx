import Header from "./components/Header/Header";
import FormularioTarefa from "./components/FormularioTarefa/FormularioTarefa";
import 

import "./App.css";

function App()
{
  function handleAdicionarTarefa(texto: string) {
    console.log("Tarefa recebida:", texto);
  }

  return(
    <div className="app-container">
      <Header 
      
      titulo="React + TS"
      subtitulo="Aprendendo Props, Componentização e Separação de Estilos na Prática"/>
    
      <FormularioTarefa onAdicionarTarefa={handleAdicionarTarefa}/>
    
    </div>
  );
}

export default App;
