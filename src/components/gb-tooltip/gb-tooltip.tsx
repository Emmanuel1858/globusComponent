import { Component, Element, Prop, h } from "@stencil/core";
import { ArrowPositions } from "../../models/reusableModels";

@Component({
  tag: 'gb-tooltip',
  styleUrl: 'gb-tooltip.css',
  shadow: true,
})
export class GbTooltip {
  @Prop() showArrow: boolean = true;
  @Prop() arrow: ArrowPositions = 'bottom_center';
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

  getArrowClass() {
    return this.showArrow ? `arrow ${this.arrow}` : '';
  }

  render() {
    return (
      <div class="tooltip_container">
        <div class="tooltip">
          <div class={this.getArrowClass()}></div>
          <div class="tooltip_content">
            <slot name="label" />
            {this.showSupportingText && <slot name="supporting_text" />}
          </div>
        </div>
      </div>
    );
  }
}