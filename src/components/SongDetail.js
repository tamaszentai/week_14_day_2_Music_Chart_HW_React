import React from 'react';

const SongDetail = (props) => {
return (
    <div>
        <h2>
            {props.artist}
        </h2>
        <h3>
            {props.title}
        </h3>
        <h4>
            {props.position}
        </h4>
    </div>
    )
}
export default SongDetail;