import { flood } from '@/main';

describe('Flood Fill', () => {
  const screen: number[][] = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
  ];

  const expected = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 3, 3, 3, 3, 0, 1, 0],
    [1, 1, 1, 3, 3, 0, 1, 0],
    [1, 1, 1, 3, 3, 3, 3, 0],
    [1, 1, 1, 1, 1, 3, 1, 1],
    [1, 1, 1, 1, 1, 3, 3, 1],
  ];

  it('should flood fill', () => {
    const x = 4;
    const y = 4;
    const newColor = 3;
    const changed = flood(screen, x, y, newColor);
    expect(expected).toEqual(changed);
  });
});
