import { Component, Element, h, Prop, Fragment, State, getAssetPath } from "@stencil/core";
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
  @Prop() thirdItem: boolean = false;
  @Prop() fourthItem: boolean = false;
  @Prop() fifthItem: boolean = false;
  @Prop() sixthItem: boolean = false;
  @Prop() seventhItem: boolean = false;
  @Prop() eighthItem: boolean = false;
  @Prop() ninthItem: boolean = false;
  @Prop() tenthItem: boolean = false;
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

  sideBarItemClicked(index: number) {
    this.activeIndex = index;
  }

  componentDidLoad() {
    const applicationName = this.el.querySelector('[slot="application_name"]');

    applicationName.classList.add('text-lg-bold');

    if(this.category === 'plain_background') {
      applicationName.classList.add('plain_background_color')
    }
  }

  componentWillLoad() {
    this.loadIcon(this.iconInstance);
  }

  render() {
    return (
      <div class={`sidebar_div ${this.state} ${this.category}`}>
        {this.category === 'colored_background' && (
          <div class="pattern">
            <img src="build/assets/pattern_wrapper.svg" alt="" />
          </div>
        )}
        <div class="nav">
          <div class={`sidebar_header ${this.state}`}>
            <div class={`logo_and_name ${this.state}`}>
              {this.state === 'expanded' && (
                <>{this.category === 'plain_background' ? <img src="build/assets/globus_bank_logo_blue.svg" /> : <img src="build/assets/globus_bank_logo_white.svg" />}</>
              )}
              {this.state === 'collapsed' && <img src="build/assets/globus_bank_logo.svg" alt="" />}
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
              >
                <slot slot="item_label" name="first_item_label"></slot>
              </gb-side-bar-item>
              <gb-side-bar-item
                state={this.activeIndex === 1 ? 'active' : 'default'}
                icon={this.secondItemIcon}
                category={this.category}
                type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                onClick={() => this.sideBarItemClicked(1)}
              >
                <slot slot="item_label" name="second_item_label">
                  {this.secondItemLabel}
                </slot>
              </gb-side-bar-item>
              {this.thirdItem && (
                <gb-side-bar-item
                  state={this.activeIndex === 2 ? 'active' : 'default'}
                  icon={this.thirdItemIcon}
                  category={this.category}
                  type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                  onClick={() => this.sideBarItemClicked(2)}
                ></gb-side-bar-item>
              )}
              {this.fourthItem && (
                <gb-side-bar-item
                  state={this.activeIndex === 3 ? 'active' : 'default'}
                  icon={this.fourthItemIcon}
                  category={this.category}
                  type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                  onClick={() => this.sideBarItemClicked(3)}
                ></gb-side-bar-item>
              )}
              {this.fifthItem && (
                <gb-side-bar-item
                  state={this.activeIndex === 4 ? 'active' : 'default'}
                  label="Label"
                  icon={this.fifthItemIcon}
                  category={this.category}
                  type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                  onClick={() => this.sideBarItemClicked(4)}
                ></gb-side-bar-item>
              )}
            </div>
          </div>
          {this.showSecondCategory && (
            <div class="navigation">
              <div class="item">
                {this.sixthItem && (
                  <gb-side-bar-item
                    state={this.activeIndex === 5 ? 'active' : 'default'}
                    label="Label"
                    icon={this.sixthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(5)}
                  ></gb-side-bar-item>
                )}
                {this.seventhItem && (
                  <gb-side-bar-item
                    state={this.activeIndex === 6 ? 'active' : 'default'}
                    label="Label"
                    icon={this.seventhItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(6)}
                  ></gb-side-bar-item>
                )}
                {this.eighthItem && (
                  <gb-side-bar-item
                    state={this.activeIndex === 7 ? 'active' : 'default'}
                    label="Label"
                    icon={this.eighthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(7)}
                  ></gb-side-bar-item>
                )}
                {this.ninthItem && (
                  <gb-side-bar-item
                    state={this.activeIndex === 8 ? 'active' : 'default'}
                    label="Label"
                    icon={this.ninthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(8)}
                  ></gb-side-bar-item>
                )}
                {this.tenthItem && (
                  <gb-side-bar-item
                    state={this.activeIndex === 9 ? 'active' : 'default'}
                    label="Label"
                    icon={this.tenthItemIcon}
                    category={this.category}
                    type={this.state === 'collapsed' ? 'icon_only' : 'full_with_label'}
                    onClick={() => this.sideBarItemClicked(9)}
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
                  <img src="build/assets/pattern_wrapper.svg" alt="" />
                </div>
              )}
              <div class={`icon ${this.category}`} innerHTML={this.leadingIconSvg}></div>
              <slot name="application_name"></slot>
            </div>
          </div>
        )}
      </div>
    );
  }
}