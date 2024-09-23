import { Component, Element, h, Prop } from "@stencil/core";
import { StateEnum } from "../models/reusableModels";

@Component({
  tag: 'gb-header',
  styleUrl: 'gb-header.css',
  shadow: true,
})
export class GbHeader {
  @Prop() state: StateEnum;
  @Prop() showIndicator: boolean = false;
  @Prop() text: boolean = false;
  @Prop() placeholder: boolean = false;
  @Element() el: HTMLElement;

  componentDidLoad() {
    const initials = this.el.querySelector("[slot='initials']");

    if (initials) {
      initials.classList.add('text-md-semi-bold');
    }
  }

  render() {
    return (
      <div class={`header_div`}>
        <div class="content">
          <div class="inner_content">
            <gb-header-icon state={StateEnum.Default} icon="build/assets/help-circle.svg"></gb-header-icon>
            <gb-header-icon state={this.state} icon="build/assets/notification-03.svg" show-indicator={this.showIndicator}></gb-header-icon>
            <gb-avatar size="md" text={this.text} placeholder={this.placeholder}>
              {this.text ? (<slot slot="initials" name="initials"></slot>) : (<slot name="image" slot="image"></slot>)}
            </gb-avatar>
          </div>
        </div>
      </div>
    );
  }
}