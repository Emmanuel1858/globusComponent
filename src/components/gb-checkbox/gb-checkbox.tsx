import { Component, Element, h, Prop } from "@stencil/core";
import { CheckBoxStates, CheckBoxVariants, GeneralSizes } from "../../models/reusableModels";

@Component({
    tag:'gb-checkbox',
    styleUrl: 'gb-checkbox.css',
    shadow: true
})

export class GbCheckbox {
    @Prop() checked: boolean =  false;
    @Prop() indeterminate: boolean = false;
    @Prop() size: GeneralSizes;
    @Prop() type: CheckBoxVariants;
    @Prop() state: CheckBoxStates;
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
            case 'sm' : return 'text-xs-regular';
            case 'md' : return 'text-sm-regular';
        }
    }

    componentDidLoad() {
        const mainTextSlot = this.el.querySelector('[slot="label"]');
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
            <div class={`checkbox_div ${this.size}`}>
                <div class="checkbox_base">
                    <gb-checkbox-base 
                    size={this.size} 
                    type={this.type} 
                    checked={this.checked}
                    state={this.state}
                    indeterminate={this.indeterminate}
                    ></gb-checkbox-base>
                </div>
                <div class="text">
                    <slot name="label"></slot>
                    {this.supportingText && (
                        <slot name="supporting_text"></slot>
                    )}
                </div>
            </div>
        )
    }
}