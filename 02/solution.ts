type play = "A" | "B" | "C";
type roundInput = [play, play];

const mapShapeToPoints = {
  A: 1,
  B: 2,
  C: 3,
};

function getPoints(opponent: string, you: string): number {
  if (opponent === you) {
    return 3;
  }

  const opponentIndex = opponent.charCodeAt(0) - 64;
  const youIndex = you.charCodeAt(0) - 64;

  const resultTree = {
    12: 0,
    13: 6,
    21: 6,
    23: 0,
    31: 0,
    32: 6,
  };

  return resultTree[
    parseInt(`${youIndex}${opponentIndex}`) as keyof typeof resultTree
  ];
}

function getPlayFromOutcome(opponent: string, outcome: string): string {
  if (outcome === "Y") {
    return opponent;
  }

  // lose
  if (outcome === "X") {
    if (opponent === "A") {
      return "C";
    }
    if (opponent === "B") {
      return "A";
    }
    if (opponent === "C") {
      return "B";
    }
  }

  // win
  if (outcome === "Z") {
    if (opponent === "A") {
      return "B";
    }
    if (opponent === "B") {
      return "C";
    }
    if (opponent === "C") {
      return "A";
    }
  }

  return "";
}

export function part1(input: string): number {
  const rounds = input.split("\n").map((i) => i.split(" ")).map(([a, b]) => {
    return [a, String.fromCharCode(b.charCodeAt(0) - 23)];
  }) as roundInput[];

  const sumPerRound = rounds.map(([opponentPick, yourPick]) =>
    mapShapeToPoints[yourPick] + getPoints(opponentPick, yourPick)
  );

  return sumPerRound.reduce((p, i) => p + i, 0);
}

export const part2 = (input: string): number => {
  const rounds = input.split("\n").map((i) => i.split(" ")).map(([a, b]) => {
    return [
      a,
      getPlayFromOutcome(a, b),
    ];
  }) as roundInput[];

  const sumPerRound = rounds.map(([opponentPick, yourPick]) =>
    mapShapeToPoints[yourPick] + getPoints(opponentPick, yourPick)
  );

  return sumPerRound.reduce((p, i) => p + i, 0);
};
