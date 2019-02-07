function Van () {
  this._brokenbikes;
}

Van.prototype.vanHolding = function() {
  return this._brokenBikes;
}

Van.prototype.collectBrokenBikes = function (dockingStation) {
  var brokenBikes = dockingStation.bikes().filter(bike => !bike.working())
  this._brokenBikes = brokenBikes
  return brokenBikes
}

Van.prototype.updateBikes = function (dockingStation) {
  allBikes = dockingStation.bikes()
  for (var i = 0; i < allBikes.length; i++) {
    if (allBikes[i].working()) { allBikes.splice(i, 1) }
  }

Van.prototype.fixBikes = function() {
  brokenBikes = this.vanHolding()
  for (var i = 0; i < brokenBikes.length; i++) {
    console.log(brokenBike[i])
    brokenBikes[i].reportFixed()
    console.log(brokenBike[i])
  }
  return brokenBikes;

}
  // updatedBikes = this.bikes().filter(bike => bike.working())
  // this._bikes = updatedBikes;
}
