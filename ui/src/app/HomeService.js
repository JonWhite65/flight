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
		this.itineraries={}
		this.itinerary
		this.mapState="Current Flights"
		this.details=false
		this.currentlength=5
		var ctrl= this
		this.flights={}
		this.colors=['#CC0099','#AA1100','#FF3388','#00AA33','#0000FF']
		this.sendLogin=function(username,password){
			let user={"username":username,
			"password":password}
			return $http.put('http://localhost:8000/user',user)}

			this.newUser=function(username,password){
				let user={"username":username,
				"password":password}
				return $http.post('http://localhost:8000/user/',user)}

		this.saveId=function(id,username){
			this.id=id
			this.username=username
		}
		this.randomColor=function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
		this.getCurrentFlights=function(){
			this.result=$http.get('http://localhost:8000/flights')
			this.result.then(result=>{
				this.flights=result.data
				if(this.flights.length>this.currentLength){
					for(let i =0;i<this.flights.length-this.currentLength;i++){
						this.colors.push(this.randomColor())
					}
					this.currentLength=this.flights.length

				}
			})
				return this.result
		}
		this.getPossibleFlights=function(location,destination){
			this.result=$http.get('http://localhost:8000/flights/'+location+'/'+destination)
				return this.result
		}
		this.getLocations= function(){
				this.result1=$http.get('http://localhost:8000/location')
				this.result1.then((result)=>{
					this.locations=result.data
			})

				return this.result1

		}
		this.getCurrentItineraries=function(){
			return $http.get('http://localhost:8000/user/itineraries/'+this.username).then((result)=>{
				ctrl.itineraries=result.data
			})
		}
		this.getItineraryDetails=function(itinerary){
			this.details=true
		this.flights= itinerary.flights
		this.itinerary=itinerary
		this.mapState="Itinerary Flights"


		}
		this.saveItinerary=function(savedItinerary){

			$http.put('http://localhost:8000/user/'+this.id+'/itineraries',savedItinerary).then((result)=>{
				ctrl.itineraries=result.data

			})
		}
		}

		}
