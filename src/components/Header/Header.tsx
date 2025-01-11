import { HeaderWrapper, Logo } from './Header.styles';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper onClick={() => navigate('/')}>
      <div className="material-symbols-outlined">movie</div>
      <Logo>
        <h1>CineMaster</h1>
        <div>Choose your favorite movie</div>
      </Logo>
    </HeaderWrapper>
  );
};
