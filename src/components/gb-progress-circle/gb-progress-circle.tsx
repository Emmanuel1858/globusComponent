import { Component, Prop, h } from "@stencil/core";
import { GeneralSizes } from "../../models/reusableModels";

@Component({
  tag: 'gb-progress-circle',
  styleUrl: 'gb-progress-circle.css',
  shadow: true
})
export class GbProgressCircle {
  @Prop() size: GeneralSizes;
  @Prop() shape: 'circle' | 'half_circle';
  @Prop() label: boolean = false;
  @Prop() progress: number = 0;

  render() {
    return (
      <div class="progress">
        <svg class="progress-circle" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
          <circle class="progress-circle-back" cx="80" cy="80" r="74"></circle>
          <circle class="progress-circle-prog" cx="80" cy="80" r="74"></circle>
        </svg>
        <div class="progress-text" data-progress="0">
          50%
        </div>
      </div>
    );
  }
}