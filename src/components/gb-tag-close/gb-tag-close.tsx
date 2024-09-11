import {Component, Prop, h} from '@stencil/core'
import { GeneralSizes } from '../../models/reusableModels';

@Component({
    tag: 'gb-tag-close',
    styleUrl: 'gb-tag-close.css',
    shadow: true
})

export class GbTagClose{
    @Prop() size: GeneralSizes;

    render() {
        return (
            <div class={this.size}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M7.91683 2.08328L2.0835 7.91662M2.0835 2.08328L7.91683 7.91662" stroke="#4B5565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        )
    }
}