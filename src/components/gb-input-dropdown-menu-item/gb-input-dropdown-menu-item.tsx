import { Component, Element, Prop, h } from "@stencil/core";
import { DropdownTypes, StateEnum } from '../../models/reusableModels';

@Component({
  tag: 'gb-input-dropdown-menu-item',
  styleUrl: 'gb-input-dropdown-menu-item.css',
  shadow: true,
})
export class GbInputDropdownMenuItem {
  @Prop() type: DropdownTypes;
  @Prop() supportingText: boolean = false;
  @Prop({ mutable: true }) selected: boolean = false;
  @Prop() state: StateEnum;
  @Element() el: HTMLElement;

  componentDidLoad() {
    const nameSlot = this.el.querySelector('[slot="name"]');
    const supportingTextSlot = this.el.querySelector('[slot="supporting_text"]');

    nameSlot.classList.add('text-md-medium');

    if(supportingTextSlot) {
      supportingTextSlot.classList.add('text-sm-regular');
    }
  }

  render() {
    return (
      <div class="dropdown-container" onClick={() => (this.selected = !this.selected)}>
        <div
          class={{
            'dropdown-item': true,
            'dropdown-item--selected': this.selected,
            'dropdown-item--disabled': this.state === 'disabled',
            [this.type]: true,
          }}
          role="option"
          aria-selected={this.selected ? 'true' : 'false'}
          aria-disabled={this.state === 'disabled' ? 'true' : 'false'}
        >
          {this.type === 'icon_leading' && (
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5.48131 12.9013C4.30234 13.6034 1.21114 15.0368 3.09388 16.8305C4.01359 17.7067 5.03791 18.3334 6.32572 18.3334H13.6743C14.9621 18.3334 15.9864 17.7067 16.9061 16.8305C18.7889 15.0368 15.6977 13.6034 14.5187 12.9013C11.754 11.2551 8.24599 11.2551 5.48131 12.9013Z"
                stroke="#4B5565"
                stroke-width="1.5"
              />
              <path
                d="M13.75 5.41669C13.75 7.48776 12.0711 9.16669 10 9.16669C7.92893 9.16669 6.25 7.48776 6.25 5.41669C6.25 3.34562 7.92893 1.66669 10 1.66669C12.0711 1.66669 13.75 3.34562 13.75 5.41669Z"
                stroke="#4B5565"
                stroke-width="1.5"
              />
            </svg>
          )}
          {this.type === 'avatar_leading' && (
            <gb-avatar class="avatar-icon" size="xs" status-icon="false">
              <slot name="image" slot="image"></slot>
            </gb-avatar>
          )}
          {this.type === 'dot_leading' && (
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" fill="#17B26A" />
            </svg>
          )}
          {this.type === 'checkbox' && <gb-checkbox class="checkbox" size="md" type="checkbox" state={this.state} checked={this.selected}></gb-checkbox>}
          <div class="text">
            <slot name="name"></slot>
            {this.supportingText && (
              <span>
                <slot name="supporting_text"></slot>
              </span>
            )}
          </div>
          {this.selected && this.type !== 'checkbox' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.16669 12.0834C4.16669 12.0834 5.41669 12.0834 7.08335 15C7.08335 15 11.7157 7.36115 15.8334 5.83337"
                stroke="#075DB2"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    );
  }
}