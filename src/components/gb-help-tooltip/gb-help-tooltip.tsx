import { Component, Prop, h, Fragment, State, Element } from "@stencil/core";

@Component({
  tag: 'gb-help-tooltip',
  styleUrl: 'gb-help-tooltip.css',
  shadow: true,
})
export class GbHelpTooltip {
  @State() showHelpTooltip: boolean = false;
  @Prop() showArrow: boolean = false;
  @Prop() showSupportingText: boolean = false;
  @Element() el: HTMLElement;

  componentDidLoad() {
    const mainTextSlot = this.el.querySelector('[slot="label"]');
    const supportingTextSlot = this.el.querySelector('[slot="supporting_text"]');

    if (mainTextSlot) {
      mainTextSlot.classList.add('text-xs-semi-bold');
    }

    if (supportingTextSlot) {
      supportingTextSlot.classList.add('text-xs-regular');
    }
  }

  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          onMouseEnter={() => (this.showHelpTooltip = true)}
          onMouseLeave={() => (this.showHelpTooltip = false)}
        >
          <path
            d="M6.66659 6C6.66659 5.26362 7.26354 4.66666 7.99992 4.66666C8.7363 4.66666 9.33325 5.26362 9.33325 6C9.33325 6.26543 9.25569 6.51275 9.12199 6.72052C8.72352 7.33978 7.99992 7.93028 7.99992 8.66666V9M7.99458 11.3333H8.00057M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33333 7.99992 1.33333C11.6818 1.33333 14.6666 4.3181 14.6666 8Z"
            stroke="#697586"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {this.showHelpTooltip && (
          <gb-tooltip show-arrow={true} arrow="bottom_right" show-supporting-text={this.showSupportingText} class="tooltip">
            <slot name="label" slot="label"></slot>
            <slot name="supporting_text" slot="supporting_text"></slot>
          </gb-tooltip>
        )}
      </>
    );
  }
}