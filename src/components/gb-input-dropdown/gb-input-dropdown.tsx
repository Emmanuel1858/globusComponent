import { Component, Prop, h, Fragment, Element, State, getAssetPath } from "@stencil/core";
import { DropdownTypes, GeneralSizes, StateEnum } from "../../models/reusableModels";

@Component({
  tag: 'gb-input-dropdown',
  styleUrl: 'gb-input-dropdown.css',
  shadow: true,
})
export class GbInputDropdown {
  @Prop() type: DropdownTypes;
  @Prop({ mutable: true }) state: 'default' | 'focused' | 'disabled' | 'filled';
  @Prop() size: GeneralSizes;
  @Prop() showLabel: boolean = false;
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() showHintText: boolean;
  @Prop() hintText: string = '';
  @Prop() showHelpIcon: boolean;
  @Prop() showLeadingIcon: boolean = false;
  @Prop() iconSwap: string = '';
  @Prop() text: boolean = false;
  @Prop() leadingIcon: string = '';
  @Prop() items: any[] = [];
  @Prop() supportingText: boolean = false;
  @State() leadingIconSvg: string = '';
  @State() dropdownOpen: boolean = false;
  @State() selectedItems: any[] = [];
  @State() unselectedItems: any[] = [];
  @State() selectedItem: any;
  @State() isSelected: boolean = false;
  @Element() el: HTMLElement;

  dropdownRef!: HTMLDivElement;

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (event: MouseEvent) => {
    if (this.dropdownOpen && !this.dropdownRef.contains(event.target as Node)) {
      this.dropdownOpen = false; // Close the dropdown
    }
  };

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isItemSelected(selectedItem) {
    const found = this.selectedItems.find(item => item.name === selectedItem.name);
    return found !== undefined;
  }

  async loadIcon(iconName: string) {
    const iconPath = getAssetPath(`${iconName}`);
    const response = await fetch(iconPath);
    const svg = await response.text();
    this.leadingIconSvg = svg;
  }

  getAvatarSize() {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'md':
        return 'xs';
    }
  }

  sortDropdownItems(menuItems: any[]): any[] {
    return menuItems.sort((a, b) => {
      if (a.selected && !b.selected) {
        return -1; // Move selected items up
      } else if (!a.selected && b.selected) {
        return 1; // Keep unselected items down
      }
      return 0; // Keep order if both are selected or unselected
    });
  }

  handleItemSelect(item) {
    console.log('item clicked');

    console.log(item.selected);
    item.selected = true;

    if (this.type === 'tags') {
      // For 'tags', allow multiple selections
      if (this.selectedItems.includes(item)) {
        // Deselect if already selected
        // this.selectedItems = this.selectedItems.filter(i => i !== item);
        this.selectedItems = this.sortDropdownItems(this.selectedItems);
      } else {
        // Add to selected items
        this.selectedItem = item;
        this.selectedItems = [...this.selectedItems, this.selectedItem];
      }
      // Update state based on whether there are selected items
      this.state = this.selectedItems.length > 0 ? 'filled' : 'default';
    } else {
      // For other types, allow only one selection
      this.selectedItems = [item]; // Only one item in selectedItems
      this.selectedItem = item; // Store the selected item
      this.state = 'filled'; // Update state to 'filled'
      this.dropdownOpen = false; // Close the dropdown after selection
    }
  }

  handleTagRemove(item) {
    // Remove the item from selectedItems array
    this.selectedItems = this.selectedItems.filter(i => i !== item);

    // For non-tags type, set selectedItem to null if that item is removed
    if (this.type !== 'tags' && this.selectedItem === item) {
      this.selectedItem = null;
    }

    // Update state based on whether there are selected items
    this.state = this.selectedItems.length > 0 ? 'filled' : 'default';
  }

  componentWillLoad() {
    this.loadIcon(this.leadingIcon);
  }

  componentDidLoad() {
    if (this.type !== 'tags') {
      document.addEventListener('click', this.handleOutsideClick);
    }
    const slottedInitials = this.el.querySelector('[slot="initials"]');

    const mainTextSlot = this.el.querySelector('[slot="tooltip_label"]');
    const supportingTextSlot = this.el.querySelector('[slot="tooltip_supporting_text"]');

    slottedInitials.classList.add('text-xxs-semi-bold');

    if (mainTextSlot) {
      mainTextSlot.classList.add('text-xs-semi-bold');
    }

    if (supportingTextSlot) {
      supportingTextSlot.classList.add('text-xs-regular');
    }
  }

  render() {
    const items = [
      {
        name: 'Emmanuel Kadiri',
        username: 'kadiri2047',
        selected: false,
      },
      {
        name: 'Gideon Ogunkola',
        username: 'gideon',
        selected: false,
      },
      {
        name: 'Precious Okon',
        username: 'presh',
        selected: false,
      },
      {
        name: 'Efe Dakara',
        username: 'efe',
        selected: false,
      },
    ];

    console.log(this.selectedItems);
    console.log(this.selectedItem);

    return [
      <div class={`input_dropdown_container ${this.type === 'tags' ? 'tag' : ''}`} onClick={() => this.toggleDropdown()}>
        {this.showLabel && (
          <p class="text-sm-regular" style={{ color: '#4B5565' }}>
            {this.label}
          </p>
        )}
        <div class={`input_dropdown_div ${this.size} ${this.state} ${this.type === 'tags' ? 'tag' : ''}`}>
          {this.type === 'icon_leading' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5.48131 12.9013C4.30234 13.6033 1.21114 15.0368 3.09388 16.8305C4.01359 17.7067 5.03791 18.3333 6.32572 18.3333H13.6743C14.9621 18.3333 15.9864 17.7067 16.9061 16.8305C18.7889 15.0368 15.6977 13.6033 14.5187 12.9013C11.754 11.2551 8.24599 11.2551 5.48131 12.9013Z"
                stroke="#697586"
                stroke-width="1.66667"
              />
              <path
                d="M13.75 5.41667C13.75 7.48774 12.0711 9.16667 10 9.16667C7.92893 9.16667 6.25 7.48774 6.25 5.41667C6.25 3.3456 7.92893 1.66667 10 1.66667C12.0711 1.66667 13.75 3.3456 13.75 5.41667Z"
                stroke="#697586"
                stroke-width="1.66667"
              />
            </svg>
          )}
          {this.type === 'avatar_leading' && (
            <gb-avatar size="xs" text={this.text} color="blue">
              {!this.text ? <slot slot="image" name="image"></slot> : <slot slot="initials" name="initials"></slot>}
            </gb-avatar>
          )}
          {this.showLeadingIcon && <>{this.type === 'search' || this.type === 'tags' ? <div class={`icon`} innerHTML={this.leadingIconSvg}></div> : null}</>}
          {this.type === 'dot_leading' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" class={`dot ${this.size}`}>
              <circle cx="5" cy="5" r="4" fill="#079455" />
            </svg>
          )}
          <div class="placeholder">
            <>
              {this.state === 'default' && (
                <>
                  {this.placeholder && (
                    <p class="text-md-regular" style={{ color: '#CDD5DF' }}>
                      {this.placeholder}
                    </p>
                  )}
                </>
              )}
              {this.state === 'filled' && (
                <>
                  <div class={`content`}>
                    <div class={`text text-md-regular ${this.type === 'tags' ? 'tag' : ''}`} style={{ color: '#4B5565' }}>
                      {this.type === 'tags'
                        ? this.selectedItems.map((item, index) => (
                            <div class="added_tag">
                              <gb-tag size="sm" icon="avatar" action="X_close" key={index} onClick={() => this.handleTagRemove(item)}>
                                <p class="text-xs-medium">{item.name.split(' ')[0]}</p>
                                <h1 slot="initials" class="text-xxs-semi-bold">
                                  {item.name.split(' ').map(part => part.charAt(0).toUpperCase())}
                                </h1>
                              </gb-tag>
                            </div>
                          ))
                        : this.selectedItem.name}
                    </div>
                    {this.supportingText && (
                      <div class="supporting_text text-sm-regular" style={{ color: '#697586' }}>
                        {this.type === 'tags'
                          ? this.selectedItems.map(item => item.username).join(', ') // For multiple selections
                          : this.selectedItem.username}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          </div>
          {this.showHelpIcon && (
            <div class={`help_icon`}>
              <gb-help-tooltip show-supporting-text={true}>
                <slot name="tooltip_label" slot="label"></slot>
                <slot name="tooltip_supporting_text" slot="supporting_text"></slot>
              </gb-help-tooltip>
            </div>
          )}
          {this.type !== 'search' && (
            <div class={`dropdown_icon ${this.dropdownOpen ? 'opened' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class={`${this.state}`}>
                <path
                  d="M15 7.50004C15 7.50004 11.3176 12.5 9.99996 12.5C8.68237 12.5 5 7.5 5 7.5"
                  stroke="#697586"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
        {this.showHintText && (
          <p class="text-sm-regular" style={{ color: '#697586' }}>
            {this.hintText}
          </p>
        )}
      </div>,
      <>
        {this.dropdownOpen && (
          <div class="dropdown_menu" ref={el => (this.dropdownRef = el as HTMLDivElement)}>
            {items.map(item => (
              <gb-input-dropdown-menu-item
                type={this.type === 'search' ? 'checkbox' : this.type === 'tags' ? 'checkbox' : this.type}
                state={StateEnum.Default}
                supporting-text={this.supportingText}
                selected={this.isItemSelected(item)}
                onClick={() => this.handleItemSelect(item)}
              >
                <p slot="name">{item.name}</p>
                <p slot="supporting_text">@{item.username}</p>
              </gb-input-dropdown-menu-item>
            ))}
          </div>
        )}
      </>,
    ];
  }
}    
        