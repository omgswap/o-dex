import { css } from 'styled-components'

const AllColors = `
  // FONTS
  --font-default: "Inter", "Helvetica Neue", Helvetica, sans-serif;
  --font-mono: "Roboto Mono", monospace;
  --font-arial: Arial, Helvetica, sans-serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  // ------------------------------
`

const LightColors = `
  // Background
  --color-background-lighter: #f7f7f7;
  --color-background-darker: #EDF2F7;
  --color-background: #F2F2FF;
  --color-background-pageWrapper: #fff;
  --color-background-actionCards: #bbfdbb;
  --color-background-highlighted: #fcfde0;
  --color-background-selected: #d9d9d9;
  --color-background-selected-darker: #b6b6b6;
  --color-background-selected-dark: #bfbfbf;
  --color-background-progressBar: lightskyblue;
  --color-background-input: #e7ecf3;
  --color-background-input-lighter: #ffffff;
  --color-background-validation-warning: #fff0eb;
  --color-background-row-hover: #deeeff;
  --color-background-CTA: #727FFF;
  --color-background-selection: #727FFF;
  --color-background-button-hover: #5868ff;
  --color-background-button-disabled-hover: #2772c3;
  --color-background-balance-button-hover: #727FFF;

  // Borders
  --color-border: transparent;

  // Text
  --color-text-primary: #424779;
  --color-text-secondary: #9FB4C9;
  --color-text-active: #727FFF;
  --color-text-alternate: #424779;
  --color-text-CTA: #fff;
  --color-text-selection: #fff;
  --color-text-button-hover: #fff;

  // Buttons
  --color-button-primary: #000;
  --color-button-success: #5ca95c;
  --color-button-disabled: #666;
  --color-button-danger: #e55353;
  --color-button-secondary: #696969;
  --color-modali-close: #526877;

  // Components
  --color-background-banner: #DFE6EF;
  --color-text-wallet: #000;
  --color-text-deposit-header: #000000;
  --color-background-nav-active: #dfe6ef;
  --color-background-modali: #2f3e4e80;
  --color-text-modali: #526877;

  // SVGs
  --color-svg-deposit: #000;
  --color-svg-withdraw: #fff;
  --color-svg-switcher: #c1c3d3;

  // Shadow
  --shadow-color: #00000047;

  // States
  --color-error: red;
  --color-text-deleteOrders: #a71409;
  --color-background-deleteOrders: #ffd6d6;
`

const DarkColors = `
  // Background
  --color-background-lighter: #f7f7f7;
  --color-background: #222732;
  --color-background-pageWrapper: #16171e;
  --color-background-actionCards: #0269025c;
  --color-background-highlighted: #3f4104;
  --color-background-selected: #495064;
  --color-background-selected-darker: #b6b6b6;
  --color-background-selected-dark: #232733;
  --color-background-progressBar: #4338b5;
  --color-background-input: #232733;
  --color-background-input-lighter: #404040;
  --color-background-validation-warning: #4338b5;
  --color-background-row-hover: #09233e;
  --color-background-CTA: #222732;
  --color-background-selection: #16171e;
  --color-background-button-hover: #5868ff;
  --color-background-button-disabled-hover: #2772c3;
  --color-background-balance-button-hover: #5868ff;

  // Borders
  --color-border: #262626;

  // Text
  --color-text-primary: #e5e7ff;
  --color-text-secondary: #c6c7d9;
  --color-text-active: #727FFF;
  --color-text-CTA: #727FFF;
  --color-text-selection: #727FFF;
  --color-text-button-hover: #e9e9f0;

  // Buttons
  --color-button-primary: #e8e6e3;
  --color-button-success: #91c591;
  --color-button-disabled: #3d4043;
  --color-button-danger: #9c1818;
  --color-button-secondary: #696969;
  --color-modali-close: #727FFF;

  // Components
  --color-background-banner: #252729;
  --color-text-banner: wheat;
  --color-background-nav-active: #404040;

  // SVGs
  --color-svg-deposit: #727FFF;
  --color-svg-withdraw: #000;
  --color-svg-switcher: #727FFF;

  // Shadow
  --shadow-color: #00000047;

  // States
  --color-error: #cd3636;
  --color-text-deleteOrders: #bdb6b5;
  --color-background-deleteOrders: #621b1b;
`

const variables = css`
  // General styles for all themes
  :root {
    ${AllColors}
  }

  :root,
  body.light-theme {
    // ------------------------------
    // COLOURS
    //-----------------------------
    ${LightColors}

    // ------------------------------
    // BORDERS
    // ------------------------------
    --border-radius: 0.4375rem;
    --border-radius-top: 0.6rem 0.6rem 0 0;

    // ------------------------------
    // BOX-SHADOW
    // ------------------------------
    --box-shadow: 0.0625rem 0.125rem 0.125rem -0.0625rem var(--shadow-color);
    --box-shadow-wrapper: 0 0 20px 0 rgba(201,201,223,0.4);

    //-------------------------------
    // GRID
    // ------------------------------
    --grid-row-size-walletPage: minmax(10.9375rem, 1.1fr) repeat(3, 1fr) minmax(10.3125rem, 1fr);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${DarkColors}
    }
  }

  body.dark-theme {
    ${DarkColors}
  }
`

export default variables
