import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/getData'
import useForm from '../hooks/useForm'
import queryString from 'query-string'
import { MovieCard } from './MovieCard'





export const SeacrhScreen = () => {
    
const navigate= useNavigate()
const location= useLocation()
const {q=''}= queryString.parse(location.search)
    
const [values, handleInputChange]= useForm({
    searchText:q
})

const {searchText}= values


const characterFilterd= getData(searchText)
console.log(characterFilterd, 'otra pruebita');


const handleSubmit= (e) =>{
    e.prevenDefault()
    navigate(`?q${searchText}`)

}




    return (
        <div>
              <h1>Characters</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your star wars character"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                           
                        />
                     
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    {
                        
                    }
                </div>
            </div>

        </div>
    )
}
