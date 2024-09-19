# gb-avatar-group



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type                                                                                                              | Default             |
| --------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------- |
| `addMoreButton` | `add-more-button` |             | `boolean`                                                                                                         | `undefined`         |
| `moreUsers`     | `more-users`      |             | `boolean`                                                                                                         | `undefined`         |
| `size`          | `size`            |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs"` | `undefined`         |
| `state`         | `state`           |             | `StateEnum.Default \| StateEnum.Disabled`                                                                         | `StateEnum.Default` |
| `text`          | `text`            |             | `boolean`                                                                                                         | `true`              |


## Dependencies

### Depends on

- [gb-avatar](../gb-avatar)
- [gb-avatar-add-button](../gb-avatar-add-button)

### Graph
```mermaid
graph TD;
  gb-avatar-group --> gb-avatar
  gb-avatar-group --> gb-avatar-add-button
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-avatar-add-button --> gb-tooltip
  style gb-avatar-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
