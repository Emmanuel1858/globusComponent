import { Component, h, Prop, State, Element } from '@stencil/core';
import { CheckBoxStates, GeneralSizes } from '../../models/reusableModels';

@Component({
  tag: 'gb-checkbox-group-it',
  styleUrl: 'gb-checkbox-group-it.css',
  shadow: true
})
export class GbCheckboxGroupIt {
  @Prop() selected: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: GeneralSizes = 'sm';
  @State() checked: boolean = false;
  @Element() el: HTMLElement;

  private toggleCheckboxState() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  private getLabelSizeClass() {
    switch (this.size) {
      case 'xl': return 'text-lg';
      case 'lg': return 'text-md';
      case 'md': return 'text-sm';
      case 'sm': return 'text-sm';
      default: return 'text-sm';
    }
  }

  private getCostSizeClass() {
    switch (this.size) {
      case 'xl': return 'text-md-regular';
      case 'lg': return 'text-md-regular';
      case 'md': return 'text-sm-regular';
      case 'sm': return 'text-xs-regular';
      default: return 'text-xs-regular';
    }
  }

  componentDidLoad() {
    const labelSlot = this.el.querySelector('[slot="label"]');
    const costSlot = this.el.querySelector('[slot="cost"]');
    const supportingTextSlot = this.el.querySelector('[slot="supporting-text"]');

    if (labelSlot) {
      labelSlot.classList.add(this.getLabelSizeClass());
    }

    if (costSlot) {
      costSlot.classList.add(this.getCostSizeClass());
    }

    if (supportingTextSlot) {
      supportingTextSlot.classList.add(this.getCostSizeClass());
    }
  }

  render() {
    const state = this.disabled ? CheckBoxStates.Disabled : CheckBoxStates.Default;

    return (
      <div class={`checkbox-group-item ${this.size} ${this.disabled ? 'disabled' : ''} ${this.checked ? 'checked' : ''}`}>
        <div class="item-content">
          <slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path opacity="0.4" d="M11.524 4.19421L9.25088 5.24491C5.75029 6.863 4 7.67204 4 9.00008C4 10.3281 5.7503 11.1372 9.25089 12.7553L11.524 13.806C13.727 14.8243 14.8285 15.3334 16 15.3334C17.1715 15.3334 18.273 14.8243 20.476 13.806L22.7491 12.7553C26.2497 11.1372 28 10.3281 28 9.00008C28 7.67204 26.2497 6.86299 22.7491 5.2449L20.476 4.19421C18.273 3.1759 17.1715 2.66675 16 2.66675C14.8285 2.66675 13.727 3.1759 11.524 4.19421Z" fill="#064E94"/>
              <path d="M27.7173 14.797C27.9058 15.062 28 15.3382 28 15.6419C28 16.951 26.2497 17.7486 22.7491 19.3436L20.476 20.3794C18.273 21.3832 17.1715 21.8851 16 21.8851C14.8285 21.8851 13.727 21.3832 11.524 20.3794L9.25089 19.3436C5.7503 17.7486 4 16.951 4 15.6419C4 15.3382 4.09422 15.062 4.28267 14.797M27.1689 21.6876C27.723 22.1289 28 22.5688 28 23.0896C28 24.3987 26.2497 25.1962 22.7491 26.7913L20.476 27.827C18.273 28.8308 17.1715 29.3327 16 29.3327C14.8285 29.3327 13.727 28.8308 11.524 27.827L9.25089 26.7913C5.7503 25.1962 4 24.3987 4 23.0896C4 22.5688 4.27704 22.1289 4.83112 21.6876M9.25088 5.24491L11.524 4.19421C13.727 3.1759 14.8285 2.66675 16 2.66675C17.1715 2.66675 18.273 3.1759 20.476 4.19421L22.7491 5.2449C26.2497 6.863 28 7.67204 28 9.00008C28 10.3281 26.2497 11.1372 22.7491 12.7553L20.476 13.806C18.273 14.8243 17.1715 15.3334 16 15.3334C14.8285 15.3334 13.727 14.8243 11.524 13.806L9.25089 12.7553C5.7503 11.1372 4 10.3281 4 9.00008C4 7.67204 5.75029 6.863 9.25088 5.24491Z" stroke="#064E94" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </slot>
          <div class="text-container">
            <div class="label-cost">
              <slot name="label"></slot>
              <slot name="cost"></slot>
            </div>
            <slot name="supporting-text"></slot>
          </div>
        </div>
        <div class="checkbox-container" onClick={() => this.toggleCheckboxState()}>
          <gb-checkbox-base
            type="check_circle"
            size={this.size}
            state={state}
            checked={this.checked}
          ></gb-checkbox-base>
        </div>
      </div>
    );
  }
}
