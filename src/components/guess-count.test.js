import React from 'react';
import { shallow } from 'enzyme';

import { GuessCount } from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });
});

it('Renders guess count', () => {
    let TEST_VALUE = 10;

    let wrapper = shallow(<GuessCount guessCount={TEST_VALUE} />);
    expect(wrapper.text()).toEqual(`You've made ${TEST_VALUE} guesses!`);
});