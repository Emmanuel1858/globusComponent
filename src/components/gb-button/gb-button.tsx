import { Component, Element, getAssetPath, h, Prop } from "@stencil/core";
import { GeneralHierarchies, GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-button',
    styleUrl: 'gb-button.css',
    assetsDirs: ['src/assets'],
})

export class GbButton {
    @Prop() size: GeneralSizes = 'xl';
    @Prop() hierarchy: GeneralHierarchies;
    @Prop() leftIcon?: string;
    @Prop() rightIcon?: string;
    @Prop() disabled: boolean = false;
    @Element() el: HTMLElement;

    getTextClass() {
        switch (this.size) {
            case 'xl2' : return 'text-lg-semi-bold';
            case 'xl' : return 'text-md-semi-bold';
            case 'lg' : return 'text-md-semi-bold';
            case 'md' : return 'text-sm-semi-bold';
            case 'sm' : return 'text-sm-semi-bold';
        }
    }

    componentDidLoad() {
        const buttonSlot = this.el.querySelector('p');

        if(buttonSlot) {
            buttonSlot.classList.add(this.getTextClass());
        }
    }

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