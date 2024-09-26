import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'gb-password-button',
  styleUrl: 'gb-password-button.css',
  shadow: true
})
export class GbPasswordButton {
  @State() isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  render() {
    return (
      <div>
        <gb-btn
          size="sm"
          hierarchy="link_gray"
          state="default"
          onClick={() => this.togglePasswordVisibility()}
        >
          {this.isPasswordVisible ? 'HIDE' : 'SHOW'}
        </gb-btn>
      </div>
    );
  }
}
