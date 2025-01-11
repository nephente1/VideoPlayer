import { THEME } from '../../shared/theme';
import styled from 'styled-components';

export const MovieBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('https://t3.ftcdn.net/jpg/01/32/88/96/360_F_132889692_W14mjkYW7IpG87gaGXWtUWMsrl07fTe2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: ${THEME.COLORS.MAIN};
  border-radius: 4px;
  padding: 12px;
  width: 190px;
  height: 280px;
  cursor: pointer;
  box-shadow: -3px 3px 6px 5px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  z-index: 1;
  &:hover {
    transform: scale(1.03);
    transition: 0.3s;
    color: ${THEME.COLORS.LIGHT_VIOLET};
  }
  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 170px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  min-height: 20px;
  max-height: 41px;
  z-index: 3;
`;

export const TileText = styled.div`
  font-size: 14px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  gap: 4px;
  text-align: center;
  margin: auto;
`;

export const ImageWrapper = styled.div`
  height: 192px;
  width: 160px;
  margin-bottom: 5px;
  box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 100%;
  border-radius: 4px;
`;

export const Tooltip = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.2s,
    visibility 0.2s;
  z-index: 20;
  width: 190px;
  word-wrap: break-word;
  white-space: normal;
  text-align: center;
`;
