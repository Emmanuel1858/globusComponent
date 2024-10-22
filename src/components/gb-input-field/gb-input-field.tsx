import { Component, Prop, h, State, Event, EventEmitter, Fragment, Element, getAssetPath } from '@stencil/core'
import { GeneralSizes, InputFieldTypes } from '../../models/reusableModels'

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
  @Prop() errorText: string = '';
  @Prop() showPlaceholder: boolean = false;
  @Prop() placeholder: string = '';
  @Prop() showHelpIcon: boolean = false;
  @Prop() showValidation: boolean = false;
  @Prop() iconSwap?: string;
  @Prop() showCloseButton?: boolean = false;
  @State() inputValue: string = '';
  @State() tags: string[] = [];
  @State() leadingIconSvg: string = '';
  @State() isPasswordVisible: boolean = false;
  @Event() tagAdded: EventEmitter<string>;
  @Event() valueChanged: EventEmitter<string>;
  @Element() el: HTMLElement;

  async loadIcon(iconName: string) {
    const iconPath = getAssetPath(`${iconName}`);
    const response = await fetch(iconPath);
    const svg = await response.text();
    this.leadingIconSvg = svg;
  }

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
  componentWillLoad() {
    this.loadIcon(this.iconSwap);
  }

  componentDidLoad() {
    const mainTextSlot = this.el.querySelector('[slot="tooltip_label"]');
    const supportingTextSlot = this.el.querySelector('[slot="tooltip_supporting_text"]');

    if (mainTextSlot) {
      mainTextSlot.classList.add('text-xs-semi-bold');
    }

    if (supportingTextSlot) {
      supportingTextSlot.classList.add('text-xs-regular');
    }
  }

  render() {
    return (
      <div class={`input_container`}>
        <div class={`input_with_label`}>
          {this.showLabel && <p class="label text-sm-medium">{this.label}</p>}
          {this.type === 'default' && [
            <div class={`input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <input
                class={`content text-md-regular ${this.type} ${this.state}`}
                type="text"
                placeholder={this.placeholder ? this.placeholder : ''}
                onInput={event => this.handleInput(event)}
              />
              <>
                {this.showValidation && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
              </>
            </div>,
          ]}
          {this.type === 'icon_leading' && [
            <div class={`input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class={`icon ${this.size} ${this.state}`} innerHTML={this.leadingIconSvg}></div>
              <input class={`content text-md-regular ${this.type} ${this.state}`} type="text" placeholder={this.placeholder ? this.placeholder : ''} />
              <>
                {this.showValidation && !this.destructive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
                {this.showCloseButton && !this.destructive && (
                  <gb-button size="sm" hierarchy="tertiary_gray" icon="only" state="default" icon-leading={true} icon-leading-swap="assets/cancel-01.svg"></gb-button>
                )}
              </>
            </div>,
          ]}
          {this.type === 'leading_text' && [
            <div class="leading_text_input">
              <div class={`add_on`}>
                <p class={`text-md-regular`} style={{ color: this.state === 'disabled' ? 'var(--color-text-disabled, #CDD5DF)' : 'var(--color-text, #4B5565)' }}>
                  http://
                </p>
              </div>
              <div class={`input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
                <input class={`content text-md-regular ${this.type} ${this.state}`} type="text" placeholder={this.placeholder ? this.placeholder : ''} />
                {this.showValidation && !this.destructive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
              </div>
            </div>,
          ]}
          {this.type === 'payment_input' && (
            <div class={`input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
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
              <input class={`content text-md-regular ${this.type} ${this.state}`} type="text" placeholder={this.placeholder ? this.placeholder : ''} />
              <>
                {this.showValidation && !this.destructive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
              </>
            </div>
          )}
          {this.type === 'trailing_button' && (
            <div class={`input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class={`trailing_button_text_input`}>
                <input class={`content text-md-regular ${this.type} ${this.state}`} type="text" placeholder={this.placeholder ? this.placeholder : ''} />
                {this.showValidation && !this.destructive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
              </div>
              <gb-button
                size="lg"
                hierarchy="tertiary_gray"
                icon="only"
                state={this.state === 'disabled' ? 'disabled' : 'default'}
                icon-leading={true}
                icon-leading-swap="assets/copy-01.svg"
              ></gb-button>
            </div>
          )}
          {this.type === 'password' && (
            <div class={`password_input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class={`password_content`}>
                <input
                  class={`content text-md-regular ${this.type} ${this.state}`}
                  type={this.isPasswordVisible ? 'text' : 'password'}
                  placeholder={this.placeholder ? this.placeholder : ''}
                />
                {this.showValidation && !this.destructive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
              </div>
              <div class={`dropdown`}>
                <gb-password-button onClick={() => this.togglePasswordVisibility()}></gb-password-button>
              </div>
            </div>
          )}
          {this.type === 'password_icon_leading' && (
            <div class={`input ${this.type} ${this.size} ${this.state} ${this.destructive ? 'destructive' : ''}`}>
              <div class={`password_icon_leading_content`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12.0759 12.1667C11.6617 12.1667 11.3259 12.5025 11.3259 12.9167C11.3259 13.3309 11.6617 13.6667 12.0759 13.6667V12.1667ZM12.0833 13.6667C12.4976 13.6667 12.8333 13.3309 12.8333 12.9167C12.8333 12.5025 12.4976 12.1667 12.0833 12.1667V13.6667ZM7.91668 12.1667C7.50246 12.1667 7.16668 12.5025 7.16668 12.9167C7.16668 13.3309 7.50246 13.6667 7.91668 13.6667V12.1667ZM7.92415 13.6667C8.33836 13.6667 8.67415 13.3309 8.67415 12.9167C8.67415 12.5025 8.33836 12.1667 7.92415 12.1667V13.6667ZM16.4435 10.1294L17.1868 10.0293L16.4435 10.1294ZM13.7003 7.58258L13.7347 6.83337L13.7003 7.58258ZM13.7003 18.2508L13.7347 19L13.7003 18.2508ZM16.4435 15.704L15.7002 15.6039L16.4435 15.704ZM6.29973 7.58258L6.33417 8.33179L6.29973 7.58258ZM3.55652 10.1294L2.81323 10.0293L3.55652 10.1294ZM6.29973 18.2508L6.33417 17.5015L6.29973 18.2508ZM3.55652 15.704L4.29981 15.6039L3.55652 15.704ZM5.50001 7.5C5.50001 7.91422 5.8358 8.25 6.25001 8.25C6.66422 8.25 7.00001 7.91422 7.00001 7.5H5.50001ZM13 7.5C13 7.91422 13.3358 8.25 13.75 8.25C14.1642 8.25 14.5 7.91422 14.5 7.5H13ZM12.0759 13.6667H12.0833V12.1667H12.0759V13.6667ZM7.91668 13.6667H7.92415V12.1667H7.91668V13.6667ZM10 17.5833C8.69057 17.5833 7.50287 17.5553 6.33417 17.5015L6.26528 19C7.45761 19.0548 8.66829 19.0833 10 19.0833V17.5833ZM13.6659 17.5015C12.4972 17.5553 11.3094 17.5833 10 17.5833V19.0833C11.3317 19.0833 12.5424 19.0548 13.7347 19L13.6659 17.5015ZM17.1868 15.804C17.3105 14.8853 17.4167 13.9152 17.4167 12.9167H15.9167C15.9167 13.8142 15.8211 14.7058 15.7002 15.6039L17.1868 15.804ZM17.4167 12.9167C17.4167 11.9181 17.3105 10.948 17.1868 10.0293L15.7002 10.2295C15.8211 11.1275 15.9167 12.0192 15.9167 12.9167H17.4167ZM10 8.25C11.3095 8.25 12.4972 8.27806 13.6659 8.33179L13.7347 6.83337C12.5424 6.77856 11.3317 6.75 10 6.75V8.25ZM6.33417 8.33179C7.50287 8.27806 8.69057 8.25 10 8.25V6.75C8.66829 6.75 7.45761 6.77856 6.26528 6.83337L6.33417 8.33179ZM2.81323 10.0293C2.68953 10.948 2.58334 11.9181 2.58334 12.9167H4.08334C4.08334 12.0192 4.1789 11.1275 4.29981 10.2295L2.81323 10.0293ZM2.58334 12.9167C2.58334 13.9152 2.68953 14.8853 2.81323 15.804L4.29981 15.6039C4.1789 14.7058 4.08334 13.8142 4.08334 12.9167H2.58334ZM17.1868 10.0293C16.9527 8.29067 15.5122 6.91509 13.7347 6.83337L13.6659 8.33179C14.6943 8.37907 15.5595 9.18437 15.7002 10.2295L17.1868 10.0293ZM13.7347 19C15.5122 18.9183 16.9527 17.5427 17.1868 15.804L15.7002 15.6039C15.5595 16.649 14.6943 17.4543 13.6659 17.5015L13.7347 19ZM6.26528 6.83337C4.48781 6.91508 3.04732 8.29067 2.81323 10.0293L4.29981 10.2295C4.44052 9.18437 5.30576 8.37907 6.33417 8.33179L6.26528 6.83337ZM6.33417 17.5015C5.30576 17.4543 4.44052 16.649 4.29981 15.6039L2.81323 15.804C3.04732 17.5427 4.48782 18.9183 6.26528 19L6.33417 17.5015ZM7.00001 7.5V5.41667H5.50001V7.5H7.00001ZM13 5.41667V7.5H14.5V5.41667H13ZM10 2.41667C11.6569 2.41667 13 3.75981 13 5.41667H14.5C14.5 2.93139 12.4853 0.916668 10 0.916668V2.41667ZM7.00001 5.41667C7.00001 3.75981 8.34316 2.41667 10 2.41667V0.916668C7.51473 0.916668 5.50001 2.93139 5.50001 5.41667H7.00001Z"
                    fill="#4B5565"
                  />
                </svg>
                <input
                  class={`content text-md-regular ${this.type} ${this.state}`}
                  type={this.isPasswordVisible ? 'text' : 'password'}
                  placeholder={this.placeholder ? this.placeholder : ''}
                />
              </div>
              {this.showValidation && !this.destructive && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                <div class={`help_circle`}>
                  {!this.destructive ? (
                    <gb-help-tooltip show-supporting-text={true}>
                      <slot name="tooltip_label" slot="label"></slot>
                      <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                    </gb-help-tooltip>
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
                </div>
              )}
              <gb-password-button onClick={() => this.togglePasswordVisibility()}></gb-password-button>
            </div>
          )}
          {this.type === 'count' && [
            <div class={`count_input`}>
              <div class={`count_text_input ${this.destructive ? 'destructive' : ''} ${this.state}`}>
                <input class={`content text-md-regular ${this.type} ${this.state}`} type="text" placeholder={this.placeholder ? this.placeholder : ''} />
                {this.showHelpIcon && (
                  <div class={`help_circle`}>
                    {!this.destructive ? (
                      <gb-help-tooltip show-supporting-text={true}>
                        <slot name="tooltip_label" slot="label"></slot>
                        <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
                      </gb-help-tooltip>
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
                  </div>
                )}
              </div>
              <div class={`action ${this.state}`}>
                <gb-button
                  size="xl"
                  state={this.state === 'disabled' ? 'disabled' : 'default'}
                  hierarchy="tertiary_gray"
                  icon="only"
                  icon-leading="true"
                  icon-leading-swap="assets/minus_sign.svg"
                ></gb-button>
                <hr />
                <gb-button
                  size="xl"
                  state={this.state === 'disabled' ? 'disabled' : 'default'}
                  hierarchy="tertiary_gray"
                  icon="only"
                  icon-leading="true"
                  icon-leading-swap="assets/plus_sign.svg"
                ></gb-button>
              </div>
            </div>,
          ]}
        </div>
        {this.showHintText && <p class="hint_text text-sm-regular">{this.hintText}</p>}
      </div>
    );
  }
}