describe('Van', function () {
  var dockingStation
  var workingBike
  var brokenBike
  var van

  beforeEach(function () {
    // dockingStation = new DockingStation()
    van = new Van()
    dockingStation = jasmine.createSpyObj('brokenBike', ['bikes'])
    brokenBike = jasmine.createSpyObj('brokenBike', ['working'])
    workingBike = jasmine.createSpyObj('workingBike', ['working'])

    brokenBike.working.and.returnValue(false)
    workingBike.working.and.returnValue(true)
    dockingStation.bikes.and.returnValue([brokenBike, workingBike])
  })

  describe('#brokenBike', function () {
    it('Should return an array of all broken bikes', function () {
      expect(van.collectBrokenBikes(dockingStation).length).toEqual(1)
    })
    it('Should remove all brokenBikes from the allBikes array', function () {
      van.updateBikes(dockingStation)
      expect(dockingStation.bikes().length).toEqual(1)
    })
    it("Should fix all broken bikes", function() {
      var dockingStation = new DockingStation()
      var brokenBike = new Bikes()
      dockingStation.addBike(brokenBike)
      van.collectBrokenBikes(dockingStation)
      var fixedBikes = van.fixBikes()
      expect(fixedBikes[0].working()).toEqual(true)


    })
  })
})
