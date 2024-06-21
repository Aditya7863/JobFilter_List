import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 599px) {//min-width:320px
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 600px) and (max-width: 1199px) {
      ${props}
    }
  `;
};


export const mixins = {
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };


export const theme = {
    colors: {
      primary: {
        desaturatedDarkCyan: 'hsl(180, 29%, 50%)'
      },
      neutral: {
        background: 'hsl(180, 52%, 96%)',
        filterTablets: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
        veryDarkGrayishCyan: 'hsl(180, 14%, 20%)'
      }
    }
  };