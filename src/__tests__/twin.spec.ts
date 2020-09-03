import { Seq } from "immutable";
import Prime from "../prime";
import Triangle from "../triangle";
import Twin from "../twin";

describe("The twin sequence", () => {
  describe("generate", () => {
    it("creates a twinned sequence", () => {
      const seqA = Prime();
      const seqB = Triangle();
      const seq = Twin(seqA, seqB);
      expect(seq.take(10).toArray()).toEqual([2, 1, 3, 3, 5, 6, 7, 10, 11, 15]);
    });
  });
});
