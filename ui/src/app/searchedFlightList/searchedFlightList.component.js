import templateUrl from './searchedFlightList.component.html'

/* @ngInject */
class SearchedFlightListController {
  constructor(HomeService,$interval){
    this.flights={}
    this.colors=[]
    var ctrl=this

    this.update=function(){
    HomeService.getPossibleFlights(HomeService.searchinput1,HomeService.searchinput2).then((result)=>{
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
  controller: SearchedFlightListController,
  controllerAs: 'sFLC'
}
