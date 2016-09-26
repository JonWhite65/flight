import templateUrl from './currentFlightList.component.html'

/* @ngInject */
class FlightListController {
  constructor(HomeService,$interval){
    this.flights={}
    this.colors=[]
    var ctrl=this

    this.update=function(){

    HomeService.getCurrentFlights().then((result)=>{
    ctrl.flights=result.data
    ctrl.colors=HomeService.colors

  })
}
this.update()
let refresh=$interval(this.update,5000)
}
}
export default {
  templateUrl,
  controller: FlightListController,
  controllerAs: 'fLC'
}
