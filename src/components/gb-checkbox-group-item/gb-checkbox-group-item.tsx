import { Component, h, Prop, Element } from '@stencil/core';
import {  GeneralSizes, StateEnum, BreakPoints } from '../../models/reusableModels';

@Component({
  tag: 'gb-checkbox-group-item',
  styleUrl: 'gb-checkbox-group-item.css',
  shadow: true,
})
export class GbCheckboxGroupItem {
  @Prop() size: GeneralSizes;
  @Prop() type: 'icon_simple' | 'avatar' | 'payment_icon' | 'radio_button' | 'checkbox';
  @Prop() state: StateEnum;
  @Prop() breakpoint: BreakPoints;
  @Prop() showCost: boolean = false; // to control cost visibility
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) selected: boolean = false;

  private getLabelSizeClass() {
    switch (this.size) {
      case 'md':
        return 'text-lg-semi-bold';
      case 'sm':
        return 'text-md-semi-bold';
    }
  }

  private getCostSizeClass() {
    switch (this.size) {
      case 'xl':
        return 'text-md-regular';
      case 'lg':
        return 'text-md-regular';
      case 'md':
        return 'text-sm-regular';
      case 'sm':
        return 'text-xs-regular';
      default:
        return 'text-xs-regular';
    }
  }

  private getLabelColorClasses() {
    switch(this.selected) {
      case true : return 'label_selected';
      case false : return 'label_not_selected';
    }
  }

  private getCostColorClasses() {
    switch(this.selected) {
      case true : return 'cost_selected';
      case false : return 'cost_not_selected';
    }
  }

  componentDidUpdate() {
    const labelSlot = this.el.querySelector('[slot="label"]');
    const costSlot = this.el.querySelector('[slot="cost"]');

      labelSlot.classList.add(this.getLabelColorClasses());
      costSlot.classList.add(this.getCostColorClasses());
  }

  componentDidLoad() {
    const labelSlot = this.el.querySelector('[slot="label"]');
    const costSlot = this.el.querySelector('[slot="cost"]');
    const supportingTextSlot = this.el.querySelector('[slot="supporting_text"]');

    if (labelSlot) {
      labelSlot.classList.add(this.getLabelSizeClass());
    }

    if (costSlot) {
      costSlot.classList.add(this.getCostSizeClass());
      costSlot.classList.add(this.getCostColorClasses());
    }

    if (supportingTextSlot) {
      supportingTextSlot.classList.add(this.getCostSizeClass());
      supportingTextSlot.classList.add('supporting_text');
    }
  }

  private renderIcon() {
    switch (this.type) {
      case 'avatar':
        return (
          <gb-avatar class="icon-md" size="md" placeholder={false} icon="user">
            <img src="build/assets/avatar_pic.jpg" slot="image"></img>
          </gb-avatar>
        );
      case 'payment_icon':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="none">
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white" />
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F8FAFC" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3336 21.1444H11.5872L9.52784 13.0565C9.43009 12.6845 9.22255 12.3556 8.91725 12.2006C8.15535 11.811 7.31579 11.501 6.3999 11.3446V11.0332H10.824C11.4346 11.0332 11.8925 11.501 11.9689 12.0442L13.0374 17.8782L15.7824 11.0332H18.4524L14.3336 21.1444ZM19.9789 21.1444H17.3852L19.5209 11.0332H22.1146L19.9789 21.1444ZM25.4702 13.8343C25.5465 13.2898 26.0044 12.9784 26.5387 12.9784C27.3783 12.9002 28.2928 13.0566 29.0561 13.4448L29.514 11.2678C28.7508 10.9564 27.9112 10.8 27.1493 10.8C24.6319 10.8 22.8002 12.2006 22.8002 14.1444C22.8002 15.6231 24.0977 16.3995 25.0136 16.8673C26.0044 17.3337 26.3861 17.6451 26.3097 18.1114C26.3097 18.811 25.5465 19.1224 24.7846 19.1224C23.8687 19.1224 22.9528 18.8892 22.1146 18.4997L21.6567 20.678C22.5725 21.0662 23.5634 21.2226 24.4793 21.2226C27.3019 21.2994 29.0561 19.9002 29.0561 17.8001C29.0561 15.1553 25.4702 15.0003 25.4702 13.8343ZM38.1332 21.1444L36.0738 11.0332H33.8618C33.4038 11.0332 32.9459 11.3446 32.7932 11.811L28.9797 21.1444H31.6497L32.1826 19.667H35.4632L35.7685 21.1444H38.1332ZM34.2434 13.7562L35.0053 17.5669H32.8696L34.2434 13.7562Z"
              fill="#172B85"
            />
          </svg>
        );
      case 'icon_simple':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class={`icon_simple_svg ${this.state}`}>
            <path
              opacity="0.4"
              d="M11.524 4.19421L9.25088 5.24491C5.75029 6.863 4 7.67204 4 9.00008C4 10.3281 5.7503 11.1372 9.25089 12.7553L11.524 13.806C13.727 14.8243 14.8285 15.3334 16 15.3334C17.1715 15.3334 18.273 14.8243 20.476 13.806L22.7491 12.7553C26.2497 11.1372 28 10.3281 28 9.00008C28 7.67204 26.2497 6.86299 22.7491 5.2449L20.476 4.19421C18.273 3.1759 17.1715 2.66675 16 2.66675C14.8285 2.66675 13.727 3.1759 11.524 4.19421Z"
              fill="#064E94"
            />
            <path
              d="M27.7173 14.797C27.9058 15.062 28 15.3382 28 15.6419C28 16.951 26.2497 17.7486 22.7491 19.3436L20.476 20.3794C18.273 21.3832 17.1715 21.8851 16 21.8851C14.8285 21.8851 13.727 21.3832 11.524 20.3794L9.25089 19.3436C5.7503 17.7486 4 16.951 4 15.6419C4 15.3382 4.09422 15.062 4.28267 14.797M27.1689 21.6876C27.723 22.1289 28 22.5688 28 23.0896C28 24.3987 26.2497 25.1962 22.7491 26.7913L20.476 27.827C18.273 28.8308 17.1715 29.3327 16 29.3327C14.8285 29.3327 13.727 28.8308 11.524 27.827L9.25089 26.7913C5.7503 25.1962 4 24.3987 4 23.0896C4 22.5688 4.27704 22.1289 4.83112 21.6876M9.25088 5.24491L11.524 4.19421C13.727 3.1759 14.8285 2.66675 16 2.66675C17.1715 2.66675 18.273 3.1759 20.476 4.19421L22.7491 5.2449C26.2497 6.863 28 7.67204 28 9.00008C28 10.3281 26.2497 11.1372 22.7491 12.7553L20.476 13.806C18.273 14.8243 17.1715 15.3334 16 15.3334C14.8285 15.3334 13.727 14.8243 11.524 13.806L9.25089 12.7553C5.7503 11.1372 4 10.3281 4 9.00008C4 7.67204 5.75029 6.863 9.25088 5.24491Z"
              stroke="#064E94"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
        case 'radio_button' :
          return <gb-checkbox size={this.size} type="radio" state={this.state} checked={this.selected}></gb-checkbox>;
        case 'checkbox' :
          return <gb-checkbox size={this.size} type='checkbox' state={this.state} checked={this.selected}></gb-checkbox>;
    }
  }

  // Toggle selected state on checkbox click
  private toggleSelection() {
    if(this.state === 'default') {
      this.selected = !this.selected;
    }
  }

  render() {
    return [
      <div class={`checkbox_group_item ${this.size} ${this.state} ${this.selected ? 'selected' : ''} ${this.breakpoint}`} onClick={() => this.toggleSelection()}>
        <div class="item-content">
          {this.renderIcon()}
          <div class="text-container">
            <div class={`label-cost ${this.type}`}>
              <slot name="label"></slot>
              {this.showCost && <slot name="cost"></slot>}
            </div>
            {this.type === 'payment_icon' ? (
              <div class="buttons">
                <gb-button size={this.size} hierarchy="link_gray" icon="default" state={this.state}>
                  <p>Set as default</p>
                </gb-button>
                <gb-button size={this.size} hierarchy="link_color" icon="default" state={this.state}>
                  <p>Edit</p>
                </gb-button>
              </div>
            ) : (
              <slot name="supporting_text"></slot>
            )}
          </div>
        </div>
        {this.type === 'icon_simple' || this.type === 'avatar' || this.type === 'payment_icon' ? (
          <div class={`checkbox_container`}>
            <gb-checkbox
              type='check_circle'
              size={this.size}
              state={this.state}
              checked={this.selected}
            ></gb-checkbox>
          </div>
        ) : null}
      </div>,
    ];
  }
}
