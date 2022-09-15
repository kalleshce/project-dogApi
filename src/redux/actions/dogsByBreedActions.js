import { GET_DOG_BY_BREED, GET_DOG_BY_BREED_FAILURE, GET_DOG_BY_BREED_SUCCESS } from './constants'
import axios from 'axios';

const getDogByBreed = () => {
    return {
        type: GET_DOG_BY_BREED
    }
}
const getDogByBreedSuccess = (data) => {
    return {
        type: GET_DOG_BY_BREED_SUCCESS,
        payload: data
    }
}
const getDogByBreedFailure = (error) => {
    return {
        type: GET_DOG_BY_BREED_FAILURE,
        payload: error
    }
}

export const getAllDogByBreed = () => {
    return (dispatch) => {
        dispatch(getDogByBreed())
        axios.get('https://dog.ceo/api/breed/hound/images')
            .then(res => dispatch(getDogByBreedSuccess(res.data)))
            .catch(error => dispatch(getDogByBreedFailure(error)))
    }
}
