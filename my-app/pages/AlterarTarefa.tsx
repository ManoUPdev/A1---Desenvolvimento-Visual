import React, { useState } from 'react';

const AlterarTarefa: React.FC = () => {
  const [id, setId] = useState('');  // Estado para o ID da tarefa
  const [status, setStatus] = useState('');  // Estado para o novo status da tarefa

  // Função para submeter a alteração do status da tarefa
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Previne o comportamento padrão do form

    if (!id || !status) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5273/api/tarefas/alterar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),  // Envia o novo status
      });

      if (!response.ok) {
        throw new Error('Erro ao alterar o status da tarefa');
      }

      const data = await response.json();
      alert('Status da tarefa alterado com sucesso!');
      setId('');  // Limpa o campo ID após a alteração
      setStatus('');  // Limpa o campo status
    } catch (error) {
      alert('Erro ao alterar o status da tarefa!');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Alterar Status da Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID da Tarefa:</label>
          <input
            type="text"
            id="id"
            placeholder="ID da Tarefa"
            value={id}
            onChange={(e) => setId(e.target.value)}  // Atualiza o estado com o ID da tarefa
            required
          />
        </div>
        <div>
          <label htmlFor="status">Novo Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}  // Atualiza o estado com o status selecionado
            required
          >
            <option value="">Selecione o status</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluída">Concluída</option>
          </select>
        </div>
        <button type="submit">Alterar Status</button>
      </form>
    </div>
  );
};

export default AlterarTarefa;
