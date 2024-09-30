export type GeneralSizes = 'xl4' | 'xl3' | 'xl2' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'profile_lg' | 'profile_md' | 'profile_sm';

export type GeneralHierarchies = 'primary' | 'secondary_gray' | 'secondary_color' | 'tertiary_gray' | 'tertiary_color' | 'link_gray' | 'link_color';

export enum StateEnum {
    Default = 'default',
    Disabled = 'disabled'
}

export type ArrowPositions = 'bottom_center' | 'bottom_left' | 'bottom_right' | 'top_center' | 'left' | 'right' | 'none';

export type CheckBoxVariants = 'checkbox' | 'check_circle' | 'radio';

export enum CheckBoxStates {
    Default = 'default',
    Disabled = 'disabled'
}

export enum BorderWeights {
    VeryLight = 'very_light',
    Light = 'light',
    Regular = 'regular',
    Heavy = 'heavy'
};

export enum OnlineIndicatorStates {
    Online = 'online',
    Offline = 'offline'
}

export type BreakPoints = 'desktop' | 'mobile';

export type FileUploadIconType = 'icon' | 'outline';

export type FileUploadStates = 'default' | 'in_progress' | 'complete' | 'hover' | 'disabled' | 'error';

export type FileType = '';

export type GeneralColors = 'default' | 'gray' | 'primary' | 'error' | 'warning' | 'success' | 'discovery' | 'information' | 'pink' | 'purple';

export type PaginationNumberShapes = 'square' | 'circle';

export type PaginationTypes =
  | 'page_default'
  | 'page_minimal_center_aligned'
  | 'card_default'
  | 'card_minimal_right_aligned'
  | 'card_minimal_left_aligned'
  | 'card_minimal_center_aligned'
  | 'card_button_group_right_aligned'
  | 'card_button_group_left_aligned'
  | 'card_button_group_center_aligned';

export type TabTypes = 'button_primary' | 'button_gray' | 'button_white' | 'rounded_button_white' | 'underline' | 'underline_filled' | 'line' | 'button_white_border' | 'rounded_button_white_border';

export type GeneralBackgroundCategories = 'plain_background' | 'colored_background';