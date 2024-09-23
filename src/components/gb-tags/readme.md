# gb-tag



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                                  | Default       |
| ---------- | ----------- | ----------- | ------------------------------------- | ------------- |
| `action`   | `action`    |             | `"X_close" \| "count" \| "text_only"` | `'text_only'` |
| `checkbox` | `checkbox`  |             | `boolean`                             | `undefined`   |
| `flagSwap` | `flag-swap` |             | `string`                              | `undefined`   |
| `icon`     | `icon`      |             | `"avatar" \| "country" \| "dot"`      | `undefined`   |
| `size`     | `size`      |             | `"lg" \| "md" \| "sm"`                | `undefined`   |


## Dependencies

### Depends on

- [gb-tag-checkbox](../gb-tag-checkbox)
- [gb-avatar](../gb-avatar)
- [gb-tag-count](../gb-tagcount)
- [gb-tag-close](../gb-tag-close)

### Graph
```mermaid
graph TD;
  gb-tag --> gb-tag-checkbox
  gb-tag --> gb-avatar
  gb-tag --> gb-tag-count
  gb-tag --> gb-tag-close
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  style gb-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
