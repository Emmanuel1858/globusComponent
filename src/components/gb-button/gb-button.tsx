import { Component, Element, getAssetPath, h, Prop, Fragment } from "@stencil/core";
import { GeneralHierarchies, GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-button',
    styleUrl: 'gb-button.css',
    assetsDirs: ['src/assets'],
})

export class GbButton {
    @Prop() size: GeneralSizes = 'xl';
    @Prop() hierarchy: GeneralHierarchies;
    @Prop() icon: 'default' | 'only';
    @Prop() destructive: boolean = false;
    @Prop() state: StateEnum;
    @Prop() iconLeading: boolean = false;
    @Prop() iconLeadingSwap?: string;
    @Prop() iconTrailing: boolean = false;
    @Prop() iconTrailingSwap?: string;
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

          const iconLeadingSrc = getAssetPath(`assets/${this.iconLeadingSwap}.svg`);
          const iconTrailingSrc = getAssetPath(`assets/${this.iconTrailingSwap}.svg`);

        return (
            <button class={`${this.size} 
            ${this.hierarchy} 
            ${this.destructive ? 'destructive' : ''} 
            ${this.state}
            ${this.icon}`}>
                {this.icon === 'default' && (
                    <>
                        {this.iconLeading && (
                            <div class="icon left-icon">
                                <span class="icon" innerHTML={iconLeadingSrc}></span>
                            </div>
                        )}
                        <slot></slot>
                        {this.iconTrailing && (
                            <div class="icon right-icon">
                                <span class="icon" innerHTML={iconTrailingSrc}></span>
                            </div>
                        )}
                    </>
                )}
                {this.icon === 'only' && (
                    <img src={iconLeadingSrc} alt="Icon" />
                )}
            </button>
        )
    }
}