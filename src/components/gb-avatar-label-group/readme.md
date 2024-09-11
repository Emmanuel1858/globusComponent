# avatar-label-group



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                              | Default                        |
| ------------- | ------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `placeholder` | `placeholder` |             | `boolean`                                                                                                         | `false`                        |
| `size`        | `size`        |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs"` | `undefined`                    |
| `state`       | `state`       |             | `OnlineIndicatorStates.Offline \| OnlineIndicatorStates.Online`                                                   | `OnlineIndicatorStates.Online` |
| `statusIcon`  | `status-icon` |             | `string`                                                                                                          | `''`                           |
| `text`        | `text`        |             | `boolean`                                                                                                         | `false`                        |
| `weight`      | `weight`      |             | `BorderWeights.Heavy \| BorderWeights.Light \| BorderWeights.Regular`                                             | `BorderWeights.Light`          |


## Dependencies

### Used by

 - [gb-avatar-dropdown](../gb-avatar-dropdown)

### Depends on

- [gb-avatar](../gb-avatar)

### Graph
```mermaid
graph TD;
  gb-avatar-label-group --> gb-avatar
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-avatar-dropdown --> gb-avatar-label-group
  style gb-avatar-label-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
