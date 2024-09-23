# gb-tag



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                             | Default     |
| ------------- | -------------- | ----------- | -------------------------------- | ----------- |
| `checkbox`    | `checkbox`     |             | `boolean`                        | `undefined` |
| `closeButton` | `close-button` |             | `boolean`                        | `undefined` |
| `count`       | `count`        |             | `boolean`                        | `undefined` |
| `icon`        | `icon`         |             | `"avatar" \| "country" \| "dot"` | `undefined` |
| `size`        | `size`         |             | `"lg" \| "md" \| "sm"`           | `undefined` |


## Dependencies

### Depends on

- [gb-tag-checkbox](../gb-tag-checkbox)
- [gb-avatar](../gb-avatar)
- [gb-tag-close](../gb-tag-close)
- [gb-tag-count](../gb-tagcount)

### Graph
```mermaid
graph TD;
  gb-tag --> gb-tag-checkbox
  gb-tag --> gb-avatar
  gb-tag --> gb-tag-close
  gb-tag --> gb-tag-count
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  style gb-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
