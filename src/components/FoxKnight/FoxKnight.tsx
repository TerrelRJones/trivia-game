import styled from 'styled-components';

interface FoxKnightProps {
  testID?: string;
}

const FoxKnightContainer = styled.div`
  svg {
    padding-top: 50px;
  }
`;

export const FoxKnight = ({ testID }: FoxKnightProps) => {
  return (
    <FoxKnightContainer data-testid={testID}>
      <svg
        height="216"
        width="249"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient id="a">
          <stop offset="0" stop-color="#9baab6" />
          <stop offset="1" stop-color="#62717f" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="50%"
          x2="57.341%"
          xlinkHref="#a"
          y1="-46.984%"
          y2="100%"
        />
        <linearGradient id="b">
          <stop offset="0" stop-color="#778892" />
          <stop offset="1" stop-color="#425059" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="50%"
          x2="50%"
          xlinkHref="#b"
          y1="6.388%"
          y2="50%"
        />
        <linearGradient id="c">
          <stop offset="0" stop-color="#b7c4d1" />
          <stop offset="1" stop-color="#8192a4" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="50%"
          x2="50%"
          xlinkHref="#c"
          y1="0%"
          y2="100%"
        />
        <linearGradient
          id="j"
          x1="53.609%"
          x2="50%"
          xlinkHref="#a"
          y1="41.863%"
          y2="54.461%"
        />
        <linearGradient
          id="k"
          x1="112.447%"
          x2="50%"
          xlinkHref="#b"
          y1="23.039%"
          y2="86.599%"
        />
        <linearGradient id="d">
          <stop offset="0" stop-color="#b7c4d1" />
          <stop offset="1" stop-color="#687787" />
        </linearGradient>
        <linearGradient
          id="l"
          x1="50%"
          x2="50%"
          xlinkHref="#d"
          y1="0%"
          y2="100%"
        />
        <linearGradient id="e">
          <stop offset="0" stop-color="#dfe4e8" />
          <stop offset="1" stop-color="#bcc4cd" />
        </linearGradient>
        <radialGradient id="m" cx="50%" cy="50%" r="65.586%" xlinkHref="#e" />
        <linearGradient
          id="n"
          x1="100%"
          x2="27.204%"
          xlinkHref="#c"
          y1="0%"
          y2="82.066%"
        />
        <linearGradient
          id="o"
          x1="14.767%"
          x2="14.767%"
          xlinkHref="#b"
          y1="97.54%"
          y2="60.501%"
        />
        <linearGradient
          id="p"
          x1="55.844%"
          x2="50%"
          xlinkHref="#d"
          y1="34.301%"
          y2="69.713%"
        />
        <linearGradient
          id="r"
          x1="61.535%"
          x2="61.535%"
          xlinkHref="#d"
          y1="3.716%"
          y2="58.18%"
        />
        <radialGradient id="s" cx="53.818%" cy="50%" r="50%" xlinkHref="#e" />
        <radialGradient id="t" cx="50%" cy="50%" r="63.564%">
          <stop offset="0" stop-color="#a0adb8" />
          <stop offset="1" stop-color="#8192a4" />
        </radialGradient>
        <mask id="f" fill="#fff">
          <path d="M0 0h70v79H0z" fill-rule="evenodd" />
        </mask>
        <mask id="q" fill="#fff">
          <path d="M0 216h249V0H0z" fill-rule="evenodd" />
        </mask>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M21.821 50.843c3.97 34.448 38.215 31.223 47.491 21.91 4.9-4.92-17.85-13.235-21.821-47.682C43.52-9.377 2.19.964 0 3.162 2.19.965 17.853 16.395 21.82 50.843"
            fill="#ff8f33"
            mask="url(#f)"
            transform="translate(0 119)"
          />
          <path
            d="M19.65 157C11.127 125.4.573 121.406 0 121.99c1.349-1.607 31.23-12.324 44 9.896-1.496.024-10.012-2.383-19.521-8.057 6.857 9.631 6.2 21.27 6.51 20.955-.31.316-4.188-6.697-14.407-12.901 6.402 8.844 3.292 23.39 3.068 25.117"
            fill="#c44e12"
          />
          <path d="M81.997 215H73v-26h18z" fill="#62717f" />
          <path d="M131.998 215H141v-26h-18z" fill="url(#g)" />
          <path
            d="M140 203.003a5.002 5.002 0 0 1-5.007 4.997 4.998 4.998 0 0 1-4.993-4.997 4.999 4.999 0 1 1 10 0M85 203.003a5 5 0 1 1-10-.005 5 5 0 0 1 10 .005"
            fill="#425059"
          />
          <path
            d="M68 162.501c0 12.012 2.708 23.116 7.274 32.224C84.385 199.292 95.483 202 107.5 202c12.02 0 23.117-2.708 32.225-7.275 4.566-9.108 7.275-20.207 7.275-32.224 0-12.015-2.715-23.116-7.281-32.228-9.107-4.562-20.207-7.273-32.219-7.273s-23.115 2.71-32.226 7.281C70.708 139.385 68 150.486 68 162.501z"
            fill="url(#h)"
          />
          <path
            d="M74.807 178.936C69.728 182.57 69 201.663 69 201.663s21.87 3.008 28.026 0c3.248-1.58 7.236-7.052 10.478-12.236 3.234 5.184 7.223 10.657 10.47 12.236 6.158 3.008 28.026 0 28.026 0s-.726-19.094-5.808-22.727c-5.482-3.915-59.901-3.915-65.385 0z"
            fill="url(#i)"
          />
          <path
            d="M69 171.9a76.043 76.043 0 0 0 2.979 13.526C82.604 188.323 94.629 190 107.45 190c12.842 0 24.88-1.682 35.522-4.589A75.913 75.913 0 0 0 146 171.557c-11.451-2.885-24.207-4.557-37.776-4.557-14.13 0-27.399 1.805-39.224 4.9"
            fill="url(#j)"
          />
          <path
            d="M157.318 175 171 161.313 158.69 149 145 162.687z"
            fill="url(#k)"
          />
          <path
            d="M188.182 178.61a6.21 6.21 0 0 1 .006 8.774l-5.8 5.803a6.2 6.2 0 0 1-8.77-.008l-5.798-5.788c-2.426-2.429-2.426-6.357-.005-8.776l5.803-5.803a6.21 6.21 0 0 1 8.775.007z"
            fill="#ea7e2d"
          />
          <path
            d="M148.08 116c20.405 0 36.92 17.018 36.92 38h-41z"
            fill="url(#l)"
          />
          <path
            d="M158 149.502c0 6.913-5.594 12.498-12.496 12.498-6.9 0-12.51-5.585-12.504-12.498C133 142.6 138.604 137 145.504 137c6.902 0 12.496 5.6 12.496 12.502"
            fill="url(#m)"
          />
          <path
            d="M145.496 157a7.488 7.488 0 0 1-7.496-7.499 7.495 7.495 0 0 1 7.499-7.501c4.136 0 7.495 3.359 7.501 7.501a7.5 7.5 0 0 1-7.504 7.499z"
            fill="#343434"
          />
          <path
            d="M161.909 186 181 166.906 172.09 158 153 177.09z"
            fill="url(#n)"
          />
          <path
            d="M110.475 138h-3.941C81.939 138 62 118.076 62 93.503S81.94 49 106.534 49h3.94C135.068 49 155 68.93 155 93.503S135.067 138 110.475 138z"
            fill="#ff8f33"
          />
          <path
            d="M129 112h21.388c2.925-5.869 4.612-12.44 4.612-19.413 0-15.2-7.807-28.607-19.693-36.587H129z"
            fill="#ed751b"
          />
          <path
            d="M91 124.379C91 132.42 97.425 139 105.279 139h22.442c7.854 0 14.279-6.58 14.279-14.621L91 109z"
            fill="#ff8f33"
          />
          <path
            d="M145.887 111.937c5.348-2.646 11.39-3.887 17.465-3.62.385-.015.631-.26.647-.612a.633.633 0 0 0-.59-.668c-6.288-.276-12.527 1.008-18.057 3.744a.65.65 0 0 0-.291.854c.106.23.328.365.558.365.09 0 .182-.02.268-.063zM164.94 128.637a.651.651 0 0 0-.292-.855c-5.53-2.737-11.763-4.02-18.055-3.746a.634.634 0 0 0-.592.669c.016.352.253.602.647.613 6.077-.28 12.118.975 17.465 3.619a.596.596 0 0 0 .267.063.62.62 0 0 0 .56-.363zM152.76 118.984a39.161 39.161 0 0 1 16.48 0c.346.074.664-.115.743-.41.08-.298-.125-.597-.454-.668a40.605 40.605 0 0 0-17.057 0c-.33.071-.534.37-.455.669.068.253.32.424.598.424a.679.679 0 0 0 .145-.015z"
            fill="#000"
          />
          <path
            d="M122.312 92C112.79 92 105 99.875 105 109.5c0 9.624 7.79 17.5 17.312 17.5h18.376c9.522 0 17.312-7.876 17.312-17.5z"
            fill="#ff8f33"
          />
          <path
            d="m158 110.331-9.504-4.325c-.039 0-.077-.006-.115-.006-12.36 0-22.381 9.402-22.381 21h14.235c9.77 0 17.765-7.501 17.765-16.669"
            fill="#f2f1e7"
          />
          <g fill="#000">
            <path d="M149.231 105c-.512 1.163-1.231 3.034-1.231 4.368 0 4.544 3.264 8.343 7.732 9.632 2.055-2.745 3.268-6.064 3.268-9.632zM140.113 111.937c-5.348-2.646-11.39-3.887-17.465-3.62-.385-.015-.631-.26-.647-.612a.633.633 0 0 1 .59-.668c6.288-.276 12.527 1.008 18.057 3.744a.65.65 0 0 1 .291.854.62.62 0 0 1-.559.365.598.598 0 0 1-.267-.063zM121.06 128.637a.652.652 0 0 1 .292-.855c5.53-2.737 11.763-4.02 18.056-3.746.34.016.606.316.591.669-.016.352-.253.602-.647.613-6.078-.28-12.118.975-17.466 3.619a.594.594 0 0 1-.266.063.62.62 0 0 1-.56-.363zM133.24 118.984a39.16 39.16 0 0 0-16.48 0c-.346.074-.664-.115-.743-.41-.079-.298.125-.597.454-.668a40.602 40.602 0 0 1 17.058 0c.33.071.533.37.454.669-.07.253-.32.424-.599.424a.683.683 0 0 1-.144-.015z" />
          </g>
          <path
            d="M149 87.481c.135 0 .263.036.398.038.202-.006.398-.038.602-.038z"
            fill="#e2c0a8"
          />
          <path
            d="M83.873 87.96C81.298 88.298 79 86.429 79 83.999c0-1.748 1.215-3.293 2.999-3.817l20.438-5.995c2.759-.809 5.563 1.116 5.563 3.818v3.328c0 1.996-1.574 3.687-3.689 3.963zM152.079 87.943c2.57.408 4.921-1.412 4.921-3.812v-.063c0-1.597-1.067-3.03-2.686-3.607l-14.587-5.196c-2.757-.982-5.727.888-5.727 3.606v2.945c0 1.882 1.473 3.49 3.49 3.812z"
            fill="#c44e12"
          />
          <path
            d="M164 40.736 131.79 61c-9.906-28.947-1.376-55-1.376-55C155.746 10.923 164 40.736 164 40.736z"
            fill="#ff8f33"
          />
          <path
            d="M104.752 13C72.307 13 46 39.147 46 71.395V136h29.312V75.494H171v-4.099C171 39.147 144.691 13 112.248 13z"
            fill="url(#o)"
          />
          <path
            d="M82 48.602 49.79 69c-9.906-29.14-1.376-63-1.376-63C73.746 10.956 82 48.602 82 48.602z"
            fill="#ff8f33"
          />
          <path
            d="m78 44.375-7.662 11.248L52.39 67c-7.885-24.347-3.062-54.01-1.457-60C71.679 17.465 78 44.375 78 44.375z"
            fill="#ffb985"
          />
          <path
            d="M55.852 62c-6.11-16.717-.501-40-.501-40C66.897 26.343 73 40.166 73 40.166l-4.711 13.538z"
            fill="#c44e12"
          />
          <path
            d="M63.096 55.96c-1.325-.33-2.052-2.61-2.067-5.778C56.134 48.398 53 44.038 53 44.038s1.955-1.026 4.73-1.55C56.312 37.555 56.87 33 56.87 33s4.068 1.48 7.587 5.017c1.665-2.426 3.39-3.846 3.39-3.846s2.277 4.93 1.613 10.41c.096.05.187.102.28.153-.547 3.432-1.185 5.416-1.185 5.416L71 52.938c-.039.868-.228 1.57-.577 2.057l-2.039.7c-.77-.154-1.653-.603-2.599-1.318-.913 1.179-1.855 1.79-2.689 1.584z"
            fill="#ff8f33"
          />
          <path
            d="M95.5 31C69.82 31 49 51.595 49 77h93c0-25.405-20.82-46-46.5-46"
            fill="#425059"
          />
          <path d="m65 81 90.77-81S192.383 17.821 194 81z" fill="url(#p)" />
          <path
            d="M169.469 75c3.136-.077 5.604-2.666 5.53-5.77-.91-35.55-21.923-46.209-22.817-46.646-2.804-1.383-6.209-.223-7.596 2.572-1.38 2.777-.237 6.125 2.54 7.515.764.401 15.801 8.617 16.523 36.851.078 3.057 2.607 5.478 5.67 5.478zM142.5 74c3.118-.085 5.574-2.7 5.498-5.861-.623-24.67-15.24-32.24-15.862-32.541-2.8-1.411-6.178-.237-7.559 2.6-1.356 2.804-.241 6.195 2.495 7.61.534.294 9.217 5.393 9.643 22.627.075 3.1 2.59 5.565 5.639 5.565z"
            fill="#425059"
          />
          <path d="M51 167h18v-16H51z" fill="#425059" mask="url(#q)" />
          <path
            d="M50 190.976A6.022 6.022 0 0 0 56.02 197h7.965A6.021 6.021 0 0 0 70 190.976v-7.954A6.02 6.02 0 0 0 63.985 177H56.02a6.02 6.02 0 0 0-6.02 6.022z"
            fill="#c9a88b"
            mask="url(#q)"
          />
          <path
            d="M55.174 185h3.652c2.304 0 4.174-1.788 4.174-3.995 0-2.212-1.87-4.005-4.174-4.005h-3.652C52.87 177 51 178.793 51 181.005c0 2.207 1.87 3.995 4.174 3.995z"
            fill="#f4d9bd"
            mask="url(#q)"
          />
          <path
            d="M73.918 116C53.515 116 37 133.018 37 154h41z"
            fill="url(#r)"
            mask="url(#q)"
          />
          <path
            d="M74.497 162C81.395 162 87 156.415 87 149.502 87 142.6 81.395 137 74.497 137 67.59 137 62 142.6 62 149.502 62 156.415 67.591 162 74.497 162z"
            fill="#bcc4cd"
            mask="url(#q)"
          />
          <path
            d="M75.005 157A7.987 7.987 0 0 0 83 149.001 7.993 7.993 0 0 0 75.005 141 8.004 8.004 0 0 0 67 149.001 7.997 7.997 0 0 0 75.005 157zM46 177h27v-12H46z"
            fill="#8192a4"
            mask="url(#q)"
          />
          <path
            d="M73 209v6h9.781L85 209zM141 209v6h-9.785L129 209z"
            fill="url(#i)"
            mask="url(#q)"
          />
          <path
            d="M138.71 213.291c-.505-.763-1.285-1.291-2.21-1.291-.926 0-1.705.528-2.211 1.291-.346-.294-.761-.497-1.234-.497-1.135 0-2.055 1.009-2.055 2.253 0 .388.92.704 2.055.704.473 0 .888-.064 1.234-.156.506.239 1.285.405 2.211.405.925 0 1.705-.166 2.21-.405.348.092.762.156 1.234.156 1.135 0 2.056-.316 2.056-.704 0-1.244-.92-2.253-2.056-2.253-.472 0-.886.203-1.234.497zM80.71 213.291c-.505-.763-1.285-1.291-2.21-1.291-.926 0-1.706.528-2.211 1.291-.347-.294-.761-.497-1.234-.497-1.135 0-2.055 1.009-2.055 2.253 0 .388.92.704 2.055.704a4.8 4.8 0 0 0 1.234-.156c.505.239 1.285.405 2.21.405.926 0 1.706-.166 2.211-.405a4.8 4.8 0 0 0 1.235.156c1.135 0 2.055-.316 2.055-.704 0-1.244-.92-2.253-2.055-2.253-.473 0-.888.203-1.235.497z"
            fill="#ff8f33"
            mask="url(#q)"
          />
          <path
            d="m169.6 199-5.6-5.61L185.389 172l5.611 5.6z"
            fill="#843200"
            mask="url(#q)"
          />
          <path
            d="m181.768 177.178-2.594 2.593a4.208 4.208 0 0 1-5.94.004c-1.64-1.64-1.652-4.307 0-5.946l2.586-2.598a4.204 4.204 0 1 1 5.948 5.947z"
            fill="#ff8f33"
            mask="url(#q)"
          />
          <path
            d="m202.12 167-6.12-6.116L227.885 129l6.115 6.118z"
            fill="#425059"
            mask="url(#q)"
          />
          <path
            d="m187 160.517 9.723 4.483 29.817-29.811 2.808-.536L249 115l-20.54 4.05z"
            fill="#bcc4cd"
            mask="url(#q)"
          />
          <path
            d="m199 167.263 4.493 9.737 41.465-41.459L249 115l-19.651 19.648-.533 2.808z"
            fill="#8192a4"
            mask="url(#q)"
          />
          <path
            d="M188.192 174.805 205 179l-4.196-16.806L184 158zM173.096 195.33l-6.41-6.418c-1.34-1.344-3.683-1.187-5.237.367-1.395 1.398-1.673 3.448-.725 4.817-.922 1.11-.982 2.633-.073 3.543l3.708 3.705c.915.907 2.42.858 3.546-.052 1.369.948 3.408.671 4.806-.733 1.554-1.557 1.728-3.883.385-5.228z"
            fill="#8192a4"
            mask="url(#q)"
          />
          <path
            d="M200.363 161.636a9.006 9.006 0 0 0-12.728-.005c-3.514 3.521-3.514 9.222.004 12.736 3.517 3.514 9.208 3.51 12.731-.005 3.514-3.51 3.502-9.216-.007-12.726z"
            fill="#425059"
            mask="url(#q)"
          />
          <path
            d="M197.54 164.463a5 5 0 0 0-7.069 0 4.993 4.993 0 0 0-.005 7.073 4.998 4.998 0 0 0 7.074-.005 5.006 5.006 0 0 0 0-7.068z"
            fill="#ff088d"
            mask="url(#q)"
          />
          <path
            d="M95 101a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
            fill="#000"
            mask="url(#q)"
          />
          <path
            d="M99 97a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="#f2f1e7"
            mask="url(#q)"
          />
          <path
            d="M149 101a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
            fill="#000"
            mask="url(#q)"
          />
          <path
            d="M151 97a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="#f2f1e7"
            mask="url(#q)"
          />
          <path
            d="M66.5 202C46.896 202 31 186.098 31 166.5c0-19.612 15.896-35.5 35.5-35.5 19.607 0 35.5 15.888 35.5 35.5 0 19.598-15.893 35.5-35.5 35.5z"
            fill="url(#s)"
            mask="url(#q)"
          />
          <path
            d="M66.5 191C52.97 191 42 180.029 42 166.505 42 152.973 52.97 142 66.5 142S91 152.973 91 166.505C91 180.029 80.03 191 66.5 191z"
            fill="url(#t)"
            mask="url(#q)"
          />
          <path
            d="M67.5 174a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
            fill="#343434"
            mask="url(#q)"
          />
        </g>
      </svg>
    </FoxKnightContainer>
  );
};
