import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'song1', duration:'4:02'},
        {title: 'song2', duration:'5:00'},
        {title: 'song3', duration:'5:20'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})