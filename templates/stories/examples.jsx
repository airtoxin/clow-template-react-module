import React, { Component } from 'react';
import seedrandom from 'seedrandom';
import { storiesOf } from '@kadira/storybook';

const rng = seedrandom(process.env.NODE_ENV);
const story = storiesOf('-----examples-----');

story.add('hello', () => (
  <div>{rng()}</div>
));
