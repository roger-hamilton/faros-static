import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import styled from 'styled-components';

import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`;

const ProfilePic = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
`;

const Bio = () => (
  <Container>
    <ProfilePic src={profilePic} alt="Roger Hamilton" />
    <p>
      Written by{' '}<strong>Roger Hamilton</strong>{' '}
      who lives and works in Oklahoma City building useful(-ish) things.
      {' '}
      <a href="https://twitter.com/jollyroger726">You should follow him on Twitter</a>
    </p>
  </Container>
);

export default Bio;
