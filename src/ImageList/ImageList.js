import React from 'react'
import { Link } from 'react-router-dom'

const ImageList= (props) => {
    return (
        <div className="row">
            <div className="col s2 ">
                <ul>

            { props.images.length > 0 && props.images.map((image) => {
                return <li key={image.id}>
                                {image.tags}
                            </li>
                })}
                </ul>
            </div>
            <div className="col s10">
                { props.images.length > 0 && props.images.map((image) => {
                    return <div key={image.id} className="col s4">
                                <Link to={{
                                    pathname: `/image/${image.id}`,
                                    state: { image: image }
                                }}>
                                <img src={image.largeImageURL} alt={image.tags} class="fullWidth" />

                                </Link>
                            </div>
                })}
            </div>
        </div>
    )
}

export default ImageList
