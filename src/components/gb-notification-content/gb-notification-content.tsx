import {Component, Prop, h, getAssetPath} from '@stencil/core'

@Component({
    tag: 'gb-notification-content',
    styleUrl: 'gb-notification-content.css',
    shadow: true
})

export class GbNotificationContent {
    @Prop() icon: string;
    @Prop() label: string = '';
    @Prop() time: string = '';
    @Prop() supportingText: string = '';

   

    render() {

        const iconSrc = getAssetPath(`assets/${this.icon}.svg`);

        return (
            <div class="notification-container">
                <div class="notification-title">
                    {this.icon && (
                        <div class="icon">
                            <img src={iconSrc} alt="Icon" />
                        </div>
                    )}
                    <label>{this.label}</label>
                    <span class="time">
                        {this.time}
                    </span>
                </div> 
                <div class="supporting-text">
                    {this.supportingText}
                </div>
            </div>
        );
    }
}