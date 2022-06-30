import React from 'react'
import { useGetPeopleQuery} from "../../services/filmsRTK";


function FilmListRTK() {
    const { data, error, isLoading, isSuccess, isError } = useGetPeopleQuery();
  return (
    <div>
        <h1 className='headerApi'>React Redux Toolkit using RTK Query</h1>
        {isLoading && "Loading..."}
        {isError && error.message}
        {isSuccess &&
        data && data.map((people, i) => 
        <h1 key={people.id}>{people.name}</h1>,
        )}
    </div>
  )
}

export default FilmListRTK;
