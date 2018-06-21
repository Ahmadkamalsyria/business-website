import React from 'react';
import styled from 'react-emotion';

const headerUpperText = 'A middle eastern restaurant';
const headerLowerText = 'Sultan Shawarma';

const HeaderContainerStyled = styled('h1')`
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  line-height: 1;
  font-family: Raleway;

  color: #fff !important;
  /* color: black !important; */

  text-align: center !important;
`;

const HeadingUpper = styled('span')`
  display: block;
  font-size: 2rem;
  font-weight: 800;

  color: #e6a756!important;

  margin-bottom: 1rem!important;
`

const HeadingLower = styled('span')`
  font-size: 5rem;
  font-weight: 100;
  line-height: 4rem;
`

const Header = () => (
  <HeaderContainerStyled>
    <HeadingUpper>
      {headerUpperText}
    </HeadingUpper>
    <HeadingLower>
      {headerLowerText}
    </HeadingLower>
  </HeaderContainerStyled>
)

export default Header;