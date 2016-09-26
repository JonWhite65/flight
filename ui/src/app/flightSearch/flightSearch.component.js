import templateUrl from './flightSearch.component.html'

/* @ngInject */
class flightSearchController {
  constructor(HomeService,$interval){
    this.cities=[]
    this.city1=""
    this.city2=""
    var ctrl = this
    this.loadCities=function(){}
      for(let location of HomeService.locations){

        this.cities.push(location.city)

      }



  this.update=function(){

  HomeService.searchinput1=ctrl.city1
  HomeService.searchinput2=ctrl.city2

}

this.update()
let refresh=$interval(this.update,500)
}
}
export default {
  templateUrl,
  controller: flightSearchController,
  controllerAs: 'fSC'
}
