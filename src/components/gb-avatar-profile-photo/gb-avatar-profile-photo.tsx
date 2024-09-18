import { Component, Element, h, Prop } from "@stencil/core";
import { BorderWeights, GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-profile-photo',
    styleUrl: 'gb-avatar-profile-photo.css',
    shadow: true
})

export class GbAvatarProfilePhoto {
    @Prop() placeholder: boolean = false;
    @Prop() text: boolean = false;
    @Prop() size: GeneralSizes;
    @Prop() verified: boolean = false;
    @Element() el: HTMLElement;
    @Prop() icon: string = 'user';

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

    setWeight() {
        switch (this.size) {
            case 'lg' : return BorderWeights.Heavy;
            case 'md' : return BorderWeights.Heavy;
            case 'sm' : return BorderWeights.Regular;
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
                icon="user"
                text={this.text}
                status-icon={this.verified && ('verified')}
                weight={this.setWeight()}
                placeholder={this.placeholder}
                >
                    {!this.text ? (
                        <slot name="image" slot="image"></slot>
                    ) : (
                        <slot name="initials" slot="initials"></slot>
                    )}
                </gb-avatar>
            </div>
        );
    }
}