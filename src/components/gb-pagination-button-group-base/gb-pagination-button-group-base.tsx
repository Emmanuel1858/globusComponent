import { Component, Prop, h, Fragment, Element } from "@stencil/core";

@Component({
  tag: 'gb-pagination-button-group-base',
  styleUrl: 'gb-pagination-button-group-base.css',
  shadow: true,
})
export class GbPaginationButtonGroupBase {
  @Prop() icon: 'false' | 'only' | 'trailing' | 'leading';
  @Prop() iconLeading: string;
  @Prop() iconTrailing: string;
  @Element() el: HTMLElement;

  componentDidLoad() {
    const slottedContent = this.el.querySelector('p');

    if (slottedContent) {
      slottedContent.classList.add('text-sm-semi-bold');
    }
  }

  render() {
    return (
      <div class={`button_base_div ${this.icon}`}>
        {this.icon === 'false' && <slot></slot>}
        {this.icon === 'leading' && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3.33325 9.99981H16.6666M3.33325 9.99981C3.33326 11.0978 7.49975 14.1667 7.49975 14.1667M3.33325 9.99981C3.33324 8.90182 7.49978 5.83334 7.49978 5.83334"
                stroke="#4B5565"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <slot></slot>
          </>
        )}
        {this.icon === 'trailing' && (
          <>
            <slot></slot>
            {this.iconTrailing && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.6668 9.99984H3.3335M16.6668 9.99984C16.6668 11.0978 12.5003 14.1667 12.5003 14.1667M16.6668 9.99984C16.6669 8.90185 12.5002 5.83337 12.5002 5.83337"
                  stroke="#4B5565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </>
        )}
        {/* {this.icon === 'only' && ()} */}
      </div>
    );
  }
}