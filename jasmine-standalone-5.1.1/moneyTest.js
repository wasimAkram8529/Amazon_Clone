import { formateCurrency } from "../scripts/utils/money.js";

describe("test suite: formateCurrency", () => {
  it("Coverts cents into dollars", () => {
    expect(formateCurrency(2095)).toEqual("20.95");
  });

  it("works with zeros", () => {
    expect(formateCurrency(0)).toEqual("0.00");
  });

  it("round up to the nearest cent", () => {
    expect(formateCurrency(2000.5)).toEqual("20.01");
  });

  it("round up to the nearest cent", () => {
    expect(formateCurrency(2000.4)).toEqual("20.00");
  });
});
