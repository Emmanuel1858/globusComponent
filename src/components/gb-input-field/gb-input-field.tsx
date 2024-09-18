import { Component, Prop, getAssetPath, h } from '@stencil/core'
import { GeneralSizes } from '../../models/reusableModels'

@Component({
  tag: 'gb-input-field',
  styleUrl: 'gb-input-field.css',
  shadow: true
})

export class GbInputField {
  @Prop() size: GeneralSizes;
  @Prop() inputType: 'default' | 'icon_leading' | 'leading_dropdown' | 'trailing_dropdown'|'leading_text'|'payment_input'| 'tags' | 'trailing_button' |'password' | 'password_icon_leading' | 'count';
  @Prop() destructive?: boolean;
  @Prop() helpIcon?: boolean = false;
  @Prop() icon?: string;
  @Prop() placeholder: string = ''; 
  @Prop() label?: string = '';

  /*getIconPath(iconName: string) {
    if (!iconName) return null;
    return getAssetPath(`./assets/${iconName}`);
  }

  renderIcon(iconName: string) {
    const iconPath = this.getIconPath(iconName);
    return iconPath ? <span><img class="icon" src={iconPath} alt="icon" /></span> : null;
  }*/

  

  render() {

    const icon = this.icon ? getAssetPath(`assets/${this.icon}.svg`) : '';

    const classes = {
      [this.size]: true,
    }

    return (
      <div class={classes}>
        <label>{this.label}</label>
        {this.inputType === 'default' && (
          <div class="input-wrapper">
            <input placeholder={this.placeholder}>
            </input>
            {this.helpIcon && (
              <div class="help-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div> 
            )}
          </div>
        )}
        {this.inputType === 'icon_leading' && (
          <div class="input-wrapper">
            {this.icon && (
              <div class="icon">
                <img src={icon} alt="Icon"></img>
              </div>
            )}
            <input placeholder={this.placeholder} type='email'>
            </input>
            {this.helpIcon && (
                <div class="help-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div> 
              )}
          </div>
        )}
        {this.inputType === 'leading_dropdown' && (
          <div class="input-wrapper">
            {this.icon && (
              <div class="icon">
                <img src={icon} alt="Icon"></img>
              </div>
            )}
            <select></select>
            <input placeholder={this.placeholder}>
              {this.helpIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </input>
          </div>
        )}
        {this.inputType === 'payment_input' && (
          <div class="input-wrapper">
            <span class='payment-icon'>$</span>
            <input placeholder={this.placeholder}>
              {this.helpIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </input>
          </div>
        )}
        {this.inputType === 'tags' && (
          <input placeholder={this.placeholder}>
            <slot></slot>
            {this.helpIcon && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            )}
          </input>
        )}
        {this.inputType === 'password' && (
          <input placeholder={this.placeholder}>
            {this.helpIcon && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            )}
          </input>
        )}
        {this.inputType === 'password_icon_leading' && (
          <input placeholder={this.placeholder}>
            {this.icon && (
              <div class="icon">
                <img src={icon} alt="Icon"></img>
              </div>
            )}
            {this.helpIcon && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            )}
          </input>
        )}
        {this.inputType === 'count' && (
          <input placeholder={this.placeholder}>
          {this.icon && (
            <div class="icon">
              <img src={icon} alt="Icon"></img>
            </div>
          )}
          {this.helpIcon && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}
          <span>
            <button class="decrease-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6666 10L3.33329 10" stroke="#4B5565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <button class="increase-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3.33334L10 16.6667M16.6667 10L3.33337 10" stroke="#4B5565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>        
            </button>
          </span>
        </input>
        )}
        <p class="help-text">This is a hint to help the user</p>
      </div>
    )
  }
}