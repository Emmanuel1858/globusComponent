import { Component, getAssetPath, h, Prop, State } from "@stencil/core";

@Component({
    tag: 'button-cta',
    styleUrl: 'button-cta.css',
    assetsDirs: ['src/assets'],
})

export class ButtonCta {
    @Prop() size: '2xl' | 'xl' | 'lg' | 'md' | 'sm' = 'xl';
    @Prop() hierarchy: 'primary' | 'secondary-gray' | 'secondary-color' | 'tertiary-gray' | 'tertiary-color' | 'link-gray' | 'link-color';
    @Prop() leftIcon?: string;
    @Prop() rightIcon?: string;
    @Prop() disabled: boolean = false;
    @State() isDarkTheme: boolean = false;

    render() {
        const classes = {
            button: true,
            [this.size]: true,
            [this.hierarchy]: true,
            disabled: this.disabled
          };

          const leftIconSrc = getAssetPath(`assets/${this.leftIcon}.svg`);
          const rightIconSrc = getAssetPath(`assets/${this.rightIcon}.svg`);

        return (
            <button class={classes} disabled={this.disabled}>
                {this.leftIcon && (
                <div class="icon left-icon">
                    <img src={leftIconSrc} alt="Left Icon" />
                </div>
                )}
                <slot></slot>
                {this.rightIcon && (
                    <div class="icon right-icon">
                        <img src={rightIconSrc} alt="Right Icon" />
                    </div>
                )}
            </button>
        )
    }
}