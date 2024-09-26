import { Component, Prop, h } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
  tag: 'gb-pagination-dot-indicator',
  styleUrl: 'gb-pagination-dot-indicator.css',
})
export class GbPaginationDotIndicator {
  @Prop() current: boolean = false;
  @Prop() type: 'dot' | 'line';
  @Prop() size: GeneralSizes;

  render() {
    return <div class={`dot_indicator_div ${this.current ? 'current' : ''} ${this.size}`}></div>;
  }
}