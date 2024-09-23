import { Component, h, Prop } from "@stencil/core";
import { GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-toggle-base',
    styleUrl: 'gb-toggle-base.css',
    shadow: true
})

export class GbToggleBase {
    @Prop() size: GeneralSizes;
    @Prop() state: StateEnum;

    render() {
        return [
            <input type="checkbox" id="customCheckbox"/>,
            <label class={`${this.size} ${this.state}`} htmlFor="customCheckbox"></label>
        ]
    }
}