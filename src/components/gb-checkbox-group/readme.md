# gb-checkbox-group



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type                                                                                                                       | Default     |
| ------------ | ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `breakpoint` | `breakpoint` |             | `"desktop" \| "mobile"`                                                                                                    | `undefined` |
| `icon`       | `icon`       |             | `string`                                                                                                                   | `''`        |
| `selected`   | `selected`   |             | `boolean`                                                                                                                  | `false`     |
| `size`       | `size`       |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs" \| "xxs"` | `undefined` |
| `type`       | `type`       |             | `"avatar" \| "checkbox" \| "icon_simple" \| "payment_icon" \| "radio_button"`                                              | `undefined` |


## Dependencies

### Depends on

- [gb-checkbox-group-item](../gb-checkbox-group-item)

### Graph
```mermaid
graph TD;
  gb-checkbox-group --> gb-checkbox-group-item
  gb-checkbox-group-item --> gb-avatar
  gb-checkbox-group-item --> gb-checkbox
  gb-checkbox-group-item --> gb-button
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-checkbox --> gb-checkbox-base
  style gb-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
