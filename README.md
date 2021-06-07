# Flood Fill

Given a matrix representing a screen, where the value of each element represents the color at the screen's pixel with the coordinates of that element, substitute the color of the specified element and all of its neighbors, and their neighbors successively which have the original color.

## Development Commands

### Setup

```bash
 git clone https://github.com/gpazevedo/floodfill folder # clones the repository
 yarn install                                            # installs the dependencies
```

### Workflow

We can develop the application fully testing it, testing a specific component and checking the test coverage. To run the application we don't need to build it before.

Testing:

```bash
 yarn test            # Watch the source and execute all tests
 yarn test component  # Watch the component source and execute its tests
 yarn test:coverage   # Execute all tests and calculates the test coverage
 ```

Running:

```bash
 yarn build           # Compiles the source code to JavaScript
 yarn cli             # Run the CLI
```
