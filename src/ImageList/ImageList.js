import React from 'react'
import { Link } from 'react-router-dom'

const ImageList= (props) => {

    return (
        <div className="row">
                { props.images.length > 0 && props.images.map((image) => {
                    return <div key={image.id} className="col s3 box">
                                <Link to={{
                                    pathname: `/image/${image.id}`,
                                    state: { image: image }
                                }}>
                                <img src={image.largeImageURL} alt={image.tags} className="fullWidth" />

                                </Link>
                            </div>
                })}
        </div>
    )
}

export default ImageList
