import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'collapse-button',
    styleUrl: 'collapse-button.css'
})

export class CollapseButton {
    @Prop() isHovered: boolean = false;

    render() {
        return [
            <div onMouseEnter={() => this.isHovered = true} 
            onMouseLeave={() => this.isHovered = false}>
            </div>
        ]
    }
}