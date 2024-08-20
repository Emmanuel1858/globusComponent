# avatar-pic



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

### Used by

 - [avatar-label-group](../avatar-label-group)
 - [avatar-profile-photo](../avatar-profile-photo)

### Depends on

- [avatar-contrast-inner-border](../avatar-contrast-inner-border)
- [status-indicator](../status-indicator)

### Graph
```mermaid
graph TD;
  avatar-pic --> avatar-contrast-inner-border
  avatar-pic --> status-indicator
  avatar-label-group --> avatar-pic
  avatar-profile-photo --> avatar-pic
  style avatar-pic fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
