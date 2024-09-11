import {Component, Prop, h} from '@stencil/core';

@Component ({
    tag: 'gb-avatar-dropdown',
    styleUrl: 'gb-avatar-dropdown.css',
    shadow: true
})

export class GbAvatarDropdown {
    @Prop() type: 'simple' | 'complex';
    @Prop() text: boolean = false;
    @Prop() showProfile: boolean;
    @Prop() showDarkTheme: boolean;
    @Prop() showLogOut: boolean;
    @Prop() listGroup1: boolean;
    @Prop() listGroup2: boolean;
    @Prop() listGroup3: boolean;

    render() {

        if (this.type === 'simple') {
            return (
                <div class="simple-dropdown">
                    <div class="profile">
                        <gb-avatar-label-group size="md" statusIcon='false' text={this.text}>
                        <slot name="name" slot="name"></slot>
                        <slot name='image' slot='image'></slot>
                        <slot name='supporting_text' slot='supporting_text'></slot>
                        </gb-avatar-label-group>
                    </div>
                    <div class="list">
                        {this.showProfile && (
                            <gb-dropdown-items-with-shortcut icon iconSrc='user_profile' label='View Profile' shortcut shortcutIcon='K + P'>
                            </gb-dropdown-items-with-shortcut>
                        )}
                        {this.showDarkTheme && (
                            <gb-dropdown-items-with-shortcut icon iconSrc='dark_theme' label='Dark Theme' shortcut shortcutIcon='T'></gb-dropdown-items-with-shortcut>
                        )}
                        {this.showLogOut && (
                            <gb-dropdown-items-with-shortcut icon iconSrc='logout_button' label='Log out' shortcut shortcutIcon='L'></gb-dropdown-items-with-shortcut>
                        )}
                    </div>  
                </div>
            );
        }

        if(this.type === 'complex') {
            return (
                <div class="complex-dropdown">
                    <div class="profile">
                        <gb-avatar-label-group size="md" statusIcon='false'>
                            <slot name="name" slot="name"></slot>
                        </gb-avatar-label-group>
                    </div>
                    {this.listGroup1 && (
                        <div class="list-group-1">
                            <gb-dropdown-items-with-shortcut icon iconSrc='user_profile' label='View Profile' shortcut shortcutIcon='⌘K+P'>
                            </gb-dropdown-items-with-shortcut>
                            <gb-dropdown-items-with-shortcut icon iconSrc='dark_theme' label='Dark Theme' shortcut shortcutIcon='⌘T'></gb-dropdown-items-with-shortcut>
                        </div>
                    )}
                    {this.listGroup2 && (
                        <div class="list-group-2">
                            <gb-dropdown-items-with-shortcut icon iconSrc='configuration_02' label="Configuration" shortcut shortcutIcon='S'></gb-dropdown-items-with-shortcut>
                            <gb-dropdown-items-with-shortcut icon iconSrc='user_group' label="Team" shortcut shortcutIcon='K->T'></gb-dropdown-items-with-shortcut>
                            <gb-dropdown-items-with-shortcut icon iconSrc='user_add' label='Invite Members' shortcut shortcutIcon='I'></gb-dropdown-items-with-shortcut>
                        </div>
                    )}
                    {this.listGroup3 && (
                        <div class="list-group-3">
                            <gb-dropdown-items-with-shortcut icon iconSrc='logout_button' label='Log out' shortcut shortcutIcon='⌘L'></gb-dropdown-items-with-shortcut>
                        </div>
                    )}
                </div>
            )
        }

        
    }
}