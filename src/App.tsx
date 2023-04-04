import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from './store/character/character.actions';
import { getCharactersError, getCharactersData, getCharactersLoading } from './store/character/character.selector';
import { useEffect } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(getCharactersError)
  const loading = useSelector(getCharactersLoading)
  const characters = useSelector(getCharactersData)

  useEffect(() => {
    const handleFetchCharacters = () => {

      dispatch(fetchCharacters({
        limit: 10
      }))
    }

    handleFetchCharacters()
  }, [dispatch])

  return (
    <div className="App">
      <div>
        sfdsfds
      </div>
    </div>
  );
}

export default App;
