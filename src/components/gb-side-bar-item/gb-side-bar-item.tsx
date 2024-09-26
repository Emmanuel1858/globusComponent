import { Component, h, Prop, Fragment, getAssetPath, State, Event, EventEmitter, Element } from "@stencil/core";
import { GeneralBackgroundCategories } from "../../models/reusableModels";

@Component({
  tag: 'gb-side-bar-item',
  styleUrl: 'gb-side-bar-item.css',
  shadow: true,
})
export class GbSideBarItem {
  @Prop() state: 'default' | 'active';
  @Prop() type: 'full_with_label' | 'icon_only';
  @Prop() label: string = '';
  @Prop() icon: string = '';
  @Prop() category: GeneralBackgroundCategories;
  @Prop() showArrow: boolean = false;
  @Prop() showBadge: boolean = false;
  @Prop({ mutable: true }) showTooltip: boolean = false;
  @State() leadingIconSvg: string = '';
  @Event() sideBarItemClicked: EventEmitter<void>;
  @Element() el: HTMLElement;

  async loadIcon(iconName: string) {
    const iconPath = getAssetPath(`${iconName}`);
    const response = await fetch(iconPath);
    const svg = await response.text();
    this.leadingIconSvg = svg;
  }

  componentWillLoad() {
    this.loadIcon(this.icon);
  }

  onSideBarItemClicked() {
    this.sideBarItemClicked.emit();
  }

  getLabel() {
    const slottedLabel = this.el.querySelector('[slot="item_label"]');

    console.log(slottedLabel.textContent);
    return slottedLabel.textContent;
  }

  render() {
    return (
      <div class={`side_bar_item_container`} onMouseEnter={() => (this.showTooltip = true)} onMouseLeave={() => (this.showTooltip = false)}>
        <div class={`nav_item_base ${this.state} ${this.type} ${this.category}`}>
          {this.state === 'active' && this.category === 'plain_background' && <img src="build/assets/bar.svg" alt="" class="bar" />}
          {this.state === 'active' && this.category === 'colored_background' && <img src="build/assets/bar_white.svg" alt="" class="bar" />}
          <div class="content">
            <div class={`icon ${this.state} ${this.category}`} innerHTML={this.leadingIconSvg}></div>
            {this.type === 'full_with_label' && (
              <slot name="item_label"></slot>
            )}
          </div>
          {this.type === 'full_with_label' && (
            <>
              {this.showBadge && (
                <gb-badge size="sm" type="pill_outline" color={this.state === 'active' ? 'information' : 'gray'}>
                  <p>10</p>
                </gb-badge>
              )}
              {this.showArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class={`arrow ${this.state} ${this.category}`}>
                  <path
                    d="M6.00003 4C6.00003 4 9.99999 6.94596 10 8.00003C10 9.05411 6 12 6 12"
                    stroke="#212C65"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </>
          )}
        </div>
        {this.type === 'icon_only' && this.showTooltip && (
          <gb-tooltip show-arrow={true} arrow="left" class="tooltip">
            <p slot="label">{this.getLabel()}</p>
          </gb-tooltip>
        )}
      </div>
    );
  }
}