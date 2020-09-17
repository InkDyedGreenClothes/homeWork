const foreach = require("../foreach");
test("foreach ", () => {
  // 1. given
  const array = [1, 2, 3];

  //   let count = 0;
  //   const callback = () => {
  //     count++;
  //   };
  // jest mock
  const callback = jest.fn();
  console.log(callback.mock);

  // 2. when
  foreach(array, callback);
  console.log(callback.mock);

  // 3. then
  expect(callback).toHaveBeenCalledTimes(3);
});
