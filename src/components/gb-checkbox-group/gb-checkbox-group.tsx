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
          <div class={`checkbox_group`}>
            <gb-checkbox-group-item size={this.size} type={this.type} breakpoint={this.breakpoint}></gb-checkbox-group-item>
            <gb-checkbox-group-item size={this.size} type={this.type} breakpoint={this.breakpoint}></gb-checkbox-group-item>
            <gb-checkbox-group-item size={this.size} type={this.type} breakpoint={this.breakpoint}></gb-checkbox-group-item>
            <gb-checkbox-group-item size={this.size} type={this.type} breakpoint={this.breakpoint}></gb-checkbox-group-item>
            <gb-checkbox-group-item size={this.size} type={this.type} breakpoint={this.breakpoint}></gb-checkbox-group-item>
          </div>
        );
    }
}