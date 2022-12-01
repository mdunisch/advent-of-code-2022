import { part1, part2 } from "./day_01.ts";

const input1 = Deno.readTextFileSync(
  new URL("./input1.txt", import.meta.url),
);

const input2 = Deno.readTextFileSync(
  new URL("./input2.txt", import.meta.url),
);

console.log(part1(input1));

console.log(part2(input2));
