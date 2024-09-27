import styled, { keyframes } from 'styled-components';
import { THEME } from '../shared/theme';

export const AppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #e5e5e5;
  font-size: 16px;
  background: radial-gradient(#6e3030, #24275a);
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  color: ${THEME.COLORS.LIGHT_GREY};
`;

export const ContainerTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${THEME.COLORS.LIGHT_GREY};
  text-transform: capitalize;
`;

export const Footer = styled.footer`
  height: 40px;
`;

export const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  margin: 5px 0;
`;

export const Navigation = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  cursor: pointer;
  margin: 5px 0;
  color: ${THEME.COLORS.LIGHT_GREY}
`;

export const BoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, min(190px));
  grid-template-rows: min-content;
  grid-gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const loadingSpinner = keyframes`
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`;

export const Loader = styled.div<{position?: string}>`
  width: ${(props) => props.position === 'absolute' ? '100%' : '100px'};
  height: ${(props) => props.position === 'absolute' ? '100%' : '100px'};
  margin: auto;
  position: ${(props) => props.position === 'absolute' ? 'absolute' : 'relative'};
  top: 0;
  left: 0;

  &::after {
    content: " ";
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #a77da3 transparent #a77da3 transparent;
    animation: ${loadingSpinner} 1.4s linear infinite;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
