export class Position {
  constructor(public readonly line: number, public readonly column: number) {}
}

export class Screen {
  readonly maxColumn: number;
  readonly maxLine: number;

  constructor(private matrix: number[][]) {
    this.maxLine = matrix.length;
    this.maxColumn = matrix[0].length;
  }

  inside: (pixel: Position) => boolean = (pixel) =>
    pixel.column >= 0 && pixel.line >= 0 && pixel.column < this.maxColumn && pixel.line < this.maxLine;

  getColor: (pixel: Position) => number = (pixel) => (this.inside(pixel) ? this.matrix[pixel.line][pixel.column] : -1);

  setColor: (pixel: Position, color: number) => boolean = (pixel, color) => {
    if (this.inside(pixel)) {
      this.matrix[pixel.line][pixel.column] = color;
      return true;
    } else return false;
  };

  neighbors: (pixel: Position) => Position[] = (pixel) => {
    const neighbor1 = new Position(pixel.line - 1, pixel.column);
    const neighbor2 = new Position(pixel.line + 1, pixel.column);
    const neighbor3 = new Position(pixel.line, pixel.column - 1);
    const neighbor4 = new Position(pixel.line, pixel.column + 1);

    const result: Position[] = this.inside(neighbor1) ? [neighbor1] : [];
    if (this.inside(neighbor2)) result.push(neighbor2);
    if (this.inside(neighbor3)) result.push(neighbor3);
    if (this.inside(neighbor4)) result.push(neighbor4);
    return [...result];
  };
}
