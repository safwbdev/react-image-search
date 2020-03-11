import React from 'react'

const SearchForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleGetRequest}>
                <input 
                    type="text" 
                    autoComplete="off"
                    name="searchValue" 
                    placeholder="search for images" />
                <button>Search</button>
            </form>       
        </div>
    )
}
export default SearchForm