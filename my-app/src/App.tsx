import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importando os componentes que você criou
import ListarTarefas from './pages/tarefa/listar';
import ListarConcluidas from './pages/tarefa/concluidas';
import ListarNaoConcluidas from './pages/tarefa/naoconcluidas';
import CadastrarTarefa from './pages/tarefa/cadastrar';
import AlterarTarefa from './pages/tarefa/alterar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Gestão de Tarefas</h1>
          <nav>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/listar">Listar Tarefas</Link></li>
              <li><Link to="/concluidas">Listar Concluídas</Link></li>
              <li><Link to="/naoconcluidas">Listar Não Concluídas</Link></li>
              <li><Link to="/cadastrar">Cadastrar Tarefa</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<h2>Bem-vindo à Gestão de Tarefas</h2>} />
            <Route path="/listar" element={<ListarTarefas />} />
            <Route path="/concluidas" element={<ListarConcluidas />} />
            <Route path="/naoconcluidas" element={<ListarNaoConcluidas />} />
            <Route path="/cadastrar" element={<CadastrarTarefa />} />
            <Route path="/alterar" element={<AlterarTarefa />} />
            {/* Rota dinâmica para Alterar tarefa específica */}
            <Route path="/alterar/:id" element={<AlterarTarefa />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
