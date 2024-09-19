import { Component, h, Prop } from "@stencil/core";
import { BorderWeights, GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-contrast-inner-border',
    styleUrl: 'gb-avatar-contrast-inner-border.css',
    shadow: true
})

export class GbAvatarContrastInnerBorder {
    @Prop() weight: BorderWeights;
    @Prop() size: GeneralSizes;

    setWeight() {
        switch (this.size) {
          case 'xl2':
            return BorderWeights.Regular;
          case 'xl':
            return BorderWeights.Regular;
          case 'lg':
            return BorderWeights.Regular;
          case 'md':
            return BorderWeights.Regular;
          case 'sm':
            return BorderWeights.Light;
          case 'xs':
            return BorderWeights.Light;
          case 'xxs':
            return BorderWeights.VeryLight;
          case 'profile_lg':
            return BorderWeights.Heavy;
          case 'profile_md':
            return BorderWeights.Heavy;
          case 'profile_sm':
            return BorderWeights.Regular;
        }
    }

    render() {
        return (
            <div class={`inner_border ${this.size} ${this.weight}`}>
                <slot></slot>
            </div>
        )
    }
}