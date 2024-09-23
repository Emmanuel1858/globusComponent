import { Component, Prop, h } from "@stencil/core";

@Component ({
    tag: 'gb-textarea-input-field',
    styleUrl: 'gb-textarea-input-field.css',
    shadow: true
})

export class GbTextareaInputField {
    @Prop() type: 'default' | 'tags';
    @Prop() destructive? : boolean;
    @Prop() placeholder: string = '';
    @Prop() label: string = '';

    render() {
        
        if(this.type === 'default') {
            return [
                <label>{this.label}</label>,
                <textarea placeholder={this.placeholder}></textarea>
            ];
        }
        if(this.type === 'tags') {
            return [
                <label></label>,
                <textarea placeholder={this.placeholder}>
                    <slot></slot>
                </textarea>
            ]
        }
        
    }
}