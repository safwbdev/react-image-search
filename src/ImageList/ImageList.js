import React from 'react'

const ImageList= (props) => {
    return (
        <div className="row">
            { props.images.length > 0 && props.images.map(({id, largeImageURL, tags}) => {
                return <div key={id} className="col s3">
                            <img src={largeImageURL} alt={tags} class="fullWidth" />
                        </div>
            })}
        </div>
    )
}

export default ImageList
