import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashBoard from '../components/DashBoard/DashBoard';
import DogBreedList from '../components/DogBreedList/DogBreedList';
import DogByBreed from '../components/DogByBreed/DogByBreed';
import NoMatch from '../components/NoMatch';
import RandomDogImage from '../components/RandomDogImage/RandomDogImage';
import BrowseByBreed from '../components/BrowseByBreed/BrowseByBreed'
import NavBar from '../components/NavBar/NavBar';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={DashBoard} />
        <Route path='/breedlist' component={DogBreedList} />
        <Route path='/random' component={RandomDogImage} />
        <Route path='/bybreed' component={DogByBreed} />
        <Route path='/breed-list' component={BrowseByBreed} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes