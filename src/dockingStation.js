function DockingStation(capacity = 20) {
  this._capacity = capacity;
  this._bikes = []
}

DockingStation.prototype.capacity = function() {
  return this._capacity;
}

DockingStation.prototype.maxCapacity = function() {
  return this._capacity === this._bikes.length;
}

DockingStation.prototype.bikes = function() {
  return this._bikes;
}

DockingStation.prototype.addBike = function(bike) {
  if (this.maxCapacity()) { throw new Error("Docking Station is at max capacity") }
  this._bikes.push(bike);
}

DockingStation.prototype.checkBike = function(bike) {
  bike.working();
}

DockingStation.prototype.workingBikes = function() {
  allBikes = this.bikes();
  var workingBikes = allBikes.filter(bike => bike.working());
  // var workingBikes = allBikes.filter(function(bike) { return bike.working() });
  return workingBikes;
}

DockingStation.prototype.releaseBike = function() {
  return this._bikes.shift();
}
