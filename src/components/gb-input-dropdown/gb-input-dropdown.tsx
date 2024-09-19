import { Component, Prop, h, Fragment } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
  tag: 'gb-input-dropdown',
  styleUrl: 'gb-input-dropdown.css',
  shadow: true,
})
export class GbInputDropdown {
  @Prop() type: 'default' | 'icon_leading' | 'avatar_leading' | 'dot_leading' | 'search' | 'tags';
  @Prop() state: 'default' | 'focused' | 'disabled' | 'filled';
  @Prop() size: GeneralSizes;
  @Prop() showLabel: boolean = false;
  @Prop() label: string = '';
  @Prop() showPlaceholder: boolean = false;
  @Prop() placeholderText: string = '';
  @Prop() showHintText: boolean;
  @Prop() hintText: string = '';
  @Prop() showHelpIcon: boolean;
  @Prop() iconSwap: string = '';

  getAvatarSize() {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'md':
        return 'xs';
    }
  }

  render() {
    return (
      <div class={`input_dropdown_container`}>
        {this.showLabel && (
          <p class="text-sm-regular" style={{ color: '#4B5565' }}>
            {this.label}
          </p>
        )}
        <div class={`input_dropdown_div ${this.size} ${this.state}`}>
          {this.type === 'icon_leading' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5.48131 12.9013C4.30234 13.6033 1.21114 15.0368 3.09388 16.8305C4.01359 17.7067 5.03791 18.3333 6.32572 18.3333H13.6743C14.9621 18.3333 15.9864 17.7067 16.9061 16.8305C18.7889 15.0368 15.6977 13.6033 14.5187 12.9013C11.754 11.2551 8.24599 11.2551 5.48131 12.9013Z"
                stroke="#697586"
                stroke-width="1.66667"
              />
              <path
                d="M13.75 5.41667C13.75 7.48774 12.0711 9.16667 10 9.16667C7.92893 9.16667 6.25 7.48774 6.25 5.41667C6.25 3.3456 7.92893 1.66667 10 1.66667C12.0711 1.66667 13.75 3.3456 13.75 5.41667Z"
                stroke="#697586"
                stroke-width="1.66667"
              />
            </svg>
          )}
          {this.type === 'avatar_leading' && <gb-avatar size="xs"></gb-avatar>}
          {this.type === 'search' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M14.5833 14.5833L18.3333 18.3333M16.6667 9.16667C16.6667 5.02454 13.3088 1.66667 9.16667 1.66667C5.02454 1.66667 1.66667 5.02454 1.66667 9.16667C1.66667 13.3088 5.02454 16.6667 9.16667 16.6667C13.3088 16.6667 16.6667 13.3088 16.6667 9.16667Z"
                stroke="#697586"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
          {this.type === 'dot_leading' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" class={`dot ${this.size}`}>
              <circle cx="5" cy="5" r="4" fill="#079455" />
            </svg>
          )}
          <div class="placeholder">
            <>
              {this.state === 'default' && (
                <>
                  {this.showPlaceholder && (
                    <p class="text-md-regular" style={{ color: '#CDD5DF' }}>
                      Select team member
                    </p>
                  )}
                </>
              )}
              {this.state === 'filled' && (
                <>
                  <div class="content">
                    <div class="text text-md-regular" style={{ color: '#4B5565' }}>
                      Olivia Rhye
                    </div>
                    <div class="supporting_text text-sm-regular" style={{ color: '#697586' }}>
                      @olivia
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
          {this.showHelpIcon && (
            <div class={`help_icon`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6.66665 6C6.66665 5.26362 7.2636 4.66667 7.99998 4.66667C8.73636 4.66667 9.33331 5.26362 9.33331 6C9.33331 6.26543 9.25575 6.51275 9.12205 6.72053C8.72358 7.33978 7.99998 7.93029 7.99998 8.66667V9M7.99464 11.3333H8.00063M14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8Z"
                  stroke="#697586"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
          <div class="dropdown_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class={`${this.state}`}>
              <path
                d="M15 7.50004C15 7.50004 11.3176 12.5 9.99996 12.5C8.68237 12.5 5 7.5 5 7.5"
                stroke="#697586"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {this.showHintText && (
          <p class="text-sm-regular" style={{ color: '#697586' }}>
            {this.hintText}
          </p>
        )}
      </div>
    );
  }
}    
        