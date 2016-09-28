import templateUrl from './home.html'

class HomeController{
	/* @ngInject */
  constructor (HomeService,$interval){
    var bcrypt = require('bcryptjs')
    this.hash
    this.ButtonLogin="Login"
    this.LoginMessage="Hello! Please Sign In"
    this.LoginFields=true
    this.user={"username":"","password":""}
    this.user1={"username":"","password":""}
    this.details=false
    this.mapState="Current Flights"
  this.notLoggedIn=true
  this.noSearchInput=true
  var ctrl=this





   let originatorEv
		this.login= function($mdMenu){
      var salt = bcrypt.genSaltSync(10);
      this.hash = bcrypt.hashSync(this.user.password,salt );
      HomeService.sendLogin(this.user.username,this.hash).then((result)=>{

        (result.data.id!==0&&bcrypt.compareSync(this.user.password, result.data.password))?
        (HomeService.saveId(result.data.id,this.user.username),
        this.user.username="",
        this.user.password="",
        this.notLoggedIn=false,
      this.ButtonLogin=HomeService.username+"-Log Out"
    //ask why undefined  $mdMenu.hide=true
  ):
        (this.errorMessage="Invalid login",
        this.showError=true)
     })

      }
      this.newUser= function(){

        var salt = bcrypt.genSaltSync(10);
        this.hash = bcrypt.hashSync(this.user1.password, salt);
        HomeService.newUser(this.user1.username,this.hash).then((result)=>{
          result.data!==0?
          (HomeService.saveId(result.data,this.user1.username),
        this.user1.username="",
        this.user1.password="",
          this.notLoggedIn=false,
        this.ButtonLogin=HomeService.username+"-Log Out")
          :
          (this.errorMessage="Cannot use this Username",
          this.showError=true)
      })
    }
    this.toggleLogin=function($mdOpenMenu,ev){
      if(this.ButtonLogin==="Login"){
      originatorEv = ev;
      $mdOpenMenu(ev);
    }
    else{
      this.ButtonLogin="Login"
      this.notLoggedIn=true
    this.noSearchInput=true
    HomeService.details=false
    this.details=false
    HomeService.mapState="Current Flights"
    HomeService.searchinput1=""
		HomeService.searchinput2=""

      HomeService.saveId("","")
    }
    }
    this.update=function(){
      
      if(HomeService.searchinput1!==""&&HomeService.searchinput2!==""){


        ctrl.noSearchInput=false
      }
      else{
        ctrl.noSearchInput=true

      }
      if(HomeService.details===true){
        ctrl.details=true
      }
      else{
        ctrl.details=false
      }
      ctrl.mapState=HomeService.mapState

    }
    this.update()
    let refresh=$interval(this.update,500)
}
}
export default{
templateUrl,
controller:HomeController,
controllerAs:'hC'
}
