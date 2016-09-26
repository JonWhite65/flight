import templateUrl from './searchedFlightList.component.html'

/* @ngInject */
class SearchedFlightListController {
  constructor(HomeService,$interval){
    console.dir("here")
    this.flights={}
    this.colors=[]
    var ctrl=this

    this.update=function(){
      this.input1=HomeService.searchinput1
      this.input2=HomeService.searchinput2
      console
    HomeService.getPossibleFlights(input1,input2).then((result)=>{
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
