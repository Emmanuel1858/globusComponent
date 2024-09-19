import {Component, h} from '@stencil/core';

@Component({
    tag: 'gb-password-button',
    styleUrl: 'gb-password-button.css',
    shadow: true
})

export class GbPasswordButton {
    render() {
        return (
            <div>
                <gb-button size='sm' hierarchy='link_gray' state='default'>SHOW</gb-button>
                <gb-button size='sm' hierarchy='link_gray' state='default'>HIDE</gb-button>
            </div>
        )
    }
}