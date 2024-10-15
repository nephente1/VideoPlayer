import { THEME } from '../../shared/theme';
import styled from 'styled-components';

export const MovieBox = styled.div`
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
  &:hover {
    transform: scale(1.03);
    transition: 0.3s;
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
  width: auto;
  margin-bottom: 5px;
  box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
  border-radius: 4px;
`;
