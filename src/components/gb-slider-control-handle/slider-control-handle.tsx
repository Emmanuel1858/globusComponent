import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'gb-slider-control-handle',
  styleUrl: 'slider-control-handle.css',
  shadow: true,
})
export class SliderControlHandle {
  @Prop() value: number = 0;
  @Prop() type?: 'text' | 'tooltip'; 
  
  @State() isHovered: boolean = false; 
  @State() isFocused: boolean = false; 

  handleMouseEnter() {
    this.isHovered = true;
  }

  handleMouseLeave() {
    this.isHovered = false;
  }

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }

  render() {
    return (
      <div
        class={`thumb-container ${this.type} ${this.isHovered ? 'hover' : ''} ${this.isFocused ? 'focused' : ''}`}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
        tabindex="0"
      >
          {this.type === 'tooltip' && (
            <div class="tooltip-container">
              <gb-tooltip arrow='none'>
                <p class="text-xs-semi-bold" slot="main_text">{this.value}%</p>
              </gb-tooltip>
            </div>
          )}
          {this.type === 'text' && (
            <div class="thumb-label">
              {this.value}%
            </div>
          )}
        </div>
    );
  }
}
