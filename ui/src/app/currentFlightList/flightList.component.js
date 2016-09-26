import templateUrl from './currentFlightList.component.html'

/* @ngInject */
class FlightListController {
  constructor(HomeService){
    HomeService.getCurrentFlights().then((result)=>{
      this.flights=result.data
    console.dir(this.flights)
  })
}
}
export default {
  templateUrl,
  controller: FlightListController,
  controllerAs: 'fLC'
}
