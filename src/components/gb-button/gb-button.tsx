import { Component, Element, getAssetPath, h, Prop, State } from '@stencil/core';
import { GeneralHierarchies, GeneralSizes } from '../../models/reusableModels';

@Component({
  tag: 'gb-button',
  styleUrl: 'gb-button.css',
  shadow: true,
  assetsDirs: [''],
})
export class GbButton {
  @Prop() size: GeneralSizes;
  @Prop() hierarchy: GeneralHierarchies;
  @Prop() icon: 'default' | 'only';
  @Prop() destructive: boolean = false;
  @Prop() state: 'default' | 'disabled';
  @Prop() iconLeading: boolean = false;
  @Prop() iconLeadingSwap: string;
  @Prop() iconTrailing: boolean = false;
  @Prop() iconTrailingSwap: string;
  @Element() el: HTMLElement;
  @State() leadingIconSvg: string = '';
  @State() trailingIconSvg: string = '';

  componentWillLoad() {
    if (this.iconLeading && this.iconLeadingSwap) {
      this.loadIcon(this.iconLeadingSwap, 'leading');
    }
    if (this.iconTrailing && this.iconTrailingSwap) {
      this.loadIcon(this.iconTrailingSwap, 'trailing');
    }

    const buttonSlot = this.el.querySelector('p');

    if (buttonSlot) {
      buttonSlot.classList.add(this.getButtonTextClasses());
      buttonSlot.classList.add('nowrap');
    }

    if (!this.iconLeading && !this.iconTrailing) {
      buttonSlot.classList.add('center');
    }
  }

  async loadIcon(iconName: string, type: 'leading' | 'trailing') {
    const iconPath = getAssetPath(`${iconName}`);
    const response = await fetch(iconPath);
    const svg = await response.text();
    if (type === 'leading') {
      this.leadingIconSvg = svg;
    } else {
      this.trailingIconSvg = svg;
    }
  }

  // Helper to apply color styles based on the button state
  getButtonClasses() {
    return {
      button: true,
      [this.size]: true,
      [this.hierarchy]: true,
      destructive: this.destructive,
      disabled: this.state === 'disabled',
      default: this.icon === 'default',
      only: this.icon === 'only',
      lefticon: this.iconLeading,
      righticon: this.iconTrailing
    };
  }

  getButtonTextClasses() {
    switch (this.size) {
        case 'xl2' : return 'text-lg-semi-bold';
        case 'xl' : return 'text-md-semi-bold';
        case 'lg' : return 'text-md-semi-bold';
        case 'md' : return 'text-sm-semi-bold';
        case 'sm' : return 'text-sm-semi-bold';
    }
  }

  renderLeadingIcon() {
    return <div class={`icon left-icon ${this.size}`} innerHTML={this.leadingIconSvg}></div>;
  }

  renderTrailingIcon() {
    return <div class="icon right-icon" innerHTML={this.trailingIconSvg}></div>;
  }

  render() {
    return (
      <button class={this.getButtonClasses()}>
        {this.iconLeading && this.icon === 'default' && this.renderLeadingIcon()}
        {this.icon === 'default' && <slot></slot>}
        {this.iconTrailing && this.renderTrailingIcon()}
        {this.icon === 'only' && this.renderLeadingIcon()}
      </button>
    );
  }
}
