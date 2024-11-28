import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CadastrarTarefa from './pages/CadastrarTarefa';
import ListarTarefas from './pages/ListarTarefas';
import AlterarTarefa from './pages/AlterarTarefa';
import ListarConcluidas from './pages/ListarConcluidas';
import ListarNaoConcluidas from './pages/ListarNaoConcluidas';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/tarefa/cadastrar">Cadastrar Tarefa</Link></li>
          <li><Link to="/tarefa/listar">Listar Tarefas</Link></li>
          <li><Link to="/tarefa/alterar">Alterar Tarefa</Link></li>
          <li><Link to="/tarefa/concluidas">Listar Concluídas</Link></li>
          <li><Link to="/tarefa/naoconcluidas">Listar Não Concluídas</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tarefa/cadastrar" element={<CadastrarTarefa />} />
        <Route path="/tarefa/listar" element={<ListarTarefas />} />
        <Route path="/tarefa/alterar" element={<AlterarTarefa />} />
        <Route path="/tarefa/concluidas" element={<ListarConcluidas />} />
        <Route path="/tarefa/naoconcluidas" element={<ListarNaoConcluidas />} />
      </Routes>
    </div>
  );
};

export default App;