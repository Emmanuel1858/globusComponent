import { Component, Prop, h } from "@stencil/core";
import { BreakPoints, GeneralSizes, TabTypes } from "../../models/reusableModels";

@Component({
    tag: 'gb-horizontal-tabs',
    styleUrl: 'gb-horizontal-tabs.css',
    shadow: true
})

export class GbHorizontalTabs {
    @Prop() type:TabTypes;
    @Prop() size: GeneralSizes;
    @Prop() fullWidth: boolean = false;
    @Prop() breakpoint: BreakPoints;

    render() {
        return (
            <div class={`horizontal_tab_div ${this.breakpoint}`}>
                <gb-tab-button-base 
                size={this.size} 
                full-width={this.fullWidth} 
                type={this.type}></gb-tab-button-base>
            </div>
        )
    }
}