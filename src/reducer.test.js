// import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './actions';

// import necessary things to test reducer
import reducer from './reducer';
import {
    restartGame,
    makeGuess,
    generateAuralUpdate
} from './actions';

// const initialState = {
//     guesses: [],
//     feedback: 'Make your guess!',
//     auralStatus: '',
//     correctAnswer: Math.round(Math.random() * 100) + 1
// };

// export default (state = initialState, action) => {
//     if (action.type === RESTART_GAME) {
//         return Object.assign({}, state, {
//             guesses: [],
//             feedback: 'Make your guess!',
//             auralStatus: '',
//             correctAnswer: action.correctAnswer
//         });
//     }

describe('restartGame', () => {
    it('Should restart the game', () => {
        let state = {
            guesses: [3, 6, 8, 25],
            feedback: 'correct',
            auralStatus: 'HOTTISH',
            correctAnswer: 25
        };
        const correctAnswer = 50;
        state = reducer(state, restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(correctAnswer);
    });
});

//     if (action.type === MAKE_GUESS) {
//         let feedback, guess;

//         guess = parseInt(action.guess, 10);
//         if (isNaN(guess)) {
//             feedback = 'Please enter a valid number.';

//             return Object.assign({}, state, {
//                 feedback,
//                 guesses: [...state.guesses, guess]
//             });
//         }

//         const difference = Math.abs(guess - state.correctAnswer);

//         if (difference >= 50) {
//             feedback = "You're Ice Cold...";
//         } else if (difference >= 30) {
//             feedback = "You're Cold...";
//         } else if (difference >= 10) {
//             feedback = "You're Warm.";
//         } else if (difference >= 1) {
//             feedback = "You're Hot!";
//         } else {
//             feedback = 'You got it!';
//         }

//         return Object.assign({}, state, {
//             feedback,
//             guesses: [...state.guesses, guess]
//         });
//     }

describe('makeGuess', () => {
    it('Should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 1
        };
        state = reducer(state, makeGuess(51));
        expect(state.guesses).toEqual([51]);
        expect(state.feedback).toEqual("You're Ice Cold...");

        state = reducer(state, makeGuess(31));
        expect(state.guesses).toEqual([51, 31]);
        expect(state.feedback).toEqual("You're Cold...");

        state = reducer(state, makeGuess(11));
        expect(state.guesses).toEqual([51, 31, 11]);
        expect(state.feedback).toEqual("You're Warm.");

        state = reducer(state, makeGuess(1));
        expect(state.guesses).toEqual([51, 31, 11, 1]);
        expect(state.feedback).toEqual("You got it!");
    });
});

//     if (action.type === GENERATE_AURAL_UPDATE) {
//         const {guesses, feedback} = state;

//         // If there's not exactly 1 guess, we want to
//         // pluralize the nouns in this aural update.
//         const pluralize = guesses.length !== 1;

//         let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize
//             ? 'guesses'
//             : 'guess'}.`;

//         if (guesses.length > 0) {
//             auralStatus += ` ${pluralize
//                 ? 'In order of most- to least-recent, they are'
//                 : 'It was'}: ${guesses.reverse().join(', ')}`;
//         }

//         return Object.assign({}, state, {auralStatus});
//     }

describe('generateAuralUpdate', () => {
    it('Should generate aural updates', () => {
        let state = {
            guesses: [3, 6, 8, 25],
            feedback: 'correct',
            auralStatus: 'HOTTISH',
        };
        
        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            "Here's the status of the game right now: correct You've made 4 " +
            "guesses. In order of most- to least-recent, they are: 25, 8, 6, 3"
        );
    });
});
