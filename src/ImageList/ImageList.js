import React from 'react'

const ImageList= (props) => {
    return (
        <div>
            { props.images.length > 0 && props.images.map(({id, largeImageURL, tags}) => {
                return <div key={id}>
                            <img src={largeImageURL} alt={tags} />
                        </div>
            })}
        </div>
    )
}

export default ImageList
