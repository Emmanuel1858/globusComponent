import { Component, h, Prop, Fragment } from '@stencil/core';
import { StateEnum } from '../../models/reusableModels';

@Component({
    tag: 'gb-header-icon',
    styleUrl: 'gb-header-icon.css',
    shadow: true
})

export class GbHeaderIcon {
    @Prop() state: StateEnum;
    @Prop() showIndicator: boolean = false;

    render() {
        return [
            <div class={`background ${this.state}`}>
                {this.state === StateEnum.Default && [
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3.72919 7.73286L4.47919 7.73293V7.73286H3.72919ZM16.2706 7.73286H15.5206V7.73293L16.2706 7.73286ZM16.3065 14.2952L16.5863 14.9911L16.3065 14.2952ZM3.6933 14.2952L3.97308 13.5994L3.97308 13.5994L3.6933 14.2952ZM16.8452 10.1617L16.2307 10.5916L16.2332 10.5951L16.8452 10.1617ZM17.8916 11.9951L17.1507 12.1115L17.1507 12.1115L17.8916 11.9951ZM3.15459 10.1617L3.76669 10.5951L3.76915 10.5916L3.15459 10.1617ZM2.10819 11.9951L1.36728 11.8786H1.36728L2.10819 11.9951ZM7.9616 16.909C7.63517 16.654 7.16384 16.7119 6.90886 17.0383C6.65388 17.3648 6.7118 17.8361 7.03824 18.0911L7.9616 16.909ZM12.9616 18.0911C13.288 17.8361 13.346 17.3648 13.091 17.0383C12.836 16.7119 12.3647 16.654 12.0382 16.909L12.9616 18.0911ZM16.0268 13.5994C12.4873 15.0225 7.51251 15.0225 3.97308 13.5994L3.41351 14.9911C7.31201 16.5586 12.6878 16.5586 16.5863 14.9911L16.0268 13.5994ZM17.0206 7.73286C17.0206 3.94514 13.8537 0.916687 9.99992 0.916687V2.41669C13.0726 2.41669 15.5206 4.82007 15.5206 7.73286H17.0206ZM4.47919 7.73286C4.47919 4.82007 6.92727 2.41669 9.99992 2.41669V0.916687C6.14612 0.916687 2.97919 3.94514 2.97919 7.73286H4.47919ZM3.97308 13.5994C3.14627 13.2669 2.75147 12.7326 2.84909 12.1115L1.36728 11.8786C1.11048 13.5125 2.30023 14.5434 3.41351 14.9911L3.97308 13.5994ZM16.5863 14.9911C17.6996 14.5434 18.8894 13.5125 18.6326 11.8786L17.1507 12.1115C17.2484 12.7326 16.8536 13.2669 16.0268 13.5994L16.5863 14.9911ZM17.4598 9.73179C17.0815 9.19099 17.0207 8.58744 17.0206 7.7328L15.5206 7.73293C15.5207 8.61212 15.5638 9.63826 16.2307 10.5916L17.4598 9.73179ZM3.76915 10.5916C4.43604 9.63825 4.47911 8.61212 4.47919 7.73293L2.97919 7.7328C2.97911 8.58744 2.91834 9.19099 2.54003 9.73179L3.76915 10.5916ZM2.54251 9.72827C2.45079 9.8578 2.35253 9.98608 2.23845 10.1379C2.12877 10.2839 2.00871 10.4463 1.89595 10.6178C1.67289 10.957 1.44576 11.3793 1.36728 11.8786L2.84909 12.1115C2.87952 11.9179 2.97611 11.7052 3.14928 11.4419C3.23464 11.3121 3.33082 11.1812 3.43773 11.0389C3.54024 10.9024 3.65891 10.7473 3.76668 10.5951L2.54251 9.72827ZM16.2332 10.5951C16.3409 10.7473 16.4596 10.9024 16.5621 11.0389C16.669 11.1812 16.7652 11.3121 16.8506 11.4419C17.0237 11.7052 17.1203 11.9179 17.1507 12.1115L18.6326 11.8786C18.5541 11.3793 18.327 10.957 18.1039 10.6178C17.9911 10.4463 17.8711 10.2839 17.7614 10.1379C17.6473 9.98608 17.5491 9.8578 17.4573 9.72827L16.2332 10.5951ZM9.99992 17.5834C9.20289 17.5834 8.49015 17.3218 7.9616 16.909L7.03824 18.0911C7.83658 18.7147 8.87606 19.0834 9.99992 19.0834V17.5834ZM12.0382 16.909C11.5097 17.3218 10.7969 17.5834 9.99992 17.5834V19.0834C11.1238 19.0834 12.1633 18.7147 12.9616 18.0911L12.0382 16.909Z" fill="#4B5565"/>
                    </svg>,
                    <>
                    {this.showIndicator && (
                        <div class="red_dot"></div>
                    )}
                    </>
                ]}
                {this.state === StateEnum.Disabled && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3.72919 7.73286L4.47919 7.73293V7.73286H3.72919ZM16.2706 7.73286H15.5206V7.73293L16.2706 7.73286ZM16.3065 14.2952L16.5863 14.9911L16.3065 14.2952ZM3.6933 14.2952L3.97308 13.5994L3.97308 13.5994L3.6933 14.2952ZM16.8452 10.1617L16.2307 10.5916L16.2332 10.5951L16.8452 10.1617ZM17.8916 11.9951L17.1507 12.1115L17.1507 12.1115L17.8916 11.9951ZM3.15459 10.1617L3.76669 10.5951L3.76915 10.5916L3.15459 10.1617ZM2.10819 11.9951L1.36728 11.8786H1.36728L2.10819 11.9951ZM7.9616 16.909C7.63517 16.654 7.16384 16.7119 6.90886 17.0383C6.65388 17.3648 6.7118 17.8361 7.03824 18.0911L7.9616 16.909ZM12.9616 18.0911C13.288 17.8361 13.346 17.3648 13.091 17.0383C12.836 16.7119 12.3647 16.654 12.0382 16.909L12.9616 18.0911ZM16.0268 13.5994C12.4873 15.0225 7.51251 15.0225 3.97308 13.5994L3.41351 14.9911C7.31201 16.5586 12.6878 16.5586 16.5863 14.9911L16.0268 13.5994ZM17.0206 7.73286C17.0206 3.94514 13.8537 0.916687 9.99992 0.916687V2.41669C13.0726 2.41669 15.5206 4.82007 15.5206 7.73286H17.0206ZM4.47919 7.73286C4.47919 4.82007 6.92727 2.41669 9.99992 2.41669V0.916687C6.14612 0.916687 2.97919 3.94514 2.97919 7.73286H4.47919ZM3.97308 13.5994C3.14627 13.2669 2.75147 12.7326 2.84909 12.1115L1.36728 11.8786C1.11048 13.5125 2.30023 14.5434 3.41351 14.9911L3.97308 13.5994ZM16.5863 14.9911C17.6996 14.5434 18.8894 13.5125 18.6326 11.8786L17.1507 12.1115C17.2484 12.7326 16.8536 13.2669 16.0268 13.5994L16.5863 14.9911ZM17.4598 9.73179C17.0815 9.19099 17.0207 8.58744 17.0206 7.7328L15.5206 7.73293C15.5207 8.61212 15.5638 9.63826 16.2307 10.5916L17.4598 9.73179ZM3.76915 10.5916C4.43604 9.63825 4.47911 8.61212 4.47919 7.73293L2.97919 7.7328C2.97911 8.58744 2.91834 9.19099 2.54003 9.73179L3.76915 10.5916ZM2.54251 9.72827C2.45079 9.8578 2.35253 9.98608 2.23845 10.1379C2.12877 10.2839 2.00871 10.4463 1.89595 10.6178C1.67289 10.957 1.44576 11.3793 1.36728 11.8786L2.84909 12.1115C2.87952 11.9179 2.97611 11.7052 3.14928 11.4419C3.23464 11.3121 3.33082 11.1812 3.43773 11.0389C3.54024 10.9024 3.65891 10.7473 3.76668 10.5951L2.54251 9.72827ZM16.2332 10.5951C16.3409 10.7473 16.4596 10.9024 16.5621 11.0389C16.669 11.1812 16.7652 11.3121 16.8506 11.4419C17.0237 11.7052 17.1203 11.9179 17.1507 12.1115L18.6326 11.8786C18.5541 11.3793 18.327 10.957 18.1039 10.6178C17.9911 10.4463 17.8711 10.2839 17.7614 10.1379C17.6473 9.98608 17.5491 9.8578 17.4573 9.72827L16.2332 10.5951ZM9.99992 17.5834C9.20289 17.5834 8.49015 17.3218 7.9616 16.909L7.03824 18.0911C7.83658 18.7147 8.87606 19.0834 9.99992 19.0834V17.5834ZM12.0382 16.909C11.5097 17.3218 10.7969 17.5834 9.99992 17.5834V19.0834C11.1238 19.0834 12.1633 18.7147 12.9616 18.0911L12.0382 16.909Z" fill="#CDD5DF"/>
                    </svg>
                )}
            </div>
        ]
    }
}