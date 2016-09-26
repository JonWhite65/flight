export default
class HomeService{
	/* @ngInject */
	constructor($http){
		this.id=""
		this.username
		this.sendLogin=function(username,password){
			console.dir(username)
			console.dir(password)
			return $http.get('http://localhost:8000/user/'+username+'/'+password)}

			this.newUser=function(username,password){
				let user={"username":username,
				"password":password}
				console.dir(username)
				console.dir(password)
				return $http.post('http://localhost:8000/user/',user)}

		this.saveId=function(id,username){
			this.id=id
			this.username=username
		}
		this.getCurrentFlights=function(){
				return $http.get('http://localhost:8000/flights')
		}
		this.getPossibleFlights=function(location,destination){
				return $http.get('http://localhost:8000/flights/'+location+'/'+destination)
		}
		this.saveUserItinerary=function(newItinerary){
			return $http.put('http://localhost:8000/user/'+this.id,newItinerary)
		}


		}

		}
