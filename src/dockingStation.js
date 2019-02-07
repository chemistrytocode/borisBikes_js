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

DockingStation.prototype.empty = function() {
  return this._bikes.length === 0;
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
  var workingBikes = this.bikes().filter(bike => bike.working());
  // var workingBikes = allBikes.filter(function(bike) { return bike.working() });
  return workingBikes;
}

DockingStation.prototype.releaseBike = function() {
  if (this.empty()) { throw new Error("Docking Station is empty") }
  var allBikes = this.bikes(); // Array containing all Bikes
  var workingBikes = this.workingBikes(); // Array containing working bikes
  if (workingBikes.length === 0) { throw new Error("No working bikes left") }
  var releasedBike = workingBikes.shift(); // Released working bike
  var index = allBikes.indexOf(releasedBike) // Index of released bike in all bike array
  if (index > -1) {
    allBikes.splice(index, 1); // Removed bike from all bikes array.
  }
  return releasedBike; // Return bike.
}
