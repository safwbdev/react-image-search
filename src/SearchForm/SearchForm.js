import React from 'react'

import "./styles.css"

const SearchForm = ({handleGetRequest}) => {

    return (
        <nav>
            <div className="imageSearch">
                <form onSubmit={handleGetRequest} className="imageSearch__form">
                    <input 
                        type="text" 
                        autoComplete="off"
                        name="searchValue" 
                        placeholder="search for images" />
                    <button>Search</button>
                </form>       
            </div>
        </nav>

    )
}
export default SearchForm