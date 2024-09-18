import { Component, Prop, h } from "@stencil/core";
import { PaginationNumberShapes } from "../../models/reusableModels";

@Component({
    tag: 'gb-pagination-number-base',
    styleUrl: 'gb-pagination-number-base.css',
    shadow: true
})

export class GbPaginationNumberBase {
    @Prop() shape: PaginationNumberShapes;

    render() {
        return (
            <div class={`page_number_base ${this.shape}`}>1</div>
        )
    }
}