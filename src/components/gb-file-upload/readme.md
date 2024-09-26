# gb-file-upload



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                                                                                                       | Default             |
| ------------- | -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `buttonState` | `button-state` |             | `StateEnum.Default \| StateEnum.Disabled`                                                                                  | `StateEnum.Default` |
| `destructive` | `destructive`  |             | `boolean`                                                                                                                  | `false`             |
| `heightSize`  | `height-size`  |             | `"lg" \| "md" \| "profile_lg" \| "profile_md" \| "profile_sm" \| "sm" \| "xl" \| "xl2" \| "xl3" \| "xl4" \| "xs" \| "xxs"` | `undefined`         |
| `icon`        | `icon`         |             | `"icon" \| "outline"`                                                                                                      | `undefined`         |
| `showLabel`   | `show-label`   |             | `boolean`                                                                                                                  | `false`             |
| `state`       | `state`        |             | `"complete" \| "default" \| "disabled" \| "error" \| "hover" \| "in_progress"`                                             | `undefined`         |
| `type`        | `type`         |             | `"multiple" \| "single"`                                                                                                   | `undefined`         |


## Dependencies

### Depends on

- [gb-file-upload-item-base](../gb-file-upload-item-base)

### Graph
```mermaid
graph TD;
  gb-file-upload --> gb-file-upload-item-base
  gb-file-upload-item-base --> gb-progress-bar
  gb-file-upload-item-base --> gb-button-close
  gb-file-upload-item-base --> gb-button
  gb-progress-bar --> gb-tooltip
  style gb-file-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
