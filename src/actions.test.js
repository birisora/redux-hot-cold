// export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
// export const generateAuralUpdate = () => ({
//     type: GENERATE_AURAL_UPDATE
// });

// export const RESTART_GAME = 'RESTART_GAME';
// export const restartGame = correctAnswer => ({
//     type: RESTART_GAME,
//     correctAnswer
// });

// export const MAKE_GUESS = 'MAKE_GUESS';
// export const makeGuess = guess => ({
//     type: MAKE_GUESS,
//     guess
// });

// import from actions
import {
  GENERATE_AURAL_UPDATE,
  generateAuralUpdate,
  RESTART_GAME,
  restartGame,
  MAKE_GUESS,
  makeGuess
} from './actions';

describe('generate aural update', () => {
  it('Should return the action', () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe('restart game', () => {
  it('Should return the action', () => {
    const correctAnswer = 25;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe('make guess', () => {
  it('Should return the action', () => {
    const guess = 25;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
