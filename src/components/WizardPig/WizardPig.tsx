import styled from 'styled-components';
import { getAnimationPlayState } from 'helper/getAnimationPlayState';

interface WizardPigProps {
  testID?: string;
  damage?: boolean;
  animation?: boolean;
}

const WizardPigContainer = styled.div<
  Pick<WizardPigProps, 'animation' | 'damage'>
>`
  position: absolute;
  bottom: 0;
  left: 40px;

  animation: hover 6s ease-in-out infinite;
  ${({ animation }) => animation && getAnimationPlayState()}

  @keyframes hover {
    0% {
      transform: translateX(20px);
    }
    50% {
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(20px);
    }
  }

  .hat {
    transform-origin: center;

    ${({ damage }) => damage && ` animation: fall 2s forwards;`}
    ${({ animation }) => animation && getAnimationPlayState()}

    @keyframes fall {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-80px);
      }
      80% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(-1000px);
      }
    }
  }

  .hair {
    transform-origin: top left;

    animation: hairWind 6.6s infinite;
    ${({ animation }) => animation && getAnimationPlayState()}

    @keyframes hairWind {
      0% {
        transform: rotate(2deg);
      }
      50% {
        transform: rotate(-2deg);
      }

      100% {
        transform: rotate(2deg);
      }
    }
  }

  .right-arm {
    transform-origin: right;

    animation: attack 2s linear;

    @keyframes attack {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-8px);
      }
      80% {
        transform: translateX(8px);
      }
      100% {
        transform: translateX(0px);
      }
    }
  }
`;

export const WizardPig = ({ testID, damage, animation }: WizardPigProps) => {
  return (
    <WizardPigContainer
      data-testid={testID}
      animation={animation}
      damage={damage}
    >
      <svg
        height="251"
        width="203"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient
          id="wizardb"
          x1="12.527%"
          x2="200.148%"
          y1="30.518%"
          y2="30.518%"
        >
          <stop offset="0" stopColor="#00c1e7" />
          <stop offset="1" stopColor="#2c018b" />
        </linearGradient>
        <linearGradient id="wizardd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0" stopColor="#00c1e8" />
          <stop offset="1" stopColor="#2c018b" />
        </linearGradient>
        <linearGradient id="wizarda">
          <stop offset="0" stopColor="#00d9ff" />
          <stop offset="1" stopColor="#2c018b" />
        </linearGradient>
        <linearGradient
          id="wizarde"
          x1="50%"
          x2="50%"
          xmlnsXlink="#wizarda"
          y1="0%"
          y2="134.189%"
        />
        <linearGradient
          id="wizardg"
          x1="42.61%"
          x2="50%"
          xmlnsXlink="#wizarda"
          y1="43.368%"
          y2="56.767%"
        />
        <linearGradient
          id="wizardh"
          x1="57.005%"
          x2="83.152%"
          xmlnsXlink="#wizarda"
          y1="29.285%"
          y2="114.217%"
        />
        <mask id="wizardc" fill="#fff">
          <path d="M0 0h69v215H0z" fillRule="evenodd" />
        </mask>
        <mask id="wizardf" fill="#fff">
          <path d="M0 250h203V0H0z" fillRule="evenodd" />
        </mask>
        <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 203 0)">
          <path
            d="M32 228.278A5.718 5.718 0 0 0 37.718 234h7.568A5.718 5.718 0 0 0 51 228.278v-7.556A5.716 5.716 0 0 0 45.286 215h-7.568A5.716 5.716 0 0 0 32 220.722z"
            fill="#ffbdbd"
          />
          <path
            d="M29 214.007 51.265 225c-.014-3.046 5.907-52.992 6.735-56a16.636 16.636 0 0 0-15.378 10.261c-5.25 12.667-13.63 32.603-13.622 34.746z"
            fill="url(#wizardb)"
          />
          <g className="right-arm">
            <path
              d="M166.278 171c3.161 0 5.722 2.56 5.722 5.714v7.568a5.722 5.722 0 0 1-5.722 5.718h-7.555a5.723 5.723 0 0 1-5.723-5.718v-7.568a5.72 5.72 0 0 1 5.723-5.714z"
              fill="#ef9595"
            />
            <path
              d="M0 34.158c0 9.145 3.637 17.605 10.253 23.827 7.997 7.53 20.084 18.904 20.084 32.737V215h8.325V90.722c0-17.369-13.647-30.209-22.678-38.711-4.94-4.648-7.664-10.989-7.664-17.853 0-14.293 11.74-25.922 26.176-25.922 14.442 0 26.184 11.63 26.184 25.922 0 2.273 1.86 4.12 4.16 4.12 2.297 0 4.16-1.847 4.16-4.12C69 15.32 53.522 0 34.496 0 15.476 0 0 15.321 0 34.158z"
              fill="#f48b00"
              mask="url(#wizardc)"
              transform="translate(129 36)"
            />
            <path
              d="M162 172.833v3.337c0 2.113-1.788 3.83-3.995 3.83-2.208 0-4.005-1.717-4.005-3.83v-3.337c0-2.121 1.797-3.833 4.005-3.833 2.207 0 3.995 1.712 3.995 3.833z"
              fill="#ffbdbd"
            />
            <path
              d="M111 169.373c3.08-.832 42.887-.015 46 0V196c-3.113-.015-42.92-16.147-46-15.319z"
              fill="url(#wizardd)"
            />
          </g>
          {/* body  */}
          <path
            d="M126 250c.022-3.593-2.89-51.539-4.693-74.312-.523-6.607-6.027-11.688-12.64-11.688H66.245c-6.431 0-11.839 4.814-12.594 11.212C50.978 197.867 45.989 246.727 46 250z"
            fill="url(#wizardb)" // originally #e
          />
          {/* belt  */}
          <path d="M48 217h76v-8H48z" fill="#befffa" mask="url(#wizardf)" />
          <path
            d="M89.56 179h-4.11C59.795 179 39 158.181 39 132.502 39 106.825 59.796 86 85.45 86h4.11c25.65 0 46.44 20.825 46.44 46.502C136 158.182 115.21 179 89.56 179z"
            fill="#ffbdbd"
            mask="url(#wizardf)"
          />
          <path
            d="M107.579 169c-7.304 0-12.014 8.236-8.254 14.702 1.238 2.13 2.651 3.957 4.263 5.385l.133-6.553S110.271 195 115.571 195c0 0-2.774-7.472-1.63-12.906 0 0 1.826 5.627 6.059 8.033 0 0-1.827-4.283-3.01-12.674-.684-4.838-4.678-8.453-9.411-8.453"
            fill="#f2f1e7"
            mask="url(#wizardf)"
          />
          <path
            d="M89.56 86h-4.11C59.795 86 39 106.77 39 132.377c0 7.024 1.61 13.657 4.409 19.623l35.682-6.75a59.16 59.16 0 0 0 28.312-13.91l28.546 2.047c.008-.339.051-.668.051-1.01C136 106.77 115.21 86 89.56 86"
            fill="#ef9595"
            mask="url(#wizardf)"
          />
          <g className="hair">
            <path
              d="M37.89 108c-2.398 4.963-3.281 16.34-2.759 28.67.931 22.021-4.131 33.37-4.131 33.37 4.488-2.449 6.423-8.18 6.423-8.18 1.212 5.533-1.728 13.14-1.728 13.14 5.62 0 12.564-12.692 12.564-12.692l.14 6.671C65.276 154.632 61.68 108 61.68 108z"
              fill="#f2f1e7"
              mask="url(#wizardf)"
            />
          </g>
          <path
            d="M106.466 112.565 105 126.005c0 6.628 8.552 13.816 15.681 13.816 5.303 0 10.332 2.389 10.332 2.389l3.496 1.79.263-1.237c.778-3.32 1.228-6.765 1.228-10.319 0-16.128-8.48-30.283-21.265-38.444-9.087 3.957-8.27 8.187-8.27 18.565z"
            fill="#ef9595"
            mask="url(#wizardf)"
          />
          <path
            d="M110 154.504c0 7.454 5.92 13.496 13.23 13.496h3.542c7.304 0 13.228-6.042 13.228-13.496 0-7.458-5.924-13.504-13.228-13.504h-3.542c-7.31 0-13.23 6.046-13.23 13.504"
            fill="#ffbdbd"
            mask="url(#wizardf)"
          />
          <path
            d="M127.33 141.347h-5.66c-6.606 0-12.028 5.12-12.613 11.653-.037-.39-.057-.777-.057-1.173 0-7.087 5.671-12.827 12.67-12.827h5.66c6.996 0 12.67 5.74 12.67 12.827 0 .396-.024.784-.06 1.173-.586-6.534-6.003-11.653-12.61-11.653"
            fill="#ffe1e1"
            mask="url(#wizardf)"
          />
          <g fill="#ef9595">
            <path
              d="M136 155.5c0 2.486-2.237 4.5-5 4.5v-9c2.763.005 5 2.017 5 4.5M112 155.503c0-2.49 2.235-4.503 5-4.503v9c-2.765 0-5-2.016-5-4.497M97.126 163.653c2.682-1.978 6.026-2.22 8.839-.513 3.5 2.125 8.914 4.682 16.035 5.86-8.649 0-14.074-2.169-17.186-4.096-2.262-1.4-4.68-.776-6.996.5-1.609.887-5.778 3.618-9.818-2.988 3.81 3.674 7.733 2.266 9.126 1.237"
              mask="url(#wizardf)"
            />
          </g>
          <circle cx="125" cy="132" fill="#000" mask="url(#wizardf)" r="6" />
          <circle cx="75" cy="134" fill="#000" mask="url(#wizardf)" r="6" />
          <path
            d="M81 134.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0M131 132.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="#f2f1e7"
            mask="url(#wizardf)"
          />
          <path
            d="m78.687 125.708-11.844 2.22c-2.514.47-4.843-1.42-4.843-3.93 0-1.597.97-3.043 2.468-3.675l11.843-4.994c2.69-1.134 5.689.802 5.689 3.676v2.774c0 1.92-1.391 3.57-3.313 3.929M120.115 123.168l6.685 1.7c2.633.668 5.2-1.279 5.2-3.945v-.026a4.06 4.06 0 0 0-2.064-3.52l-6.686-3.817c-2.771-1.583-6.25.378-6.25 3.52v2.144c0 1.857 1.28 3.479 3.115 3.944"
            fill="#000"
            mask="url(#wizardf)"
          />
          <g className="hat">
            <path
              d="M173 108.78 2 139l49.47-43.358L111.714 85z"
              fill="url(#wizarda)" // originally #g
              mask="url(#wizardf)"
            />
            <path
              d="M44.672 103.053c-.15 5.205.132 14.4.285 16.028.302 3.235-.988 4.803-3.882 4.908-8.832.33-19.417-6.794-15.065-8.813 3.169-1.468 6.304-3.552 9.294-6.254 2.345-2.12 4.25-4.495 5.912-7.05 2.692-4.145 3.605-3.847 3.456 1.18M115.007 89.01c1.997 4.656 4.993 13.086 5.423 14.618.857 3.04 2.668 3.98 5.518 2.999 8.7-2.985 16.452-13.371 11.506-13.58-3.6-.15-7.39-.871-11.255-2.206-3.034-1.049-5.73-2.49-8.253-4.186-4.09-2.752-4.872-2.142-2.939 2.354"
              fill="#ffbdbd"
              mask="url(#wizardf)"
            />
            <path
              d="M64.87 0 41.868 16.38 0 11.497l36.297 21.371 21.585-3.825L50.914 97 111 86.356z"
              fill="url(#wizardb)" // originally #h
              mask="url(#wizardf)"
            />
            <path
              d="M114.11 86 45 101.444l5.72-5.238L51.902 86l52.596-12.014L111.715 85z"
              fill="#befffa"
              mask="url(#wizardf)"
            />
          </g>
        </g>
      </svg>
    </WizardPigContainer>
  );
};