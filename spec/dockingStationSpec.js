describe('DockingStation', function () {
  var dockingStation
  var workingBike
  var brokenBike

  beforeEach(function () {
    dockingStation = new DockingStation()
    brokenBike = jasmine.createSpyObj('brokenBike', ['working'])
    workingBike = jasmine.createSpyObj('workingBike', ['working'])
    brokenBike.working.and.returnValue(false)
    workingBike.working.and.returnValue(true)
  })

  describe('#capacity', function () {
    it('Should initialize with a default capacity of 20', function () {
      expect(dockingStation.capacity()).toEqual(20)
    })
    it('Should initialize with a custom capacity of 25', function () {
      var customStation = new DockingStation(25)
      expect(customStation.capacity()).toEqual(25)
    })
  })

  describe('#addBike', function () {
    it('Should add a bike to the dockingStation', function () {
      dockingStation.addBike(workingBike)
      expect(dockingStation.bikes().length).toEqual(1)
    })

    it('Should return an array of bikes that are working', function () {
      dockingStation.addBike(workingBike)
      dockingStation.addBike(brokenBike)
      expect(dockingStation.workingBikes().length).toEqual(1)
    })

    it('Should prevent a bike from docking if station is at max capacity', function () {
      spyOn(dockingStation, 'maxCapacity').and.returnValue(true)
      expect(function () { dockingStation.addBike(workingBike) }).toThrowError('Docking Station is at max capacity')
    })
  })

  describe('#releaseBike', function () {
    it('Should release a bike from the dockingStation', function () {
      dockingStation.addBike(workingBike)
      expect(dockingStation.releaseBike()).toEqual(workingBike)
    })

    it('Should prevent a bike from being released if Docking Station has no working bikes', function () {
      dockingStation.addBike(brokenBike)
      expect(function () { dockingStation.releaseBike() }).toThrowError('No working bikes left')
    })

    it('Should prevent a bike from being released if Docking Station is empty', function () {
      spyOn(dockingStation, 'empty').and.returnValue(true)
      expect(function () { dockingStation.releaseBike() }).toThrowError('Docking Station is empty')
    })
  })

  describe('#brokenBike', function () {
    it('Should return an array of all broken bikes', function () {
      dockingStation.addBike(workingBike)
      dockingStation.addBike(brokenBike)
      expect(dockingStation.brokenBikes().length).toEqual(1)
    })
    it('Should remove all brokenBikes from the allBikes array', function () {
      dockingStation.addBike(workingBike)
      dockingStation.addBike(brokenBike)
      dockingStation.addBike(brokenBike)
      dockingStation.collectBrokenBikes()
      expect(dockingStation.bikes().length).toEqual(1)
    })

  })
}) // End of DockingStation
