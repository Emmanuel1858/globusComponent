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
  @Prop() firstTabName: string = '';
  @Prop() secondTabName: string = '';
  @Prop() thirdTabName: string = '';
  @Prop() fourthTabName: string = '';
  @Prop() fifthTabName: string = '';
  @Prop() sixthTabName: string = '';
  @Prop() seventhTabName: string = '';
  @Prop() eighthTabName: string = '';
  @Prop() ninthTabName: string = '';
  @Prop() tenthTabName: string = '';
  @State() activeIndex: number = 0;

  handleTabClick(index: number) {
    this.activeIndex = index;
  }

  componentDidLoad() {
    this.activeIndex = 0;
  }

  render() {
    return (
      <div class={`horizontal_tab_div ${this.type} ${this.breakpoint} ${this.fullWidth ? 'full_width' : ''}`}>
        <gb-tab-button-base
          class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
          size={this.size}
          full-width={this.fullWidth}
          type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
          onClick={() => this.handleTabClick(0)}
          current={this.activeIndex === 0}
          tab-name={this.firstTabName}
        ></gb-tab-button-base>
        <gb-tab-button-base
          class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
          size={this.size}
          full-width={this.fullWidth}
          type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
          onClick={() => this.handleTabClick(1)}
          current={this.activeIndex === 1}
          tab-name={this.secondTabName}
        ></gb-tab-button-base>
        {this.thirdTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(2)}
            current={this.activeIndex === 2}
            tab-name={this.thirdTabName}
          ></gb-tab-button-base>
        )}
        {this.fourthTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(3)}
            current={this.activeIndex === 3}
            tab-name={this.fourthTabName}
          ></gb-tab-button-base>
        )}
        {this.fifthTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(4)}
            current={this.activeIndex === 4}
            tab-name={this.fifthTabName}
          ></gb-tab-button-base>
        )}
        {this.sixthTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(5)}
            current={this.activeIndex === 5}
            tab-name={this.sixthTabName}
          ></gb-tab-button-base>
        )}
        {this.seventhTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(6)}
            current={this.activeIndex === 6}
            tab-name={this.seventhTabName}
          ></gb-tab-button-base>
        )}
        {this.eighthTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(7)}
            current={this.activeIndex === 7}
            tab-name={this.eighthTabName}
          ></gb-tab-button-base>
        )}
        {this.ninthTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(8)}
            current={this.activeIndex === 8}
            tab-name={this.ninthTabName}
          ></gb-tab-button-base>
        )}
        {this.tenthTab && (
          <gb-tab-button-base
            class={`tab_button_base ${this.fullWidth ? 'full_width' : ''}`}
            size={this.size}
            full-width={this.fullWidth}
            type={this.type === 'button_white_border' ? 'button_white' : this.type === 'rounded_button_white_border' ? 'rounded_button_white' : this.type}
            onClick={() => this.handleTabClick(9)}
            current={this.activeIndex === 9}
            tab-name={this.tenthTabName}
          ></gb-tab-button-base>
        )}
      </div>
    );
  }
}