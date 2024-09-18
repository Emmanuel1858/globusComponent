import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'gb-scrollbar',
  styleUrl: 'gb-scrollbar.css',
  shadow: true,
})
export class GbScrollbar {
  // Prop to accept length value (25%, 50%, or 75%)
  @Prop() length: '25%' | '50%' | '75%' = '25%';

  render() {
    return (
      <div class="scrollbar-container">
        <div class="scrollbar" style={{ height: this.length }}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
