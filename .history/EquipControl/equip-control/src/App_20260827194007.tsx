import './App.css';
import Header from './components/Header/Header';
import Resumo from './components/Resumo/Resumo';

function App() {
  return(
  <Header
      titulo="Gerenciamento de Equipamentos Industriais"
      status="SISTEMA ONLINE"
      />  

  <Resumo/>
  );
    
};

export default App;
