import templateUrl from './map.component.html'

/* @ngInject */
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor ($map, locations,HomeService,$interval) {
    this.$map = $map
    this.colors=HomeService.colors
    HomeService.getLocations().then(result=>{
      this.citiesLocation=result.data
    var ctrl= this
    this.flights={}

    var markers = []
    var paths = []


    this.update=function(){
      ctrl.flights=HomeService.flights
      ctrl.cities=[]
      ctrl.markers=[]
      ctrl.paths=[]
      if(ctrl.flights.length>0){
        let i=0
      for(let flight of ctrl.flights){

      if(!ctrl.cities.includes(flight.origin)){
        ctrl.cities.push(flight.origin)
        $map.getMarkerByCityName(flight.origin).then(result=>{
          ctrl.addMarker(result.latitude,result.longitude)
        })

      }
      if(!ctrl.cities.includes(flight.destination)){
        ctrl.cities.push(flight.destination)
        $map.getMarkerByCityName(flight.origin).then(result=>{
          ctrl.addMarker(result.latitude,result.longitude)
        })
      }
      let a
      let b

    for(let city of ctrl.citiesLocation){
      if(flight.origin===city.city){
        a={'latitude':city.latitude,
      'longitude':city.longitude}
      }
      if(flight.destination===city.city){
        b={'latitude':city.latitude,
      'longitude':city.longitude}
      }
    }

    ctrl.addPath(a,b,ctrl.colors[i])
    i++
    }
}

    }
    this.update()

    let refresh=$interval(this.update,5000)
 })
}

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }

}

export default {
  templateUrl,
  controller: MapController,
  controllerAs: '$mapCtrl'
}
