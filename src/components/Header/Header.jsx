import Navigation from "../Navigation/Navigation";
import {
  BtnLogIn,
  BtnRegistration,
  BtnWrapper,
  HeaderStyled,
  LogoWrapper,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#FFDA44"
              d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z"
            />
            <path
              fill="#338AF3"
              d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h28v28H0z" />
            </clipPath>
          </defs>
        </svg>
        <p>LearnLingo</p>
      </LogoWrapper>
      <Navigation />
      <BtnWrapper>
        <BtnLogIn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#F4C550"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.5 2.5h1c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-1M8.333 5.833 12.5 10m0 0-4.167 4.167M12.5 10h-10"
            />
          </svg>
          Log in
        </BtnLogIn>
        <BtnRegistration>Registration</BtnRegistration>
      </BtnWrapper>
    </HeaderStyled>
  );
};
export default Header;
