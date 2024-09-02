import { Component,  Fragment, Prop } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-progress-circle',
    styleUrl: 'gb-progress-circle.css',
    shadow: true
})

export class GbProgressCircle {
    @Prop() size: GeneralSizes;
    @Prop() shape: string = '';
    @Prop() label: boolean = false; 

    render() {
        return (
          <>
          </>
        );
    }
}