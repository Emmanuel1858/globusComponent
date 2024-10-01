import { Component, Element, h, Prop, Fragment, State, getAssetPath, Method, Event, EventEmitter } from "@stencil/core";
import { GeneralBackgroundCategories } from "../../models/reusableModels";

@Component({
  tag: 'gb-sidebar',
  styleUrl: 'gb-sidebar.css',
  shadow: true,
})
export class GbSidebar {
  @Prop({ mutable: true }) state: 'expanded' | 'collapsed';
  @Prop() category: GeneralBackgroundCategories;
  @Prop() showSecondCategory: boolean = false;
  @Prop() applicationName: string = '';
  @Prop() firstItemIcon: string = '';
  @Prop() secondItemIcon: string = '';
  @Prop() thirdItemIcon: string = '';
  @Prop() fourthItemIcon: string = '';
  @Prop() fifthItemIcon: string = '';
  @Prop() sixthItemIcon: string = '';
  @Prop() seventhItemIcon: string = '';
  @Prop() eighthItemIcon: string = '';
  @Prop() ninthItemIcon: string = '';
  @Prop() tenthItemIcon: string = '';
  @Prop() iconInstance: string = '';
  @Prop() label: string = '';
  @Prop() firstItemLabel: string = '';
  @Prop() secondItemLabel: string = '';
  @Prop() thirdItemLabel: string = '';
  @Prop() fourthItemLabel: string = '';
  @Prop() fifthItemLabel: string = '';
  @Prop() sixthItemLabel: string = '';
  @Prop() seventhItemLabel: string = '';
  @Prop() eighthItemLabel: string = '';
  @Prop() ninthItemLabel: string = '';
  @Prop() tenthItemLabel: string = '';
  @Element() el: HTMLElement;
  @State() activeIndex: number = 0;
  @State() leadingIconSvg: string = '';
  @Event() sidebarItemClicked: EventEmitter<number>;

  async loadIcon(iconName: string) {
    const iconPath = getAssetPath(`${iconName}`);
    const response = await fetch(iconPath);
    const svg = await response.text();
    this.leadingIconSvg = svg;
  }

  collapseSideBar() {
    if (this.state === 'expanded') {
      this.state = 'collapsed';
    }
  }

  expandSideBar() {
    if (this.state === 'collapsed') {
      this.state = 'expanded';
    }
  }

  @Method()
  async sideBarItemClicked(index: number) {
    this.activeIndex = index;
    this.sidebarItemClicked.emit(index);
  }

  componentDidLoad() {
    const applicationName = this.el.querySelector('[slot="application_name"]');

    applicationName.classList.add('text-lg-bold');
  }

  componentWillLoad() {
    this.loadIcon(this.iconInstance);
  }

  render() {
    const textClass = this.category === 'plain_background' ? 'plain_background_color' : 'colored_background_color';
    const patternSrc = getAssetPath(`assets/pattern_wrapper.svg`);
    const logoSrc = getAssetPath(`assets/globus_bank_logo.svg`);
    const blueLogoSrc = getAssetPath(`assets/globus_bank_logo_blue.svg`);
    const whiteLogoSrc = getAssetPath(`assets/globus_bank_logo_white.svg`);

    return (
      <div class={`sidebar_div ${this.state} ${this.category}`}>
        {this.category === 'colored_background' && (
          <div class="pattern">
            <img src={patternSrc} alt="" />
          </div>
        )}
        <div class="nav">
          <div class={`sidebar_header ${this.state}`}>
            <div class={`logo_and_name ${this.state}`}>
              {this.state === 'expanded' && (
                <>{this.category === 'plain_background' ? <img src={blueLogoSrc} /> : <img src={whiteLogoSrc} />}</>
              )}
              {this.state === 'collapsed' && <img src={logoSrc} alt="" />}
            </div>
            <div class={`collapse_button ${this.state}`}>
              <gb-collapse-button
                color={this.category === 'plain_background' ? 'gray' : 'white'}
                action={this.state === 'collapsed' ? 'expand' : 'collapse'}
                onClick={() => (this.state === 'collapsed' ? this.expandSideBar() : this.collapseSideBar())}
              ></gb-collapse-button>
            </div>
          </div>
          <div class="navigation">
            <div class="item">
              <gb-side-bar-item
                state={this.activeIndex === 0 ? 'active' : 'default'}
                icon={this.firstItemIcon}
                category={this.category}
                type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                onClick={() => this.sideBarItemClicked(0)}
                label={this.firstItemLabel}
              ></gb-side-bar-item>
              <gb-side-bar-item
                state={this.activeIndex === 1 ? 'active' : 'default'}
                icon={this.secondItemIcon}
                category={this.category}
                type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                onClick={() => this.sideBarItemClicked(1)}
                label={this.secondItemLabel}
              ></gb-side-bar-item>
              {this.thirdItemLabel && (
                <gb-side-bar-item
                  state={this.activeIndex === 2 ? 'active' : 'default'}
                  icon={this.thirdItemIcon}
                  category={this.category}
                  type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                  onClick={() => this.sideBarItemClicked(2)}
                  label={this.thirdItemLabel}
                ></gb-side-bar-item>
              )}
              {this.fourthItemLabel && (
                <gb-side-bar-item
                  state={this.activeIndex === 3 ? 'active' : 'default'}
                  icon={this.fourthItemIcon}
                  category={this.category}
                  type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                  onClick={() => this.sideBarItemClicked(3)}
                  label={this.fourthItemLabel}
                ></gb-side-bar-item>
              )}
              {this.fifthItemLabel && (
                <gb-side-bar-item
                  state={this.activeIndex === 4 ? 'active' : 'default'}
                  icon={this.fifthItemIcon}
                  category={this.category}
                  type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                  onClick={() => this.sideBarItemClicked(4)}
                  label={this.fifthItemLabel}
                ></gb-side-bar-item>
              )}
            </div>
          </div>
          {this.showSecondCategory && (
            <div class="navigation">
              <div class="item">
                {this.sixthItemLabel && (
                  <gb-side-bar-item
                    state={this.activeIndex === 5 ? 'active' : 'default'}
                    icon={this.sixthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(5)}
                    label={this.sixthItemLabel}
                  ></gb-side-bar-item>
                )}
                {this.seventhItemLabel && (
                  <gb-side-bar-item
                    state={this.activeIndex === 6 ? 'active' : 'default'}
                    icon={this.seventhItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(6)}
                    label={this.seventhItemLabel}
                  ></gb-side-bar-item>
                )}
                {this.eighthItemLabel && (
                  <gb-side-bar-item
                    state={this.activeIndex === 7 ? 'active' : 'default'}
                    icon={this.eighthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(7)}
                    label={this.eighthItemLabel}
                  ></gb-side-bar-item>
                )}
                {this.ninthItemLabel && (
                  <gb-side-bar-item
                    state={this.activeIndex === 8 ? 'active' : 'default'}
                    icon={this.ninthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(8)}
                    label={this.ninthItemLabel}
                  ></gb-side-bar-item>
                )}
                {this.tenthItemLabel && (
                  <gb-side-bar-item
                    state={this.activeIndex === 9 ? 'active' : 'default'}
                    icon={this.tenthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(9)}
                    label={this.tenthItemLabel}
                  ></gb-side-bar-item>
                )}
              </div>
            </div>
          )}
        </div>
        {this.state === 'expanded' && (
          <div class="application_name">
            <div class={`wrapper ${this.category}`}>
              {this.category === 'plain_background' && (
                <div class="application_name_pattern">
                  <img src={patternSrc} alt="" />
                </div>
              )}
              <div class={`application_icon ${this.category}`} innerHTML={this.leadingIconSvg}></div>
              <span class={textClass}>
                <slot name="application_name"></slot>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}