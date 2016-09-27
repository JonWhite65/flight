import templateUrl from './detailItinerary.component.html'

/* @ngInject */
class DetailItineraryController {
  constructor(HomeService,$interval){
    this.flights={}
    this.colors=[]
    this.itinerary
    var ctrl=this

    this.update=function(){
      if(HomeService.mapState==="Itinerary Flights"){

      if(ctrl.filghts===HomeService.flights){

      }
      else{
        ctrl.itinerary=HomeService.itinerary
    ctrl.flights=HomeService.flights
    ctrl.colors=HomeService.colors
}

}
}
this.update()
let refresh=$interval(this.update,500)
}
}
export default {
  templateUrl,
  controller: DetailItineraryController,
  controllerAs: 'dIC'
}
