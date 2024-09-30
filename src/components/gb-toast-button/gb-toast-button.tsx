import { Component, Element, Prop, h } from "@stencil/core";
import { GeneralColors, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-toast-button',
    styleUrl: 'gb-toast-button.css',
    shadow: true
})

export class GbToastButton {
    @Prop() state: StateEnum;
    @Prop() color: GeneralColors;
    @Element() el: HTMLElement;

    componentDidLoad() {
        const slottedContent = this.el.querySelector('p');

        slottedContent.classList.add('text-sm-semi-bold');
    }

    render() {
        return (
          <div class={`toast_button ${this.state} ${this.color}`}>
            <slot></slot>
          </div>
        );
    }
}