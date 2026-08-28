import './App.css';
import Header from './components/Header/Header';
import Resumo from './components/Resumo/Resumo';

function App() {
  return(
    <div className='app'>
        <Header
        titulo="Gerenciamento de Equipamentos Industriais"
        status="SISTEMA ONLINE"
        />  
      
      <main className='app-container'>
        <div c>
          <Resumo 
          total={5}
          operando={2}
          atencao={2}
          parados={1}/>
        </div>
      </main>
    </div>
      );
};

export default App; 
