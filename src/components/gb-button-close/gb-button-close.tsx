import { Component, h, Prop } from '@stencil/core';
import { GeneralColors, GeneralSizes } from '../../models/reusableModels';
@Component({
    tag: 'gb-button-close',
    styleUrl: 'gb-button-close.css',
    shadow: true
})

export class GbButtonClose {
    @Prop() size: GeneralSizes;
    @Prop() color: GeneralColors;

    render() {
        return (
            <div class={`${this.size} ${this.color}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class={`${this.size}`}>
                    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        )
    }
}