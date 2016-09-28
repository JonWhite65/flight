import templateUrl from './userProfile.component.html'

/* @ngInject */
class UserProfileController {
  constructor(HomeService,$interval){
    var ctrl=this
    this.itineraries
    this.details=false
    this.show=-1
    HomeService.getCurrentItineraries()
    this.update=function(){
      
    ctrl.itineraries=HomeService.itineraries

}
this.update()
let refresh=$interval(this.update,500)
this.getDetails=function(number){
  this.show=number
  this.details=true
  HomeService.getItineraryDetails(ctrl.itineraries[number])

}
this.resumeSearch=function(){
  this.show=-1
  this.details=false
  HomeService.details=false
  HomeService.mapState="Current Flights"
}
}
}
export default {
  templateUrl,
  controller: UserProfileController,
  controllerAs: 'uPC'
}
