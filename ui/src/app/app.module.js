import userProfile from './userProfile/userProfile.module'
import searchedFlightList from './searchedFlightList/searchedFlightList.module'
import flightSearch from './flightSearch/flightSearch.module'
import flightMap from './map/map.module'
import currentFlightList from './currentFlightList/currentFlightList.module'
import apiUrl from './api.url'
import HomeComponent from './HomeComponent'
import HomeService from './HomeService'
import bcrypt from 'bcryptjs'
export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',
       flightMap,
       currentFlightList,
       flightSearch,
      searchedFlightList,
      userProfile
    ])
    .component('home',HomeComponent)
    .constant('apiUrl', apiUrl)
    .service('HomeService', HomeService).name
