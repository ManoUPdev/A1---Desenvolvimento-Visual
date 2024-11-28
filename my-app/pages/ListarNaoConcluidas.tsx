import React, { useState, useEffect } from 'react';

const ListarNaoConcluidas: React.FC = () => {
  const [tarefasNaoConcluidas, setTarefasNaoConcluidas] = useState<any[]>([]);  
  const [error, setError] = useState<string>('');  

  
  useEffect(() => {
    const fetchTarefasNaoConcluidas = async () => {
      try {
        const response = await fetch('http://localhost:5273/api/tarefas/naoconcluidas');
        if (!response.ok) {
          throw new Error('Erro ao carregar tarefas não concluídas');
        }
        const tarefasData = await response.json();  
        setTarefasNaoConcluidas(tarefasData);  
      } catch (error) {
        setError('Erro ao carregar as tarefas não concluídas');
        console.error(error);
      }
    };

    fetchTarefasNaoConcluidas();  
  }, []);

  return (
    <div>
      <h2>Listar Tarefas Não Concluídas</h2>
      {error && <p>{error}</p>}  {/* Exibe erro caso haja */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Status</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {tarefasNaoConcluidas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.categoria?.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarNaoConcluidas;
