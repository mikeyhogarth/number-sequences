import { createSequence, Sequence } from "../sequence";

/**
 * Prime
 *
 * List of all primes starting from 2
 */

// Check if any of the primes found so far are factors of n. If not, then n is prime, so return that, else repeat for next candidate
const findNextPrime = (n: number, knownPrimes: Array<number>): number => {
  const f = knownPrimes.find((p) => n % p === 0);
  return f ? findNextPrime(nextCandidate(n), knownPrimes) : n;
};

// Reduce computation time by only checking odd numbers - and therefore incrementing by 2 each time
// Only exception is the very first increment, because the first prime is 2, the only even prime
const nextCandidate = (n: number): number => n + (n === 2 ? 1 : 2);

export const Prime = (): Sequence => {
  const next = (prev: Array<number>): number => {
    const largestPrimeSoFar = prev[prev.length - 1];
    return findNextPrime(nextCandidate(largestPrimeSoFar), prev);
  };

  return createSequence(2, next);
};
