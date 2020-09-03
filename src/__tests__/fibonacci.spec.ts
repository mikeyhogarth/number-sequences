import Fibonacci from "../fibonacci";

describe("Fibonacci", () => {
  it("creates a Fibonacci sequence", () => {
    const seq = Fibonacci();
    expect(seq.take(6).toArray()).toEqual([0, 1, 1, 2, 3, 5]);
  });
});
