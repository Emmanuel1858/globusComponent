import { Component, Prop, h} from "@stencil/core";

@Component({
  tag: 'gb-tag-checkbox',
  styleUrl: 'gb-tag-checkbox.css',
  shadow: true
})

export class GbTagCheckbox {
    @Prop() checked: boolean = false;
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';
    @Prop() disabled: boolean = false;
  
    render() {
      return (
        <label class={`checkbox-container ${this.size} ${this.disabled ? 'disabled' : ''}`}>
          <input 
            type="checkbox" 
            checked={this.checked} 
            disabled={this.disabled} 
          />
          <span class={`custom-checkbox ${this.size}`}>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 7.25C2.5 7.25 3.25 7.25 4.25 9C4.25 9 7.02941 4.41667 9.5 3.5" stroke="white" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </label>
      );
    }
}
