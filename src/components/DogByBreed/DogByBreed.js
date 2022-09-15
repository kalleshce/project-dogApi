import { Box, Card, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogByBreed } from '../../redux/actions/dogsByBreedActions'


export const showSpinner = () => {
  return (<Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
}

const DogByBreed = () => {

  const dispatch = useDispatch()

  const { isLoading, dogByBreedData, error } = useSelector(state => state.dogByBreed)

  useEffect(() => {
    dispatch(getAllDogByBreed())
  }, [])

  const firstTwelveImages = dogByBreedData?.message?.slice(0, 12)

  const showImages = (data) => {
    return data?.map((item, i) => <Grid key={i} item xs={3}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={item}
          alt="dog-image" />
      </Card>
    </Grid>)
  }

  return (
    <Container>
      {isLoading && showSpinner()}
      <Typography variant='h3' align='center'>IMAGES OF HOUNDS BREED</Typography>
      <Grid container spacing={1}>
        {dogByBreedData?.message?.length > 0 && showImages(firstTwelveImages)}
      </Grid>
    </Container>
  )
}

export default DogByBreed
