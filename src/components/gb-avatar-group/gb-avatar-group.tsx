import { Component, Element, h, Prop } from "@stencil/core";
import { BorderWeights, GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-group',
    styleUrl: 'gb-avatar-group.css',
    shadow: true
})

export class GbAvatarGroup {
    @Prop() size: GeneralSizes;
    @Prop() moreUser: boolean;
    @Prop() addMoreButton: boolean;
    @Prop() text: boolean = true;
    @Prop() state: StateEnum = StateEnum.Active;
    @Element() el: HTMLElement;

    getNumberSize() {
        switch (this.size) {
            case 'xs' : return 'text-xs-semi-bold';
            case 'sm' : return 'text-sm-semi-bold';
            case 'md' : return 'text-md-semi-bold';
        }
    }

    componentDidLoad() {
        const slottedNumber = this.el.querySelector('p');

        if(slottedNumber) {
            slottedNumber.classList.add(this.getNumberSize());
        }
    }

    render() {
        return (
            <div class={`avatar_group ${this.size}`}>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar weight={BorderWeights.Light} size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size}>
                        <img src="./build/assets/avatar_pic.jpg" alt="" />
                    </gb-avatar>
                </div>
                { this.moreUser && (
                    <div class={`avatar ${this.size}`}>
                        <gb-avatar text={this.text} size={this.size}>
                            <slot></slot>
                        </gb-avatar>
                    </div>
                )}
                { this.addMoreButton && (
                    <gb-avatar-add-button state={this.state} size={this.size}></gb-avatar-add-button>
                )}
            </div>
        )
    }
}