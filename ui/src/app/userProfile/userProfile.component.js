import templateUrl from './userProfile.component.html'

/* @ngInject */
class UserProfileController {
  constructor(HomeService,$interval){
    var ctrl=this
    this.iteneraries
    this.update=function(){

    HomeService.getCurrentIteneraries().then((result)=>{
    ctrl.iteneraries=result.data


  })
}
this.update()
let refresh=$interval(this.update,5000)
this.getDetails=function(number){

  HomeService.getIteneraryDetails(ctrl.iteneraries[number])
}
}
}
export default {
  templateUrl,
  controller: UserProfileController,
  controllerAs: 'uPC'
}
