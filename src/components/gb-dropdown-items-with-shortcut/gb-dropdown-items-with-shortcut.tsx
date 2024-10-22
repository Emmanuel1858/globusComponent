import {Component, Prop, h, getAssetPath, Element} from '@stencil/core';
import {StateEnum } from '../../models/reusableModels';

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
    @Prop() shortcutIcon: string = 'C';
    @Prop() label: string = '';
    @Prop() state: 'default' | 'disabled' = 'default';
    @Element() el: HTMLElement;

    render() {
        const iconSrc = this.iconSrc ? getAssetPath(`assets/${this.iconSrc}.svg`) : '';

        return (
            <div class="shortcut-container">
                <div class={`shortcut ${this.state === 'disabled' ? 'disabled' : ''}`}>
                    {this.icon && (
                        <div class="icon">
                            <img src={iconSrc} alt="Icon"></img>
                        </div>
                    )}
                    {this.checkbox && !this.icon && (
                        <gb-checkbox class="checkbox" size="sm" type='checkbox' state={StateEnum.Default}></gb-checkbox>
                    )}
                    <span class="label">
                        <p class={`text-sm-medium`}>{this.label}</p>
                    </span>
                    {this.shortcut && (
                        <span class="shortcut-icon">
                            <slot>⌘{this.shortcutIcon}</slot>
                        </span>
                    )}
                </div>
            </div>
        )
    }
}
