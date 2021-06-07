import { Screen, Position } from './Screen';

export function flood(matrix: number[][], x: number, y: number, newColor: number): number[][] {
  const paint = (pos: Position, oldColor: number, newColor: number) => {
    if (myScreen.getColor(pos) === oldColor) {
      myScreen.setColor(pos, newColor);
      adjacents(pos, oldColor, newColor);
    }
  };

  const adjacents = (pos: Position, oldColor: number, newColor: number) => {
    if (checked.has(JSON.stringify(pos))) return;
    checked.add(JSON.stringify(pos));

    myScreen.neighbors(pos).forEach((pos) => {
      paint(pos, oldColor, newColor);
    });
  };

  const myScreen = new Screen(matrix);
  const initial = new Position(x, y);

  const oldColor = myScreen.getColor(initial);

  if (oldColor === newColor) return matrix;

  const checked = new Set();

  paint(initial, oldColor, newColor);
  return matrix;
}
