import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/character/character.actions';
import { getCharactersError, getCharactersData, getCharactersLoading } from '../../store/character/character.selector';
import { FormData } from './home.types';
// widget
import HomeList from './home.list';
import SkeletonCard from '../../components/skeleton.card';

const HomeView = () => {
  const dispatch = useDispatch();
  const error = useSelector(getCharactersError)
  const loading = useSelector(getCharactersLoading)
  const characters = useSelector(getCharactersData)

  const [search, setSearch] = useState('')
  const [params, setParams] = useState({
    page: 1,
    limit: 12,
    offset: 0,
  })
  interface bodyParams {
    limit: number,
    offset: number,
    nameStartsWith?: string
  }

  const onChangePagination = (props: number) => {
    setParams((state) => ({
      ...state,
      offset: (props - 1) * state.limit,
      page: props,
    }))
  }

  const handleOnSubmit = (payload: FormData) => {
    setSearch(payload.search)
  }

  useEffect(() => {
    const handleFetchCharacters = () => {
      let body: bodyParams = {
        limit: params.limit,
        offset: params.offset
      }
      if (search) {
        body.nameStartsWith = search
      }
      dispatch(fetchCharacters(body))
    }

    handleFetchCharacters()
  }, [dispatch, params.limit, params.offset, search])
  return (
    <>
      {!loading && characters.results.length > 0 ? (
        <HomeList characters={characters.results} page={params.page} limit={params.limit} count={characters.total} onChangePagination={onChangePagination} handleOnSubmit={handleOnSubmit} searchVal={search} />

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
        <div className='tw-p-5'>
          <div className="grid-12 tw-gap-4">
            {[...Array(12)].map((x, i) => (
              <div key={i} className="tw-col-span-3">
                <SkeletonCard col={6} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HomeView;