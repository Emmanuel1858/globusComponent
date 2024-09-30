import { Component, Element, Event, EventEmitter, Prop, h } from "@stencil/core";
import { GeneralSizes, TabTypes } from "../../models/reusableModels";

@Component({
  tag: 'gb-tab-button-base',
  styleUrl: 'gb-tab-button-base.css',
  shadow: true,
})
export class GbTabButtonBase {
  @Prop() current: boolean = false;
  @Prop() size: GeneralSizes;
  @Prop() fullWidth: boolean = false;
  @Prop() badge: boolean = false;
  @Prop() type: TabTypes;
  @Prop() tabName: string = '';
  @Element() el: HTMLElement;
  @Event() tabClicked: EventEmitter<void>;

  getTextClasses() {
    switch (this.size) {
      case 'sm':
        return 'text-sm-medium';
      case 'md':
        return 'text-md-medium';
    }
  }

  getCurrentTextClasses() {
    switch (this.size) {
      case 'sm':
        return 'text-sm-semi-bold';
      case 'md':
        return 'text-md-semi-bold';
    }
  }

  getCountTextClasses() {
    switch (this.size) {
      case 'sm':
        return 'text-xs-medium';
      case 'md':
        return 'text-sm-medium';
    }
  }

  componentDidLoad() {
    const tabName = this.el.querySelector('[slot="name"]');
    const tabCount = this.el.querySelector('[slot="count"]');

    if (this.current) {
      tabName.classList.add(this.getCurrentTextClasses());
    } else {
      tabName.classList.add(this.getTextClasses());
    }

    if(tabCount) {
        tabCount.classList.add(this.getCountTextClasses());
    }
  }

  handleClick() {
    this.tabClicked.emit();
  }

  render() {
    return (
      <div 
      class={`tab_button_div ${this.type}
      ${this.current ? 'current' : ''} 
      ${this.fullWidth ? 'full_width' : ''} 
      ${this.size}`} onClick={() => this.handleClick()}>
        <p class={`${this.current ? this.getCurrentTextClasses() : this.getTextClasses()}`}>{this.tabName}</p>
        {this.badge && (
          <gb-badge
            size="sm"
            type="pill_color"
            color={
              this.current && this.type === 'button_primary' ? 'information' :
              this.current && this.type === 'underline' ? 'information' :
              this.current && this.type === 'line' ? 'information' : 'gray'
            }
          >
            <slot name="count"></slot>
          </gb-badge>
        )}
      </div>
    );
  }
}