import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [buscador, setBuscador] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleBuscador = event => {
    setBuscador(event.target.value);
    filterCharacters(event.target.value);
  };

  const filterCharacters = term => {
    const filtered = characters.filter(character => {
      const { name, species } = character;
      return (
        name.toLowerCase().includes(term.toLowerCase()) ||
        species.toLowerCase().includes(term.toLowerCase())
      );
    });
    setFilteredCharacters(filtered);
  };

  const ordenCharacters = filteredCharacters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label htmlFor="">Busqueda</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Buscar por nombre o especie"
            value={buscador}
            onChange={handleBuscador}
          />
        </div>
      </div>
      <div className="row">
        {ordenCharacters.map(character => (
          <div key={character.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;