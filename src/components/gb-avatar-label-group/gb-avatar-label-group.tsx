import { Component, Element, h, Prop } from "@stencil/core";
import { GeneralSizes, OnlineIndicatorStates } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-label-group',
    styleUrl: 'gb-avatar-label-group.css',
    shadow: true
})

export class GbAvatarLabelGroup {
    @Prop() size: GeneralSizes;
    @Prop() statusIcon: string = '';
    @Prop() state: OnlineIndicatorStates = OnlineIndicatorStates.Online;
    @Prop() placeholder: boolean = false;
    @Prop() text: boolean = false;
    @Element() el: HTMLElement;

    getInitialsSize() {
        switch (this.size) {
            case 'xl2': return 'display-xs-semi-bold';
            case 'xl': return 'text-xl-semi-bold';
            case 'lg': return 'text-lg-semi-bold';
            case 'md': return 'text-md-semi-bold';
            case 'sm': return 'text-sm-semi-bold';
            case 'xs': return 'text-xs-semi-bold';
        }
    }

    getNameSize() {
        switch (this.size) {
          case 'xl':
            return 'text-lg-semi-bold';
          case 'lg':
            return 'text-md-semi-bold';
          case 'md':
            return 'text-sm-semi-bold';
          case 'sm':
            return 'text-sm-semi-bold';
        }
    }

    getOtherTextSize() {
        switch (this.size) {
            case 'xl':
                return 'text-md-regular';
            case 'lg':
                return 'text-md-regular';
            case 'md':
                return 'text-sm-regular';
            case 'sm':
                return 'text-xs-regular';
        }
    }

    componentDidLoad() {
        const slottedInitials = this.el.querySelector('h1');
        const nameSlot = this.el.querySelector('[slot="name"]');
        const othersSlot = this.el.querySelector('[slot="supporting_text"]');
    
        if (slottedInitials) {
            slottedInitials.classList.add(this.getInitialsSize());
        }

        if (nameSlot) {
          nameSlot.classList.add(this.getNameSize());
        }
    
        if (othersSlot) {
          othersSlot.classList.add(this.getOtherTextSize());
        }
    }

    render() {
        return (
            <div class={`label ${this.size}`}>
                <div class="label_pic">
                    <gb-avatar
                    size={this.size}
                    status-icon={this.statusIcon}
                    state={this.state}
                    text={this.text}
                    placeholder={this.placeholder}
                    >
                        {!this.text ? (
                            <slot></slot>
                        ) : (
                            <slot></slot>
                        )}
                    </gb-avatar>
                </div>
                <div class="label_text">
                    <slot name="name"></slot>
                    <slot name="supporting_text"></slot>
                </div>
            </div>
        )
    }
}