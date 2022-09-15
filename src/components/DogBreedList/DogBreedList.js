import { Alert, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBreedsData } from '../../redux/actions/breedsListActions';
import { showSpinner } from '../DogByBreed/DogByBreed';

const DogBreedList = () => {

  const dispatch = useDispatch();

  const { isLoading, breedsData, error } = useSelector(state => state.breedsList)

  useEffect(() => {
    dispatch(getAllBreedsData())
  }, [])

  const filterdBreeds = () => {
    let subBreeds = []
    for (let key in breedsData.message) {
      if (breedsData.message[key].length > 0) {
        subBreeds.push(breedsData.message[key])
      }
    }
    return subBreeds
  }

  const showList = () => {
    let subBreeds = filterdBreeds()
    return subBreeds.map((item, i) => <ListItem divider={true} key={i} ><ListItemText primary={item.join(',  ')} /></ListItem>)
  }

  return (
    <div>
      {isLoading && showSpinner()}
      <List>
        {showList()}
      </List>
      {error && <Alert severity="error">{error.message}</Alert>}
    </div>
  )
}

export default DogBreedList