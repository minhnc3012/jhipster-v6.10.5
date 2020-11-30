export interface LayoutConfig {
  logo?: string;
  appName?: string;
  type?: string;
  layoutOptions?: LayoutOptions;
}

export interface LayoutOptions {
  sidebarMenuOpened?: boolean;
  sidebarControlOpened?: boolean;
  isNoNavbarBorder?: boolean;
  isBodySmallText?: boolean;
  isNavbarSmallText?: boolean;
  isSidebarNavSmallText?: boolean;
  isFooterSmallText?: boolean;
  isSidebarNavFlatStyle?: boolean;
  isSidebarNavLegacyStyle?: boolean;
  isSidebarNavCompact?: boolean;
  isSidebarNavChildIndent?: boolean;
  isMainSidebarDisableHoverOrFocusAutoExpand?: boolean;
  isBrandSmallText?: boolean;
  colorVariants?: ColorVariants;
}

export interface ColorVariants {
  navbar?: BrightnessColor;
  menuSidebar?: string;
  accent?: string;
  brandLogo?: string;
}

export interface BrightnessColor {
  brightness?: string;
  color?: string;
}
