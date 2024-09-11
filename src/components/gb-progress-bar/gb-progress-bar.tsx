import { Component, Prop, h, Fragment } from '@stencil/core';

@Component({
  tag: 'gb-progress-bar',
  styleUrl: 'gb-progress-bar.css',
  shadow: true,
})
export class GbProgressBar {
  @Prop() progress: number;
  @Prop() showLabel: boolean = false;
  @Prop() labelPosition: 'right' | 'bottom' | 'top_floating' | 'bottom_floating';
  @Prop() el: HTMLElement;

  render() {
    const progressValue = Math.min(Math.max(this.progress, 0), 100);

    return (
      <div class={`progress_bar_container ${this.labelPosition}`}>
        <div class="progress_bar">
          <div class="progress_fill" style={{ width: `${progressValue}%` }}></div>
        </div>
        <>
          {this.showLabel && (
            <div class={`label ${this.labelPosition}`}>
              {this.labelPosition === 'right' && <span class={`text-sm-medium`}>{progressValue}%</span>}
              {this.labelPosition === 'bottom' && <span class={`text-sm-medium`}>{progressValue}%</span>}
              {this.labelPosition === 'top_floating' && (
                <gb-tooltip class={`top_tooltip`} arrow="none" style={{ marginLeft: `${(progressValue - 6.5).toString()}%` }}>
                  <p slot="main_text" class="text-xs-semi-bold">
                    {progressValue}%
                  </p>
                </gb-tooltip>
              )}
              {this.labelPosition === 'bottom_floating' && (
                <gb-tooltip class={`bottom_tooltip`} arrow="none" style={{ marginLeft: `${(progressValue - 59.5).toString()}%` }}>
                  <p slot="main_text" class="text-xs-semi-bold">
                    {progressValue}%
                  </p>
                </gb-tooltip>
              )}
            </div>
          )}
        </>
      </div>
    );
  }
}