import {Component, Prop, h, Host, getAssetPath} from '@stencil/core';
import { CheckBoxStates } from '../../models/reusableModels';

@Component({
    tag: 'gb-dropdown-items-with-shortcut',
    styleUrl: 'gb-dropdown-items-with-shortcut.css',
    shadow: true
})

export class GbDropdownShortcut {
    @Prop() icon: boolean = false;
    @Prop() iconSrc: string;
    @Prop() checkbox: boolean = false;
    @Prop() shortcut: boolean;
    @Prop() shortcutIcon: string = '⌘C';
    @Prop() label: string = '';
    @Prop() checkboxStates : CheckBoxStates;
    @Prop() state: 'default' | 'disabled' = 'default'; // Added state prop

    render() {
        const iconSrc = this.iconSrc ? getAssetPath(`assets/${this.iconSrc}.svg`) : '';

        return (
            <Host class={this.state === 'disabled' ? 'disabled' : ''}>
                <div class="shortcut-container">
                    {this.icon && (
                        <div class="icon">
                            <img src={iconSrc} alt="Icon"></img>
                        </div>
                    )}
                    {this.checkbox && !this.icon && (
                        <gb-checkbox class="checkbox" size="sm" type='checkbox' state={CheckBoxStates.Default}></gb-checkbox>
                    )}
                    <span class="label">
                        <slot>{this.label}</slot>
                    </span>
                    {this.shortcut && (
                        <span class="shortcut-icon">
                            <slot>{this.shortcutIcon}</slot>
                        </span>
                    )}
                </div>
            </Host>
        )
    }
}
