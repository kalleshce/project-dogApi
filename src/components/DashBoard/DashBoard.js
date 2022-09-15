import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const DashBoard = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to='/breedlist'>
          <Button variant='contained' color='primary' size='large'>BREED-LIST</Button>
        </Link>
        <Link to='/random'>
          <Button variant='contained' color='primary' size='large'>DOG OF THE DAY</Button>
        </Link>
        <Link to='/bybreed'>
          <Button variant='contained' color='primary' size='large'>DOGS BY BREED</Button>
        </Link>
        <Link to='/breed-list'>
          <Button variant='contained' color='primary' size='large'>BROWSE BREEDLIST</Button>
        </Link>
      </div>
    </>
  )
}

export default DashBoard