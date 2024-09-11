# gb-input-dropdown-menu-item



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                                | Default     |
| ---------------- | ----------------- | ----------- | ------------------------------------------------------------------- | ----------- |
| `disabled`       | `disabled`        |             | `boolean`                                                           | `false`     |
| `selected`       | `selected`        |             | `boolean`                                                           | `false`     |
| `supportingText` | `supporting-text` |             | `boolean`                                                           | `false`     |
| `type`           | `type`            |             | `"avatar_leading" \| "checkbox" \| "dot_leading" \| "icon_leading"` | `undefined` |
| `value`          | `value`           |             | `string`                                                            | `undefined` |


## Dependencies

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
  style gb-input-dropdown-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
