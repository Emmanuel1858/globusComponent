import { Component, Prop, State, h } from "@stencil/core";
import { BreakPoints, GeneralSizes, TabTypes } from "../../models/reusableModels";

@Component({
  tag: 'gb-horizontal-tabs',
  styleUrl: 'gb-horizontal-tabs.css',
  shadow: true,
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
  @Prop() eighthTab: boolean = false;
  @Prop() ninthTab: boolean = false;
  @Prop() tenthTab: boolean = false;
  @State() activeIndex: number = 0;

  handleTabClick(index: number) {
    this.activeIndex = index;
  }

  render() {
    return (
      <div class={`horizontal_tab_div ${this.type} ${this.breakpoint} ${this.fullWidth ? 'full_width' : ''}`}>
        <gb-tab-button-base
          size={this.size}
          full-width={this.fullWidth}
          type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
          onClick={() => this.handleTabClick(0)}
          current={this.activeIndex === 0}
        >
          <slot name="first_tab" slot="name"></slot>
        </gb-tab-button-base>
        <gb-tab-button-base
          size={this.size}
          full-width={this.fullWidth}
          type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
          onClick={() => this.handleTabClick(1)}
          current={this.activeIndex === 1 && true}
        >
          <slot name="second_tab" slot="name"></slot>
        </gb-tab-button-base>
        {this.thirdTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(2)}
            current={this.activeIndex === 2 ? true : false}
          >
            <slot name="third_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.fourthTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(3)}
            current={this.activeIndex === 3}
          >
            <slot name="fourth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.fifthTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(4)}
            current={this.activeIndex === 4}
          >
            <slot name="fifth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.sixthTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(5)}
            current={this.activeIndex === 5}
          >
            <slot name="sixth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.seventhTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(6)}
            current={this.activeIndex === 6}
          >
            <slot name="seventh_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.eighthTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(7)}
            current={this.activeIndex === 7}
          >
            <slot name="eighth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.ninthTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(8)}
            current={this.activeIndex === 8}
          >
            <slot name="ninth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
        {this.tenthTab && (
          <gb-tab-button-base
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(9)}
            current={this.activeIndex === 9}
          >
            <slot name="tenth_tab" slot="name"></slot>
          </gb-tab-button-base>
        )}
      </div>
    );
  }
}