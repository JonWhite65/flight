export default
class ProfileController{
/* @ngInject */
constructor (HomeService,$scope,$window ){
	if(HomeService.id===""){
		$window.location.href='#/RettiwtFeed'

	}
	let profileId =$window.location.href.split("/")
	if(HomeService.id==profileId[profileId.length-1]){
		$scope.Post=true
		$scope.Check=true

	}

	this.addTweet= function(){
		HomeService.newTweet($scope.newTweet.tweet)
	}
	$scope.newTweet={"tweet":""}
	$scope.username=HomeService.username
	let myarray=[]
	let myarray1=[]
	let myarray2=[]

	this.looper=function(){
		if($window.location.href!=='http://localhost:8000/#/UserProfile/'+profileId[profileId.length-1]){
		$window.clearInterval(refresh)
	}
		HomeService.getUserFeeds(profileId[profileId.length-1]).then(function(result){

			myarray=result.data
			if(myarray!==null){
			myarray.getItemAtIndex= function(index){return myarray[index]}
			myarray.getLength= function(){return myarray.length}
			console.dir(myarray)
			$scope.myarray=myarray
		}
		})
		HomeService.getUserGroups(profileId[profileId.length-1]).then(function(result){
			myarray1=result.data.message1
			if(myarray1!==null){
			myarray1.getItemAtIndex= function(index){return myarray1[index]}
			myarray1.getLength= function(){return myarray1.length}
			console.dir(myarray1)
			$scope.myarray1=myarray1
		}
		myarray2=result.data.message2
		if(myarray2!==null){

			myarray2.getItemAtIndex= function(index){return myarray2[index]}
			myarray2.getLength= function(){return myarray2.length}
			console.dir(myarray2)
			$scope.myarray2=myarray2
		}
		})
	}
	this.looper()
		let refresh=$window.setInterval(this.looper,5000)

  $scope.ButtonGuest="Home"
  $scope.ButtonLogin="Log Out"
  $scope.GuestHide=true
  $scope.Feed=true
  $scope.Feed1=true

  this.toggleLogin= function(){
  	HomeService.id=""
  	HomeService.username=""
  	$window.location.href='#/'
  }
  this.guest=function(){
    console.dir(HomeService.id)
  	$window.location.href='#/User/'+HomeService.id
  }



  if(HomeService.id==profileId[profileId.length-1]){

      }

}}
