import { GET_DOG_BY_BREED, GET_DOG_BY_BREED_FAILURE, GET_DOG_BY_BREED_SUCCESS } from '../actions/constants'

const initialState = {
    isLoading: false,
    dogByBreedData: {},
    error: null
}

export const dogsByBreedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOG_BY_BREED: {
            return { ...state, isLoading: true }
        }
        case GET_DOG_BY_BREED_SUCCESS: {
            return { ...state, dogByBreedData: action.payload, isLoading: false }
        }
        case GET_DOG_BY_BREED_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}