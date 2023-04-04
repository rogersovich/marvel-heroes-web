import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/character/character.actions';
import { getCharactersError, getCharactersData, getCharactersLoading } from '../../store/character/character.selector';
// widget
import HomeList from './home.list';

const HomeView = () => {
  const dispatch = useDispatch();
  const error = useSelector(getCharactersError)
  const loading = useSelector(getCharactersLoading)
  const characters = useSelector(getCharactersData)

  useEffect(() => {
    const handleFetchCharacters = () => {

      dispatch(fetchCharacters({
        limit: 20,
      }))
    }

    handleFetchCharacters()
  }, [dispatch])
  return (
    <>
      {!loading && characters.results.length > 0 ? (
        <HomeList characters={characters.results} />

      ) : (!loading && characters.results.length === 0) ? (
        <div>
          {
            !error ? (
              <div>
                Data Kosong
              </div>
            ) : (
              <div>
                Error
              </div>
            )
          }
        </div>
      ) : (
        <div>
          Loading ....
        </div>
      )}
    </>
  );
}

export default HomeView;