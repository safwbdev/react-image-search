import React from 'react'

const SearchForm = ({handleGetRequest}) => {

    return (
        <nav>
            <div class="nav-wrapper container ">
                <form onSubmit={handleGetRequest} className="search-form">
                    <input 
                        type="text" 
                        autoComplete="off"
                        name="searchValue" 
                        placeholder="search for images" />
                    <button className="waves-effect waves-light btn">Search</button>
                </form>       
            </div>
        </nav>

    )
}
export default SearchForm