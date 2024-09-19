import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { GeneralColors, GeneralSizes } from '../../models/reusableModels';

@Component({
  tag: 'gb-badge',
  styleUrl: 'gb-badges.css',
  shadow: true
})
export class GbBadges {
  @Prop() size: GeneralSizes;
  @Prop() icon: 'dot' | 'avatar' | 'icon_leading' | 'icon_trailing' | 'country' | 'only';
  @Prop() iconLeadingSrc?: string; 
  @Prop() iconTrailingSrc?: string;
  @Prop() color: GeneralColors;
  @Prop() type: 'pill_color' | 'pill_outline' | 'badge_color' | 'badge_modern';
  @Prop() closeButton?: boolean = false;

  private getDotColor(color: GeneralColors): string {
    const colorMap = {
      'gray': '#4B5565',
      'primary': '#212C65',
      'error': '#B51726',
      'warning': '#DC6803',
      'success': '#079455',
      'discovery': '#0BA5EC',
      'information': '#064E94',
      'pink': '#DD2590',
      'purple': '#6938EF',
    };
    return colorMap[color] || 'currentColor';
  }

  render() {
    const classes = {
      'badge': true,
      [this.type]: true,
      [this.color]: true,
      [this.size]: true
    };

    const countryIconSrc = getAssetPath(`assets/country-icon.svg`);
    const iconLeadingSrc = getAssetPath(`assets/${this.iconLeadingSrc}.svg`);
    const iconTrailingSrc = getAssetPath(`assets/${this.iconTrailingSrc}.svg`);

    const dotColor = this.type === 'badge_modern' ? this.getDotColor(this.color) : 'currentColor';

    return (
      <div class={classes}>
        {this.icon === 'dot' && (           
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill={dotColor}>
            <circle cx="4" cy="4" r="3" />
          </svg>
        )}
        {this.icon === 'icon_leading' && this.iconLeadingSrc && (
          <div class="icon left-icon">
            <img src={iconLeadingSrc} alt="Leading Icon" />
          </div>
        )}
        {this.icon === 'country' && (
          <div class="icon left-icon">
            <img src={countryIconSrc} alt="Country Icon" />
          </div>
        )}
        {this.icon === 'avatar' && (
          <gb-avatar class="avatar-icon" size="xs" status-icon="false">
            <slot name="avatar_image" slot="image"></slot>
          </gb-avatar>
        )}
        {this.icon !== 'only' && (
          <span class="label">
            <slot></slot>
          </span>
        )}
        {this.icon === 'icon_trailing' && this.iconTrailingSrc && (
          <div class="icon right-icon">
            <img src={iconTrailingSrc} alt="Trailing Icon" />
          </div>
        )}
        {this.icon === 'only' &&(
          <div id="icon-only">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" stroke="#DC6803">
              <path d="M6 2L6 10M10 6L2 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        )}
        {this.closeButton && this.icon !== 'only' && <gb-badge-close color={this.color} type='rounded'></gb-badge-close>}
      </div>
    );    
  }    
}
