import { Component, h, Prop } from "@stencil/core";
import { GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-toggle-base',
    styleUrl: 'gb-toggle-base.css',
    shadow: true
})

export class GbToggleBase {
    @Prop() size: GeneralSizes;
    @Prop() state: StateEnum;
    @Prop({ mutable : true }) pressed: boolean = false;

    render() {
        return [
          <input
            type="checkbox"
            id="customCheckbox"
            class={`${this.pressed ? 'pressed' : ''}`}
            onClick={() => {
              if (this.state === 'default') {
                this.pressed = !this.pressed;
              }
            }}
          />,
          <label class={`${this.size} ${this.state} ${this.pressed ? 'pressed' : ''}`} htmlFor="customCheckbox">
            {this.pressed && this.state === 'default' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" class={`default_checked_svg ${this.size}`}>
                <path
                  d="M2.08325 6.04167C2.08325 6.04167 2.70825 6.04167 3.54159 7.5C3.54159 7.5 5.85776 3.68056 7.91659 2.91667"
                  stroke="#075DB2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : this.pressed && this.state === 'disabled' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" class={`disabled_checked_svg ${this.size}`}>
                <path
                  d="M2.08325 6.04167C2.08325 6.04167 2.70825 6.04167 3.54159 7.5C3.54159 7.5 5.85776 3.68056 7.91659 2.91667"
                  stroke="#E3E8EF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : null}
          </label>,
        ];
    }
}