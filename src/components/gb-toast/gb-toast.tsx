import { Component, Prop, h, Fragment, Element } from "@stencil/core";
import { BreakPoints, GeneralColors, StateEnum } from "../../models/reusableModels";

@Component({
    tag: 'gb-toast',
    styleUrl: 'gb-toast.css',
    shadow: true
})

export class GbToast {
    @Prop() color: GeneralColors;
    @Prop() size: 'floating' | 'full_width';
    @Prop() breakpoint: BreakPoints;
    @Prop() xCloseButton: boolean = false;
    @Prop() actions: boolean = false;
    @Prop() showSupportingText: boolean = false;
    @Element() el: HTMLElement;

    getColorClasses() {
        switch(this.color) {
            case 'default' : return 'main_text_default';
            case 'gray' : return 'main_text_gray';
            case 'information' : return 'main_text_information';
            case 'error' : return 'main_text_error';
            case 'warning' : return 'main_text_warning';
            case 'success' : return 'main_text_success';
        }
    }

    componentDidLoad() {
        const slottedMainText = this.el.querySelector('[slot="main_text"]');
        const slottedSupportingText = this.el.querySelector('[slot="supporting_text"]');

        slottedMainText.classList.add('text-sm-semi-bold', this.getColorClasses());
        slottedSupportingText.classList.add('text-xs-regular');
    }

    render() {
        return (
          <div class={`toast_div ${this.color}`}>
            <div class={`icon_container`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" class={`svg_icon ${this.color}`}>
                <path
                  opacity="0.4"
                  d="M14.0667 2.04163C16.6225 2.04161 18.63 2.0416 20.1973 2.25232C21.8034 2.46825 23.0777 2.91979 24.079 3.92102C25.0802 4.92226 25.5317 6.19655 25.7477 7.80265C25.9584 9.36996 25.9584 11.3774 25.9584 13.9332V13.9333V14.0667V14.0667C25.9584 16.6225 25.9584 18.63 25.7477 20.1973C25.5317 21.8034 25.0802 23.0777 24.079 24.0789C23.0777 25.0801 21.8034 25.5317 20.1973 25.7476C18.63 25.9583 16.6226 25.9583 14.0668 25.9583H14.0667H13.9333H13.9333C11.3775 25.9583 9.37003 25.9583 7.80271 25.7476C6.19661 25.5317 4.92232 25.0801 3.92109 24.0789C2.91985 23.0777 2.46831 21.8034 2.25238 20.1973C2.04166 18.6299 2.04167 16.6225 2.04169 14.0667V13.9333C2.04167 11.3774 2.04166 9.36997 2.25238 7.80265C2.46831 6.19655 2.91985 4.92226 3.92109 3.92102C4.92232 2.91979 6.19661 2.46825 7.80271 2.25232C9.37003 2.0416 11.3775 2.04161 13.9333 2.04163H14.0667Z"
                  fill="#4B5565"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.6289 12.2818C13.9171 12.3206 14.3158 12.4243 14.6541 12.7626C14.9924 13.101 15.0962 13.4997 15.1349 13.7879C15.167 14.0266 15.1669 14.3043 15.1667 14.5375C15.1667 14.553 15.1667 14.5683 15.1667 14.5834V19.2501C15.1667 19.8944 14.6444 20.4167 14 20.4167C13.3557 20.4167 12.8334 19.8944 12.8334 19.2501V14.5834C12.189 14.5834 11.6667 14.0611 11.6667 13.4167C11.6667 12.7724 12.189 12.2501 12.8334 12.2501C12.8485 12.2501 12.8638 12.2501 12.8793 12.2501C13.1125 12.2499 13.3901 12.2497 13.6289 12.2818Z"
                  fill="#4B5565"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8333 8.75004C12.8333 8.10571 13.3533 7.58337 13.9947 7.58337H14.0051C14.6466 7.58337 15.1666 8.10571 15.1666 8.75004C15.1666 9.39437 14.6466 9.91671 14.0051 9.91671H13.9947C13.3533 9.91671 12.8333 9.39437 12.8333 8.75004Z"
                  fill="#4B5565"
                />
              </svg>
            </div>
            <div class={`content`}>
              <div class={`text`}>
                <slot name="main_text"></slot>
                {this.showSupportingText && <slot name="supporting_text"></slot>}
              </div>
              {this.actions && (
                <div class={`actions`}>
                  {this.color === 'default' ? (
                    <>
                      <gb-button size="sm" icon="default" state="default" hierarchy="link_gray">
                        <p>Dismiss</p>
                      </gb-button>
                      <gb-button size="sm" icon="default" state="default" hierarchy="link_color">
                        <p>View changes</p>
                      </gb-button>
                    </>
                  ) : (
                    <>
                      <gb-toast-button state={StateEnum.Default} color={this.color}>
                        <p>Dismiss</p>
                      </gb-toast-button>
                      <gb-toast-button state={StateEnum.Default} color={this.color}>
                        <p>View changes</p>
                      </gb-toast-button>
                    </>
                  )}
                </div>
              )}
            </div>
            <gb-button-close size="sm" color={this.color === 'default' ? 'gray' : this.color === 'gray' ? 'gray' : this.color} class="close_button"></gb-button-close>
          </div>
        );
    }
}