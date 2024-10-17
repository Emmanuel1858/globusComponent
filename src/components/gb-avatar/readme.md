# avatar-pic



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                                       | Default                        |
| ------------- | ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `color`       | `color`       |             | `"blue" \| "cyan" \| "gray" \| "green" \| "pink" \| "purple" \| "yellow"`                                                  | `undefined`                    |
| `icon`        | `icon`        |             | `"user"`                                                                                                                   | `'user'`                       |
| `placeholder` | `placeholder` |             | `boolean`                                                                                                                  | `false`                        |
| `size`        | `size`        |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs" \| "xxs"` | `undefined`                    |
| `state`       | `state`       |             | `OnlineIndicatorStates.Offline \| OnlineIndicatorStates.Online`                                                            | `OnlineIndicatorStates.Online` |
| `statusIcon`  | `status-icon` |             | `string`                                                                                                                   | `''`                           |
| `text`        | `text`        |             | `boolean`                                                                                                                  | `false`                        |
| `weight`      | `weight`      |             | `BorderWeights.Heavy \| BorderWeights.Light \| BorderWeights.Regular \| BorderWeights.VeryLight`                           | `BorderWeights.Light`          |


## Dependencies

### Used by

 - [gb-avatar-group](../gb-avatar-group)
 - [gb-avatar-label-group](../gb-avatar-label-group)
 - [gb-avatar-profile-photo](../gb-avatar-profile-photo)
 - [gb-badge](../gb-badges)
 - [gb-checkbox-group-item](../gb-checkbox-group-item)
 - [gb-header](../gb-header)
 - [gb-input-dropdown](../gb-input-dropdown)
 - [gb-input-dropdown-menu-item](../gb-input-dropdown-menu-item)
 - [gb-tag](../gb-tag)

### Depends on

- [gb-avatar-contrast-inner-border](../gb-avatar-contrast-inner-border)
- [gb-status-indicator](../gb-status-indicator)

### Graph
```mermaid
graph TD;
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-avatar-group --> gb-avatar
  gb-avatar-label-group --> gb-avatar
  gb-avatar-profile-photo --> gb-avatar
  gb-badge --> gb-avatar
  gb-checkbox-group-item --> gb-avatar
  gb-header --> gb-avatar
  gb-input-dropdown --> gb-avatar
  gb-input-dropdown-menu-item --> gb-avatar
  gb-tag --> gb-avatar
  style gb-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
