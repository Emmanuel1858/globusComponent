import { Component, h } from "@stencil/core";

@Component({
    tag: 'test-button',
    styleUrl: 'button.css',
})

export class Button {
    render(){
        return (
            <button class="btn">Save</button>
        );
    }
} 