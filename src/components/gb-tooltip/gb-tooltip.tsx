import { Component, Element, h, Prop } from "@stencil/core";
import { ArrowPositions } from "../../models/reusableModels";

@Component({
    tag: 'gb-tooltip',
    styleUrl: 'gb-tooltip.css',
    shadow: true
})

export class GbTooltip {
    @Prop() arrow: ArrowPositions = 'left';
    @Prop() supportingText: boolean;
    @Element() el: HTMLElement;

    componentDidLoad() {
      const mainTextSlot = this.el.querySelector('[slot="main_text"]');
      const supportingTextSlot = this.el.querySelector('[slot="supporting_text"]');

      if(mainTextSlot) {
        mainTextSlot.classList.add('text-xs-semi-bold');
      }

      if(supportingTextSlot) {
        supportingTextSlot.classList.add('text-xs-regular');
      }
    }

    render() {
        return (
            <div class={`tooltip ${this.arrow}`}>
                <slot name="main_text"></slot>
                {this.supportingText && (
                  <slot name="supporting_text"></slot>
                )}
                {this.arrow && (
                    <div class={`tooltip_arrow`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="17" viewBox="0 0 6 17" fill="none">
                        <g clip-path="url(#clip0_19_31150)">
                          <path d="M-2.51471 2.42894C-2.51471 1.53803 -1.43757 1.09187 -0.807603 1.72183L5.26347 7.79289C5.654 8.18342 5.654 8.81658 5.26347 9.20711L-0.807603 15.2782C-1.43757 15.9081 -2.51471 15.462 -2.51471 14.5711L-2.51471 2.42894Z" fill="#FCFCFC"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_19_31150">
                            <rect width="16" height="6" fill="white" transform="matrix(0 -1 1 0 0 16.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                )}
            </div>
        );
    }
}