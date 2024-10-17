import { Component, Method, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'gb-tag',
  styleUrl: 'gb-tag.css',
  shadow: true,
})
export class GbTag {
  @Prop() size: 'sm' | 'md' | 'lg';
  @Prop() icon?: 'country' | 'avatar' | 'dot';
  @Prop() action: 'X_close' | 'text_only' | 'count';
  @Prop() flagSwap: string;
  @Prop() checkbox?: boolean;

  @Method()
  async onTagClose() {
    console.log('close tag clicked');
  }

  render() {
    const flagSwap = getAssetPath(`assets/${this.flagSwap}.svg`);

    return (
      <div class={`container ${this.size}`}>
        <div class={`content ${this.size}`}>
          {this.checkbox && <gb-tag-checkbox size={this.size}></gb-tag-checkbox>}
          {this.icon === 'country' && (
            <div class="icon left-icon">
              <img src={flagSwap} alt="Country Icon" />
            </div>
          )}
          {this.icon === 'avatar' && (
            <gb-avatar class="avatar-icon" size="xxs" status-icon="false" text={true} color="gray">
              <slot name="initials" slot="initials"></slot>
            </gb-avatar>
          )}
          {this.icon === 'dot' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="3" fill="#17B26A" />
            </svg>
          )}
          <slot></slot>
          {this.action === 'count' && (
            <gb-tag-count size={this.size}>
              <slot slot="count" name="count"></slot>
            </gb-tag-count>
          )}
        </div>
        {this.action === 'X_close' && <gb-tag-close size={this.size} onClick={() => this.onTagClose()}></gb-tag-close>}
      </div>
    );
  }
}