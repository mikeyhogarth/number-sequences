import { Arithmetic } from "./arithmetic";

describe("Arithmetic Sequences", () => {
  describe("generate", () => {
    it("creates an arithmetic sequence", () => {
      const seq = Arithmetic(1, 1);
      expect(seq.nextN(5)).toEqual([1, 2, 3, 4, 5]);
    });

    it("allows you to specify a start number", () => {
      const seq = Arithmetic(2, 1);
      expect(seq.nextN(5)).toEqual([2, 3, 4, 5, 6]);
    });

    it("allows you to specify values of n", () => {
      const seq = Arithmetic(2, 2);
      expect(seq.nextN(5)).toEqual([2, 4, 6, 8, 10]);
    });

    it("allows you to set negative values for n", () => {
      const seq = Arithmetic(5, -1);
      expect(seq.nextN(5)).toEqual([5, 4, 3, 2, 1]);
    });
  });
});
