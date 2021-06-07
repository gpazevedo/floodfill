import { Position, Screen } from '@/Screen';

describe('Screen', () => {
  // describe('Screen construction', () => {
  //   it('should recognize equal screens', () => {
  //     expect(JSON.stringify(new Screen([[1], [5]]))).toEqual(JSON.stringify(new Screen([[1], [5]])));
  //   });
  //   it('should recognize different screens', () => {
  //     expect(JSON.stringify(new Screen([[1], [5]]))).not.toEqual(JSON.stringify(new Screen([[1], [7]])));
  //   });
  // });

  // describe('inside Screen', () => {
  //   const matrix = [
  //     [1, 3],
  //     [3, 3],
  //     [5, 2],
  //   ];
  //   const screen = new Screen(matrix);

  //   it('should identify inside points 2,1', () => {
  //     expect(screen.inside({ line: 2, column: 1 })).toBe(true);
  //   });

  //   it('should identify inside points 0,0', () => {
  //     expect(screen.inside({ line: 0, column: 0 })).toBe(true);
  //   });

  //   it('should identify OUTside points 3,1', () => {
  //     expect(screen.inside({ line: 3, column: 1 })).toBe(false);
  //   });

  //   it('should identify OUTside points -31', () => {
  //     expect(screen.inside({ line: -3, column: 1 })).toBe(false);
  //   });
  //   it('should identify OUTside points 32', () => {
  //     expect(screen.inside({ line: 3, column: 2 })).toBe(false);
  //   });
  // });

  // describe('getColor', () => {
  //   const matrix = [
  //     [1, 3],
  //     [3, 3],
  //     [5, 2],
  //   ];
  //   const screen = new Screen(matrix);

  //   it('should work on a correct position', () => {
  //     expect(screen.getColor({ line: 0, column: 1 })).toBe(3);
  //   });
  //   it('should work on a incorrect position', () => {
  //     expect(screen.getColor({ line: 0, column: -11 })).toBe(-1);
  //   });
  // });

  // describe('setColor', () => {
  //   const matrix = [
  //     [1, 3],
  //     [3, 3],
  //     [5, 2],
  //   ];
  //   const screen = new Screen(matrix);

  //   it('should work on a correct position', () => {
  //     expect(screen.setColor({ line: 0, column: 1 }, 5)).toBe(true);
  //     expect(screen.getColor({ line: 0, column: 1 })).toBe(5);
  //   });
  //   it('should work on a incorrect position', () => {
  //     expect(screen.setColor({ line: 0, column: -11 }, 5)).toBe(false);
  //   });
  // });

  describe('neighbors', () => {
    const matrix1 = [
      [1, 3],
      [3, 3],
      [5, 2],
    ];
    const screen1 = new Screen(matrix1);

    it('should work on small screens', () => {
      expect(screen1.neighbors({ line: 0, column: 0 })).toStrictEqual([new Position(1, 0), new Position(0, 1)]);
    });
    const matrix2 = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 1, 1],
      [1, 2, 2, 2, 2, 0, 1, 0],
      [1, 1, 1, 2, 2, 0, 1, 0],
      [1, 1, 1, 2, 2, 2, 2, 0],
      [1, 1, 1, 1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 1],
    ];

    const screen2 = new Screen(matrix2);

    it('should work on big screens 0,0', () => {
      expect(screen2.neighbors({ line: 0, column: 0 })).toStrictEqual([new Position(1, 0), new Position(0, 1)]);
    });

    it('should work on big screens 1,1', () => {
      expect(screen2.neighbors({ line: 1, column: 1 })).toStrictEqual([
        new Position(0, 1),
        new Position(2, 1),
        new Position(1, 0),
        new Position(1, 2),
      ]);
    });
  });
});
