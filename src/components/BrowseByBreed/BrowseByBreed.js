import { Button, Card, CardMedia, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { browseBreedImage } from '../../redux/actions/browseBreedsActions';

const BrowseByBreed = () => {

  const dispatch = useDispatch();

  const { isLoading, breedImage, error } = useSelector(state => state.breedImage)

  const [breed, setBreed] = useState('')

  const handleChange = (e) => {
    setBreed(e.target.value)
  }

  return (
    <Container>
      <TextField id="outlined-basic" label="Breed Name" variant="outlined" size='small' onChange={handleChange} />
      <Button variant='contained' color='primary' onClick={() => dispatch(browseBreedImage(breed.toLowerCase()))}>GET</Button>
      <Card >
      <CardMedia
        component="img"
        height="400"
        image={breedImage.message}
        alt="dog-image"
        sx={{maxWidth:300}}
      />
      </Card>
    </Container>
  )
}

export default BrowseByBreed