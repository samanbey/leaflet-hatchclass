# leaflet-hatchclass
creates hatched fill classes for svg polygons to be used with Leaflet

## How to use
see in `example.html`
- include `leaflet-hatchclass.js`
- create hatch filled CSS classes using the `L.hatchClass()` function
- pass the resulting class names in the styling function to `className` property of features

## parameters
`L.hatchClass(<Array>colors, <Number>strokeWidth, <Number>angle)`

- `colors`: array of CSS colors or array of { color, width } objects. Default: `['black', 'white']`
- `strokeWidth`: in pixels; defaults to 6
- `angle`: in degrees; defaults to 45

## live demo
https://samanbey.github.io/leaflet-hatchclass/example.html
