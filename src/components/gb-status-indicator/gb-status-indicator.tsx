import { Component, getAssetPath, h, Prop } from "@stencil/core";
import { GeneralSizes, OnlineIndicatorStates } from "../../models/reusableModels";

@Component({
    tag: 'gb-status-indicator',
    styleUrl: 'gb-status-indicator.css',
    shadow: true
})

export class GbStatusIndicator {
    @Prop() statusIcon: string = '';
    @Prop() size: GeneralSizes;
    @Prop() state: OnlineIndicatorStates = OnlineIndicatorStates.Offline;
    @Prop() indicatorStateClass: string = this.state;

    render() {
        const tickSrc = getAssetPath(`assets/${this.statusIcon}.svg`);
        const companyIconSrc = getAssetPath(`assets/${this.statusIcon}.svg`);

        return [
            <div>
                {this.statusIcon === 'online_indicator' && (
                    <div class={`online_icon ${this.size} ${this.indicatorStateClass}`}></div>
                )}
                {this.statusIcon === 'verified_tick' && (
                    <img src={tickSrc} alt="" class={`verified_tick ${this.size}`}/>
                )}
                {this.statusIcon === 'company' && (
                    <img src={companyIconSrc} alt="" class={`company ${this.size}`}/>
                )}
            </div>
        ];
    }
}