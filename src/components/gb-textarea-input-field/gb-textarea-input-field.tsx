import { Component, Prop, h } from "@stencil/core";

@Component ({
    tag: 'gb-textarea-input-field',
    styleUrl: 'gb-textarea-input-field.css',
    shadow: true
})

export class GbTextareaInputField {
    @Prop() type: 'default' | 'tags';
    @Prop() destructive: boolean;
    @Prop() state: 'placeholder' | 'disabled';
    @Prop() showPlaceholder: boolean;
    @Prop() placeholder: string = '';
    @Prop() showLabel: boolean;
    @Prop() label: string = '';
    @Prop() showHintText: boolean;
    @Prop() hintText: string;

    render() {
        
        if(this.type === 'default') {
            return (
                <div class={{
                    destructive: this.destructive
                }}>
                    <div class="input-with-label">
                        <label>{this.label}</label>
                        <div class="input-container">
                        <textarea placeholder={this.placeholder}></textarea>
                        </div>
                    </div>
                    {this.showHintText && (
                        <div>{this.hintText}</div>
                    )}
                </div>
            );
        }
        if(this.type === 'tags') {
            return (
                <div class={{
                    destructive: this.destructive
                }}>
                    <div class="input-with-label">
                        <label>{this.label}</label>
                        <div class="input-container">
                            <div class="content">
                                <div class="tags">
                                    <slot name="tag"></slot>
                                </div>
                                <input class="search-text"></input>
                            </div>
                        </div>
                    </div>
                    {this.showHintText && (
                        <div>{this.hintText}</div>
                    )}
                </div>
            );
        }
        
    }
}