import { createSequence, Sequence } from "../sequence";

export enum GeometricOperator {
  Multiply,
  Divide,
}

/**
 * Geometric
 *
 * @param {*} start The number to start at
 * @param {*} commonRatio The number to multiply or divide by each time
 * @param {GeometricOperator} geometricOperator Whether to multiply or divide
 *
 * Produces a geomereic number sequence. Geometric number
 * sequences are sequences which multiply or divide by a certain amount
 * for each iteration.
 */

export function Geometric(
  start: number,
  commonRatio: number,
  geometricOperator: GeometricOperator
): Sequence {
  const next = (prev: Array<number>) =>
    geometricOperator === GeometricOperator.Multiply
      ? prev[prev.length - 1] * commonRatio
      : prev[prev.length - 1] / commonRatio;

  return createSequence(start, next);
}