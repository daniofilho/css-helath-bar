import styled, { css } from "styled-components";

type ContainerProps = {
  life: number;
  maxLife: number;
};

const getLifePercent = (life: number, maxLife: number): number => {
  return (life * 100) / maxLife;
};

const getLifeBarPercent = (maxLife: number): number => {
  return 100 / maxLife;
};

export const Container = styled.div<ContainerProps>`
  display: block;
  position: relative;
  overflow: hidden;

  margin: 5rem auto;
  width: 60vw;
  height: 2rem;

  border-radius: 5px;
  border: 4px solid #474749;
  background: linear-gradient(90deg, #851414, #e72525);
  box-shadow: inset 0px -5px 0px #851414;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ life, maxLife }) => getLifePercent(life, maxLife)}%;
    background: linear-gradient(90deg, #40be0b, #51e715);
    box-shadow: inset 0px -5px 0px #40be0b;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    ${({ maxLife }) => {
      const lifeBarPercent = getLifeBarPercent(maxLife);
      return css`
        background: repeating-linear-gradient(
          90deg,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0) ${lifeBarPercent}%,
          rgba(255, 255, 255, 0.2) ${lifeBarPercent}%,
          rgba(255, 255, 255, 0.2) ${lifeBarPercent * 2}%
        );
      `;
    }}
  }
`;
