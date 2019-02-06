describe("DockingStation", function() {
  var dockingStation;
  var workingBike;
  var brokenBike;

  beforeEach(function() {
    dockingStation = new DockingStation();
    workingBike = new Bikes();
    brokenBike = new Bikes();
    brokenBike.reportBroken();
  });

  describe("#Capacity", function() {

  it("Should initialize with a default capacity of 20", function() {
    expect(dockingStation.capacity()).toEqual(20);
  });
  it("Should initialize with a custom capacity of 25", function() {
    var customStation = new DockingStation(25);
    expect(customStation.capacity()).toEqual(25);
  });
  });

  describe("#addBike", function() {

    it("Should add a bike to the dockingStation", function() {
      dockingStation.addBike(workingBike);
      expect(dockingStation.bikes().length).toEqual(1);
    });

  });

  describe("#workingBikes", function() {
    it("Should return an array of bikes that aren't broken", function() {
      dockingStation.addBike(workingBike);
      dockingStation.addBike(brokenBike);
      workingBikes = dockingStation.workingBikes();
      expect(workingBikes.length).toEqual(1);
    });
  });

  describe("#full", function() {

    // it("Should prevent a bike from docking if station is at max capacity", function() {
    //   spyOn(dockingStation, 'capacity').and.returnValue(20);
    //   expect(function() { dockingStation.addBike(workingBike)}).toThrowError("Docking Station is at max capacity")
    //   expect(dockingStation.addBike(workingBike)).toEqual(1);
    // });

  });


}); //End of DockingStation
