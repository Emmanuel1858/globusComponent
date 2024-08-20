import { Component, Element, h, Prop } from "@stencil/core";
import { BorderWeights, GeneralSizes, OnlineIndicatorStates } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-profile-photo',
    styleUrl: 'gb-avatar-profile-photo.css',
    shadow: true
})

export class GbAvatarProfilePhoto {
    @Prop() size: GeneralSizes;
    @Prop() weight: BorderWeights = BorderWeights.Light;
    @Prop() statusIcon: string = '';
    @Prop() state: OnlineIndicatorStates = OnlineIndicatorStates.Online;
    @Prop() placeholder: boolean = false;
    @Prop() text: boolean = false;
    @Element() el: HTMLElement;

    getInitialsSize() {
        switch (this.size) {
            case 'lg': return 'display-xl-semi-bold';
            case 'md': return 'display-md-semi-bold';
            case 'sm': return 'display-sm-semi-bold';
        }
    }

    getProfileSize() {
        switch (this.size) {
            case 'lg': return 'profile_lg';
            case 'md': return 'profile_md';
            case 'sm': return 'profile_sm';
        }
    }

    componentDidLoad() {
        const slottedInitials = this.el.querySelector('h1');
    
        if (slottedInitials) {
            slottedInitials.classList.add(this.getInitialsSize());
        }
    }

    render() {
        const profileSize = this.getProfileSize();

        return (
            <div class={`profile_photo ${profileSize}`}>
                <gb-avatar
                size={profileSize}
                state={this.state}
                weight={this.weight}
                placeholder={this.placeholder}
                text={this.text}
                status-icon={this.statusIcon}
                >
                    {!this.text ? (
                        <slot></slot>
                    ) : (
                        <div class="initials">
                            <slot></slot>
                        </div>
                    )}
                </gb-avatar>
            </div>
        );
    }
}