import React from 'react'
import { Link } from 'react-router-dom'

import "./styles.css"

const ImageList= (props) => {

    return (
        <div className="row">
                { props.images.length > 0 && props.images.map((image) => {
                    return <div key={image.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 " style={{ marginBottom:"2rem" }}>
                                <Link to={{
                                    pathname: `/image/${image.id}`,
                                    state: { image: image }
                                }}>
                                    <div className="imageList__container">
                                <img src={image.largeImageURL} alt={image.tags} className="imageList__image" />
</div>
                                </Link>
                            </div>
                })}
        </div>
    )
}

export default ImageList
