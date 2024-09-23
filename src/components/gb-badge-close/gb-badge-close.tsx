import { Component, Prop, h } from '@stencil/core';
import { GeneralColors } from '../../models/reusableModels';

@Component ({
    tag: 'gb-badge-close',
    styleUrl: 'gb-badge-close.css',
    shadow: true
})

export class BadgeClose {
    @Prop() color: GeneralColors;
    @Prop() type: 'square' | 'rounded';

    render() {
        return (
            <div class={`${this.color} ${this.type}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9.50024 2.5L2.50024 9.5M2.50024 2.5L9.50024 9.5" stroke="#4B5565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        );
    }
} 