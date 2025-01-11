import { THEME } from '../../shared/theme';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 80px;
  background: ${THEME.COLORS.TRANSPARENT_BLACK};
  color: ${THEME.COLORS.LIGHT_GREY};
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .material-symbols-outlined {
    margin: 4px 10px 0 0;
    font-size: 60px;
  }
  & h1 {
    font-size: 28px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
`;
