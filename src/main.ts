export function flood(matrix: number[][], x: number, y: number, newColor: number) {
  const oldColor = matrix[x][y]
  if (oldColor === newColor) return matrix

  const maxX = matrix.length
  const maxY = matrix[0].length
  const checked = new Set()

  const checkAdj = (x: number, y: number, color: number) =>
    x >= 0 && y >= 0 && x < maxX && y < maxY && matrix[x][y] === color

  const paint = (x: number, y: number, oldColor: number, newColor: number) => {
    if (checkAdj(x, y, oldColor)) {
      matrix[x][y] = newColor
      adjacents(x, y, oldColor, newColor)
    }
  }

  const adjacents = (x: number, y: number, oldColor: number, newColor: number) => {
    if (checked.has(JSON.stringify({ x, y }))) return
    checked.add(JSON.stringify({ x, y }))

    paint(x - 1, y, oldColor, newColor)

    paint(x + 1, y, oldColor, newColor)

    paint(x, y - 1, oldColor, newColor)

    paint(x, y + 1, oldColor, newColor)
  }

  matrix[x][y] = newColor
  adjacents(x, y, oldColor, newColor)

  return matrix
}
