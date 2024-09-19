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
  @Prop() destructive: boolean;
  @Prop() state: 'disabled';
  @Prop() showLabel: boolean;
  @Prop() label?: string = '';
  @Prop() showHintText: boolean;
  @Prop() hintText: string = '';
  @Prop() showPlaceholder: boolean;
  @Prop() placeholder: string = ''; 
  @Prop() showHelpIcon?: boolean = false;
  @Prop() showValidation: boolean;
  @Prop() iconSwap?: string;

  

  render() {

    const iconSwap = this.iconSwap ? getAssetPath(`assets/${this.iconSwap}.svg`) : '';

    const classes = {
      [this.size]: true,
    }

    return (
      <div class={classes}>
        <div class="input-with-label">
          <label>{this.label}</label>
          {this.inputType === 'default' && (
            <div class="input-wrapper">
              <input placeholder={this.placeholder}>
              </input>
              {this.showValidation && (
                <span></span>
              )}
              {this.showHelpIcon && (
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
              <div class="content">
                {this.iconSwap && (
                  <div class="icon">
                    <img src={iconSwap} alt="Icon"></img>
                  </div>
                )}
                <input placeholder={this.placeholder} type='email'>
                </input>
              </div>
              {this.showValidation && (
                <span></span>
              )}
              {this.showHelpIcon && (
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
              <div class="country-dropdown">
                <div class="country-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M-0.000488281 12.0002C-0.000488281 17.1599 3.25601 21.5583 7.82562 23.2539V0.746674C3.25601 2.44214 -0.000488281 6.84071 -0.000488281 12.0002Z" fill="#6DA544"/>
                    <path d="M23.9999 12.0002C23.9999 6.8407 20.7434 2.44214 16.1738 0.746674V23.2539C20.7434 21.5583 23.9999 17.1599 23.9999 12.0002Z" fill="#6DA544"/>
                  </svg>
                </div>
                <select>
                  <option value="option 1" selected>+234</option>
                  <slot name="option"></slot>
                </select>
              </div>
              <div class="text-input">
                <input placeholder={this.placeholder}>
                </input>
                {this.showValidation && (
                <span></span>
                )}
                {this.showHelpIcon && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                )}
              </div>                         
            </div>
          )}
          {this.inputType === 'trailing_dropdown' && (
            <div class="input-wrapper">
              <div class="content">
                <div class="text-input">
                  <p>$</p>
                  <input placeholder={this.placeholder}></input>
                </div>
                {this.showValidation && (
                <span></span>
                )}
                {this.showHelpIcon && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                )}
              </div>
              <div class="currency-dropdown">
                <select>
                  <option value="option 1" selected>USD</option>
                  <slot name="option"></slot>
                </select>
              </div>
            </div>
          )}
          {this.inputType === 'leading_text' && (
            <div class="input-wrapper">
              <div class="add-on">
                <p>http://</p>
              </div>
              <div class="trailing-text-input">
                <input placeholder={this.placeholder}></input>
                {this.showValidation && (
                <span></span>
                )}
                {this.showHelpIcon && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          )}
          {this.inputType === 'payment_input' && (
            <div class="input-wrapper">
              <div class="payment-content">
                <span class="payment method">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z" fill="#ED0006"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.179 11.8294C12.6369 10.6005 13.5614 8.77192 13.5614 6.72997C13.5614 4.68801 12.6369 2.85941 11.179 1.63051C12.363 0.632465 13.8989 0.0299683 15.5772 0.0299683C19.3221 0.0299683 22.3579 3.02966 22.3579 6.72997C22.3579 10.4303 19.3221 13.43 15.5772 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z" fill="#F9A000"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.179 11.8294C12.6369 10.6005 13.5614 8.77193 13.5614 6.72999C13.5614 4.68805 12.6369 2.85946 11.179 1.63055C9.72109 2.85946 8.79663 4.68805 8.79663 6.72999C8.79663 8.77193 9.72109 10.6005 11.179 11.8294Z" fill="#FF5E00"/>
                  </svg>
                </span>
                <input placeholder={this.placeholder}></input>
              </div>
              {this.showValidation && (
                <span></span>
              )}
              {this.showHelpIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </div>
          )}
          {this.inputType === 'tags' && (
            <div class="input-wrapper">
              <div class="tags-content">
                <div class="tags-box">
                  <slot name="tag-option"></slot>
                </div>
                <input></input>
              </div>
              {this.showValidation && (
                <span></span>
              )}
              {this.showHelpIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </div>
          )}
          {this.inputType === 'trailing_button' && (
            <div class="input-wrapper">
              <div class="leading-text-input"></div> 
            </div>
          )}
          {this.inputType === 'password' && (
            <input placeholder={this.placeholder}>
              {this.showHelpIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </input>
          )}
          {this.inputType === 'password_icon_leading' && (
            <input placeholder={this.placeholder}>
              {this.iconSwap && (
                <div class="icon">
                  <img src={iconSwap} alt="Icon"></img>
                </div>
              )}
              {this.showHelpIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </input>
          )}
          {this.inputType === 'count' && (
            <input placeholder={this.placeholder}>
            {this.iconSwap && (
              <div class="icon">
                <img src={iconSwap} alt="Icon"></img>
              </div>
            )}
            {this.showHelpIcon && (
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
        </div>
        {this.showHintText && (
          <p class="hint-text">{this.hintText}</p>
        )}
      </div>
    )
  }
}