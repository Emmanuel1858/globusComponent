import {Component, Element, Method, Prop, h} from '@stencil/core';

@Component({
  tag: 'gb-avatar-dropdown',
  styleUrl: 'gb-avatar-dropdown.css',
  shadow: true,
})
export class GbAvatarDropdown {
  @Prop() type: 'simple' | 'complex';
  @Prop() text: boolean = false;
  @Prop() showProfile: boolean;
  @Prop() showDarkTheme: boolean;
  @Prop() showLogOut: boolean;
  @Prop() listGroupOne: boolean;
  @Prop() listGroupTwo: boolean;
  @Prop() listGroupThree: boolean;
  @Element() el: HTMLElement;

  componentDidLoad() {
    const slottedInitials = this.el.querySelector('[slot="initials"]');

    if (slottedInitials) {
      slottedInitials.classList.add('text-md-semi-bold');
    }
  }

  @Method()
  async viewProfileClicked() {}

  @Method()
  async logoutClicked() {}

  render() {
    if (this.type === 'simple') {
      return (
        <div class="simple-dropdown">
          <div class="profile">
            <gb-avatar-label-group size="md" text={this.text}>
              <slot name="name" slot="name"></slot>
              {!this.text ? <slot name="image" slot="image"></slot> : <slot name="initials" slot="initials"></slot>}
              <slot name="supporting_text" slot="supporting_text"></slot>
            </gb-avatar-label-group>
          </div>
          <div class="menu-items">
            <div class="list">
              {this.showProfile && (
                <gb-dropdown-items-with-shortcut
                  icon
                  iconSrc="user_profile"
                  label="View Profile"
                  shortcut
                  shortcutIcon="K + P"
                  onClick={() => this.viewProfileClicked()}
                ></gb-dropdown-items-with-shortcut>
              )}
              {this.showDarkTheme && <gb-dropdown-items-with-shortcut icon iconSrc="dark_theme" label="Dark Theme" shortcut shortcutIcon="T"></gb-dropdown-items-with-shortcut>}
              {this.showLogOut && (
                <gb-dropdown-items-with-shortcut
                  icon
                  iconSrc="logout_button"
                  label="Log out"
                  shortcut
                  shortcutIcon="L"
                  onClick={() => this.logoutClicked()}
                ></gb-dropdown-items-with-shortcut>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (this.type === 'complex') {
      return (
        <div class="complex-dropdown">
          <div class="profile">
            <gb-avatar-label-group size="md" class="label_group" text={this.text}>
              <slot name="name" slot="name"></slot>
              {!this.text ? <slot name="image" slot="image"></slot> : <slot name="initials" slot="initials"></slot>}
              <slot name="supporting_text" slot="supporting_text"></slot>
            </gb-avatar-label-group>
          </div>
          {this.listGroupOne && (
            <div class="list-group-one">
              <div class="one">
                <gb-dropdown-items-with-shortcut
                  icon
                  iconSrc="user_profile"
                  label="View Profile"
                  shortcut
                  shortcutIcon="K+P"
                  onClick={() => this.viewProfileClicked()}
                ></gb-dropdown-items-with-shortcut>
              </div>
              <div class="two">
                <gb-dropdown-items-with-shortcut icon iconSrc="dark_theme" label="Dark Theme" shortcut shortcutIcon="T"></gb-dropdown-items-with-shortcut>
              </div>
            </div>
          )}
          {this.listGroupTwo && (
            <div class="list-group-two">
              <div class="one">
                <gb-dropdown-items-with-shortcut icon iconSrc="configuration_02" label="Configuration" shortcut shortcutIcon="S"></gb-dropdown-items-with-shortcut>
              </div>
              <div class="two">
                <gb-dropdown-items-with-shortcut icon iconSrc="user_group" label="Team" shortcut shortcutIcon="K->T"></gb-dropdown-items-with-shortcut>
              </div>
              <div class="three">
                <gb-dropdown-items-with-shortcut icon iconSrc="user_add" label="Invite Members" shortcut shortcutIcon="I"></gb-dropdown-items-with-shortcut>
              </div>
            </div>
          )}
          {this.listGroupThree && (
            <div class="list-group-three">
              <div class="one">
                <gb-dropdown-items-with-shortcut
                  icon
                  iconSrc="logout_button"
                  label="Log out"
                  shortcut
                  shortcutIcon="L"
                  onClick={() => this.logoutClicked()}
                ></gb-dropdown-items-with-shortcut>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}