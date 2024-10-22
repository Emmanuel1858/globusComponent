import { Component, Element, Event, EventEmitter, getAssetPath, h, Method, Prop } from "@stencil/core";
import { AvatarColorTypes, StateEnum } from "../../models/reusableModels";

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
  @Prop() color: AvatarColorTypes;
  @Element() el: HTMLElement;
  @Event() navBarItemClicked: EventEmitter<number>;

  
  applyColorToInitials() {
    switch(this.color) {
      case 'gray': return 'gray';
      case 'blue': return 'blue';
      case 'cyan': return 'cyan';
      case 'pink': return 'pink';
      case 'purple': return 'purple';
      case 'green': return 'green';
      case 'yellow': return 'yellow';
    }
  }

  componentDidLoad() {
    const initials = this.el.querySelector("[slot='initials']");

    if (initials) {
      initials.classList.add('text-md-semi-bold');
      initials.classList.add(this.applyColorToInitials());
    }
  }

  @Method()
  async onNavBarItemClicked(index: number) {
    console.log('nav-bar-item clicked');
    this.navBarItemClicked.emit(index);
    console.log(index);
  }

  render() {
    const helpIconSrc = getAssetPath(`assets/help-circle.svg`);
    const notificationIconSrc = getAssetPath(`assets/notification-03.svg`);

    return (
      <div class={`header_div`}>
        <div class="content">
          <div class="inner_content">
            <div class={`action`}>
              <gb-header-icon state={StateEnum.Default} icon={helpIconSrc} onClick={() => this.onNavBarItemClicked(0)}></gb-header-icon>
              <gb-header-icon state={this.state} icon={notificationIconSrc} show-indicator={this.showIndicator} onClick={() => this.onNavBarItemClicked(1)}></gb-header-icon>
            </div>
            <gb-avatar size="md" text={this.text} placeholder={this.placeholder} color={this.color} onClick={() => this.onNavBarItemClicked(2)}>
              {this.text ? <slot slot="initials" name="initials"></slot> : <slot name="image" slot="image"></slot>}
            </gb-avatar>
          </div>
        </div>
      </div>
    );
  }
}