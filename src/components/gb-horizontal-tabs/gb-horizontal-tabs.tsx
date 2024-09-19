import { Component, Prop, State, h } from "@stencil/core";
import { BreakPoints, GeneralSizes, TabTypes } from "../../models/reusableModels";

@Component({
  tag: 'gb-horizontal-tabs',
  styleUrl: 'gb-horizontal-tabs.css',
  shadow: true
})
export class GbHorizontalTabs {
  @Prop() type: TabTypes;
  @Prop() size: GeneralSizes;
  @Prop() fullWidth: boolean = false;
  @Prop() breakpoint: BreakPoints;
  @Prop() thirdTab: boolean = false;
  @Prop() fourthTab: boolean = false;
  @Prop() fifthTab: boolean = false;
  @Prop() sixthTab: boolean = false;
  @Prop() seventhTab: boolean = false;
  @State() firstClicked: boolean = false;
  @State() secondClicked: boolean = false;

  componentWillLoad() {
    this.firstClicked = true;
  }

  firstTabClicked() {
    this.firstClicked = true;
    this.secondClicked = false;
  }

  secondTabClicked() {
    this.firstClicked = false;
    this.secondClicked = true;
  }

  render() {
    return (
      <div class={`horizontal_tab_div ${this.type} ${this.breakpoint} ${this.fullWidth ? 'full_width' : ''}`}>
        <gb-tab-button-base
          size={this.size}
          full-width={this.fullWidth}
          type={this.type}
          onClick={() => (this.firstTabClicked(), console.log(this.firstClicked))}
          current={this.firstClicked}
        >
          <slot name="first_tab" slot="name"></slot>
        </gb-tab-button-base>
        <gb-tab-button-base size={this.size} full-width={this.fullWidth} type={this.type} onClick={() => this.secondTabClicked()} current={this.secondClicked}>
          <slot name="second_tab" slot="name"></slot>
        </gb-tab-button-base>
        {this.thirdTab && (
          <gb-tab-button-base size={this.size} full-width={this.fullWidth} type={this.type}>
            <slot name="third_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.fourthTab && (
          <gb-tab-button-base size={this.size} full-width={this.fullWidth} type={this.type}>
            <slot name="fourth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
      </div>
    );
  }
}