import {Component, Method, Prop, h } from '@stencil/core';

@Component({
    tag: 'gb-help-dropdown',
    styleUrl: 'gb-help-dropdown.css',
    shadow: true
})

export class GbHelpDropdown {
    @Prop() showLogError: boolean;

    @Method()
    async downloadUserGuideClicked() {}

    render(){

        return (
          <div class="dropdown-container">
            <div class="user_guide">
              <gb-dropdown-items-with-shortcut icon iconSrc="book_open" label="Download user guide" onClick={() => this.downloadUserGuideClicked()}></gb-dropdown-items-with-shortcut>
            </div>
            <div class="bug">
              <gb-dropdown-items-with-shortcut icon iconSrc="bug_02" label="Report a bug"></gb-dropdown-items-with-shortcut>
            </div>
            {this.showLogError && (
              <div class="log_error">
                <gb-dropdown-items-with-shortcut icon iconSrc="alert_02" label="Log a profile error"></gb-dropdown-items-with-shortcut>
              </div>
            )}
          </div>
        );
    }
}