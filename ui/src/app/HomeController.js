export default
class HomeController{
	/* @ngInject */
  constructor (HomeService,$window,$scope){
    var bcrypt = require('bcryptjs')
    this.hash
    $scope.ButtonGuest="Guest"
    $scope.ButtonLogin="Login / New User"
  $scope.showError=false
  $scope.errorMessage=""
  $scope.GuestHide=true
  $scope.MenuMessage="Please Login!"
  $scope.LoginFields=true
  $scope.Feed=false
  $scope.user={"username":"","password":""}
    this.error=function(message){
      this.errorMessage=message
      this.showError=true

    }
   let originatorEv
		this.login= function(){
      var salt = bcrypt.genSaltSync(10);
      this.hash = bcrypt.hashSync($scope.user.password,salt );
      HomeService.sendLogin($scope.user.username,this.hash).then((result)=>{

        (result.data.id!==0&&bcrypt.compareSync($scope.user.password, result.data.message))?
        (HomeService.saveId(result.data.id,$scope.user.username),
        $window.location.href='#/User/'+result.data.id):
        this.error("Invalid login")
     })

      }

    this.toggleLogin=function($mdOpenMenu,ev){
      originatorEv = ev;
      $mdOpenMenu(ev);
    }
    this.guest=function(){
      $window.location.href='#/RettiwtFeed'
    }
    this.newUser= function(){
      var salt = bcrypt.genSaltSync(10);
      this.hash = bcrypt.hashSync($scope.user.password, salt);
      HomeService.newUser($scope.user.username,this.hash).then((result)=>{
        (result.data.id!==0&&bcrypt.compareSync($scope.user.password, result.data.message))?
        (HomeService.saveId(result.data.id,$scope.user.username),
        $window.location.href='#/User/'+result.data.id):
        this.error("Cannot use this Username")
    })
	}
  this.reroute=function(location){
    $window.location.href=location
  }

}
}
