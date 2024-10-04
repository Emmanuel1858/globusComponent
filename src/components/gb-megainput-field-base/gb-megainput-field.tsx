import { Component, h, Prop, State, Element } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-megainput-field',
    styleUrl: 'gb-megainput-field.css',
    shadow: true
})

export class GbMegaInputField {
    @Prop() size: GeneralSizes;
    @Prop() state: 'placeholder' | 'disabled';
    @State() inputValue: string = '';
    @Element() el: HTMLElement;

    handleInput(event: Event) {
        const input = (event.target as HTMLInputElement).value;
    
        // Allow only one digit in the input field
        if (input.length <= 1) {
          this.inputValue = input; // Set the input value
        } else {
          this.inputValue = input[0]; // Keep only the first character if more is entered
        }
    }

    render() {
        return (
            <div class={{
                [this.size] : true,
                disabled: this.state === 'disabled'
            }}>
                <input  
                class={{
                    [this.size] : true,
                    disabled: this.state === 'disabled'
                }}
                type="number" 
                min="0" max="1" 
                placeholder="0"
                value={this.inputValue}
                onInput={(event) => this.handleInput(event)}>
                </input>
            </div>
            
        )
    }
}