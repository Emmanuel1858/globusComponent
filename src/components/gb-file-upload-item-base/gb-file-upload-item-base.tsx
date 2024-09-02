import { Component, h, Prop } from '@stencil/core';
import { GeneralSizes, StateEnum } from '../../models/reusableModels';

@Component({
  tag: 'gb-file-upload-item-base',
  styleUrl: 'gb-file-upload-item-base.css',
  shadow: true,
})
    
export class GbFileUploadItemBase {
  @Prop() icon: string = '';
  @Prop() heightSize: GeneralSizes = 'md';
  @Prop() state: 'in_progress' | 'complete' | 'error';

  render() {
      return (
          <div class={`file_upload_container ${this.heightSize} ${this.state}`}>
              {this.state === 'in_progress' && [
                  <div class="icon"></div>,
                  <div class="content"></div>,
                  <gb-button-close size="sm" color="gray" class="close_button"></gb-button-close>
              ]}
              {this.state === 'complete' && [
                  <div class="icon"></div>,
                  <div class="content"></div>,
                  <div class="delete_button">
                    <gb-button size="sm" hierarchy='tertiary_gray' icon="only" state={StateEnum.Default} icon-leading-swap="delete-02"></gb-button>
                  </div>
              ]}
              {this.state === 'error' && [
                  <div class="icon"></div>,
                  <div class="content"></div>,
                  <div class="delete_button"></div>
              ]}
          </div>
        );
  }
}
