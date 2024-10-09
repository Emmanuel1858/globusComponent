import { Component, Element, Event, EventEmitter, getAssetPath, h, Method, Prop } from "@stencil/core";
import { StateEnum } from "../../models/reusableModels";

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
  @Event() navBarItemClicked: EventEmitter<number>;

  componentDidLoad() {
    const initials = this.el.querySelector("[slot='initials']");

    if (initials) {
      initials.classList.add('text-md-semi-bold');
    }
  }

  @Method()
  async onNavBarItemClicked(index: number) {
    console.log('nav-bar-item clicked');
    this.navBarItemClicked.emit(index);
    console.log(index)
  }

  render() {
    const helpIconSrc = getAssetPath(`assets/help-circle.svg`);
    const notificationIconSrc = getAssetPath(`assets/notification-03.svg`);

    return (
      <div class={`header_div`}>
        <div class="content">
          <div class="inner_content">
            <gb-header-icon state={StateEnum.Default} icon={helpIconSrc} onClick={() => this.onNavBarItemClicked(0)}></gb-header-icon>
            <gb-header-icon state={this.state} icon={notificationIconSrc} show-indicator={this.showIndicator} onClick={() => this.onNavBarItemClicked(1)}></gb-header-icon>
            <gb-avatar size="md" text={this.text} placeholder={this.placeholder} onClick={() => this.onNavBarItemClicked(2)}>
              {this.text ? <slot slot="initials" name="initials"></slot> : <slot name="image" slot="image"></slot>}
            </gb-avatar>
          </div>
        </div>
      </div>
    );
  }
}