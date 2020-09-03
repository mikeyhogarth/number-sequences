import Geometric from "../geometric";

describe("Geometric Sequences", () => {
  it("creates an geometric sequence", () => {
    const seq = Geometric(1, 2);
    expect(seq.nextN(5)).toEqual([1, 2, 4, 8, 16]);
  });

  it("allows you to specify a start number", () => {
    const seq = Geometric(2, 2);
    expect(seq.nextN(5)).toEqual([2, 4, 8, 16, 32]);
  });

  it("allows you to specify a common ratio", () => {
    const seq = Geometric(1, 3);
    expect(seq.nextN(5)).toEqual([1, 3, 9, 27, 81]);
  });

  it("allows you to set less-than-1 values for the common ratio", () => {
    const seq = Geometric(16, 0.5);
    expect(seq.nextN(5)).toEqual([16, 8, 4, 2, 1]);
  });
});
