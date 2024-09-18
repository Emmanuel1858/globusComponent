import { Component, h, Prop } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-megainput-field',
    styleUrl: 'gb-megainput-field.css',
    shadow: true
})

export class GbMegaInputField {
    @Prop() size: GeneralSizes;
 
    render() {
        return (
            <input class={this.size} type="number" placeholder="0"></input>
        )
    }
}