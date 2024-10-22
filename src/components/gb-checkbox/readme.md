# gb-checkbox



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                                                                                       | Default     |
| ---------------- | ----------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `checked`        | `checked`         |             | `boolean`                                                                                                                  | `false`     |
| `indeterminate`  | `indeterminate`   |             | `boolean`                                                                                                                  | `false`     |
| `size`           | `size`            |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs" \| "xxs"` | `undefined` |
| `state`          | `state`           |             | `StateEnum.Default \| StateEnum.Disabled`                                                                                  | `undefined` |
| `supportingText` | `supporting-text` |             | `boolean`                                                                                                                  | `false`     |
| `text`           | `text`            |             | `boolean`                                                                                                                  | `false`     |
| `type`           | `type`            |             | `"check_circle" \| "checkbox" \| "radio"`                                                                                  | `undefined` |


## Dependencies

### Used by

 - [gb-checkbox-group-item](../gb-checkbox-group-item)
 - [gb-dropdown-items-with-shortcut](../gb-dropdown-items-with-shortcut)
 - [gb-input-dropdown-menu-item](../gb-input-dropdown-menu-item)

### Depends on

- [gb-checkbox-base](../gb-checkbox-base)

### Graph
```mermaid
graph TD;
  gb-checkbox --> gb-checkbox-base
  gb-checkbox-group-item --> gb-checkbox
  gb-dropdown-items-with-shortcut --> gb-checkbox
  gb-input-dropdown-menu-item --> gb-checkbox
  style gb-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
