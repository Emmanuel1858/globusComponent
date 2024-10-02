import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'gb-wysiwyg-toolbar',
    styleUrl: 'gb-WYSIWYG-toolbar.css',
    shadow: true
})

export class GbWysiwygToolbar {
    @Prop() breakpoint: 'desktop' | 'mobile';
    @Prop() fontSelector: boolean;
    @Prop() bold: boolean;
    @Prop() italic: boolean;
    @Prop() h1: boolean;
    @Prop() h2: boolean;
    @Prop() quote: boolean;
    @Prop() link: boolean;
    @Prop() image: boolean;
    @Prop() bulletList: boolean;
    @Prop() numberList: boolean;

    render() {
        return (
            <div class={this.breakpoint}>
                {this.fontSelector && (
                    <gb-input-dropdown size="sm"></gb-input-dropdown>
                )}
                <div class="icons">
                    {this.bold && (
                        <gb-wysiwyg-editor-icon type="bold"></gb-wysiwyg-editor-icon>
                    )}
                    {this.italic && (    
                        <gb-wysiwyg-editor-icon type="italic"></gb-wysiwyg-editor-icon>
                    )}    
                    {this.h1 &&(
                        <gb-wysiwyg-editor-icon type="H1"></gb-wysiwyg-editor-icon>
                    )}
                    {this.h2 && (
                        <gb-wysiwyg-editor-icon type="H2"></gb-wysiwyg-editor-icon>
                    )}
                    {this.quote && (
                        <gb-wysiwyg-editor-icon type="quote"></gb-wysiwyg-editor-icon>
                    )}
                    {this.link && (
                        <gb-wysiwyg-editor-icon type="link"></gb-wysiwyg-editor-icon>
                    )}
                    {this.image && (
                        <gb-wysiwyg-editor-icon type="photo"></gb-wysiwyg-editor-icon>
                    )}
                    {this.bulletList && (
                        <gb-wysiwyg-editor-icon type="list_bullet"></gb-wysiwyg-editor-icon>
                    )}
                    {this.numberList && (
                        <gb-wysiwyg-editor-icon type="list_numbers"></gb-wysiwyg-editor-icon>
                    )}
                </div>
            </div>
        )
    }
}