import axios from "axios"
import { GET_RANDOM_IMAGE, GET_RANDOM_IMAGE_FAILURE, GET_RANDOM_IMAGE_SUCCESS } from "./constants"

const getRandomImage = () => {
    return {
        type: GET_RANDOM_IMAGE
    }
}

const getRandomImageSuccess = (data) => {
    return {
        type: GET_RANDOM_IMAGE_SUCCESS,
        payload: data
    }
}

const getRandomImageFailure = (error) => {
    return {
        type: GET_RANDOM_IMAGE_FAILURE,
        payload: error
    }
}

export const getAllRandomImage = () => {
    return (dispatch) => {
        dispatch(getRandomImage())
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => dispatch(getRandomImageSuccess(res.data)))
            .catch(err => dispatch(getRandomImageFailure(err)))
    }
}