import './App.css';
import Header from './components/Header/Header';
import Resumo from './components/Resumo/Resumo';
import FormularioEquipamento from './components/FormularioEquipamento/FormularioEquipamento';
import type { Equipamento } from './types/Equipamento';
import { useState } from 'react';
import ListaEquipamentos from './components/ListaEquipamentos/ListaEquipamentos';

function App() {

  const [equipamentos, setEquipamento] = useState<Equipamento[]>([]);

  function adicionarEquipamento(equipamento: Equipamento) {
        setEquipamento([...equipamentos, equipamento]);
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

          <ListaEquipamentos
              equipamentos={equipamentos}/>
        </div>
      </main>
    </div>
      );
};

export default App;
