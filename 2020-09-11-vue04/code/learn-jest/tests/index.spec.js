const add = require("../add");

//setup
beforeEach(() => {
  // 做初始化的工作
  console.log("before-each");
});

afterEach(() => {
  // 做销毁工作
  console.log("after-each");
});

beforeAll(() => {
  // 所有单元测试之前
  console.log("beforeAll")
});

afterAll(() => {
  // 所有单元测试都执行完成后悔运行
  console.log("afterAll")
});

describe('Name of the group', () => {
  
});
// 写测试
// 活文档
// 如何正确的写测试
test("1 + 1 应该等于 2 ", () => {
  // 1,1  -> add 它需要的参数
  // 1，1 数据
  // given -> 准备测试数据

  // add -> 触发要测试的动作
  // when -> 触发要测试的动作
  console.log("init");
  const result = add(1, 1);

  // toBe -> jest 匹配器
  // result 应该等于 2
  // 验证
  // then -> 断言验证结果
  expect(result).toBe(2);
  expect(result).not.toBe(3);
});

// 写测试也要保证测试的质量
// 测试这个东西也是需要维护的
describe("string", () => {
  // string
  test("string A", () => {
    console.log("init");
    const result = "jest vue";

    expect(result).toContain("vue");
  });

  test("string B", () => {
    console.log("init");
    const result = "jest vue";

    expect(result).toContain("vue");
  });
});
