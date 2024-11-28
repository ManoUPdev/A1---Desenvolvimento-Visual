import React, { useState, useEffect } from 'react';

const CadastrarTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState('');  
  const [categoriaId, setCategoriaId] = useState<number | string>('');  
  const [categorias, setCategorias] = useState<any[]>([]); 


  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:5273/api/categoria/listar');
        if (!response.ok) {
          throw new Error('Erro ao carregar categorias');
        }
        const categoriasData = await response.json();  
        setCategorias(categoriasData);  
      } catch (error) {
        console.error('Erro ao carregar categorias', error);
      }
    };

    fetchCategorias();  
  }, []);

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  

    const tarefa = {
      titulo,
      categoriaId: parseInt(categoriaId.toString(), 10),  
    };

    try {
      const response = await fetch('http://localhost:5273/api/tarefas/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tarefa),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar a tarefa');
      }

      const data = await response.json();
      alert('Tarefa cadastrada com sucesso!');
      setTitulo('');  
      setCategoriaId('');  
    } catch (error) {
      alert('Erro ao cadastrar a tarefa!');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            placeholder="Título da Tarefa"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} 
            required
          />
        </div>
        <div>
          <label htmlFor="categoriaId">Categoria:</label>
          <select
            id="categoriaId"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}  
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Cadastrar Tarefa</button>
      </form>
    </div>
  );
};

export default CadastrarTarefa;
