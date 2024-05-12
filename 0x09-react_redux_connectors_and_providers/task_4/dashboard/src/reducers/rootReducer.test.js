import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: new Map(),
      notifications: new Map(),
      ui: new Map()
    };

    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});

