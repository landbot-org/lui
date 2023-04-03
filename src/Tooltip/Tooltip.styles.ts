import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { pxToRem } from '../shared/mixins';
import { PLACEMENT, TooltipProps } from './types';

const MARGIN_TOOLTIP = 10;

export const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledWrapperChildren = styled.span`
  display: block;
`;

type StylesProps = {
  $placement: PLACEMENT;
  $isShown: boolean;
  $color: TooltipProps['color'];
};

export const StylesPlacement = css<StylesProps>`
  ${({ $placement }) => {
    switch ($placement) {
    case PLACEMENT.BOTTOM:
      return css`
          transform: translate(0, ${MARGIN_TOOLTIP}px);
        `;

    case PLACEMENT.RIGHT:
      return css`
          transform: translate(${MARGIN_TOOLTIP}px, -50%);
        `;

    case PLACEMENT.LEFT:
      return css`
          transform: translate(calc(-100% - ${MARGIN_TOOLTIP}px), -50%);
        `;

    case PLACEMENT['TOP-RIGHT']:
      return css`
          transform: translate(30%, calc(-100% - ${MARGIN_TOOLTIP}px));
        `;

    case PLACEMENT['TOP-LEFT']:
      return css`
          transform: translate(-30%, calc(-100% - ${MARGIN_TOOLTIP}px));
        `;

    case PLACEMENT['BOTTOM-LEFT']:
      return css`
          transform: translate(-30%, ${MARGIN_TOOLTIP}px);
        `;

    case PLACEMENT['BOTTOM-RIGHT']:
      return css`
          transform: translate(30%, ${MARGIN_TOOLTIP}px);
        `;

    default:
      return css`
          transform: translate(0, calc(-100% - ${MARGIN_TOOLTIP}px));
        `;
    }
  }}
`;

export const StylesOverLapTriangle = css<StylesProps>`
  ::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    ${({ $placement, $color, theme }) => {
    const colorTriangle = $color === 'blue' ? theme.palette.blue[800] : theme.palette.white.main;

    switch ($placement) {
    case PLACEMENT.BOTTOM:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${colorTriangle};
            top: calc(0% - 9px);
            left: 50%;
            transform: translateX(-50%);
          `;

    case PLACEMENT.RIGHT:
      return css`
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-right: 10px solid ${colorTriangle};
            top: 50%;
            left: calc(0% - 9px);
            transform: translateY(-50%);
          `;

    case PLACEMENT.LEFT:
      return css`
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 10px solid ${colorTriangle};
            top: 50%;
            left: calc(100% - 1px);
            transform: translateY(-50%);
          `;

    case PLACEMENT['TOP-RIGHT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid ${colorTriangle};
            top: calc(100% - 1px);
            left: 20%;
            transform: translateX(-50%);
          `;

    case PLACEMENT['TOP-LEFT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid ${colorTriangle};
            top: calc(100% - 1px);
            left: 80%;
            transform: translateX(-50%);
          `;

    case PLACEMENT['BOTTOM-LEFT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${colorTriangle};
            top: calc(0% - 9px);
            left: 80%;
            transform: translateX(-50%);
          `;

    case PLACEMENT['BOTTOM-RIGHT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${colorTriangle};
            top: calc(0% - 9px);
            left: 20%;
            transform: translateX(-50%);
          `;

    default:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid ${colorTriangle};
            top: calc(100% - 1px);
            left: 50%;
            transform: translateX(-50%);
          `;
    }
  }}
  }
`;

export const StylesTriangle = css<StylesProps>`
  ::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    ${({ $placement, $color, theme }) => {
    const colorTriangle = $color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300];

    switch ($placement) {
    case PLACEMENT.BOTTOM:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${colorTriangle};
            top: calc(0% - 10px);
            left: 50%;
            transform: translateX(-50%);
          `;

    case PLACEMENT.RIGHT:
      return css`
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-right: 10px solid ${colorTriangle};
            top: 50%;
            left: calc(0% - 10px);
            transform: translateY(-50%);
          `;

    case PLACEMENT.LEFT:
      return css`
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 10px solid ${colorTriangle};
            top: 50%;
            left: calc(100%);
            transform: translateY(-50%);
          `;

    case PLACEMENT['TOP-RIGHT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid ${colorTriangle};
            top: 100%;
            left: 20%;
            transform: translateX(-50%);
          `;

    case PLACEMENT['TOP-LEFT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid ${colorTriangle};
            top: 100%;
            left: 80%;
            transform: translateX(-50%);
          `;

    case PLACEMENT['BOTTOM-LEFT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${colorTriangle};
            top: calc(0% - 10px);
            left: 80%;
            transform: translateX(-50%);
          `;

    case PLACEMENT['BOTTOM-RIGHT']:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid ${colorTriangle};
            top: calc(0% - 10px);
            left: 20%;
            transform: translateX(-50%);
          `;

    default:
      return css`
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid ${colorTriangle};
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
          `;
    }
  }}
  }

  ${StylesOverLapTriangle}
`;

export const StyledContent = styled(Box)<StylesProps>`
  border-radius: 4px;
  max-width: ${pxToRem(284)}rem;
  position: absolute;
  width: max-content;
  pointer-events: none;
  transition: visibility 0s linear 500ms, opacity 500ms;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08))
    drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.04));
  opacity: ${({ $isShown }) => ($isShown ? 1 : 0)};

  ${({ $color, theme }) => {
    return css`
      border: 1px solid ${$color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300]};
    `;
  }}

  ${StylesPlacement}
  ${StylesTriangle}
`;
