import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { part1, part2 } from "./solution.ts";

const input = Deno.readTextFileSync(
  new URL("./input_test.txt", import.meta.url),
);

Deno.test("testing demo (1)", () => {
  assertEquals(part1(input), 15);
});

Deno.test("testing demo (2)", () => {
  assertEquals(part2(input), 12);
});
