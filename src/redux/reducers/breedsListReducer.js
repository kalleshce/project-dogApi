import { GET_BREEDS_LIST, GET_BREEDS_LIST_FAILURE, GET_BREEDS_LIST_SUCCESS } from '../actions/constants'

const initialState = {
    isLoading: false,
    breedsData: {},
    error: null
}

export function breedsListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BREEDS_LIST: {
            return { ...state, isLoading: true }
        }
        case GET_BREEDS_LIST_SUCCESS: {
            return { ...state, breedsData: action.payload, isLoading: false }
        }
        case GET_BREEDS_LIST_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}