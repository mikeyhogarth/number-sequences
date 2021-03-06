import { Seq, List } from "immutable";

/**
 * Prime
 *
 * List of all primes starting from 2
 */

// Check if any of the primes found so far are factors of n. If not, then n is prime, so return that, else repeat for next candidate
const findNextPrime = (n: number, knownPrimes: List<number>): number => {
  const f = knownPrimes.find((p) => n % p === 0);
  return f ? findNextPrime(nextCandidate(n), knownPrimes) : n;
};

// Reduce computation time by only checking odd numbers - and therefore incrementing by 2 each time
// Only exception is the very first increment, because the first prime is 2, the only even prime
const nextCandidate = (n: number): number => n + (n === 2 ? 1 : 2);

// Public API
export default (): Seq.Indexed<number> => Seq<number>(generator(2, List([2])));

// Generator
function* generator(
  current: number,
  prev: List<number> = List()
): Generator<number> {
  yield current;
  const knownPrimes = prev.push(current);
  const nextPrime = findNextPrime(nextCandidate(current), knownPrimes);
  yield* generator(nextPrime, knownPrimes);
}
