import { HeaderWrapper, Logo } from './Header.styles';
import { useNavigate } from 'react-router-dom';

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
