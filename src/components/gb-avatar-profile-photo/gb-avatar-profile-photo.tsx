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
                status-icon={this.verified && ('verified_tick')}
                weight={this.setWeight()}
                >
                    {!this.text ? (
                        <slot></slot>
                    ) : (
                        <slot name="initials" slot="initials"></slot>
                    )}
                    { this.placeholder && (
                            <div class={`placeholder`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class={`user_avatar ${this.size}`}>
                                    <path d="M11.8706 9.89137C11.9482 9.93754 12.044 9.99158 12.1524 10.0528C12.6276 10.3209 13.3459 10.7261 13.8381 11.2078C14.1458 11.5091 14.4383 11.9061 14.4914 12.3924C14.548 12.9097 14.3223 13.395 13.8697 13.8263C13.0887 14.5703 12.1515 15.1666 10.9393 15.1666H5.06045C3.84825 15.1666 2.91106 14.5703 2.13009 13.8263C1.67741 13.395 1.45177 12.9097 1.50831 12.3924C1.56147 11.9061 1.85391 11.5091 2.16169 11.2078C2.6538 10.7261 3.37214 10.3209 3.84735 10.0528C3.95578 9.99158 4.05158 9.93754 4.12912 9.89137C6.49848 8.48055 9.50126 8.48055 11.8706 9.89137Z" fill="#697586"/>
                                    <path d="M4.49987 4.33325C4.49987 2.40026 6.06688 0.833252 7.99987 0.833252C9.93287 0.833252 11.4999 2.40026 11.4999 4.33325C11.4999 6.26625 9.93287 7.83325 7.99987 7.83325C6.06688 7.83325 4.49987 6.26625 4.49987 4.33325Z" fill="#697586"/>
                                </svg>
                            </div>
                        )}
                </gb-avatar>
            </div>
        );
    }
}