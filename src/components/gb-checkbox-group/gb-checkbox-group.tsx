import { Component, h, Prop } from "@stencil/core";
import { BreakPoints, GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-checkbox-group',
    styleUrl: 'gb-checkbox-group.css',
    shadow: true
})

export class GbCheckboxGroup {
    @Prop() size: GeneralSizes;
    @Prop() breakpoint: BreakPoints;
    @Prop() icon: string = '';
    @Prop() selected: boolean = false;
    @Prop() type: 'icon_simple' | 'avatar' | 'payment_icon' | 'radio_button' | 'checkbox';

    render() {
        return (
            <div class={`checkbox_group ${this.breakpoint}`}>
                <div class="text"></div>
            </div>
        )
    }
}