import axios from 'axios';

import { GET_ID, GET_PHOTO, GET_RANDOM } from './type';

export function getPhotos(obj) {
    return async function (dispatch) {
        const info = await axios.get('https://api.pexels.com/v1/search?query=' + obj)
    }
}

