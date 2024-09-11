import {Component, Prop, h} from '@stencil/core';
import { GeneralSizes } from '../../models/reusableModels';

@Component({
    tag: 'gb-tag-count',
    styleUrl: 'gb-tagcount.css',
    shadow: true
})

export class TagCount{
    @Prop() size: GeneralSizes;

    render() {
        return (
            <div class={this.size}>
                <p>5</p>
            </div>
        )
    }
}