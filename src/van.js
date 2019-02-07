function Van () {
}

Van.prototype.brokenBikes = function (dockingStation) {
  var brokenBikes = dockingStation.bikes().filter(bike => !bike.working())
  return brokenBikes
}

Van.prototype.collectBrokenBikes = function (dockingStation) {
  allBikes = dockingStation.bikes()
  for (var i = 0; i < allBikes.length; i++) {
    if (allBikes[i].working()) { allBikes.splice(i, 1) }
  }
  // updatedBikes = this.bikes().filter(bike => bike.working())
  // this._bikes = updatedBikes;
}
