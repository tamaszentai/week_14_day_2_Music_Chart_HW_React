import React from 'react';
import SongDetail from './SongDetail';

const SongList = (props) => {
    const songNodes = props.songs.map((song,index) => {
        const position = index+1;
        return <SongDetail title={song["im:name"].label} artist={song["im:artist"].label} key={index} position={position}></SongDetail>
    })


return(
    <div>
        { songNodes }
    </div>
    )
}

export default SongList;