import { Sequence, createSequence } from "../sequence";

function createGenerator() {
  return (function* () {
    yield 1;
    yield 2;
    yield 3;
  })();
}

describe("createSequence", () => {
  it("returns a sequence", () => {
    const sequence = createSequence(createGenerator());
    expect(sequence.next).toBeInstanceOf(Function);
    expect(sequence.nextN).toBeInstanceOf(Function);
  });
});

describe("Sequences", () => {
  describe("#next", () => {
    it("calculates the next item in the sequence", () => {
      const sequence = createSequence(createGenerator());
      expect(sequence.next()).toEqual(1);
      expect(sequence.next()).toEqual(2);
      expect(sequence.next()).toEqual(3);
    });
  });

  describe("#nextN", () => {
    it("calculates the next item in the sequence", () => {
      const sequence = createSequence(createGenerator());
      expect(sequence.nextN(3)).toEqual([1, 2, 3]);
    });
  });
});
