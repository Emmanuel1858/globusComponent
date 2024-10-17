import { Component, Prop, getAssetPath, h, Fragment, State, Event, EventEmitter } from '@stencil/core'
import { GeneralSizes, InputFieldTypes, StateEnum } from '../../models/reusableModels'

@Component({
  tag: 'gb-input-field',
  styleUrl: 'gb-input-field.css',
  shadow: true,
})
export class GbInputField {
  @Prop() size: GeneralSizes;
  @Prop() type: InputFieldTypes;
  @Prop() destructive: boolean = false;
  @Prop() state: 'placeholder' | 'filled' | 'active' | 'disabled';
  @Prop() showLabel: boolean = false;
  @Prop() label: string = '';
  @Prop() showHintText: boolean = false;
  @Prop() hintText: string = '';
  @Prop() showPlaceholder: boolean = false;
  @Prop() placeholder: string = '';
  @Prop() showHelpIcon: boolean = false;
  @Prop() showValidation: boolean = false;
  @Prop() iconSwap?: string;
  @Prop() showCloseButton?: boolean = false;
  @State() inputValue: string = '';
  @State() tags: string[] = [];
  @State() isPasswordVisible: boolean = false;
  @Event() tagAdded: EventEmitter<string>;
  @Event() valueChanged: EventEmitter<string>;

  /* Function to handle and emit the inputted values */
  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    this.valueChanged.emit(this.inputValue);
  }

  /* Function to handle and emit the inputted values */
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  render() {
    const iconSwap = this.iconSwap ? getAssetPath(`assets/${this.iconSwap}.svg`) : '';

    const classes = {
      [this.size]: true,
      [this.type]: true,
      destructive: this.destructive,
      disabled: this.state === 'disabled',
    };

    return (
      <div class={classes}>
        <div class="input-with-label">
          {this.showLabel && (
            <label htmlFor="input" class="text-sm-medium">
              {this.label}
            </label>
          )}
          {this.type === 'default' && (
            <div class={`input-wrapper ${this.type} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <input
                class={`text-md-regular`}
                placeholder={this.placeholder ? this.placeholder : ''}
                value={this.inputValue}
                onInput={event => this.handleInput(event)}
              ></input>
              {this.showValidation && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                  <path
                    d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                    stroke="#079455"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {this.showHelpIcon && (
                <>
                  {!this.destructive ? (
                    <div class="help-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                          stroke="#697586"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  ) : this.destructive && this.state !== 'disabled' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                        stroke="#B51726"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    this.destructive &&
                    this.state === 'disabled' && (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          )}
          {this.type === 'icon_leading' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="content">
                <div class="icon">
                  {this.iconSwap ? (
                    <img src={iconSwap} alt="Icon" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class={`icon_leading_svg ${this.state}`}>
                      <path
                        d="M5.83342 7.08334L8.2851 8.53286C9.71443 9.37794 10.2857 9.37794 11.7151 8.53286L14.1668 7.08334M7.58243 2.94713C9.1995 2.9065 10.8007 2.9065 12.4177 2.94713C15.0415 3.01305 16.3534 3.04602 17.296 3.99221C18.2386 4.9384 18.2658 6.21571 18.3203 8.77032C18.3378 9.59172 18.3378 10.4083 18.3203 11.2297C18.2658 13.7843 18.2386 15.0616 17.296 16.0078C16.3533 16.954 15.0415 16.9869 12.4177 17.0529C10.8007 17.0935 9.19951 17.0935 7.58244 17.0529C4.95869 16.9869 3.64682 16.954 2.70421 16.0078C1.76161 15.0616 1.73437 13.7843 1.67989 11.2297C1.66237 10.4083 1.66237 9.59171 1.67989 8.77031C1.73436 6.21569 1.7616 4.93839 2.70421 3.9922C3.64682 3.046 4.95869 3.01304 7.58243 2.94713Z"
                        stroke="#4B5565"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <input
                  class={`text-md-regular`}
                  placeholder={this.placeholder ? this.placeholder : ''}
                  type="email"
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
              </div>
              {this.showValidation && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                  <path
                    d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                    stroke="#079455"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {this.showHelpIcon && (
                <>
                  {!this.destructive ? (
                    <div class="help-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                          stroke="#697586"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                        stroke="#B51726"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </>
              )}
              {this.showCloseButton && !this.destructive && (
                <gb-button
                  size="sm"
                  state={this.state === 'disabled' ? 'disabled' : 'default'}
                  hierarchy="tertiary_gray"
                  icon="only"
                  icon-leading={true}
                  icon-leading-swap="assets/cancel-button.svg"
                ></gb-button>
              )}
            </div>
          )}
          {this.type === 'leading_dropdown' && (
            <div class={`input-wrapper ${this.type} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="dropdown">
                <div class="country-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M-0.000488281 12.0002C-0.000488281 17.1599 3.25601 21.5583 7.82562 23.2539V0.746674C3.25601 2.44214 -0.000488281 6.84071 -0.000488281 12.0002Z"
                      fill="#6DA544"
                    />
                    <path d="M23.9999 12.0002C23.9999 6.8407 20.7434 2.44214 16.1738 0.746674V23.2539C20.7434 21.5583 23.9999 17.1599 23.9999 12.0002Z" fill="#6DA544" />
                  </svg>
                </div>
                <select class="text-md-regular">
                  <option value="option 1" selected>
                    +234
                  </option>
                  <slot name="country-option"></slot>
                </select>
              </div>
              <div class="text-input">
                <input
                  class="text-md-regular"
                  placeholder={this.placeholder ? this.placeholder : ''}
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
                {this.showValidation && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                    <path
                      d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                      stroke="#079455"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
                {this.showHelpIcon && (
                  <>
                    {!this.destructive ? (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                          stroke="#B51726"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
          {this.type === 'trailing_dropdown' && (
            <div class={`input-wrapper ${this.type} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="content">
                <div class="text-input">
                  <p class="text-md-regular">$</p>
                  <input
                    class="text-md-regular"
                    placeholder={this.placeholder ? this.placeholder : ''}
                    value={this.inputValue}
                    onInput={event => this.handleInput(event)}
                  ></input>
                </div>
                {this.showValidation && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                    <path
                      d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                      stroke="#079455"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
                {this.showHelpIcon && (
                  <>
                    {!this.destructive ? (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                          stroke="#B51726"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                )}
              </div>
              <div class="dropdown">
                <select class="text-md-regular">
                  <option value="option 1" selected>
                    USD
                  </option>
                  <slot name="option"></slot>
                </select>
              </div>
            </div>
          )}
          {this.type === 'leading_text' && (
            <div class="leading_text_wrapper">
              <div class="add-on">
                <p class="text-md-regular">http://</p>
              </div>
              <div class={`leading_text_input_wrapper ${this.state === 'disabled' ? 'disabled' : ''} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
                <div class="text-input">
                  <input
                    class="text-md-regular"
                    placeholder={this.placeholder ? this.placeholder : ''}
                    value={this.inputValue}
                    onInput={event => this.handleInput(event)}
                  ></input>
                  {this.showValidation && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                      <path
                        d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                        stroke="#079455"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  {this.showHelpIcon && (
                    <>
                      {!this.destructive ? (
                        <div class="help-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                              stroke="#697586"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                            stroke="#B51726"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {this.type === 'payment_input' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="content">
                <div class="payment-method">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z"
                      fill="#ED0006"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.179 11.8294C12.6369 10.6005 13.5614 8.77192 13.5614 6.72997C13.5614 4.68801 12.6369 2.85941 11.179 1.63051C12.363 0.632465 13.8989 0.0299683 15.5772 0.0299683C19.3221 0.0299683 22.3579 3.02966 22.3579 6.72997C22.3579 10.4303 19.3221 13.43 15.5772 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z"
                      fill="#F9A000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.179 11.8294C12.6369 10.6005 13.5614 8.77193 13.5614 6.72999C13.5614 4.68805 12.6369 2.85946 11.179 1.63055C9.72109 2.85946 8.79663 4.68805 8.79663 6.72999C8.79663 8.77193 9.72109 10.6005 11.179 11.8294Z"
                      fill="#FF5E00"
                    />
                  </svg>
                </div>
                <input
                  class="text-md-regular"
                  placeholder={this.placeholder ? this.placeholder : ''}
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
              </div>
              {this.showValidation && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                  <path
                    d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                    stroke="#079455"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {this.showHelpIcon && (
                <div class="help-icon">
                  <>
                    {!this.destructive ? (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                          stroke="#B51726"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                </div>
              )}
            </div>
          )}
          {this.type === 'tags' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="content">
                <div class="tags-box">
                  <slot name="tag-option"></slot>
                </div>
                <input
                  class="text-md-regular"
                  placeholder={this.placeholder ? this.placeholder : ''}
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
              </div>
              {this.showValidation && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                  <path
                    d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                    stroke="#079455"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {this.showHelpIcon && (
                <div class="help-icon">
                  <>
                    {!this.destructive ? (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                          stroke="#B51726"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                </div>
              )}
            </div>
          )}
          {this.type === 'trailing_button' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="text-input">
                <input
                  class="text-md-regular"
                  placeholder={this.placeholder ? this.placeholder : ''}
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
                {this.showValidation && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                    <path
                      d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                      stroke="#079455"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
                {this.showHelpIcon && (
                  <>
                    {!this.destructive ? (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                          stroke="#B51726"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                )}
              </div>
              <div class="trailing-btn">
                <gb-button
                  size="md"
                  state={this.state === 'disabled' ? 'disabled' : 'default'}
                  hierarchy="tertiary_gray"
                  icon="only"
                  icon-leading={true}
                  icon-leading-swap="assets/copy.svg"
                ></gb-button>
              </div>
            </div>
          )}
          {this.type === 'password' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="content">
                <div class="text-input">
                  <input
                    class="text-md-regular"
                    placeholder={this.placeholder ? this.placeholder : ''}
                    type={this.isPasswordVisible ? 'text' : 'password'}
                    value={this.inputValue}
                    onInput={event => this.handleInput(event)}
                  ></input>
                </div>
                {this.showValidation && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                    <path
                      d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                      stroke="#079455"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
                {this.showHelpIcon && (
                  <>
                    {!this.destructive ? (
                      <div class="help-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                            stroke="#697586"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                          stroke="#B51726"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </>
                )}
              </div>
              <div class="password_dropdown">
                <gb-password-button state={this.state === 'disabled' ? StateEnum.Disabled : StateEnum.Default} onClick={() => this.togglePasswordVisibility()}></gb-password-button>
              </div>
            </div>
          )}
          {this.type === 'password_icon_leading' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class="content">
                {this.iconSwap ? (
                  <img src={iconSwap} alt="Icon" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.0759 12.1667C11.6617 12.1667 11.3259 12.5024 11.3259 12.9167C11.3259 13.3309 11.6617 13.6667 12.0759 13.6667V12.1667ZM12.0833 13.6667C12.4976 13.6667 12.8333 13.3309 12.8333 12.9167C12.8333 12.5024 12.4976 12.1667 12.0833 12.1667V13.6667ZM7.91668 12.1667C7.50246 12.1667 7.16668 12.5024 7.16668 12.9167C7.16668 13.3309 7.50246 13.6667 7.91668 13.6667V12.1667ZM7.92415 13.6667C8.33836 13.6667 8.67415 13.3309 8.67415 12.9167C8.67415 12.5024 8.33836 12.1667 7.92415 12.1667V13.6667ZM16.4435 10.1294L17.1868 10.0293L16.4435 10.1294ZM13.7003 7.58257L13.7347 6.83336L13.7003 7.58257ZM13.7003 18.2507L13.7347 19L13.7003 18.2507ZM16.4435 15.7039L15.7002 15.6039L16.4435 15.7039ZM6.29973 7.58257L6.33417 8.33178L6.29973 7.58257ZM3.55652 10.1294L2.81323 10.0293L3.55652 10.1294ZM6.29973 18.2507L6.33417 17.5015L6.29973 18.2507ZM3.55652 15.7039L4.29981 15.6039L3.55652 15.7039ZM5.50001 7.49999C5.50001 7.9142 5.8358 8.24999 6.25001 8.24999C6.66422 8.24999 7.00001 7.9142 7.00001 7.49999H5.50001ZM13 7.49999C13 7.9142 13.3358 8.24999 13.75 8.24999C14.1642 8.24999 14.5 7.9142 14.5 7.49999H13ZM12.0759 13.6667H12.0833V12.1667H12.0759V13.6667ZM7.91668 13.6667H7.92415V12.1667H7.91668V13.6667ZM10 17.5833C8.69057 17.5833 7.50287 17.5553 6.33417 17.5015L6.26528 19C7.45761 19.0548 8.66829 19.0833 10 19.0833V17.5833ZM13.6659 17.5015C12.4972 17.5553 11.3094 17.5833 10 17.5833V19.0833C11.3317 19.0833 12.5424 19.0548 13.7347 19L13.6659 17.5015ZM17.1868 15.804C17.3105 14.8853 17.4167 13.9152 17.4167 12.9167H15.9167C15.9167 13.8141 15.8211 14.7058 15.7002 15.6039L17.1868 15.804ZM17.4167 12.9167C17.4167 11.9181 17.3105 10.948 17.1868 10.0293L15.7002 10.2294C15.8211 11.1275 15.9167 12.0192 15.9167 12.9167H17.4167ZM10 8.24999C11.3095 8.24999 12.4972 8.27805 13.6659 8.33178L13.7347 6.83336C12.5424 6.77855 11.3317 6.74999 10 6.74999V8.24999ZM6.33417 8.33178C7.50287 8.27805 8.69057 8.24999 10 8.24999V6.74999C8.66829 6.74999 7.45761 6.77855 6.26528 6.83336L6.33417 8.33178ZM2.81323 10.0293C2.68953 10.948 2.58334 11.9181 2.58334 12.9167H4.08334C4.08334 12.0192 4.1789 11.1275 4.29981 10.2294L2.81323 10.0293ZM2.58334 12.9167C2.58334 13.9152 2.68953 14.8853 2.81323 15.804L4.29981 15.6039C4.1789 14.7058 4.08334 13.8141 4.08334 12.9167H2.58334ZM17.1868 10.0293C16.9527 8.29065 15.5122 6.91507 13.7347 6.83336L13.6659 8.33178C14.6943 8.37906 15.5595 9.18436 15.7002 10.2294L17.1868 10.0293ZM13.7347 19C15.5122 18.9182 16.9527 17.5427 17.1868 15.804L15.7002 15.6039C15.5595 16.649 14.6943 17.4543 13.6659 17.5015L13.7347 19ZM6.26528 6.83336C4.48781 6.91507 3.04732 8.29065 2.81323 10.0293L4.29981 10.2294C4.44052 9.18436 5.30576 8.37906 6.33417 8.33178L6.26528 6.83336ZM6.33417 17.5015C5.30576 17.4543 4.44052 16.649 4.29981 15.6039L2.81323 15.804C3.04732 17.5427 4.48782 18.9182 6.26528 19L6.33417 17.5015ZM7.00001 7.49999V5.41666H5.50001V7.49999H7.00001ZM13 5.41666V7.49999H14.5V5.41666H13ZM10 2.41666C11.6569 2.41666 13 3.7598 13 5.41666H14.5C14.5 2.93138 12.4853 0.916656 10 0.916656V2.41666ZM7.00001 5.41666C7.00001 3.7598 8.34316 2.41666 10 2.41666V0.916656C7.51473 0.916656 5.50001 2.93138 5.50001 5.41666H7.00001Z"
                      fill="#4B5565"
                    />
                  </svg>
                )}
                <input
                  class="text-md-regular"
                  type={this.isPasswordVisible ? 'text' : 'password'}
                  placeholder={this.placeholder ? this.placeholder : ''}
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
              </div>
              {this.showValidation && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="validation_svg">
                  <path
                    d="M4.16675 12.0833C4.16675 12.0833 5.41675 12.0833 7.08341 15C7.08341 15 11.7158 7.36112 15.8334 5.83334"
                    stroke="#079455"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {this.showHelpIcon && (
                <>
                  {!this.destructive ? (
                    <div class="help-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                          stroke="#697586"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M7.99458 10H8.00057M7.99992 8.00001V5.33334M14.6666 8.00001C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00001C1.33325 4.31811 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.31811 14.6666 8.00001Z"
                        stroke="#B51726"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </>
              )}
              <div class="password_dropdown">
                <gb-password-button state={this.state === 'disabled' ? StateEnum.Disabled : StateEnum.Default} onClick={() => this.togglePasswordVisibility()}></gb-password-button>
              </div>
            </div>
          )}
          {this.type === 'count' && (
            <div class={`input-wrapper ${this.state} ${this.destructive ? 'destructive' : ''} ${this.size}`}>
              <div class="text-input">
                <input
                  class="text-md-regular"
                  placeholder={this.placeholder ? this.placeholder : ''}
                  value={this.inputValue}
                  onInput={event => this.handleInput(event)}
                ></input>
                {this.showHelpIcon && (
                  <svg class="help-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6.66671 5.99998C6.66671 5.2636 7.26366 4.66665 8.00004 4.66665C8.73642 4.66665 9.33337 5.2636 9.33337 5.99998C9.33337 6.26541 9.25581 6.51273 9.12212 6.72051C8.72365 7.33976 8.00004 7.93027 8.00004 8.66665V8.99998M7.9947 11.3333H8.00069M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
                      stroke="#697586"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div class="count-action">
                {this.showCloseButton && (
                  <gb-button class="decrease-btn" size="md" hierarchy="tertiary_gray" icon="only" icon-leading={true} icon-leading-swap="assets/minus_sign.svg"></gb-button>
                )}
                <gb-button class="increase-btn" size="md" hierarchy="tertiary_gray" icon="only" icon-leading={true} icon-leading-swap="assets/plus_sign.svg"></gb-button>
              </div>
            </div>
          )}
        </div>
        {this.showHintText && <p class={`text-sm-regular hint_text ${this.state} ${this.destructive ? 'destructive' : ''}`}>{this.hintText}</p>}
      </div>
    );
  }
}