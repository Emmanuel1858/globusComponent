# gb-checkbox-group-item



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type                                                                                                                       | Default     |
| ------------ | ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `breakpoint` | `breakpoint` |             | `"desktop" \| "mobile"`                                                                                                    | `undefined` |
| `selected`   | `selected`   |             | `boolean`                                                                                                                  | `false`     |
| `showCost`   | `show-cost`  |             | `boolean`                                                                                                                  | `false`     |
| `size`       | `size`       |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs" \| "xxs"` | `undefined` |
| `state`      | `state`      |             | `StateEnum.Default \| StateEnum.Disabled`                                                                                  | `undefined` |
| `type`       | `type`       |             | `"avatar" \| "checkbox" \| "icon_simple" \| "payment_icon" \| "radio_button"`                                              | `undefined` |


## Dependencies

### Depends on

- [gb-avatar](../gb-avatar)
- [gb-button](../gb-button)
- [gb-checkbox-base](../gb-checkbox-base)

### Graph
```mermaid
graph TD;
  gb-checkbox-group-item --> gb-avatar
  gb-checkbox-group-item --> gb-button
  gb-checkbox-group-item --> gb-checkbox-base
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  style gb-checkbox-group-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*