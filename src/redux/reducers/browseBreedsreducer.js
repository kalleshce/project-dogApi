import { BROWSE_BREED_IMAGE, BROWSE_BREED_IMAGE_FAILURE, BROWSE_BREED_IMAGE_SUCCESS } from "../actions/constants"

const initialState = {
    isLoading: false,
    breedImage: {},
    error: null
}

export const browseBreedsReducer = (state = initialState, action) => {
    switch (action.type) {
        case BROWSE_BREED_IMAGE: {
            return { ...state, isLoading: true }
        }
        case BROWSE_BREED_IMAGE_SUCCESS: {
            return { ...state, breedImage: action.payload, isLoading: false }
        }
        case BROWSE_BREED_IMAGE_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}