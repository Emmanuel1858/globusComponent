# gb-input-dropdown-menu-item



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                                                                   | Default     |
| ---------------- | ----------------- | ----------- | ------------------------------------------------------------------------------------------------------ | ----------- |
| `selected`       | `selected`        |             | `boolean`                                                                                              | `false`     |
| `state`          | `state`           |             | `StateEnum.Default \| StateEnum.Disabled`                                                              | `undefined` |
| `supportingText` | `supporting-text` |             | `boolean`                                                                                              | `false`     |
| `type`           | `type`            |             | `"avatar_leading" \| "checkbox" \| "default" \| "dot_leading" \| "icon_leading" \| "search" \| "tags"` | `undefined` |


## Dependencies

### Used by

 - [gb-input-dropdown](../gb-input-dropdown)

### Depends on

- [gb-avatar](../gb-avatar)
- [gb-checkbox](../gb-checkbox)

### Graph
```mermaid
graph TD;
  gb-input-dropdown-menu-item --> gb-avatar
  gb-input-dropdown-menu-item --> gb-checkbox
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-checkbox --> gb-checkbox-base
  gb-input-dropdown --> gb-input-dropdown-menu-item
  style gb-input-dropdown-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
