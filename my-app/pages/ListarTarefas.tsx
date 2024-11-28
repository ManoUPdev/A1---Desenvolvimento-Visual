import React, { useState, useEffect } from 'react';

const ListarTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<any[]>([]);  // Estado para armazenar as tarefas
  const [error, setError] = useState<string>('');  // Estado para erros

  // Carrega todas as tarefas quando o componente é montado
  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await fetch('http://localhost:5273/api/tarefas/listar');
        if (!response.ok) {
          throw new Error('Erro ao carregar tarefas');
        }
        const tarefasData = await response.json();  // Obtém as tarefas da API
        setTarefas(tarefasData);  // Atualiza o estado com as tarefas
      } catch (error) {
        setError('Erro ao carregar as tarefas');
        console.error(error);
      }
    };

    fetchTarefas();  // Carrega as tarefas quando o componente for montado
  }, []);

  return (
    <div>
      <h2>Listar Tarefas</h2>
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
          {tarefas.map((tarefa) => (
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

export default ListarTarefas;
