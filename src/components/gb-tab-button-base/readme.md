# gb-tab-button-base



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                                                                                                                                                                                     | Default     |
| ----------- | ------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `badge`     | `badge`      |             | `boolean`                                                                                                                                                                                | `false`     |
| `current`   | `current`    |             | `boolean`                                                                                                                                                                                | `false`     |
| `fullWidth` | `full-width` |             | `boolean`                                                                                                                                                                                | `false`     |
| `size`      | `size`       |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs" \| "xxs"`                                                               | `undefined` |
| `tabName`   | `tab-name`   |             | `string`                                                                                                                                                                                 | `''`        |
| `type`      | `type`       |             | `"button_gray" \| "button_primary" \| "button_white" \| "button_white_border" \| "line" \| "rounded_button_white" \| "rounded_button_white_border" \| "underline" \| "underline_filled"` | `undefined` |


## Events

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `tabClicked` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [gb-horizontal-tabs](../gb-horizontal-tabs)

### Depends on

- [gb-badge](../gb-badges)

### Graph
```mermaid
graph TD;
  gb-tab-button-base --> gb-badge
  gb-badge --> gb-avatar
  gb-badge --> gb-badge-close
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-horizontal-tabs --> gb-tab-button-base
  style gb-tab-button-base fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
