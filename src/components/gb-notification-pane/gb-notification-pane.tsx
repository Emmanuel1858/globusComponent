import {Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
    tag: 'gb-notification-pane',
    styleUrl: 'gb-notification-pane.css',
    shadow: true
})

export class GbNotificationPane {
    @Prop() state: 'empty' | 'notification_dropdown';

    @State() notifications: HTMLElement[] = [];

    // Add type definition for shadowRoot
    private shadowRoot: ShadowRoot | null;

    constructor() {
        this.shadowRoot = null;
    }

    componentDidLoad() {
        this.shadowRoot = this.shadowRoot;
    }

    @Listen('slotchange')
    handleSlotChange() {
        const slot = this.getSlotContent();
        this.notifications = slot ? Array.from(slot.assignedElements()) as HTMLElement[] : [];
        
        this.notifications.forEach(notification => {
        notification.addEventListener('click', this.handleNotificationClick.bind(this, notification));
        });
    }

    getSlotContent() {
        return this.shadowRoot?.querySelector('slot');
    }

    markAllAsRead() {
        this.notifications.forEach(notification => notification.remove());
    }

    handleNotificationClick(notification: HTMLElement) {
        notification.remove();
    }

    render(){
        return (
            <div class="notification-pane">
                {this.state === 'empty' && this.notifications.length === 0 && (
                    <div>
                        <div class="empty-state">
                            <img src="./build/assets/panel_bell.svg" alt="No notification" />
                            <h3>No notification</h3>
                            <p>Your notification inbox is empty at the moment. Rest assured, you'll be promptly notified of any new events.</p>
                        </div>
                    <gb-button size='sm' hierarchy='tertiary_color' left-icon='blush_brush'>Mark all as read</gb-button>
                    </div> 
                )}  
                {this.state === 'notification_dropdown' && (
                    <div class="notification-dropdown">
                        <slot></slot> 
                        <gb-button size='sm' hierarchy='tertiary_color' left-icon='blush_brush'>Mark all as read</gb-button>
                    </div>
                )} 
            </div>
          );
    }
}