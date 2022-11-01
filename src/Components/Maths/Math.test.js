import { Divi, Sum } from "./Maths";

describe("Math Group", () => {
  test("Sum of a & b", () => {
    const result = Sum(1, 2);
    expect(result).toBe(3);
  });

  test("Division Of a & b", () => {
    const result = Divi(4, 2);
    expect(result).toBe(2);
  });

  test.only("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
