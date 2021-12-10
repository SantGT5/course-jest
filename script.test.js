const { isCity} = require("./script");
const fetch = require("node-fetch");

/*test("new test", () => {
  expect.assertions(2);
  getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.count).not.toEqual(42);
  });
});*/

test("testing captured calls", () => {
  const mock = jest.fn();

  let result = mock("foo");

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

let db = []
const initDb = () => db = [ "Vienna", "London", "San Juan", "Medllin" ]
const closeDb = () => db = []

beforeEach(() => initDb())
afterEach(() => closeDb())

test("city db has Vienna", () => {
    expect(isCity("Vienna", db)).toBeTruthy()
})