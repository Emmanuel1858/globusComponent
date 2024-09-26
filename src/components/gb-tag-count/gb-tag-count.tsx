import {Component, Prop, h} from '@stencil/core';
import { GeneralSizes } from '../../models/reusableModels';

@Component({
    tag: 'gb-tag-count',
    styleUrl: 'gb-tag-count.css',
    shadow: true
})

export class GbTagCount{
    @Prop() size: GeneralSizes;

    render() {
        return (
            <div class={this.size}>
                <slot name="count"></slot>
            </div>
        )
    }
}