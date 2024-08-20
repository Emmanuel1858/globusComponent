import { Component, h, Prop } from "@stencil/core";
import { BorderWeights, GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-contrast-inner-border',
    styleUrl: 'gb-avatar-contrast-inner-border.css',
    shadow: true
})

export class GbAvatarContrastInnerBorder {
    @Prop() weight: BorderWeights;
    @Prop() borderSize: GeneralSizes;

    render() {
        return (
            <div class={`inner_border ${this.borderSize} ${this.weight}`}>
                <slot></slot>
            </div>
        )
    }
}