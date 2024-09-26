import {Component, Prop, h } from '@stencil/core';
import { GeneralSizes } from '../../models/reusableModels';

@Component({
    tag: 'gb-token-field',
    styleUrl: 'gb-token-field.css',
    shadow: true
})

export class GbTokenField {
    @Prop() size: GeneralSizes
    @Prop() digits: 4 | 6 | 8;
    @Prop() showLabel: boolean;
    @Prop() label: string = 'Secure code';
    @Prop() showSupportingText: boolean;
    @Prop() supportingText: string = '';

    render() {

        return (
            <div class={this.size}>
                <div class="input-with-label">
                    {this.showLabel && (
                        <label>{this.label}</label>
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
                            <div class="first=section">
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                            </div>
                            <div class="second=section">
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                            </div>
                        </div>
                    )}
                    {this.digits === 8 && (
                        <div class="input-wrapper">
                            <div class="first=section">
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                            </div>
                            <div class="second=section">
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                                <gb-megainput-field size={this.size}></gb-megainput-field>
                            </div>
                        </div>
                    )}
                </div>  
                <p>{this.supportingText}</p>            
            </div>
        );
    }
}