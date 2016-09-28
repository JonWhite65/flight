import templateUrl from './searchedFlightList.component.html'

/* @ngInject */
class SearchedFlightListController {
  constructor(HomeService,$interval){
    this.itineraries={}
    this.colors=[]
    this.details=-1
    this.flights={}
    var ctrl=this
    this.getColor= function(flight){
      var i =0;

      for(let flight1 of this.flights){
        if(flight1.origin===flight.origin&&flight1.destination===flight.destination&&flight1.offset===flight.offset&&flight1.flightTime===flight.flightTime){
        return this.colors[i]
      }
      i++
      }

    }
    this.update=function(){
      if(HomeService.searchinput1===HomeService.searchinput2){
        ctrl.itineraries="a"
      }
      else {
        if(ctrl.itineraries==="a"){
        ctrl.itineraries={}
}     ctrl.flights=HomeService.flights
    HomeService.getPossibleFlights(HomeService.searchinput1,HomeService.searchinput2).then((result)=>{
      if(ctrl.itineraries===result.data){
      }else{
    ctrl.itineraries=result.data
    ctrl.colors=HomeService.colors
  }
  })
}
}
this.bookItinerary= function(SavedItinerary){
  HomeService.saveItinerary(SavedItinerary)
}
this.examineItinerary=function(index){
this.details=index
  HomeService.flights=this.itineraries[index].flights
  HomeService.mapState= "Current Itinerary"
}
this.resume=function(){
  this.details=-1
  HomeService.mapState= "Current Flights"
}


this.update()
let refresh=$interval(this.update,500)
}
}
export default {
  templateUrl,
  controller: SearchedFlightListController,
  controllerAs: 'sFLC'
}
