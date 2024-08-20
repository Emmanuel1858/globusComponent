import { Component, Element, h, Prop } from "@stencil/core";
import { GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-toggle',
    styleUrl: 'gb-toggle.css'
})

export class GbToggle {
    @Prop() size: GeneralSizes;
    @Prop() state: StateEnum;
    @Prop() supportingText: boolean = false;
    @Element() el: HTMLElement;

    getMainTextClass() {
        switch(this.size) {
            case 'sm' : return `text-sm-medium`;
            case 'md' : return `text-md-medium`;
        }
    }

    getSupportingTextClass() {
        switch(this.size) {
            case 'sm' : return 'text-sm-regular';
            case 'md' : return 'text-md-regular';
        }
    }

    componentDidLoad() {
        const mainTextSlot = this.el.querySelector('[slot="main_text"]');
        const supportingTextSlot = this.el.querySelector('[slot="supporting_text"]');
        const mainDiv = this.el.querySelector('.text');

        if(mainTextSlot){
            mainTextSlot.classList.add(this.getMainTextClass());
        }

        if(supportingTextSlot) {
            supportingTextSlot.classList.add(this.getSupportingTextClass());
        }

        if(!this.supportingText) {
            mainDiv.classList.add('div_centered');
        }
    }

    render() {
        return (
            <div class={`toggle_div ${this.size}`}>
                <div class="toggle_base">
                    <gb-toggle-base 
                    size={this.size}
                    state={this.state}
                    ></gb-toggle-base>
                </div>
                <div class="text">
                    <slot name="main_text"></slot>
                    {this.supportingText && (
                        <slot name="supporting_text"></slot>
                    )}
                </div>
            </div>
        )
    }
}