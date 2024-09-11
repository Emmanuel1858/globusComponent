/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ArrowPositions, BorderWeights, BreakPoints, CheckBoxStates, CheckBoxVariants, GeneralColors, GeneralHierarchies, GeneralSizes, OnlineIndicatorStates, StateEnum } from "./models/reusableModels";
export { ArrowPositions, BorderWeights, BreakPoints, CheckBoxStates, CheckBoxVariants, GeneralColors, GeneralHierarchies, GeneralSizes, OnlineIndicatorStates, StateEnum } from "./models/reusableModels";
export namespace Components {
    interface GbAvatar {
        "placeholder": boolean;
        "size": GeneralSizes;
        "state": OnlineIndicatorStates;
        "statusIcon": string;
        "text": boolean;
        "weight": BorderWeights;
    }
    interface GbAvatarAddButton {
        "showToolTip": boolean;
        "size": GeneralSizes;
        "state": StateEnum;
    }
    interface GbAvatarContrastInnerBorder {
        "borderSize": GeneralSizes;
        "weight": BorderWeights;
    }
    interface GbAvatarDropdown {
        "listGroup1": boolean;
        "listGroup2": boolean;
        "listGroup3": boolean;
        "showDarkTheme": boolean;
        "showLogOut": boolean;
        "showProfile": boolean;
        "text": boolean;
        "type": 'simple' | 'complex';
    }
    interface GbAvatarGroup {
        "addMoreButton": boolean;
        "moreUser": boolean;
        "size": GeneralSizes;
        "state": StateEnum;
        "text": boolean;
    }
    interface GbAvatarLabelGroup {
        "placeholder": boolean;
        "size": GeneralSizes;
        "state": OnlineIndicatorStates;
        "statusIcon": string;
        "text": boolean;
        "weight": BorderWeights;
    }
    interface GbAvatarProfilePhoto {
        "placeholder": boolean;
        "size": GeneralSizes;
        "state": OnlineIndicatorStates;
        "statusIcon": string;
        "text": boolean;
        "weight": BorderWeights;
    }
    interface GbBadge {
        "closeButton"?: boolean;
        "color": GeneralColors;
        "icon": 'dot' | 'avatar' | 'icon_leading' | 'icon_trailing' | 'country' | 'only';
        "iconLeadingSrc"?: string;
        "iconTrailingSrc"?: string;
        "size": GeneralSizes;
        "type": 'pill_color' | 'pill_outline' | 'badge_color' | 'badge_modern';
    }
    interface GbBadgeClose {
        "color": GeneralColors;
        "type": 'square' | 'rounded';
    }
    interface GbButton {
        "disabled": boolean;
        "hierarchy": GeneralHierarchies;
        "leftIcon"?: string;
        "rightIcon"?: string;
        "size": GeneralSizes;
    }
    interface GbButtonClose {
        "color": 'primary' | 'information' | 'success' | 'gray' | 'warning' | 'error';
        "size": GeneralSizes;
    }
    interface GbCheckbox {
        "checked": boolean;
        "indeterminate": boolean;
        "size": GeneralSizes;
        "state": CheckBoxStates;
        "supportingText": boolean;
        "type": CheckBoxVariants;
    }
    interface GbCheckboxBase {
        "checked": boolean;
        "indeterminate": boolean;
        "size": GeneralSizes;
        "state": CheckBoxStates;
        "type": CheckBoxVariants;
    }
    interface GbCheckboxGroup {
        "breakpoint": BreakPoints;
        "icon": string;
        "selected": boolean;
        "size": GeneralSizes;
        "type": 'icon_simple' | 'avatar' | 'payment_icon' | 'radio_button' | 'checkbox';
    }
    interface GbCollapseButton {
        "currentIconDirection": string;
        "isHovered": boolean;
    }
    interface GbDropdownItemsWithShortcut {
        "checkbox": boolean;
        "checkboxStates": CheckBoxStates;
        "icon": boolean;
        "iconSrc": string;
        "label": string;
        "shortcut": boolean;
        "shortcutIcon": string;
        "state": 'default' | 'disabled';
    }
    interface GbHeaderIcon {
        "state": StateEnum;
    }
    interface GbHelpDropdown {
        "showLogError": boolean;
    }
    interface GbInputDropdown {
        "hintText": string;
        "label": string;
        "placeholder": string;
        "showHelpIcon": boolean;
        "showHintText": boolean;
        "showLabel": boolean;
        "showSupportingText": boolean;
        "size": GeneralSizes;
        "state": 'default' | 'disabled';
        "type": 'icon_leading' | 'avatar_leading' | 'dot_leading' | 'search' | 'tags';
    }
    interface GbInputDropdownMenuItem {
        "checkboxStates": CheckBoxStates;
        "selected": boolean;
        "state": 'default' | 'disabled';
        "supportingText": boolean;
        "type": 'icon_leading' | 'avatar_leading' | 'dot_leading' | 'checkbox';
    }
    interface GbInputField {
        "destructive"?: boolean;
        "helpIcon"?: boolean;
        "icon"?: string;
        "inputType": 'default' | 'icon_leading' | 'leading_dropdown' | 'trailing_dropdown'|'leading_text'|'payment_input'| 'tags' | 'trailing_button' |'password' | 'password_icon_leading' | 'count';
        "label"?: string;
        "placeholder": string;
        "size": GeneralSizes;
    }
    interface GbMegainputField {
        "size": GeneralSizes;
    }
    interface GbNotificationContent {
        "icon": string;
        "label": string;
        "supportingText": string;
        "time": string;
    }
    interface GbNotificationPanel {
        "state": 'empty' | 'notification_dropdown';
    }
    interface GbScrollbar {
        "length": '25%' | '50%' | '75%';
    }
    interface GbSlider {
        "max": number;
        "min": number;
        "thumbType": 'text' | 'tooltip';
    }
    interface GbSliderControlHandle {
        "type"?: 'text' | 'tooltip';
        "value": number;
    }
    interface GbStatusIndicator {
        "indicatorStateClass": string;
        "size": GeneralSizes;
        "state": OnlineIndicatorStates;
        "statusIcon": string;
    }
    interface GbTag {
        "checkbox"?: boolean;
        "closeButton"?: boolean;
        "count"?: boolean;
        "icon"?: 'country' | 'avatar' | 'dot';
        "size": 'sm' | 'md' | 'lg';
    }
    interface GbTagCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "size": 'sm' | 'md' | 'lg';
    }
    interface GbTagClose {
        "size": GeneralSizes;
    }
    interface GbTagCount {
        "size": GeneralSizes;
    }
    interface GbTextareaInputField {
        "destructive"?: boolean;
        "label": string;
        "placeholder": string;
        "type": 'default' | 'tags';
    }
    interface GbToggle {
        "size": GeneralSizes;
        "state": StateEnum;
        "supportingText": boolean;
    }
    interface GbToggleBase {
        "size": GeneralSizes;
        "state": StateEnum;
    }
    interface GbTooltip {
        "arrow": ArrowPositions;
        "supportingText": boolean;
    }
    interface GbWysiwygEditorIcon {
    }
    interface NotificationBell {
        "state": StateEnum;
    }
}
export interface GbSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGbSliderElement;
}
declare global {
    interface HTMLGbAvatarElement extends Components.GbAvatar, HTMLStencilElement {
    }
    var HTMLGbAvatarElement: {
        prototype: HTMLGbAvatarElement;
        new (): HTMLGbAvatarElement;
    };
    interface HTMLGbAvatarAddButtonElement extends Components.GbAvatarAddButton, HTMLStencilElement {
    }
    var HTMLGbAvatarAddButtonElement: {
        prototype: HTMLGbAvatarAddButtonElement;
        new (): HTMLGbAvatarAddButtonElement;
    };
    interface HTMLGbAvatarContrastInnerBorderElement extends Components.GbAvatarContrastInnerBorder, HTMLStencilElement {
    }
    var HTMLGbAvatarContrastInnerBorderElement: {
        prototype: HTMLGbAvatarContrastInnerBorderElement;
        new (): HTMLGbAvatarContrastInnerBorderElement;
    };
    interface HTMLGbAvatarDropdownElement extends Components.GbAvatarDropdown, HTMLStencilElement {
    }
    var HTMLGbAvatarDropdownElement: {
        prototype: HTMLGbAvatarDropdownElement;
        new (): HTMLGbAvatarDropdownElement;
    };
    interface HTMLGbAvatarGroupElement extends Components.GbAvatarGroup, HTMLStencilElement {
    }
    var HTMLGbAvatarGroupElement: {
        prototype: HTMLGbAvatarGroupElement;
        new (): HTMLGbAvatarGroupElement;
    };
    interface HTMLGbAvatarLabelGroupElement extends Components.GbAvatarLabelGroup, HTMLStencilElement {
    }
    var HTMLGbAvatarLabelGroupElement: {
        prototype: HTMLGbAvatarLabelGroupElement;
        new (): HTMLGbAvatarLabelGroupElement;
    };
    interface HTMLGbAvatarProfilePhotoElement extends Components.GbAvatarProfilePhoto, HTMLStencilElement {
    }
    var HTMLGbAvatarProfilePhotoElement: {
        prototype: HTMLGbAvatarProfilePhotoElement;
        new (): HTMLGbAvatarProfilePhotoElement;
    };
    interface HTMLGbBadgeElement extends Components.GbBadge, HTMLStencilElement {
    }
    var HTMLGbBadgeElement: {
        prototype: HTMLGbBadgeElement;
        new (): HTMLGbBadgeElement;
    };
    interface HTMLGbBadgeCloseElement extends Components.GbBadgeClose, HTMLStencilElement {
    }
    var HTMLGbBadgeCloseElement: {
        prototype: HTMLGbBadgeCloseElement;
        new (): HTMLGbBadgeCloseElement;
    };
    interface HTMLGbButtonElement extends Components.GbButton, HTMLStencilElement {
    }
    var HTMLGbButtonElement: {
        prototype: HTMLGbButtonElement;
        new (): HTMLGbButtonElement;
    };
    interface HTMLGbButtonCloseElement extends Components.GbButtonClose, HTMLStencilElement {
    }
    var HTMLGbButtonCloseElement: {
        prototype: HTMLGbButtonCloseElement;
        new (): HTMLGbButtonCloseElement;
    };
    interface HTMLGbCheckboxElement extends Components.GbCheckbox, HTMLStencilElement {
    }
    var HTMLGbCheckboxElement: {
        prototype: HTMLGbCheckboxElement;
        new (): HTMLGbCheckboxElement;
    };
    interface HTMLGbCheckboxBaseElement extends Components.GbCheckboxBase, HTMLStencilElement {
    }
    var HTMLGbCheckboxBaseElement: {
        prototype: HTMLGbCheckboxBaseElement;
        new (): HTMLGbCheckboxBaseElement;
    };
    interface HTMLGbCheckboxGroupElement extends Components.GbCheckboxGroup, HTMLStencilElement {
    }
    var HTMLGbCheckboxGroupElement: {
        prototype: HTMLGbCheckboxGroupElement;
        new (): HTMLGbCheckboxGroupElement;
    };
    interface HTMLGbCollapseButtonElement extends Components.GbCollapseButton, HTMLStencilElement {
    }
    var HTMLGbCollapseButtonElement: {
        prototype: HTMLGbCollapseButtonElement;
        new (): HTMLGbCollapseButtonElement;
    };
    interface HTMLGbDropdownItemsWithShortcutElement extends Components.GbDropdownItemsWithShortcut, HTMLStencilElement {
    }
    var HTMLGbDropdownItemsWithShortcutElement: {
        prototype: HTMLGbDropdownItemsWithShortcutElement;
        new (): HTMLGbDropdownItemsWithShortcutElement;
    };
    interface HTMLGbHeaderIconElement extends Components.GbHeaderIcon, HTMLStencilElement {
    }
    var HTMLGbHeaderIconElement: {
        prototype: HTMLGbHeaderIconElement;
        new (): HTMLGbHeaderIconElement;
    };
    interface HTMLGbHelpDropdownElement extends Components.GbHelpDropdown, HTMLStencilElement {
    }
    var HTMLGbHelpDropdownElement: {
        prototype: HTMLGbHelpDropdownElement;
        new (): HTMLGbHelpDropdownElement;
    };
    interface HTMLGbInputDropdownElement extends Components.GbInputDropdown, HTMLStencilElement {
    }
    var HTMLGbInputDropdownElement: {
        prototype: HTMLGbInputDropdownElement;
        new (): HTMLGbInputDropdownElement;
    };
    interface HTMLGbInputDropdownMenuItemElement extends Components.GbInputDropdownMenuItem, HTMLStencilElement {
    }
    var HTMLGbInputDropdownMenuItemElement: {
        prototype: HTMLGbInputDropdownMenuItemElement;
        new (): HTMLGbInputDropdownMenuItemElement;
    };
    interface HTMLGbInputFieldElement extends Components.GbInputField, HTMLStencilElement {
    }
    var HTMLGbInputFieldElement: {
        prototype: HTMLGbInputFieldElement;
        new (): HTMLGbInputFieldElement;
    };
    interface HTMLGbMegainputFieldElement extends Components.GbMegainputField, HTMLStencilElement {
    }
    var HTMLGbMegainputFieldElement: {
        prototype: HTMLGbMegainputFieldElement;
        new (): HTMLGbMegainputFieldElement;
    };
    interface HTMLGbNotificationContentElement extends Components.GbNotificationContent, HTMLStencilElement {
    }
    var HTMLGbNotificationContentElement: {
        prototype: HTMLGbNotificationContentElement;
        new (): HTMLGbNotificationContentElement;
    };
    interface HTMLGbNotificationPanelElement extends Components.GbNotificationPanel, HTMLStencilElement {
    }
    var HTMLGbNotificationPanelElement: {
        prototype: HTMLGbNotificationPanelElement;
        new (): HTMLGbNotificationPanelElement;
    };
    interface HTMLGbScrollbarElement extends Components.GbScrollbar, HTMLStencilElement {
    }
    var HTMLGbScrollbarElement: {
        prototype: HTMLGbScrollbarElement;
        new (): HTMLGbScrollbarElement;
    };
    interface HTMLGbSliderElementEventMap {
        "valueChange": { left: number; right: number };
    }
    interface HTMLGbSliderElement extends Components.GbSlider, HTMLStencilElement {
        addEventListener<K extends keyof HTMLGbSliderElementEventMap>(type: K, listener: (this: HTMLGbSliderElement, ev: GbSliderCustomEvent<HTMLGbSliderElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLGbSliderElementEventMap>(type: K, listener: (this: HTMLGbSliderElement, ev: GbSliderCustomEvent<HTMLGbSliderElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLGbSliderElement: {
        prototype: HTMLGbSliderElement;
        new (): HTMLGbSliderElement;
    };
    interface HTMLGbSliderControlHandleElement extends Components.GbSliderControlHandle, HTMLStencilElement {
    }
    var HTMLGbSliderControlHandleElement: {
        prototype: HTMLGbSliderControlHandleElement;
        new (): HTMLGbSliderControlHandleElement;
    };
    interface HTMLGbStatusIndicatorElement extends Components.GbStatusIndicator, HTMLStencilElement {
    }
    var HTMLGbStatusIndicatorElement: {
        prototype: HTMLGbStatusIndicatorElement;
        new (): HTMLGbStatusIndicatorElement;
    };
    interface HTMLGbTagElement extends Components.GbTag, HTMLStencilElement {
    }
    var HTMLGbTagElement: {
        prototype: HTMLGbTagElement;
        new (): HTMLGbTagElement;
    };
    interface HTMLGbTagCheckboxElement extends Components.GbTagCheckbox, HTMLStencilElement {
    }
    var HTMLGbTagCheckboxElement: {
        prototype: HTMLGbTagCheckboxElement;
        new (): HTMLGbTagCheckboxElement;
    };
    interface HTMLGbTagCloseElement extends Components.GbTagClose, HTMLStencilElement {
    }
    var HTMLGbTagCloseElement: {
        prototype: HTMLGbTagCloseElement;
        new (): HTMLGbTagCloseElement;
    };
    interface HTMLGbTagCountElement extends Components.GbTagCount, HTMLStencilElement {
    }
    var HTMLGbTagCountElement: {
        prototype: HTMLGbTagCountElement;
        new (): HTMLGbTagCountElement;
    };
    interface HTMLGbTextareaInputFieldElement extends Components.GbTextareaInputField, HTMLStencilElement {
    }
    var HTMLGbTextareaInputFieldElement: {
        prototype: HTMLGbTextareaInputFieldElement;
        new (): HTMLGbTextareaInputFieldElement;
    };
    interface HTMLGbToggleElement extends Components.GbToggle, HTMLStencilElement {
    }
    var HTMLGbToggleElement: {
        prototype: HTMLGbToggleElement;
        new (): HTMLGbToggleElement;
    };
    interface HTMLGbToggleBaseElement extends Components.GbToggleBase, HTMLStencilElement {
    }
    var HTMLGbToggleBaseElement: {
        prototype: HTMLGbToggleBaseElement;
        new (): HTMLGbToggleBaseElement;
    };
    interface HTMLGbTooltipElement extends Components.GbTooltip, HTMLStencilElement {
    }
    var HTMLGbTooltipElement: {
        prototype: HTMLGbTooltipElement;
        new (): HTMLGbTooltipElement;
    };
    interface HTMLGbWysiwygEditorIconElement extends Components.GbWysiwygEditorIcon, HTMLStencilElement {
    }
    var HTMLGbWysiwygEditorIconElement: {
        prototype: HTMLGbWysiwygEditorIconElement;
        new (): HTMLGbWysiwygEditorIconElement;
    };
    interface HTMLNotificationBellElement extends Components.NotificationBell, HTMLStencilElement {
    }
    var HTMLNotificationBellElement: {
        prototype: HTMLNotificationBellElement;
        new (): HTMLNotificationBellElement;
    };
    interface HTMLElementTagNameMap {
        "gb-avatar": HTMLGbAvatarElement;
        "gb-avatar-add-button": HTMLGbAvatarAddButtonElement;
        "gb-avatar-contrast-inner-border": HTMLGbAvatarContrastInnerBorderElement;
        "gb-avatar-dropdown": HTMLGbAvatarDropdownElement;
        "gb-avatar-group": HTMLGbAvatarGroupElement;
        "gb-avatar-label-group": HTMLGbAvatarLabelGroupElement;
        "gb-avatar-profile-photo": HTMLGbAvatarProfilePhotoElement;
        "gb-badge": HTMLGbBadgeElement;
        "gb-badge-close": HTMLGbBadgeCloseElement;
        "gb-button": HTMLGbButtonElement;
        "gb-button-close": HTMLGbButtonCloseElement;
        "gb-checkbox": HTMLGbCheckboxElement;
        "gb-checkbox-base": HTMLGbCheckboxBaseElement;
        "gb-checkbox-group": HTMLGbCheckboxGroupElement;
        "gb-collapse-button": HTMLGbCollapseButtonElement;
        "gb-dropdown-items-with-shortcut": HTMLGbDropdownItemsWithShortcutElement;
        "gb-header-icon": HTMLGbHeaderIconElement;
        "gb-help-dropdown": HTMLGbHelpDropdownElement;
        "gb-input-dropdown": HTMLGbInputDropdownElement;
        "gb-input-dropdown-menu-item": HTMLGbInputDropdownMenuItemElement;
        "gb-input-field": HTMLGbInputFieldElement;
        "gb-megainput-field": HTMLGbMegainputFieldElement;
        "gb-notification-content": HTMLGbNotificationContentElement;
        "gb-notification-panel": HTMLGbNotificationPanelElement;
        "gb-scrollbar": HTMLGbScrollbarElement;
        "gb-slider": HTMLGbSliderElement;
        "gb-slider-control-handle": HTMLGbSliderControlHandleElement;
        "gb-status-indicator": HTMLGbStatusIndicatorElement;
        "gb-tag": HTMLGbTagElement;
        "gb-tag-checkbox": HTMLGbTagCheckboxElement;
        "gb-tag-close": HTMLGbTagCloseElement;
        "gb-tag-count": HTMLGbTagCountElement;
        "gb-textarea-input-field": HTMLGbTextareaInputFieldElement;
        "gb-toggle": HTMLGbToggleElement;
        "gb-toggle-base": HTMLGbToggleBaseElement;
        "gb-tooltip": HTMLGbTooltipElement;
        "gb-wysiwyg-editor-icon": HTMLGbWysiwygEditorIconElement;
        "notification-bell": HTMLNotificationBellElement;
    }
}
declare namespace LocalJSX {
    interface GbAvatar {
        "placeholder"?: boolean;
        "size"?: GeneralSizes;
        "state"?: OnlineIndicatorStates;
        "statusIcon"?: string;
        "text"?: boolean;
        "weight"?: BorderWeights;
    }
    interface GbAvatarAddButton {
        "showToolTip"?: boolean;
        "size"?: GeneralSizes;
        "state"?: StateEnum;
    }
    interface GbAvatarContrastInnerBorder {
        "borderSize"?: GeneralSizes;
        "weight"?: BorderWeights;
    }
    interface GbAvatarDropdown {
        "listGroup1"?: boolean;
        "listGroup2"?: boolean;
        "listGroup3"?: boolean;
        "showDarkTheme"?: boolean;
        "showLogOut"?: boolean;
        "showProfile"?: boolean;
        "text"?: boolean;
        "type"?: 'simple' | 'complex';
    }
    interface GbAvatarGroup {
        "addMoreButton"?: boolean;
        "moreUser"?: boolean;
        "size"?: GeneralSizes;
        "state"?: StateEnum;
        "text"?: boolean;
    }
    interface GbAvatarLabelGroup {
        "placeholder"?: boolean;
        "size"?: GeneralSizes;
        "state"?: OnlineIndicatorStates;
        "statusIcon"?: string;
        "text"?: boolean;
        "weight"?: BorderWeights;
    }
    interface GbAvatarProfilePhoto {
        "placeholder"?: boolean;
        "size"?: GeneralSizes;
        "state"?: OnlineIndicatorStates;
        "statusIcon"?: string;
        "text"?: boolean;
        "weight"?: BorderWeights;
    }
    interface GbBadge {
        "closeButton"?: boolean;
        "color"?: GeneralColors;
        "icon"?: 'dot' | 'avatar' | 'icon_leading' | 'icon_trailing' | 'country' | 'only';
        "iconLeadingSrc"?: string;
        "iconTrailingSrc"?: string;
        "size"?: GeneralSizes;
        "type"?: 'pill_color' | 'pill_outline' | 'badge_color' | 'badge_modern';
    }
    interface GbBadgeClose {
        "color"?: GeneralColors;
        "type"?: 'square' | 'rounded';
    }
    interface GbButton {
        "disabled"?: boolean;
        "hierarchy"?: GeneralHierarchies;
        "leftIcon"?: string;
        "rightIcon"?: string;
        "size"?: GeneralSizes;
    }
    interface GbButtonClose {
        "color"?: 'primary' | 'information' | 'success' | 'gray' | 'warning' | 'error';
        "size"?: GeneralSizes;
    }
    interface GbCheckbox {
        "checked"?: boolean;
        "indeterminate"?: boolean;
        "size"?: GeneralSizes;
        "state"?: CheckBoxStates;
        "supportingText"?: boolean;
        "type"?: CheckBoxVariants;
    }
    interface GbCheckboxBase {
        "checked"?: boolean;
        "indeterminate"?: boolean;
        "size"?: GeneralSizes;
        "state"?: CheckBoxStates;
        "type"?: CheckBoxVariants;
    }
    interface GbCheckboxGroup {
        "breakpoint"?: BreakPoints;
        "icon"?: string;
        "selected"?: boolean;
        "size"?: GeneralSizes;
        "type"?: 'icon_simple' | 'avatar' | 'payment_icon' | 'radio_button' | 'checkbox';
    }
    interface GbCollapseButton {
        "currentIconDirection"?: string;
        "isHovered"?: boolean;
    }
    interface GbDropdownItemsWithShortcut {
        "checkbox"?: boolean;
        "checkboxStates"?: CheckBoxStates;
        "icon"?: boolean;
        "iconSrc"?: string;
        "label"?: string;
        "shortcut"?: boolean;
        "shortcutIcon"?: string;
        "state"?: 'default' | 'disabled';
    }
    interface GbHeaderIcon {
        "state"?: StateEnum;
    }
    interface GbHelpDropdown {
        "showLogError"?: boolean;
    }
    interface GbInputDropdown {
        "hintText"?: string;
        "label"?: string;
        "placeholder"?: string;
        "showHelpIcon"?: boolean;
        "showHintText"?: boolean;
        "showLabel"?: boolean;
        "showSupportingText"?: boolean;
        "size"?: GeneralSizes;
        "state"?: 'default' | 'disabled';
        "type"?: 'icon_leading' | 'avatar_leading' | 'dot_leading' | 'search' | 'tags';
    }
    interface GbInputDropdownMenuItem {
        "checkboxStates"?: CheckBoxStates;
        "selected"?: boolean;
        "state"?: 'default' | 'disabled';
        "supportingText"?: boolean;
        "type"?: 'icon_leading' | 'avatar_leading' | 'dot_leading' | 'checkbox';
    }
    interface GbInputField {
        "destructive"?: boolean;
        "helpIcon"?: boolean;
        "icon"?: string;
        "inputType"?: 'default' | 'icon_leading' | 'leading_dropdown' | 'trailing_dropdown'|'leading_text'|'payment_input'| 'tags' | 'trailing_button' |'password' | 'password_icon_leading' | 'count';
        "label"?: string;
        "placeholder"?: string;
        "size"?: GeneralSizes;
    }
    interface GbMegainputField {
        "size"?: GeneralSizes;
    }
    interface GbNotificationContent {
        "icon"?: string;
        "label"?: string;
        "supportingText"?: string;
        "time"?: string;
    }
    interface GbNotificationPanel {
        "state"?: 'empty' | 'notification_dropdown';
    }
    interface GbScrollbar {
        "length"?: '25%' | '50%' | '75%';
    }
    interface GbSlider {
        "max"?: number;
        "min"?: number;
        "onValueChange"?: (event: GbSliderCustomEvent<{ left: number; right: number }>) => void;
        "thumbType"?: 'text' | 'tooltip';
    }
    interface GbSliderControlHandle {
        "type"?: 'text' | 'tooltip';
        "value"?: number;
    }
    interface GbStatusIndicator {
        "indicatorStateClass"?: string;
        "size"?: GeneralSizes;
        "state"?: OnlineIndicatorStates;
        "statusIcon"?: string;
    }
    interface GbTag {
        "checkbox"?: boolean;
        "closeButton"?: boolean;
        "count"?: boolean;
        "icon"?: 'country' | 'avatar' | 'dot';
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface GbTagCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface GbTagClose {
        "size"?: GeneralSizes;
    }
    interface GbTagCount {
        "size"?: GeneralSizes;
    }
    interface GbTextareaInputField {
        "destructive"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "type"?: 'default' | 'tags';
    }
    interface GbToggle {
        "size"?: GeneralSizes;
        "state"?: StateEnum;
        "supportingText"?: boolean;
    }
    interface GbToggleBase {
        "size"?: GeneralSizes;
        "state"?: StateEnum;
    }
    interface GbTooltip {
        "arrow"?: ArrowPositions;
        "supportingText"?: boolean;
    }
    interface GbWysiwygEditorIcon {
    }
    interface NotificationBell {
        "state"?: StateEnum;
    }
    interface IntrinsicElements {
        "gb-avatar": GbAvatar;
        "gb-avatar-add-button": GbAvatarAddButton;
        "gb-avatar-contrast-inner-border": GbAvatarContrastInnerBorder;
        "gb-avatar-dropdown": GbAvatarDropdown;
        "gb-avatar-group": GbAvatarGroup;
        "gb-avatar-label-group": GbAvatarLabelGroup;
        "gb-avatar-profile-photo": GbAvatarProfilePhoto;
        "gb-badge": GbBadge;
        "gb-badge-close": GbBadgeClose;
        "gb-button": GbButton;
        "gb-button-close": GbButtonClose;
        "gb-checkbox": GbCheckbox;
        "gb-checkbox-base": GbCheckboxBase;
        "gb-checkbox-group": GbCheckboxGroup;
        "gb-collapse-button": GbCollapseButton;
        "gb-dropdown-items-with-shortcut": GbDropdownItemsWithShortcut;
        "gb-header-icon": GbHeaderIcon;
        "gb-help-dropdown": GbHelpDropdown;
        "gb-input-dropdown": GbInputDropdown;
        "gb-input-dropdown-menu-item": GbInputDropdownMenuItem;
        "gb-input-field": GbInputField;
        "gb-megainput-field": GbMegainputField;
        "gb-notification-content": GbNotificationContent;
        "gb-notification-panel": GbNotificationPanel;
        "gb-scrollbar": GbScrollbar;
        "gb-slider": GbSlider;
        "gb-slider-control-handle": GbSliderControlHandle;
        "gb-status-indicator": GbStatusIndicator;
        "gb-tag": GbTag;
        "gb-tag-checkbox": GbTagCheckbox;
        "gb-tag-close": GbTagClose;
        "gb-tag-count": GbTagCount;
        "gb-textarea-input-field": GbTextareaInputField;
        "gb-toggle": GbToggle;
        "gb-toggle-base": GbToggleBase;
        "gb-tooltip": GbTooltip;
        "gb-wysiwyg-editor-icon": GbWysiwygEditorIcon;
        "notification-bell": NotificationBell;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gb-avatar": LocalJSX.GbAvatar & JSXBase.HTMLAttributes<HTMLGbAvatarElement>;
            "gb-avatar-add-button": LocalJSX.GbAvatarAddButton & JSXBase.HTMLAttributes<HTMLGbAvatarAddButtonElement>;
            "gb-avatar-contrast-inner-border": LocalJSX.GbAvatarContrastInnerBorder & JSXBase.HTMLAttributes<HTMLGbAvatarContrastInnerBorderElement>;
            "gb-avatar-dropdown": LocalJSX.GbAvatarDropdown & JSXBase.HTMLAttributes<HTMLGbAvatarDropdownElement>;
            "gb-avatar-group": LocalJSX.GbAvatarGroup & JSXBase.HTMLAttributes<HTMLGbAvatarGroupElement>;
            "gb-avatar-label-group": LocalJSX.GbAvatarLabelGroup & JSXBase.HTMLAttributes<HTMLGbAvatarLabelGroupElement>;
            "gb-avatar-profile-photo": LocalJSX.GbAvatarProfilePhoto & JSXBase.HTMLAttributes<HTMLGbAvatarProfilePhotoElement>;
            "gb-badge": LocalJSX.GbBadge & JSXBase.HTMLAttributes<HTMLGbBadgeElement>;
            "gb-badge-close": LocalJSX.GbBadgeClose & JSXBase.HTMLAttributes<HTMLGbBadgeCloseElement>;
            "gb-button": LocalJSX.GbButton & JSXBase.HTMLAttributes<HTMLGbButtonElement>;
            "gb-button-close": LocalJSX.GbButtonClose & JSXBase.HTMLAttributes<HTMLGbButtonCloseElement>;
            "gb-checkbox": LocalJSX.GbCheckbox & JSXBase.HTMLAttributes<HTMLGbCheckboxElement>;
            "gb-checkbox-base": LocalJSX.GbCheckboxBase & JSXBase.HTMLAttributes<HTMLGbCheckboxBaseElement>;
            "gb-checkbox-group": LocalJSX.GbCheckboxGroup & JSXBase.HTMLAttributes<HTMLGbCheckboxGroupElement>;
            "gb-collapse-button": LocalJSX.GbCollapseButton & JSXBase.HTMLAttributes<HTMLGbCollapseButtonElement>;
            "gb-dropdown-items-with-shortcut": LocalJSX.GbDropdownItemsWithShortcut & JSXBase.HTMLAttributes<HTMLGbDropdownItemsWithShortcutElement>;
            "gb-header-icon": LocalJSX.GbHeaderIcon & JSXBase.HTMLAttributes<HTMLGbHeaderIconElement>;
            "gb-help-dropdown": LocalJSX.GbHelpDropdown & JSXBase.HTMLAttributes<HTMLGbHelpDropdownElement>;
            "gb-input-dropdown": LocalJSX.GbInputDropdown & JSXBase.HTMLAttributes<HTMLGbInputDropdownElement>;
            "gb-input-dropdown-menu-item": LocalJSX.GbInputDropdownMenuItem & JSXBase.HTMLAttributes<HTMLGbInputDropdownMenuItemElement>;
            "gb-input-field": LocalJSX.GbInputField & JSXBase.HTMLAttributes<HTMLGbInputFieldElement>;
            "gb-megainput-field": LocalJSX.GbMegainputField & JSXBase.HTMLAttributes<HTMLGbMegainputFieldElement>;
            "gb-notification-content": LocalJSX.GbNotificationContent & JSXBase.HTMLAttributes<HTMLGbNotificationContentElement>;
            "gb-notification-panel": LocalJSX.GbNotificationPanel & JSXBase.HTMLAttributes<HTMLGbNotificationPanelElement>;
            "gb-scrollbar": LocalJSX.GbScrollbar & JSXBase.HTMLAttributes<HTMLGbScrollbarElement>;
            "gb-slider": LocalJSX.GbSlider & JSXBase.HTMLAttributes<HTMLGbSliderElement>;
            "gb-slider-control-handle": LocalJSX.GbSliderControlHandle & JSXBase.HTMLAttributes<HTMLGbSliderControlHandleElement>;
            "gb-status-indicator": LocalJSX.GbStatusIndicator & JSXBase.HTMLAttributes<HTMLGbStatusIndicatorElement>;
            "gb-tag": LocalJSX.GbTag & JSXBase.HTMLAttributes<HTMLGbTagElement>;
            "gb-tag-checkbox": LocalJSX.GbTagCheckbox & JSXBase.HTMLAttributes<HTMLGbTagCheckboxElement>;
            "gb-tag-close": LocalJSX.GbTagClose & JSXBase.HTMLAttributes<HTMLGbTagCloseElement>;
            "gb-tag-count": LocalJSX.GbTagCount & JSXBase.HTMLAttributes<HTMLGbTagCountElement>;
            "gb-textarea-input-field": LocalJSX.GbTextareaInputField & JSXBase.HTMLAttributes<HTMLGbTextareaInputFieldElement>;
            "gb-toggle": LocalJSX.GbToggle & JSXBase.HTMLAttributes<HTMLGbToggleElement>;
            "gb-toggle-base": LocalJSX.GbToggleBase & JSXBase.HTMLAttributes<HTMLGbToggleBaseElement>;
            "gb-tooltip": LocalJSX.GbTooltip & JSXBase.HTMLAttributes<HTMLGbTooltipElement>;
            "gb-wysiwyg-editor-icon": LocalJSX.GbWysiwygEditorIcon & JSXBase.HTMLAttributes<HTMLGbWysiwygEditorIconElement>;
            "notification-bell": LocalJSX.NotificationBell & JSXBase.HTMLAttributes<HTMLNotificationBellElement>;
        }
    }
}
