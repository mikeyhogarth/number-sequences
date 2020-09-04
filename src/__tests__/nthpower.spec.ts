import NthPower from "../nthpower";

describe("The nth power sequence", () => {
  describe("generate", () => {
    it("creates the sequence of all nth powers", () => {
      const seq = NthPower(3);
      expect(seq.take(5).toArray()).toEqual([1, 8, 27, 64, 125]);
    });
  });
});
