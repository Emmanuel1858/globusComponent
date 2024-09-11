import { Component, h, Prop } from "@stencil/core";
import { GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-add-button',
    styleUrl: 'gb-avatar-add-button.css',
    shadow: true
})

export class GbAvatarAddButton {
    @Prop() size: GeneralSizes;
    @Prop({ mutable: true }) showToolTip: boolean = false;
    @Prop() state: StateEnum;
    @Prop() el: HTMLElement;

    render() {
        return (
            <div>
                {this.showToolTip && (
                    <gb-tooltip class={`tooltip ${this.size}`} arrow="bottom_center" supporting-text="false">
                        <p slot="main_text" class="text-xs-semi-bold">Add User</p>
                    </gb-tooltip>
                )}
                <div class={`avatar_back ${this.size} ${this.state}`} onMouseEnter={() => {this.showToolTip = true}} onMouseLeave={() => {this.showToolTip = false}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class={`plus_sign ${this.size} ${this.state}`}>
                        <path d="M8.00008 2.6665V13.3332M13.3334 7.99984H2.66675" stroke="#697586" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        )
    }
}