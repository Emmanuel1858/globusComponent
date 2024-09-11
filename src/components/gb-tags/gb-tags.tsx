import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
    tag: 'gb-tag',
    styleUrl: 'gb-tags.css',
    shadow: true
})

export class Tag {
    @Prop() size: 'sm' | 'md' | 'lg';
    @Prop() icon?: 'country' | 'avatar' | 'dot';
    @Prop() checkbox?: boolean;
    @Prop() closeButton?: boolean;
    @Prop() count?: boolean;

    render() {

        const countryIconSrc = getAssetPath(`assets/country-icon.svg`);

        return (
           <div class={this.size}>
                {this.checkbox && (
                    <gb-tag-checkbox size={this.size}></gb-tag-checkbox>
                )}
                {this.icon === 'country' && (
                    <div class="icon left-icon">
                        <img src={countryIconSrc} alt="Country Icon" />
                    </div>
                )}
                {this.icon ==='avatar' && (
                    <gb-avatar class="avatar-icon" size="xs" status-icon="false">
                        <img src="./build/assets/avatar_pic.jpg"></img>
                    </gb-avatar>
                )}
                {this.icon === 'dot' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="3" fill="#17B26A"/>
                    </svg>
                )}
                <span class="label">
                    <slot></slot>
                </span>
                {this.closeButton && (
                    <gb-tag-close size={this.size}></gb-tag-close>
                )}
                {this.count && (
                    <gb-tag-count></gb-tag-count>
                )}
           </div>
        );
    }
}