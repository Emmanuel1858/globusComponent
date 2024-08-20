# avatar-label-group



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                       | Default     |
| ------------- | ------------- | ----------- | -------------------------------------------------------------------------- | ----------- |
| `placeholder` | `placeholder` |             | `boolean`                                                                  | `false`     |
| `size`        | `size`        |             | `"fourxl" \| "lg" \| "md" \| "sm" \| "threexl" \| "twoxl" \| "xl" \| "xs"` | `undefined` |
| `state`       | `state`       |             | `"offline" \| "online"`                                                    | `'online'`  |
| `statusIcon`  | `status-icon` |             | `string`                                                                   | `''`        |
| `text`        | `text`        |             | `boolean`                                                                  | `false`     |
| `weight`      | `weight`      |             | `"heavy" \| "light" \| "regular"`                                          | `'regular'` |


## Dependencies

### Depends on

- [avatar-pic](../avatar-pic)

### Graph
```mermaid
graph TD;
  avatar-label-group --> avatar-pic
  avatar-pic --> avatar-contrast-inner-border
  avatar-pic --> status-indicator
  style avatar-label-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
