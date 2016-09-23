
export default
class GlobalController{
	/* @ngInject */
	constructor (HomeService,$window,$scope){
		let originatorEv
		let myarray=[]
		if(HomeService.id===""){
			$scope.Post=false
		}
		else{
			console.dir("here")
			$scope.Post=true
		}
		this.addTweet= function(){
			HomeService.newTweet($scope.newTweet.tweet)
		}
		$scope.newTweet={"tweet":""}
		this.looper=function(){
		HomeService.getFeeds().then(function(result){
			myarray=result.data
			myarray.getItemAtIndex= function(index){return myarray[index]}
			myarray.getLength= function(){return myarray.length}
			console.dir(myarray)
			$scope.myarray=myarray
			if($window.location.href!=='http://localhost:8000/#/RettiwtFeed')
			$window.clearInterval(refresh);
		})
	}
	this.looper()
		let refresh=$window.setInterval(this.looper,5000)
    $scope.user={"username":"","password":"","id":""}
		this.toggleLogin=function($mdOpenMenu,ev){
		originatorEv = ev;
		$mdOpenMenu(ev);
	}
	$scope.Feed=true
	$scope.Feed1=false
		if(HomeService.id!==""){
			$scope.user.username=HomeService.username
			$scope.user.id=HomeService.id
		$scope.ButtonGuest="HomePage"
		$scope.ButtonLogin=HomeService.username
		$scope.MenuMessage=""
		$scope.LoginFields=false


	}
	else{
		var bcrypt = require('bcryptjs')
		this.hash
		$scope.GuestHide=false
		$scope.ButtonLogin="Login/New User"
		$scope.MenuMessage="Please Login!"
		$scope.LoginFields=true



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
		this.reroute=function(location){
			console.dir(location)
			$window.location.href=location
		}


	}

}
}
