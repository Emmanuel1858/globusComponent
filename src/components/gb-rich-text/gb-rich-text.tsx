import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'gb-rich-text',
    styleUrl: 'gb-rich-text.css',
    shadow: true
})

export class GbRichText {
    @Prop() state: 'default' | 'disabled';
    @Prop() destructive: boolean;
    @Prop() showLabel: boolean;
    @Prop() label: string;
    @Prop() showPlaceholder: boolean;
    @Prop() placeholder: string;
    @Prop() showHintText: boolean;
    @Prop() hintText: string;

    render() {

        const classes = {
            destructive: this.destructive,
            disabled: this.state === 'disabled'
        }

        return(
            <div class={classes}>
                <div class="input-with-label">
                    <label>{this.label}</label>
                    <div class="input-container">
                        <div class="toolbar-container">
                            <gb-wysiwyg-toolbar 
                            breakpoint="desktop"
                            bold
                            italic
                            h1
                            h2
                            quote
                            link
                            image
                            bulletList
                            numberList
                            ></gb-wysiwyg-toolbar>
                        </div>
                        {this.destructive && (
                            <span class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M7.99483 10H8.00081M8.00016 8V5.33333M14.6668 8C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8C1.3335 4.3181 4.31826 1.33333 8.00016 1.33333C11.6821 1.33333 14.6668 4.3181 14.6668 8Z" stroke="#B51726" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        )}
                        <div class="text-container">
                            <textarea>
                                {this.showPlaceholder && (
                                    <div>{this.placeholder}</div>
                                )}
                            </textarea>
                        </div>
                    </div>
                </div>
                {this.showHintText && (
                    <div class="hint-text">{this.hintText}</div>
                )}
            </div>
        )
    }
}