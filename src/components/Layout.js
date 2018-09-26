import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm, scaled } from '../utils/typography';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const RootHeader = styled.h1`
  ${scaled(1.5)}
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const SubPageHeader = styled.h1`
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};
`;

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const Template = (props) => {
  const { location, children } = props;
  const rootPath = '/';

  const Header = location.pathname === rootPath
    ? RootHeader
    : SubPageHeader;

  return (
    <Container>
      <Header>
        <HeaderLink to="/">Faros Dev Blog</HeaderLink>
      </Header>
      {children}
    </Container>
  );
};

export default Template;
