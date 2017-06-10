import constants from '../core/app.constants';

/**
 * The musics' reducer
 *
 * @param {any} [state=constants.initialState.musics] the previous state
 * @param {any} action
 * @returns updated state
 */
const MusicListReducer = (state = constants.initialState.musics, action) => {
  switch (action.type) {
    case constants.actionTypes.loadMuSics:
      return [...state, action.musics];

    default:
      return state;
  }
}

export default MusicListReducer;
