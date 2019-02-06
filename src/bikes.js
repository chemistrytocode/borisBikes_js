function Bikes() {
  this._working = true;
};

Bikes.prototype.working = function() {
  return this._working;
}

Bikes.prototype.reportBroken = function() {
  this._working = false;
}

Bikes.prototype.reportFixed = function() {
  this._working = true;
}
