import { combineReducers } from 'redux'
import { breedsListReducer } from './breedsListReducer'
import { browseBreedsReducer } from './browseBreedsreducer'
import { dogsByBreedReducer } from './dogsByBreedReducer'
import { RandomImageReducer } from './randomImageReducer'

export const reducer = combineReducers({
    breedsList: breedsListReducer,
    dogByBreed: dogsByBreedReducer,
    randomImage: RandomImageReducer,
    breedImage: browseBreedsReducer
})