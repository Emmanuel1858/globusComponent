import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'gb-wysiwyg-tooltip',
    styleUrl: 'gb-WYSIWYG-tooltip',
    shadow: true
})

export class GbWysiwygTooltip {
    @Prop() arrow: 'center' | 'left' | 'right';
    @Prop() breakpoint: 'default' | 'mobile';

    render() {

        const classes= {
            [this.arrow]: true,
            [this.breakpoint]: true    
        }

        return(
            <div class={classes}>
                <div class="container">
                    <div class="icons">
                        <gb-wysiwyg-editor-icon type="bold"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="italic"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="H1"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="H2"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="quote"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="link"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="photo"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="list_bullet"></gb-wysiwyg-editor-icon>
                        <gb-wysiwyg-editor-icon type="list_numbers"></gb-wysiwyg-editor-icon>
                    </div>
                    <div class="tooltip-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                            <path d="M17.4853 0.485287L9.70711 8.26347C9.31658 8.65399 8.68342 8.65399 8.29289 8.26347L0.514724 0.485287H17.4853Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}