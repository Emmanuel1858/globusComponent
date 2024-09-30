import { Component, Element, Prop, h } from "@stencil/core";
import { PaginationNumberShapes } from "../../models/reusableModels";

@Component({
    tag: 'gb-pagination-number-base',
    styleUrl: 'gb-pagination-number-base.css',
    shadow: true
})

export class GbPaginationNumberBase {
    @Prop() shape: PaginationNumberShapes;
    @Element() el: HTMLElement;

    componentDidLoad() {
        const slottedContent = this.el.querySelector('[slot="page_number"]');

        if(slottedContent) {
            slottedContent.classList.add('text-sm-medium');
        }
    }

    render() {
        return (
            <div class={`page_number_base ${this.shape}`}>
                <slot name="page_number"></slot>
            </div>
        )
    }
}