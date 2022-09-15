import axios from "axios"
import { BROWSE_BREED_IMAGE, BROWSE_BREED_IMAGE_FAILURE, BROWSE_BREED_IMAGE_SUCCESS } from "./constants"


const getBreedImage = () => {
    return {
        type: BROWSE_BREED_IMAGE
    }
}

const getBreedImageSuccess = (data) => {
    return {
        type: BROWSE_BREED_IMAGE_SUCCESS,
        payload: data
    }
}

const getBreedImageFailure = (error) => {
    return {
        type: BROWSE_BREED_IMAGE_FAILURE,
        payload: error
    }
}

export const browseBreedImage = (breed) => {
    return (dispatch) => {
        dispatch(getBreedImage())
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => dispatch(getBreedImageSuccess(res.data)))
            .catch(err => dispatch(getBreedImageFailure(err)))
    }
}