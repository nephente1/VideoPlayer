import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, Logo } from "./Header.styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <span className="material-symbols-outlined">movie</span>
      <Logo onClick={() => navigate('/')}>
        <h1>CineMaster</h1>
        <div>Choose your favorite movie</div>
      </Logo>
      
    </HeaderWrapper>
  );
};