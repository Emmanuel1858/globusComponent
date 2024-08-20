import { Component, h, Prop } from "@stencil/core";
import { CheckBoxStates, CheckBoxVariants, GeneralSizes } from '../../models/reusableModels';

@Component({
    tag: 'gb-checkbox-base',
    styleUrl: 'gb-checkbox-base.css',
    shadow: true
})

export class GbCheckboxBase {
    @Prop({ mutable: true }) state: CheckBoxStates;
    @Prop() size: GeneralSizes;
    @Prop() type: CheckBoxVariants;
    @Prop({ mutable: true }) checked: boolean = false;
    @Prop({ mutable: true }) indeterminate: boolean = false;

    private renderSVG() {
        switch (this.type) {
            case 'checkbox':
              return this.renderCheckbox();
            case 'check_circle':
              return this.renderCircle();
            case 'radio':
              return this.renderRadio();
            default:
              return null;
          }
    }

    private renderCheckbox() {
        if (this.state === CheckBoxStates.Default && this.checked) {
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`checkbox_default_checked ${this.size}`}>
              <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" fill="#075DB2"/>
              <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" stroke="#075DB2" class="border"/>
              <path d="M4.5 9.25C4.5 9.25 5.25 9.25 6.25 11C6.25 11 9.02941 6.41667 11.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            );
        } else if (this.state === CheckBoxStates.Default && this.indeterminate) {
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`checkbox_default_indeterminate ${this.size}`}>
                <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" fill="#075DB2"/>
                <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" stroke="#075DB2" class="border"/>
                <path d="M12 8L4 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          );
        } else if (this.state === CheckBoxStates.Disabled && !this.checked) {
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`checkbox_disabled_unchecked ${this.size}`}>
                  <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" fill="#F6F8FA"/>
                  <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" stroke="#E3E8EF"/>
                </svg>
            )
        } else if (this.state === CheckBoxStates.Disabled && this.checked) {
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`${this.size}`}>
                  <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" fill="#F6F8FA"/>
                  <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" stroke="#E3E8EF"/>
                  <path d="M4.5 9.25C4.5 9.25 5.25 9.25 6.25 11C6.25 11 9.02941 6.41667 11.5 5.5" stroke="#CDD5DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )
        } else if (this.state === CheckBoxStates.Disabled && this.indeterminate && this.checked) {
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`${this.size}`}>
            <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" fill="#F6F8FA"/>
            <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" stroke="#E3E8EF"/>
            <path d="M12 8L4 8" stroke="#CDD5DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      } else {
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`checkbox_default_unchecked ${this.size}`}>
              <path d="M0.5 8C0.5 6.10025 0.501062 4.72573 0.641988 3.67754C0.78098 2.64373 1.04772 2.00253 1.52513 1.52513C2.00253 1.04772 2.64373 0.78098 3.67754 0.641988C4.72573 0.501062 6.10025 0.5 8 0.5C9.89975 0.5 11.2743 0.501062 12.3225 0.641988C13.3563 0.78098 13.9975 1.04772 14.4749 1.52513C14.9523 2.00253 15.219 2.64373 15.358 3.67754C15.4989 4.72573 15.5 6.10025 15.5 8C15.5 9.89975 15.4989 11.2743 15.358 12.3225C15.219 13.3563 14.9523 13.9975 14.4749 14.4749C13.9975 14.9523 13.3563 15.219 12.3225 15.358C11.2743 15.4989 9.89975 15.5 8 15.5C6.10025 15.5 4.72573 15.4989 3.67754 15.358C2.64373 15.219 2.00253 14.9523 1.52513 14.4749C1.04772 13.9975 0.78098 13.3563 0.641988 12.3225C0.501062 11.2743 0.5 9.89975 0.5 8Z" stroke="#CDD5DF"/>
            </svg>
          );
        }
    }

    private renderCircle() {
      if(this.checked && this.state === CheckBoxStates.Default){
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`circle_default_checked ${this.size}`}>
            <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#075DB2" class="background"/>
            <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#075DB2"/>
            <path d="M5.0835 9.04166C5.0835 9.04166 5.7085 9.04166 6.54183 10.5C6.54183 10.5 8.85801 6.68055 10.9168 5.91666" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      } else if (!this.checked && this.state === CheckBoxStates.Default){
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`circle_default_unchecked ${this.size}`}>
              <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#CDD5DF"/>
          </svg>
        )
      } else if(this.checked && this.state === CheckBoxStates.Disabled) {
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`circle_disabled_checked ${this.size}`}>
            <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#F6F8FA"/>
            <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#E3E8EF"/>
            <path d="M5.08325 9.04167C5.08325 9.04167 5.70825 9.04167 6.54159 10.5C6.54159 10.5 8.85776 6.68056 10.9166 5.91667" stroke="#CDD5DF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        )
      } else if (!this.checked && this.state === CheckBoxStates.Disabled) {
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`circle_disabled_unchecked ${this.size}`}>
                <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#E3E8EF"/>
            </svg>
          );
      }
    }
    
    private renderRadio() {
        if (this.state === CheckBoxStates.Default && this.checked) {
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`radio_default_checked ${this.size}`}>
                <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#075DB2"/>
                <circle cx="8" cy="8" r="3" fill="#075DB2"/>
            </svg>
          );
        } else if (this.state === CheckBoxStates.Disabled && !this.checked) {
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`radio_disabled_unchecked ${this.size}`}>
              <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#E3E8EF"/>
            </svg>
          );
        } else if (this.state === CheckBoxStates.Disabled && this.checked) {
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`radio_disabled_checked ${this.size}`}>
                    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#E3E8EF"/>
                    <circle cx="8" cy="8" r="3" fill="#E3E8EF"/>
                </svg>
            );
          } else {
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={`radio_default_unchecked ${this.size}`}>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#CDD5DF"/>
                    </svg>
                );
        }
    }

    private toggleCheckboxState() {
        if(this.state === CheckBoxStates.Default && !this.checked) {
          this.checked = true;
        } else if (this.state === CheckBoxStates.Default && this.checked) {
          this.checked = false;
        }
    }

    private toggleCheckCircleState() {
      if(this.state === CheckBoxStates.Disabled && this.checked ||
        this.state === CheckBoxStates.Disabled && !this.checked
      ) {
        return;
      }

      if(this.state === CheckBoxStates.Default && !this.checked) {
        this.checked = true;
      } else if (this.state == CheckBoxStates.Default && this.checked) {
        this.checked = false;
      }
    }

    private toggleRadioButtonState() {
      if(this.state === CheckBoxStates.Disabled && !this.checked ||
        this.state === CheckBoxStates.Disabled && this.checked
      ) {
        return;
      }
        if(this.state === CheckBoxStates.Default && !this.checked) {
          this.checked = true;
        }
    }

    render() {
        return (
            <div 
            class={`checkbox_container ${this.size}`}
            onClick={
                () => {
                    if (this.type === 'checkbox') {
                        return this.toggleCheckboxState();
                    } else if (this.type === 'check_circle') {
                        return this.toggleCheckCircleState();
                    } else if (this.type === 'radio') {
                        return this.toggleRadioButtonState();
                    }
                }
            }>
                {this.renderSVG()}
            </div>
        )
    }
}