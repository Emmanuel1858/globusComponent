import { Component, Element, Prop, h } from "@stencil/core";
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
  @Element() el: HTMLElement;

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

    // if (this.current) {
    //   tabCount.classList.add();
    // } else {
    //   tabCount.classList.add();
    // }
  }

  render() {
    return (
      <div class={`tab_button_div ${this.type} ${this.current ? 'current' : ''} ${this.fullWidth ? 'full_width' : ''} ${this.size}`}>
        <slot name="name"></slot>
        {/* {this.badge && (
          <div class={`count_div ${this.type} ${this.current ? 'current' : ''}`}>
            <slot name="count"></slot>
          </div>
        )} */}
      </div>
    );
  }
}