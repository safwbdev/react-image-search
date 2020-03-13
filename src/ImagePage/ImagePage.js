import React from 'react';
import { Link } from 'react-router-dom';

const ImagePage = (props) => {

    const { largeImageURL:image , tags, user: owner, pageURL } = props.location.state.image;

    return (
        <div className="row">
            <div className="col s2">
                <Link to="/">Home</Link>
                <p>&copy; pixabay</p>
                <p>Credit: <span>{owner}</span></p>
                <p>Tags: {tags}</p>
                <p><a target="_blank" href={pageURL}>Download</a></p>
            </div>
            <div className="col s10">
                <img src={image} alt={tags} className="fullWidth" />
            </div>
        </div>
    )
}

export default ImagePage