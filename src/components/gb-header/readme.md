# gb-header



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                                                      | Default     |
| --------------- | ---------------- | ----------- | ------------------------------------------------------------------------- | ----------- |
| `color`         | `color`          |             | `"blue" \| "cyan" \| "gray" \| "green" \| "pink" \| "purple" \| "yellow"` | `undefined` |
| `placeholder`   | `placeholder`    |             | `boolean`                                                                 | `false`     |
| `showIndicator` | `show-indicator` |             | `boolean`                                                                 | `false`     |
| `state`         | `state`          |             | `StateEnum.Default \| StateEnum.Disabled`                                 | `undefined` |
| `text`          | `text`           |             | `boolean`                                                                 | `false`     |


## Events

| Event               | Description | Type                  |
| ------------------- | ----------- | --------------------- |
| `navBarItemClicked` |             | `CustomEvent<number>` |


## Methods

### `onNavBarItemClicked(index: number) => Promise<void>`



#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `index` | `number` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [gb-header-icon](../gb-header-icon)
- [gb-avatar](../gb-avatar)

### Graph
```mermaid
graph TD;
  gb-header --> gb-header-icon
  gb-header --> gb-avatar
  gb-avatar --> gb-avatar-contrast-inner-border
  gb-avatar --> gb-status-indicator
  style gb-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
