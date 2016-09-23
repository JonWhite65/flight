import flightMap from './map/map.module'
import apiUrl from './api.url'
import './home.css'
import home from './home.html'
import GlobalController from './GlobalController.js'
import HomeController from './HomeController.js'
import UserController from './UserController.js'
import ProfileController from './ProfileController.js'
import HomeService from './HomeService.js'
import bcrypt from 'bcryptjs'
export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',
       flightMap
    ]).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
      .state('rettiwt',{
        url:'/',
        templateUrl: home,
        controller:HomeController,
        controllerAs:'hC',
        data:{}
      })
      .state('Feed',{
        url:'/RettiwtFeed',
        templateUrl:home,
        controller:GlobalController,
        controllerAs:'hC',
        data:{}
      })
      .state('Homepage',{
        url:'/User/:id',
        templateUrl:home,
        controllerAs:'hC',
        controller:UserController,
        data:{}
      })
      .state('UserProfile',{
        url:'/UserProfile/:id',
        templateUrl:home,
        controller:ProfileController,
        controllerAs:'hC',
        data:{}
      })
  })
    .constant('apiUrl', apiUrl)
    .service('HomeService', HomeService).name
