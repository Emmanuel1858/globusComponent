import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'gb-collapse-button',
    styleUrl: 'gb-collapse-button.css',
    shadow: true
})

export class GbCollapseButton {
    @Prop({ mutable: true }) currentIconDirection: string = 'left';
    @Prop({ mutable: true }) isHovered: boolean = false;

    toggleIcon() {
        if (this.currentIconDirection === 'left') {
            this.currentIconDirection = 'right';
        } else if (this.currentIconDirection === 'right') {
            this.currentIconDirection = 'left';
        }
    }

    render() {
        return [
            <div>
                <div 
                    class="collapse_btn" onClick={this.toggleIcon.bind(this)} 
                    onMouseEnter={() => this.isHovered = true} 
                    onMouseLeave={() => this.isHovered = false}
                    >
                    {this.currentIconDirection === 'left' && [
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                            <path d="M9.58321 15C9.58321 15 4.58326 11.3176 4.58325 9.99996C4.58324 8.68237 9.58325 5 9.58325 5M15.4165 15C15.4165 15 10.4166 11.3176 10.4166 9.99996C10.4166 8.68237 15.4166 5 15.4166 5" stroke="#4B5565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    ]}
                    {this.currentIconDirection === 'right' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                            <path d="M10.4166 15C10.4166 15 15.4166 11.3176 15.4166 9.99996C15.4166 8.68237 10.4166 5 10.4166 5M4.58329 15C4.58329 15 9.58324 11.3176 9.58325 9.99996C9.58326 8.68237 4.58325 5 4.58325 5" stroke="#4B5565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    )}
                </div>
                {this.isHovered && this.currentIconDirection === 'left' ? (
                    <gb-tooltip class="tooltip" arrow-position="left">
                        <p slot="main_text">Collapse</p>
                    </gb-tooltip>
                    ) : this.isHovered && this.currentIconDirection === 'right' ? (
                        <gb-tooltip class="tooltip" arrow-position="left">
                            <p slot="main_text">Expand</p>
                        </gb-tooltip>
                    ) : null}
            </div>
        ];
    }
}