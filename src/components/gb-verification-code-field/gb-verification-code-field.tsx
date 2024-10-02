import {Component, Prop, h } from '@stencil/core';
import { GeneralSizes } from '../../models/reusableModels';

@Component({
    tag: 'gb-verification-code-field',
    styleUrl: 'gb-verification-code-field.css',
    shadow: true
})

export class GbVerificationCodeField {
    @Prop() size: GeneralSizes;
    @Prop() digits: 4 | 6 | 8;
    @Prop() shoowLabel: boolean;
    @Prop() label: string = '';
    @Prop() showHintText: boolean;
    @Prop() hintText: string = '';

    render() {
        return (
            <div class={{
                container: true,
                [this.size]: true,
                [this.digits]:true
            }}>
                <div class="input-with-label">
                    {this.shoowLabel && (
                        <label class="text-sm-medium">{this.label}</label>
                    )}
                    {this.digits === 4 && (
                        <div class="input-wrapper">
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                        </div>
                    )}
                    {this.digits === 6 && (
                        <div class="input-wrapper">
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <p class="display-sm-bold">-</p>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                        </div>
                    )}
                    {this.digits === 8 && (
                        <div class="input-wrapper">
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <p class="display-sm-bold">-</p>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                            <gb-megainput-field size={this.size}></gb-megainput-field>
                        </div>
                    )}
                </div>
                {this.showHintText && (
                    <div class="text-sm-regular">{this.hintText}</div>
                )}
            </div>
        );
    }
}