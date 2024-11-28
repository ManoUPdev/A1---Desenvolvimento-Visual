import React, { useEffect, useState } from 'react';
import api from '../API';

const ListarNaoConcluidas: React.FC = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const fetchTarefas = async () => {
      const response = await api.get('/tarefa/naoconcluidas');
      setTarefas(response.data);
    };

    fetchTarefas();
  }, []);

  return (
    <div>
      <h2>Tarefas Não Concluídas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa: any) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.categoria}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarNaoConcluidas;