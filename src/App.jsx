import React, { useState, useEffect } from 'react';

function App() {
  const [character, setCharacter] = useState(null);
  const [characterId, setCharacterId] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [characterId]);

  const handlePrevious = () => {
    setCharacterId(prevId => Math.max(prevId - 1, 1));
  };

  const handleNext = () => {
    setCharacterId(prevId => prevId + 1);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-around mb-4"> 
        <h1 className="inter">Rick and Morty</h1>
      </div>
      <div className="d-flex justify-content-center mb-5 gap-4">
        <div>
          <button className="btn btn-warning" onClick={handlePrevious}>Anterior</button>
        </div>
        <div>
          <input 
            type="number"
            className="form-control" 
            value={characterId}
            onChange={(e) => setCharacterId(Math.max(parseInt(e.target.value), 1))}
            style={{width:'80px', height:'38px'}} 
          />
        </div>
        <div>
          <button className="btn btn-warning" onClick={handleNext}>Próximo</button>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-5">
          {character && (
            <div className="card card-border">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{character.name}</h5>
              </div>
            </div>
          )}
          {character && (
            <div className="card card-border">
              <div className="card-body">
                <h5 className="card-text text-center">Sobre:</h5>
                <p className="card-text text-left">Status: {character.status}</p>
                <p className="card-text text-left">Espécie: {character.species}</p>
                <p className="card-text text-left">Gênero: {character.gender}</p>
                <p className="card-text text-left">Origem: {character.origin.name}</p>
                <p className="card-text text-left">Localidade: {character.location.name}</p>
                <p className="card-text text-left">Criação: {character.created}</p>
                <p className="card-text text-left">Episódios: {character.episode.length}</p>
              </div>
            </div>
          )}  
      </div> 
    </div>
  );
};

export default App;
