export function part1(input: string): number {
  const elfs = input.split("\n\n").map((i) =>
    i.split("\n").map((i) => parseInt(i))
  );

  const sumElfs = elfs.map((elf) => elf.reduce((a, x) => a + x), 0);
  return Math.max(...sumElfs);
}

export const part2 = (input: string): number => {
  const elfs = input.split("\n\n").map((i) =>
    i.split("\n").map((i) => parseInt(i))
  );

  const sumElfs = elfs.map((elf) => elf.reduce((a, x) => a + x), 0);

  const sortedSumElfs = sumElfs.sort((a, b) => b - a);

  return sortedSumElfs[0] + sortedSumElfs[1] + sortedSumElfs[2];
};
