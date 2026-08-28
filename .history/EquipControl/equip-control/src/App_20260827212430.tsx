import './App.css';
import Header from './components/Header/Header';
import Resumo from './components/Resumo/Resumo';
import 

function App() {

  function adicionarEquipamento(equipamento: any) {
        console.log(equipamento);
    }

  return(
    <div className='app'>
        <Header
        titulo="Gerenciamento de Equipamentos Industriais"
        status="SISTEMA ONLINE"
        />  
      
      <main className='app-container'>
        <div className='app-content'>
          <Resumo 
          total={5}
          operando={2}
          atencao={2}
          parados={1}/>

          <FormularioEquipamento
                        adicionarEquipamento={adicionarEquipamento}
                    />
        </div>
      </main>
    </div>
      );
};

export default App; 
