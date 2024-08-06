import { Component, h, Prop } from "@stencil/core";
import { GeneralSizes, StateEnum } from "./../../models/reusableModels";

@Component({
    tag: 'toggle-button',
    styleUrl: 'toggle.css'
})

export class ToggleButton {
    @Prop() size: GeneralSizes;
    @Prop() state: StateEnum; 

    render() {
        return [
            <input type="checkbox" id="customCheckbox"/>,
            <label class={`${this.size} ${this.state}`} htmlFor="customCheckbox"></label>
        ]
    }
}