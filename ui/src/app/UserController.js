export default
class UserController{
/* @ngInject */
constructor (HomeService,$scope,$window ){
	let profileId =$window.location.href.split("/")
	if(HomeService.id===""||HomeService.id!=profileId[profileId.length-1]){
		$window.location.href='#/RettiwtFeed'
	}
	let myarray=[]

	this.looper=function(){
HomeService.getUserGroupFeeds().then(function(result){
	if($window.location.href!=='http://localhost:8000/#/User/'+HomeService.id){
	$window.clearInterval(refresh)
}
		myarray=result.data
		myarray.getItemAtIndex= function(index){return myarray[index]}
		myarray.getLength= function(){return myarray.length}
		console.dir(myarray)
		$scope.myarray=myarray

	})
}
this.addTweet= function(){
	HomeService.newTweet($scope.newTweet.tweet)
}
this.looper()
	let refresh=$window.setInterval(this.looper,5000)
$scope.newTweet={"tweet":""}
$scope.ButtonGuest="Profile"
$scope.ButtonLogin="Log Out"
$scope.GuestHide=true
$scope.Post=true
$scope.Feed=true
$scope.Feed1=false
this.toggleLogin= function(){
	HomeService.id=""
	HomeService.username=""
	$window.location.href='#/'
}
this.guest=function(){
	$window.location.href='#/UserProfile/'+HomeService.id
}

this.reroute=function(location){
	$window.location.href=location
}
}}
