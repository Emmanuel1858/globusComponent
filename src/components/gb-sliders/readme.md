# gb-slider



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                  | Default  |
| ----------- | ------------ | ----------- | --------------------- | -------- |
| `max`       | `max`        |             | `number`              | `100`    |
| `min`       | `min`        |             | `number`              | `0`      |
| `thumbType` | `thumb-type` |             | `"text" \| "tooltip"` | `'text'` |


## Events

| Event         | Description | Type                                            |
| ------------- | ----------- | ----------------------------------------------- |
| `valueChange` |             | `CustomEvent<{ left: number; right: number; }>` |


## Dependencies

### Depends on

- [gb-slider-control-handle](../gb-slider-control-handle)

### Graph
```mermaid
graph TD;
  gb-slider --> gb-slider-control-handle
  gb-slider-control-handle --> gb-tooltip
  style gb-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
