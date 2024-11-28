import React, { useState, useEffect } from 'react';

const ListarConcluidas: React.FC = () => {
  const [tarefasConcluidas, setTarefasConcluidas] = useState<any[]>([]);  
  const [error, setError] = useState<string>('');  

 
  useEffect(() => {
    const fetchTarefasConcluidas = async () => {
      try {
        const response = await fetch('http://localhost:5273/api/tarefas/concluidas');
        if (!response.ok) {
          throw new Error('Erro ao carregar tarefas concluídas');
        }
        const tarefasData = await response.json();  
        setTarefasConcluidas(tarefasData);  
      } catch (error) {
        setError('Erro ao carregar as tarefas concluídas');
        console.error(error);
      }
    };

    fetchTarefasConcluidas();  
  }, []);

  return (
    <div>
      <h2>Listar Tarefas Concluídas</h2>
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
          {tarefasConcluidas.map((tarefa) => (
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

export default ListarConcluidas;
