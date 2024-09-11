import { Component, Prop, State, h } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-input-dropdown',
    styleUrl: 'gb-input-dropdown.css',
    shadow: true
})

export class GbInputDropdown {
    [x: string]: any;
    @Prop() size: GeneralSizes;
    @Prop() type: 'icon_leading' | 'avatar_leading' | 'dot_leading' | 'search' | 'tags' ;
    @Prop() showLabel: boolean;
    @Prop() label: string = '';
    @Prop() placeholder: string = '';
    @Prop() showHelpIcon: boolean;
    @Prop() showHintText: boolean;
    @Prop() hintText: string = '';
    @Prop() state: 'default' | 'disabled' = 'default';
    @Prop() showSupportingText: boolean;
    
    @State() selected: boolean = false;

    handleFocus() {
        this.selected = true;
    }
    
    handleBlur() {
        this.selected = false;
    }

    /*componentWillLoad() {
        const selectElement = this.shadowRoot.querySelector('select');
        if (selectElement && this.options.length > 0) {
          selectElement.innerHTML = `<option value="" disabled selected>${this.placeholder}</option>` + 
            this.options.map(option => `<option value="${option}">${option}</option>`).join('');
        }
    }*/

    render() {

        const classes = {
            dropdown: true,
            [this.size]: true,
            'filled': this.selected,
            'disabled': this.state === 'disabled'
        }
        
        return (
            <div class="dropdown-container">
                {this.showLabel && (
                    <label htmlFor="dropdown-label">{this.label}</label>
                )}
                <div class={classes}>   
                    {this.type === 'icon_leading' && (
                        <div class="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5.48131 12.9013C4.30234 13.6033 1.21114 15.0368 3.09388 16.8305C4.01359 17.7067 5.03791 18.3333 6.32572 18.3333H13.6743C14.9621 18.3333 15.9864 17.7067 16.9061 16.8305C18.7889 15.0368 15.6977 13.6033 14.5187 12.9013C11.754 11.2551 8.24599 11.2551 5.48131 12.9013Z" stroke="#697586" stroke-width="1.66667"/>
                                <path d="M13.75 5.41666C13.75 7.48772 12.0711 9.16666 10 9.16666C7.92893 9.16666 6.25 7.48772 6.25 5.41666C6.25 3.34559 7.92893 1.66666 10 1.66666C12.0711 1.66666 13.75 3.34559 13.75 5.41666Z" stroke="#697586" stroke-width="1.66667"/>
                            </svg>
                        </div>
                    )}
                    {this.type === 'avatar_leading' && (
                        <div class="icon-wrapper">
                             <gb-avatar class="avatar-icon" size="xs" status-icon="false">                                
                                <slot name='image' slot='image'></slot>
                            </gb-avatar>
                        </div>
                    )}
                    {this.type === 'dot_leading' && (
                        <div class="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <circle cx="5" cy="5" r="4" fill="#079455"/>
                            </svg>
                        </div>
                    )}
                    {this.type === 'search' && (
                        <div class="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.5833 14.5833L18.3333 18.3333M16.6667 9.16667C16.6667 5.02453 13.3088 1.66667 9.16667 1.66667C5.02454 1.66667 1.66667 5.02453 1.66667 9.16667C1.66667 13.3088 5.02454 16.6667 9.16667 16.6667C13.3088 16.6667 16.6667 13.3088 16.6667 9.16667Z" stroke="#697586" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>    
                    )}
                    {this.type === 'tags' && (
                        <div class="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.5834 14.5833L18.3334 18.3333M16.6667 9.16667C16.6667 5.02454 13.3088 1.66667 9.16669 1.66667C5.02455 1.66667 1.66669 5.02454 1.66669 9.16667C1.66669 13.3088 5.02455 16.6667 9.16669 16.6667C13.3088 16.6667 16.6667 13.3088 16.6667 9.16667Z" stroke="#697586" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </div>
                    )}  
                    <select
                        onFocus={() => this.handleFocus()}
                        onBlur={() => this.handleBlur()}
                        class={this.selected ? 'filled' : ''}
                        disabled={this.state === 'disabled'}
                    >
                        <option value="" disabled selected>{this.placeholder}</option>
                        <slot name="dropdown-options">  
                        </slot>
                    </select>

                    {this.showHelpIcon && (
                        <div class="help-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6.66665 6.00001C6.66665 5.26363 7.2636 4.66668 7.99998 4.66668C8.73636 4.66668 9.33331 5.26363 9.33331 6.00001C9.33331 6.26544 9.25575 6.51276 9.12205 6.72054C8.72358 7.33979 7.99998 7.9303 7.99998 8.66668V9.00001M7.99464 11.3333H8.00063M14.6666 8.00001C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00001C1.33331 4.31811 4.31808 1.33334 7.99998 1.33334C11.6819 1.33334 14.6666 4.31811 14.6666 8.00001Z" stroke="#697586" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </div>
                    )}
                </div>
                {this.showHintText && (
                    <div class="hint-text">
                        {this.hintText}
                    </div>
                )}
            </div>
                
        );
    }
}    
        