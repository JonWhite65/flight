import templateUrl from './currentFlightList.component.html'

/* @ngInject */
class FlightListController {
  constructor(HomeService,$interval){
    this.flights={}
    this.colors=[]
    var ctrl=this

    this.update=function(){
      if(HomeService.mapState!=="Current Itinerary"&&HomeService.mapState!=="Itinerary Flights"){

    HomeService.getCurrentFlights().then((result)=>{
      if(ctrl.flights===result.data){

      }
      else{
    ctrl.flights=result.data
    ctrl.colors=HomeService.colors
}
  })
}
}
this.update()
let refresh=$interval(this.update,500)
}
}
export default {
  templateUrl,
  controller: FlightListController,
  controllerAs: 'fLC'
}
