import Prime from "./prime";

describe("The prime sequence", () => {
  describe("generate", () => {
    it("creates the prime sequence", () => {
      const seq = Prime();
      expect(seq.nextN(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  });
});
