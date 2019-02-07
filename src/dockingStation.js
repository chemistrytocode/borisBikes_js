function DockingStation (capacity = 20) {
  this._capacity = capacity
  this._bikes = []
}

DockingStation.prototype.capacity = function () {
  return this._capacity
}

DockingStation.prototype.maxCapacity = function () {
  return this._capacity === this._bikes.length
}

DockingStation.prototype.empty = function () {
  return this._bikes.length === 0
}

DockingStation.prototype.bikes = function () {
  return this._bikes
}

DockingStation.prototype.addBike = function (bike) {
  if (this.maxCapacity()) { throw new Error('Docking Station is at max capacity') }
  this._bikes.push(bike)
}

DockingStation.prototype.checkBike = function (bike) {
  bike.working()
}

DockingStation.prototype.workingBikes = function () {
  var workingBikes = this.bikes().filter(bike => bike.working())
  // var workingBikes = allBikes.filter(function(bike) { return bike.working() });
  return workingBikes
}

DockingStation.prototype.brokenBikes = function () {
  var brokenBikes = this.bikes().filter(bike => !bike.working())
  return brokenBikes
}

DockingStation.prototype.releaseBike = function () {
  if (this.empty()) { throw new Error('Docking Station is empty') }
  var workingBikes = this.workingBikes()
  if (workingBikes.length === 0) { throw new Error('No working bikes left') }
  this.updateBikes(releasedBike = workingBikes.shift())
  return releasedBike
}

DockingStation.prototype.updateBikes = function(releasedBike) {
  var allBikes = this.bikes()
  var index = allBikes.indexOf(releasedBike)
  if (index > -1) {
    allBikes.splice(index, 1)
  }
}

DockingStation.prototype.collectBrokenBikes = function() {
  updatedBikes = this.bikes().filter(bike => bike.working())
  this._bikes = updatedBikes;
}
