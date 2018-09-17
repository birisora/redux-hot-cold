import React from 'react';
import { shallow, mount } from 'enzyme';

// import the name export which contains unconnected component
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions'

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should dispatch makeGuess on submit', () => {
      // use a spy as a dispatch prop to the component which we want tested
      const dispatch = jest.fn();
      // inject a spy as the dispatch prop of GuessForm component
      const wrapper = mount(<GuessForm dispatch={dispatch} />);
      const value = '25';
      wrapper.find('input[type="number"]').instance().value = value;
      wrapper.simulate('submit');
      expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });
});
