import Power from "../power";

describe("The power sequence", () => {
  describe("generate", () => {
    it("creates the power sequence for a number", () => {
      const seq = Power(3);
      expect(seq.take(4).toArray()).toEqual([3, 9, 27, 81]);
    });
  });
});
