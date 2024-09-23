import {Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'gb-help-dropdown',
    styleUrl: 'gb-help-dropdown.css',
    shadow: true
})

export class GbHelpDropdown {
    @Prop() showLogError: boolean;

    render(){

        return (
            <div class="dropdown-container">
                <gb-dropdown-items-with-shortcut icon iconSrc='book_open' label='Download user guide'></gb-dropdown-items-with-shortcut>
                <gb-dropdown-items-with-shortcut icon iconSrc='bug_02' label='Report a bug'></gb-dropdown-items-with-shortcut>
                {this.showLogError && (
                    <gb-dropdown-items-with-shortcut icon iconSrc='alert_02' label='Log a profile error'></gb-dropdown-items-with-shortcut>
                )}
            </div>
        )
    }
}