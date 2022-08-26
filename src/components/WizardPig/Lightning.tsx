import styled from 'styled-components';

type LightningProps = {
  animation?: boolean;
};

const LightningContainer = styled.div<Pick<LightningProps, 'animation'>>`
  .light-1 {
    position: absolute;
    top: 40px;
    left: -10px;
    width: 40px;
  }

  .light-2 {
    position: absolute;
    left: 45px;
    top: 50px;
    width: 40px;
  }

  .path {
    stroke-dasharray: 2000;
    ${({ animation }) => !animation && 'animation: dash 0.25s infinite;'}

    opacity: 0.5;
  }

  @keyframes dash {
    0% {
      opacity: 0.5;
      stroke-dashoffset: 2000;
    }
    50% {
      opacity: 1;
      stroke-dashoffset: 3000;
    }
    100% {
      opacity: 0.2;
      stroke-dashoffset: 1000;
    }
  }
`;

const Lightning = ({ animation }: LightningProps) => {
  return (
    <LightningContainer animation={animation}>
      <svg
        className="light-1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1920"
      >
        <path
          className="path"
          d="M419.61,1776.65l361.27-106.26,343.05-236.8,173.04-191.26-853.08-106.26,604.14-215.55,300.55-78.93-270.19-106.26-467.52,130.79-106.26-82.21,543.42-163.94h203.4l-218.58-145.72-382.52,81.97,413.36,1153.63,421.5-15.18,121.43-569.23L346.75,975.18l476.63-500.92,725.57,373.41-962.37,710.39,157.87,318.77,877.37-585.92-318.77-889.51-850.04-100.18S1463.95,43.17,1500.39,43.17,298.18,616.95,298.18,616.95l364.3,491.81,446.27-270.19-9.11,476.63H443.9l516.1,537.35-540.39-75.9Z"
          fill="none"
          stroke="#ffffff"
          stroke-miterlimit="10"
          stroke-width="30px"
        />
      </svg>
      <svg
        className="light-2"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1920"
      >
        <path
          className="path"
          d="M419.61,1776.65l361.27-106.26,343.05-236.8,173.04-191.26-853.08-106.26,604.14-215.55,300.55-78.93-270.19-106.26-467.52,130.79-106.26-82.21,543.42-163.94h203.4l-218.58-145.72-382.52,81.97,413.36,1153.63,421.5-15.18,121.43-569.23L346.75,975.18l476.63-500.92,725.57,373.41-962.37,710.39,157.87,318.77,877.37-585.92-318.77-889.51-850.04-100.18S1463.95,43.17,1500.39,43.17,298.18,616.95,298.18,616.95l364.3,491.81,446.27-270.19-9.11,476.63H443.9l516.1,537.35-540.39-75.9Z"
          fill="none"
          stroke="#ffffff"
          stroke-miterlimit="10"
          stroke-width="30px"
        />
      </svg>
    </LightningContainer>
  );
};

export default Lightning;
