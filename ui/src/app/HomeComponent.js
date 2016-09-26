import templateUrl from './home.html'

class HomeController{
	/* @ngInject */
  constructor (HomeService,$window,$scope){
    var bcrypt = require('bcryptjs')
    this.hash
    $scope.ButtonLogin="Login"
    $scope.LoginMessage="Hello Please Sign In"
    $scope.LoginFields=true
    $scope.user={"username":"","password":""}
    $scope.user1={"username":"","password":""}
  $scope.showError=false
  $scope.errorMessage=""
  $scope.state={"notLoggedIn":true}
  $scope.state={"noSearchInput":true}

    this.error=function(message){
      this.errorMessage=message
      this.showError=true

    }
   let originatorEv
		this.login= function($mdMenu){
      var salt = bcrypt.genSaltSync(10);
      this.hash = bcrypt.hashSync($scope.user.password,salt );
      HomeService.sendLogin($scope.user.username,this.hash).then((result)=>{

        (result.data.id!==0&&bcrypt.compareSync($scope.user.password, result.data.password))?
        (HomeService.saveId(result.data.id,$scope.user.username),
        $scope.state.notLoggedIn=false,
      $scope.ButtonLogin="Log Out-"+$scope.user.username
    //ask why undefined  $mdMenu.hide=true
  ):
        this.error("Invalid login")
     })

      }
      this.newUser= function(){
        var salt = bcrypt.genSaltSync(10);
        this.hash = bcrypt.hashSync($scope.user1.password, salt);
        HomeService.newUser($scope.user1.username,this.hash).then((result)=>{
          result.data!==0?
          (HomeService.saveId(result.data,$scope.user1.username),
          console.dir(result.data),
          $scope.state.notLoggedIn=false,
        $scope.ButtonLogin="Log Out-"+$scope.user.username)
          :
          this.error("Cannot use this Username")
      })
    }
      this.logOut=function(){

      }
    this.toggleLogin=function($mdOpenMenu,ev){
      if($scope.ButtonLogin==="Login"){
      originatorEv = ev;
      $mdOpenMenu(ev);
    }
    else{
      $scope.ButtonLogin="Login"
      $scope.state.notLoggedIn=true,
      HomeService.saveId("","")
    }
    }
}
}
export default{
templateUrl,
controller:HomeController,
controllerAs:'hC'
}
