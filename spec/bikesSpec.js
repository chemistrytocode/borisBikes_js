describe("Bikes", function() {
  var bike;

  beforeEach(function() {
    bike = new Bikes();
  });


  it("Should initialize with working set to true", function() {
    expect(bike.working()).toEqual(true);
  })

  it("Should set working to false when reportBroken is called", function() {
    bike.reportBroken();
    expect(bike.working()).toEqual(false);
  })

  it("Should set working to true when reportFixed is called", function() {
    bike.reportFixed();
    expect(bike.working()).toEqual(true);
  })
});
