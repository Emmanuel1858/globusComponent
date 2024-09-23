import { Component, Prop, h } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
    tag: 'gb-carousel-arrow',
    styleUrl: 'gb-carousel-arrow.css'
})

export class GbCarouselArrow {
    @Prop() size: GeneralSizes;
    @Prop() chevron: 'left' | 'right';

    render() {
        return (
          <div class={`carousel_arrow ${this.size}`}>
            {this.chevron === 'left' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 5.99989C15 5.99989 9.00001 10.4188 9 11.9999C8.99999 13.5811 15 17.9999 15 17.9999"
                  stroke="#202939"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            {this.chevron === 'right' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#202939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
          </div>
        );
    }
}