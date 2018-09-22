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
      <a href="https://www.linkedin.com/in/roger-hamilton-995b6290/">You should connect with him on LinkedIn</a>
    </p>
  </Container>
);

export default Bio;
