import { Button, Card, CardMedia } from '@mui/material'
import { maxHeight } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRandomImage } from '../../redux/actions/randomImageActions';

const RandomDogImage = () => {

    const dispatch = useDispatch();

    const { isLoading, randomImageData, error } = useSelector(state => state.randomImage)

    useEffect(() => {
        dispatch(getAllRandomImage())
    }, [])

    console.log(randomImageData)

    return (
        <div>
            <Card sx={{ maxWidth: 300, maxHeight: 600 }}>
                <CardMedia component="img" height="250" width="300" image={randomImageData?.message}></CardMedia>
            </Card>
            <Button variant='contained' color='secondary' onClick={() => dispatch(getAllRandomImage())} >GET</Button>
        </div>
    )
}

export default RandomDogImage;