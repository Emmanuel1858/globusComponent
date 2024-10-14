import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'gb-password-button',
  styleUrl: 'gb-password-button.css',
  shadow: true
})
export class GbPasswordButton {
  @State() isPasswordVisible: boolean = false;
  @Prop() state: 'default' | 'disabled';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  render() {
    return (
      <div>
        <gb-btn size="sm" hierarchy="link_gray" state="default" onClick={() => this.togglePasswordVisibility()}>
          {this.isPasswordVisible ? (
            <gb-button size="sm" hierarchy="tertiary_gray" icon="default" state={this.state}>
              <p>HIDE</p>
            </gb-button>
          ) : (
            <gb-button size="sm" hierarchy="tertiary_gray" icon="default" state={this.state}>
              <p>SHOW</p>
            </gb-button>
          )}
        </gb-btn>
      </div>
    );
  }
}
