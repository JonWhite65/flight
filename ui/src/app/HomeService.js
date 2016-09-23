export default
class HomeService{
	/* @ngInject */
	constructor($http){
		this.id=""
		this.username
		this.sendLogin=function(username,password){
			let user={"username":username,
			"password":password}
			return $http.put('http://localhost:8080/user/',user)}


		this.saveId=function(id,username){
			console.dir(id)
			console.dir(username)
			this.id=id
			this.username=username
			console.dir(this.id)
		}
		this.newUser=function(username,password){
			let user={"username":username,
			"password":password}
			return $http.post('http://localhost:8080/user/',user)}


		this.getFeeds=function(){
			let message={"message":"getFirst"}
			return $http.put('http://localhost:8080/tweet/',message)}

			this.getUserGroupFeeds=function(){
				let message={"message":"getUserGroup","id":this.id}
				return $http.put('http://localhost:8080/tweet/',message)}

				this.getUserFeeds=function(id){
					let message={"message":"getTweets","id":id}
					return $http.put('http://localhost:8080/tweet/',message)
				}
				this.getUserGroups=function(id){
						return $http.get('http://localhost:8080/user/'+id)
				}
				this.newTweet=function(string){
					console.dir(string)
					let tweet={"userId":this.id,"username":this.username,"content":string}
					return $http.post('http://localhost:8080/tweet/',tweet)
				}
		}

		}
