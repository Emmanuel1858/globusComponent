import { Component, h, Prop, Fragment } from '@stencil/core';
import { FileUploadIconType, FileUploadStates, GeneralSizes, StateEnum } from '../../models/reusableModels';

@Component({
  tag: 'gb-file-upload-item-base',
  styleUrl: 'gb-file-upload-item-base.css',
  shadow: true,
})
export class GbFileUploadItemBase {
  @Prop() icon: FileUploadIconType;
  @Prop() state: FileUploadStates;
  @Prop() heightSize: GeneralSizes = 'md';
  @Prop() fileType: 'pdf' | 'png' | 'jpg' | 'doc' | 'mp4';
  @Prop() buttonState: StateEnum = StateEnum.Default;

  returnIcons() {
    switch (this.icon) {
      case 'outline':
        switch (this.fileType) {
          case 'pdf':
            return (
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.75 4.5C7.75 2.70508 9.20508 1.25 11 1.25H27C27.1212 1.25 27.2375 1.29816 27.3232 1.38388L38.1161 12.1768C38.2018 12.2625 38.25 12.3788 38.25 12.5V36.5C38.25 38.2949 36.7949 39.75 35 39.75H11C9.20507 39.75 7.75 38.2949 7.75 36.5V4.5Z"
                  fill="white"
                  stroke="#CDD5DF"
                  stroke-width="1.5"
                />
                <path d="M27 1V8.5C27 10.7091 28.7909 12.5 31 12.5H38.5" stroke="#CDD5DF" stroke-width="1.5" />
                <rect x="0.5" y="18" width="27" height="17" rx="2" fill="#E21B2E" />
                <path
                  d="M6.22094 27.91V26.49H7.53094C7.78427 26.49 8.00094 26.44 8.18094 26.34C8.3676 26.24 8.51094 26.1 8.61094 25.92C8.71094 25.7333 8.76094 25.52 8.76094 25.28C8.76094 25.0267 8.71094 24.81 8.61094 24.63C8.51094 24.4433 8.3676 24.3033 8.18094 24.21C8.00094 24.11 7.78427 24.06 7.53094 24.06H6.22094V22.64H7.45094C8.07094 22.64 8.60094 22.7433 9.04094 22.95C9.4876 23.1567 9.8276 23.45 10.0609 23.83C10.3009 24.21 10.4209 24.6667 10.4209 25.2V25.36C10.4209 25.88 10.3009 26.3333 10.0609 26.72C9.8276 27.1 9.4876 27.3933 9.04094 27.6C8.60094 27.8067 8.07094 27.91 7.45094 27.91H6.22094ZM4.78094 30V22.64H6.42094V30H4.78094ZM12.8909 30.04V28.51H14.2509C14.5909 28.51 14.8975 28.46 15.1709 28.36C15.4442 28.2533 15.6775 28.1067 15.8709 27.92C16.0642 27.7267 16.2109 27.4967 16.3109 27.23C16.4109 26.9567 16.4609 26.6567 16.4609 26.33C16.4609 25.99 16.4109 25.6867 16.3109 25.42C16.2109 25.1533 16.0642 24.9267 15.8709 24.74C15.6775 24.5533 15.4442 24.4133 15.1709 24.32C14.8975 24.22 14.5909 24.17 14.2509 24.17H12.8909V22.64H14.1609C14.8209 22.64 15.3975 22.7367 15.8909 22.93C16.3842 23.1233 16.7975 23.3867 17.1309 23.72C17.4642 24.0533 17.7109 24.4367 17.8709 24.87C18.0375 25.2967 18.1209 25.7467 18.1209 26.22V26.44C18.1209 26.88 18.0375 27.3167 17.8709 27.75C17.7109 28.1767 17.4642 28.5633 17.1309 28.91C16.7975 29.25 16.3842 29.5233 15.8909 29.73C15.3975 29.9367 14.8209 30.04 14.1609 30.04H12.8909ZM11.4509 30.04V22.64H13.0909V30.04H11.4509ZM19.2634 30V22.7H20.9034V30H19.2634ZM20.7034 27.06V25.7H23.5234V27.06H20.7034ZM20.7034 24.06V22.7H23.6434V24.06H20.7034Z"
                  fill="white"
                />
              </svg>
            );
        }
    }
  }

  render() {
    return (
      <div class={`file_upload_item_base_container ${this.state} ${this.heightSize}`}>
        {this.state === 'in_progress' && (
          <div class={`in_progress_div ${this.heightSize}`}>
            <div class="file_icon"></div>
            <div class="in_progress_content">
              {this.heightSize === 'md' && (
                <>
                  <p class={`file_type_text ${this.state} text-sm-medium`}>Tech design requirements.pdf</p>
                  <p class={`file_size_text ${this.state} text-sm-regular`}>200 KB</p>
                  <gb-progress-bar progress={20} show-label={true} label-position="right" class="progress_bar"></gb-progress-bar>
                  <gb-button-close size="sm" color="gray" class="close_button"></gb-button-close>
                </>
              )}
              {this.heightSize === 'lg' && (
                <>
                  <p class={`file_type_text ${this.state} text-sm-medium`}>Tech design requirements.pdf</p>
                  <p class={`file_size_text ${this.state} text-sm-regular`}>200 KB</p>
                  <gb-progress-bar progress={20} show-label={true} label-position="right" class="progress_bar"></gb-progress-bar>
                  <gb-button-close size="sm" color="gray" class="close_button"></gb-button-close>
                </>
              )}
            </div>
          </div>
        )}
        {this.state === 'complete' && (
          <div class={`complete ${this.heightSize}`}>
            <div class="file_icon"></div>
            <div class={`complete_content ${this.heightSize}`}>
              {this.heightSize === 'md' && (
                <>
                  <p class={`file_type_text ${this.state} text-sm-medium`}>Tech design requirements.pdf</p>
                  <p class={`file_size_text ${this.state} text-sm-regular`}>200 KB – 100% uploaded</p>
                  <test-button 
                  size="sm" 
                  hierarchy="tertiary_gray" 
                  icon="only" 
                  icon-leading={true} 
                  icon-leading-swap="delete-02" 
                  class="delete_button"
                  ></test-button>
                </>
              )}
              {this.heightSize === 'lg' && (
                <>
                  <p class={`file_type_text ${this.state} text-sm-medium`}>Tech design requirements.pdf</p>
                  <p class={`file_size_text ${this.state} text-sm-regular`}>200 KB – 100% uploaded</p>
                  <test-button size="sm" 
                  hierarchy="tertiary_gray" 
                  icon="default" 
                  icon-leading={true} 
                  icon-leading-swap="delete-02">
                    <p>Clear</p>
                  </test-button>
                </>
              )}
            </div>
          </div>
        )}
        {this.state === 'error' && (
          <div class={`error ${this.heightSize}`}>
            <div class="file_icon"></div>
            <div class="error_content">
              {this.heightSize === 'md' && (
                <>
                  <p class={`file_type_text ${this.state} text-sm-medium`}>Tech design requirements.pdf</p>
                  <p class={`file_size_text ${this.state} text-sm-regular`}>200 KB – 100% uploaded</p>
                  <gb-button 
                  size="sm" 
                  hierarchy="link_color" 
                  icon={StateEnum.Default} 
                  destructive={true}>
                    <p>Try again</p>
                  </gb-button>
                  <gb-button 
                  size="sm" 
                  hierarchy="tertiary_gray" 
                  icon="only" destructive={true} 
                  icon-leading={true} 
                  icon-leading-swap="delete-02"
                  class="delete_button"
                  ></gb-button>
                </>
              )}
              {this.heightSize === 'lg' && (
                <>
                  <p class={`file_type_text ${this.state} text-sm-medium`}>Tech design requirements.pdf</p>
                  <p class={`file_size_text ${this.state} text-sm-regular`}>200 KB – 100% uploaded</p>
                  <div class="btns">
                    <test-button size="sm" 
                    hierarchy="tertiary_gray" 
                    icon="default" 
                    destructive={true} 
                    icon-leading={true} 
                    icon-leading-swap="delete-02">
                      <p>Clear</p>
                    </test-button>
                    <div class="btn">
                      <test-button 
                      size="sm" 
                      hierarchy="link_color" 
                      icon={StateEnum.Default} 
                      destructive={true} 
                      class="btn">
                        <p>Try again</p>
                      </test-button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
