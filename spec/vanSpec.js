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
    workingBike.working.and.returnValue(true)[brokenBike]
    dockingStation.bikes.and.returnValue([brokenBike, workingBike])
  })

  describe('#brokenBike', function () {
    it('Should return an array of all broken bikes', function () {
      expect(van.brokenBikes(dockingStation).length).toEqual(1)
    })
    it('Should remove all brokenBikes from the allBikes array', function () {
      van.collectBrokenBikes(dockingStation)
      expect(dockingStation.bikes().length).toEqual(1)
    })
  })
})
