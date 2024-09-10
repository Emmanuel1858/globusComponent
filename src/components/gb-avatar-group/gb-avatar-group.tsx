import { Component, Element, h, Prop } from "@stencil/core";
import { BorderWeights, GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-avatar-group',
    styleUrl: 'gb-avatar-group.css',
    shadow: true
})

export class GbAvatarGroup {
    @Prop() size: GeneralSizes;
    @Prop() moreUsers: boolean;
    @Prop() addMoreButton: boolean;
    @Prop() text: boolean = true;
    @Prop() state: StateEnum = StateEnum.Default;
    @Element() el: HTMLElement;

    getNumberSize() {
        switch (this.size) {
            case 'xs' : return 'text-xs-semi-bold';
            case 'sm' : return 'text-sm-semi-bold';
            case 'md' : return 'text-md-semi-bold';
        }
    }

    setWeight() {
        switch (this.size) {
            case 'md' : return BorderWeights.Regular;
            case 'sm' : return BorderWeights.Light;
            case 'xs' : return BorderWeights.Light;
        }
    }

    componentDidLoad() {
        const slottedNumber = this.el.querySelector('p');

        if(slottedNumber) {
            slottedNumber.classList.add(this.getNumberSize());
        }
    }

    render() {
        const array = ['ht', 'hi', 'ht', 'hi', 'ht', 'hi', 'ht', 'hi', 'ht', 'hi', 'ht'];

        return (
          <div class={`avatar_group ${this.size}`}>
            {array.map(
              el =>
                (el = (
                  <div class={`avatar ${this.size}`}>
                    <gb-avatar size={this.size} weight={this.setWeight()}>
                        <h1>{el}</h1>
                    </gb-avatar>
                  </div>
                )),
            )}
            {this.moreUsers && (
              <div class={`avatar ${this.size}`}>
                <gb-avatar text={this.text} size={this.size} weight={this.setWeight()}>
                  <slot name="initials" slot="initials"></slot>
                </gb-avatar>
              </div>
            )}
            {this.addMoreButton && <gb-avatar-add-button state={this.state} size={this.size}></gb-avatar-add-button>}
          </div>
        );
    }
}