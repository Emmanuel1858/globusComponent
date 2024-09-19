import { Component, Method, Prop, h } from "@stencil/core";

@Component({
  tag: 'gb-collapse-button',
  styleUrl: 'gb-collapse-button.css',
  shadow: true,
})
export class GbCollapseButton {
  @Prop() color: 'gray' | 'white';
  @Prop({ mutable: true }) isCollapsed: boolean = false;
  @Prop({ mutable: true }) action: string = 'collapse';
  @Prop({ mutable: true }) isHovered: boolean = false;

  toggleIcon() {
    if (this.action === 'collapse') {
      this.action = 'expand';
    } else if (this.action === 'expand') {
      this.action = 'collapse';
    }
  }

  @Method()
  async collapseSidebar() {
    this.isCollapsed = true;
  }

  @Method()
  async expandSidebar() {
    this.isCollapsed = false;
  }

  render() {
    return [
      <div>
        <div class={`collapse_btn ${this.color}`} onClick={this.toggleIcon.bind(this)} onMouseEnter={() => (this.isHovered = true)} onMouseLeave={() => (this.isHovered = false)}>
          {this.action === 'collapse' && [
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class={`icon ${this.color}`}>
              <path
                d="M9.58321 15C9.58321 15 4.58326 11.3176 4.58325 9.99996C4.58324 8.68237 9.58325 5 9.58325 5M15.4165 15C15.4165 15 10.4166 11.3176 10.4166 9.99996C10.4166 8.68237 15.4166 5 15.4166 5"
                stroke="#4B5565"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>,
          ]}
          {this.action === 'expand' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class={`icon ${this.color}`}>
              <path
                d="M10.4166 15C10.4166 15 15.4166 11.3176 15.4166 9.99996C15.4166 8.68237 10.4166 5 10.4166 5M4.58329 15C4.58329 15 9.58324 11.3176 9.58325 9.99996C9.58326 8.68237 4.58325 5 4.58325 5"
                stroke="#4B5565"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        {this.isHovered && this.action === 'collapse' ? (
          <gb-tooltip class="tooltip" arrow="left">
            <p slot="label" class="text-xs-semi-bold">
              Collapse
            </p>
          </gb-tooltip>
        ) : this.isHovered && this.action === 'expand' ? (
          <gb-tooltip class="tooltip" arrow="left">
            <p slot="label" class="text-xs-semi-bold">
              Expand
            </p>
          </gb-tooltip>
        ) : null}
      </div>,
    ];
  }
}