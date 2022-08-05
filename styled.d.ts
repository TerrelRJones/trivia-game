// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      primaryDark: string;
      disabledGray: string;
      easyGreen: string;
      mediumOrange: string;
      sethRed: string;
      selectedBlue: string;
      healthGreenGradient: string;
      healthRedGradient: string;
      selected: string;
      success: string;
      textBg: string;
      white: string;
      disabledBtnGradient: string;
      easyBtnGradient: string;
      mediumBtnGradient: string;
      sethBtnGradient: string;
      defaultBtnGradient: string;
      selectedBtnGradient: string;
    };
    fontFamily: {
      body: string;
    };
  }
}
