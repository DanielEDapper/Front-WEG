import './App.css';
import Header from './components/Header/Header';
import Resumo from './components/Resumo/Resumo';

function App() {
  return(
  <Header
      titulo="Gerenciamento de Equipamentos Industriais"
      status="SISTEMA ONLINE"
      />  

  <Resumo 
  total="5"
  operando="2"
  atencao="2"
  parados="1"/>
  );
    
};

export default App; 
