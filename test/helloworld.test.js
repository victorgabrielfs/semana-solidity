const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function(accounts) {
  beforeEach(async () => {
    contract = await HelloWorld.new();
  })

  it("Need to show helloworld", async () => {
    const res = await contract.hello()
    
    assert(res === "Hello World")
  })
});
