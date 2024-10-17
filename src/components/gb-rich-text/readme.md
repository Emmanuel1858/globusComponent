# gb-rich-text



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                      | Default     |
| ----------------- | ------------------ | ----------- | ------------------------- | ----------- |
| `destructive`     | `destructive`      |             | `boolean`                 | `undefined` |
| `hintText`        | `hint-text`        |             | `string`                  | `undefined` |
| `label`           | `label`            |             | `string`                  | `undefined` |
| `placeholder`     | `placeholder`      |             | `string`                  | `undefined` |
| `showHintText`    | `show-hint-text`   |             | `boolean`                 | `undefined` |
| `showLabel`       | `show-label`       |             | `boolean`                 | `undefined` |
| `showPlaceholder` | `show-placeholder` |             | `boolean`                 | `undefined` |
| `state`           | `state`            |             | `"default" \| "disabled"` | `undefined` |


## Dependencies

### Depends on

- [gb-wysiwyg-toolbar](../gb-WYSIWYG-toolbar)

### Graph
```mermaid
graph TD;
  gb-rich-text --> gb-wysiwyg-toolbar
  gb-wysiwyg-toolbar --> gb-input-dropdown
  gb-wysiwyg-toolbar --> gb-wysiwyg-editor-icon
  gb-input-dropdown --> gb-avatar
  gb-input-dropdown --> gb-tag
  gb-input-dropdown --> gb-input-dropdown-menu-item
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  gb-tag --> gb-tag-checkbox
  gb-tag --> gb-avatar
  gb-tag --> gb-tag-count
  gb-tag --> gb-tag-close
  gb-input-dropdown-menu-item --> gb-avatar
  gb-input-dropdown-menu-item --> gb-checkbox
  gb-checkbox --> gb-checkbox-base
  style gb-rich-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
