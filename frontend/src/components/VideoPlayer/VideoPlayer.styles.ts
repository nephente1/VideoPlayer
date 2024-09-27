import styled from 'styled-components';
import { THEME } from "../../shared/theme";

export const Video = styled.video`
  display: block;
  width: 100%;
  margin: 5px 0 0 0;
  box-shadow: 0px 4px 12px 6px rgba(0, 0, 0, 0.25);
`;

export const ButtonPlayer = styled.button`
  background: ${THEME.COLORS.TRANSPARENT_BLUE};
  color: ${THEME.COLORS.LIGHT_GREY};
  border: 1px solid #5b5074;
  padding: 3px 14px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  gap:4px;

  & span {
    font-size: 30px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  margin: 10px auto;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
  padding: 2px 0 3px 0;
  position: relative;
  height: 10px;
  background-color: ${THEME.COLORS.TRANSPARENT_BLUE};
  cursor: pointer;
  border-radius: 4px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #d8cad9;
  border-radius: 4px;
`;

export const VideoWrapper = styled.div`
  max-width: 110vh;
  width: 100%;
  margin: 0 auto; 
  text-align: center;
`;

export const OptionsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MuteWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  & span{
    font-size: 36px;
  }
`;