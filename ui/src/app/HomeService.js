export default
class HomeService{
	/* @ngInject */
	constructor($http){
		this.searchinput1=""
		this.searchinput2=""
		this.display={"currentFlightList":true}
		this.id=""
		this.username
		this.locations
		this.flights={}
		this.colors=['#CC0099','#AA1100','#FF3388','#00FF00','#0000FF']
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
			this.result=$http.get('http://localhost:8000/flights')
			this.result.then(result=>{
				this.flights=result.data
			})
				return this.result
		}
		this.getPossibleFlights=function(location,destination){
			this.result=$http.get('http://localhost:8000/flights/'+location+'/'+destination)
			this.flights=this.result
				return this.result
		}
		this.saveUserItinerary=function(newItinerary){
			return $http.put('http://localhost:8000/user/'+this.id,newItinerary)
		}
		this.getLocations= function(){
				this.result1=$http.get('http://localhost:8000/location')
				this.result1.then((result)=>{
					this.locations=result.data
			})

				return this.result1

		}
		this.getCurrentIteneraries=function(){
			return $http.get('http://localhost:8000/user/iteneraries')
		}
		this.getIteneraryDetails=function(id){
			$http.get('http://localhost:8000/user/iteneraries')

		}
		}

		}
