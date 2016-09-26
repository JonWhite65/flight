import templateUrl from './flightSearch.component.html'

/* @ngInject */
class flightSearchController {
  constructor(HomeService){
    this.loadCities=function(){
    HomeService.loadCities().then((result)=>{
      this.cities=result.data
    })
  }
}
}
export default {
  templateUrl,
  controller: flightSearchController,
  controllerAs: 'fSC'
}
