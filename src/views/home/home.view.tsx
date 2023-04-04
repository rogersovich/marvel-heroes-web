import { useEffect, useState } from 'react';
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

  const [params, setParams] = useState({
    page: 1,
    limit: 12,
    offset: 0,
  })

  const onChangePagination = (props: number) => {
    setParams((state) => ({
      ...state,
      offset: (props - 1) * state.limit,
      page: props,
    }))
  }

  useEffect(() => {
    const handleFetchCharacters = () => {

      dispatch(fetchCharacters({
        limit: params.limit,
        offset: params.offset
      }))
    }

    handleFetchCharacters()
  }, [dispatch, params.limit, params.offset])
  return (
    <>
      {!loading && characters.results.length > 0 ? (
        <HomeList characters={characters.results} page={params.page} limit={params.limit} count={characters.total} onChangePagination={onChangePagination} />

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