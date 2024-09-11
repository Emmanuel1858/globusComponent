# gb-avatar-dropdown



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type                    | Default     |
| --------------- | ----------------- | ----------- | ----------------------- | ----------- |
| `listGroup1`    | `list-group-1`    |             | `boolean`               | `undefined` |
| `listGroup2`    | `list-group-2`    |             | `boolean`               | `undefined` |
| `listGroup3`    | `list-group-3`    |             | `boolean`               | `undefined` |
| `showDarkTheme` | `show-dark-theme` |             | `boolean`               | `undefined` |
| `showLogOut`    | `show-log-out`    |             | `boolean`               | `undefined` |
| `showProfile`   | `show-profile`    |             | `boolean`               | `undefined` |
| `type`          | `type`            |             | `"complex" \| "simple"` | `undefined` |


## Dependencies

### Depends on

- [gb-avatar-label-group](../gb-avatar-label-group)
- [gb-dropdown-items-with-shortcut](../gb-dropdown-items-with-shortcut)

### Graph
```mermaid
graph TD;
  gb-avatar-dropdown --> gb-avatar-label-group
  gb-avatar-dropdown --> gb-dropdown-items-with-shortcut
  gb-avatar-label-group --> gb-avatar
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-dropdown-items-with-shortcut --> gb-checkbox
  gb-checkbox --> gb-checkbox-base
  style gb-avatar-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*