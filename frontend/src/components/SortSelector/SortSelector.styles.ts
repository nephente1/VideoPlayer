import styled from 'styled-components';
import { THEME } from '../../shared/theme';

export const Select = styled.select`
  height: 30px;
  width: 200px;
  background: ${THEME.COLORS.TRANSPARENT_BLACK};
  color: ${THEME.COLORS.LIGHT_GREY};
  border: 1px solid #5b5074;;
  border-radius: 4px;
  padding: 4px 6px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const Option = styled.option`
  color: ${THEME.COLORS.MAIN};
  background: ${THEME.COLORS.LIGHT_GREY};
  border: none;
  border-radius: 0px;
  border: 1px solid ${THEME.COLORS.TRANSPARENT_BLUE};
  &::hover {
    cursor: pointer;
  }
`;
