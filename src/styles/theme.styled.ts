import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: 'radial-gradient(circle, #000e5d 0%, #010024 100%)',
    primary: '#000e5d',
    primaryDark: '#010024',
    disabledGray: '#ABABAB',
    easyGreen: '#008221',
    mediumOrange: '#BE3B01',
    sethRed: '#A30000',
    selectedBlue: '#2000AC',

    healthGreenGradient: 'linear-gradient(270deg, #1CFF00 0%, #0F8C00 100%)',
    healthRedGradient: 'linear-gradient(270deg, #FF0000 0%, #960000 100%)',

    selected: '#00c6f3',
    success: '#1cff00',

    textBg: 'rgba(255, 255, 255, 0.15)',
    white: '#fff',

    disabledBtnGradient: 'linear-gradient(0deg, #9F9F9F 0%, #D7D7D7 100%);',
    easyBtnGradient: 'linear-gradient(180deg, #00E412 0%, #004D03 100%);',
    mediumBtnGradient: 'linear-gradient(180deg, #FF9B00 0%, #AE2F00 100%);',
    sethBtnGradient: 'linear-gradient(180deg, #FF0000 0%, #6B0000 100%);',
    defaultBtnGradient: 'linear-gradient(180deg, #02f3fe 0%, #7f2eff 100%);',
    selectedBtnGradient: 'linear-gradient(0deg, #000767 0%, #0056DB 100%);',
  },
  fontFamily: { body: 'Lato' },
};

export default theme;
