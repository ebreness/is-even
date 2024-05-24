/**
 * @module
 * This module contains functions to determine if a number is odd or even.
 *
 * @example
 * ```js
 * import { isEven } from '@ebreness/is-even';
 *
 * isEven(2); // true
 * isEven(5); // false
 * isEven("Hello"); // exception is thrown
 * isNotEven(2); // false
 * isOdd(3); // true
 * isNotOdd(27); // false
 * ````
 */

/**
 * Returns true if the given number is even, false otherwise.
 * @param n The number to check
 * @returns true if `n` is even, false otherwise.
 */
export function isEven(n: number): boolean {
  if (!Number.isInteger(n)) {
    throw new Error("The given number is not an integer.");
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error("The given number exceeds maximum safe integer");
  }

  return n % 2 === 0;
}

/**
 * Returns true if the given number is odd, false otherwise.
 * @param n The number to check
 * @returns true if `n` is odd, false otherwise.
 */
export function isOdd(n: number): boolean {
  return !isEven(n);
}

/**
 * Returns true if the given number is odd (not even), false otherwise.
 * @param n The number to check
 * @returns true if `n` is odd, false otherwise.
 */
export function isNotEven(n: number): boolean {
  return !isEven(n);
}

/**
 * Returns true if the given number is even (not odd), false otherwise.
 * @param n The number to check
 * @returns true if `n` is even, false otherwise.
 */
export function isNotOdd(n: number): boolean {
  return isEven(n);
}
