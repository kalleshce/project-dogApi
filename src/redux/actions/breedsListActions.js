import axios from "axios";
import { GET_BREEDS_LIST, GET_BREEDS_LIST_FAILURE, GET_BREEDS_LIST_SUCCESS } from "./constants";

const getbreedsList = () => {
    return {
        type: GET_BREEDS_LIST
    }
}
const getbreedsListSuccess = (data) => {
    return {
        type: GET_BREEDS_LIST_SUCCESS,
        payload: data
    }
}
const getbreedsListFailure = (error) => {
    return {
        type: GET_BREEDS_LIST_FAILURE,
        payload: error
    }
}

export const getAllBreedsData = () => {
    return (dispatch) => {
        dispatch(getbreedsList())
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res => dispatch(getbreedsListSuccess(res.data)))
            .catch(error => dispatch(getbreedsListFailure(error)))
    }
}