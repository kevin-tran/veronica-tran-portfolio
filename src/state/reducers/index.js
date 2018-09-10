import { Map, List } from 'immutable';
import plantMines from '../../utils/minesweeper/plantMines';
import createBoard from '../../utils/minesweeper/createBoard';
import * as types from '../constants/action-types';

function cellPosition(cell) {
  return [cell.get('rowIndex'), cell.get('columnIndex')];
}

const initalState = Map({
  board: List(),
  difficulty: 'easy',
  isTicking: false,
  hasWon: false,
  rows: 9,
  columns: 9,
  openCount: 0,
  timeSpent: 0,
  mineCount: 10,
  minesLeft: 10,
  gameCount: 0,
  windowOpen: false
});

export default (state = initalState, action) => {
  switch (action.type) {
    case types.CONFIGURE_ROUND:
      return state
        .mergeDeep({
          isGameOver: false,
          minesLeft: state.get('mineCount'),
          hasWon: false,
          openCount: 0,
          timeSpent: 0,
          gameCount: state.get('gameCount') + 1
        })
        .set(
          'board',
          createBoard({
            rows: state.get('rows'),
            columns: state.get('columns'),
            mineCount: state.get('mineCount')
          })
        );

    case types.STOP_ROUND:
      return state.merge({
        isTicking: false,
        isGameOver: true
      });

    case types.CHANGE_DIFFICULTY:
      return state.set('difficulty', action.difficulty);

    case types.SET_BOARD_DIMENSIONS:
      return state.merge({
        isTicking: false,
        rows: action.rows,
        columns: action.columns,
        mineCount: action.mineCount
      });

    case types.WINNER_WINNER_CHICKEN_DINNER:
      return state.merge({
        isTicking: false,
        isGameOver: true,
        hasWon: true
      });

    case types.PLANT_MINES:
      return state.update('board', board => {
        return plantMines(board, {
          mineCount: state.get('mineCount'),
          exclusions: action.exclusions
        });
      });

    case types.OPEN_CELL:
      return state
        .setIn(['board', ...cellPosition(action.cell), 'isOpened'], true)
        .update('openCount', openCount => ++openCount)
        .set('isTicking', true);

    case types.INCREMENT_TIME:
      return state.update('timeSpent', timeSpent => ++timeSpent);

    case types.ADD_FLAG:
      return state
        .setIn(['board', ...cellPosition(action.cell), 'hasFlag'], true)
        .update('minesLeft', minesLeft => --minesLeft)
        .set('isTicking', true);

    case types.REMOVE_FLAG:
      return state
        .setIn(['board', ...cellPosition(action.cell), 'hasFlag'], false)
        .update('minesLeft', minesLeft => ++minesLeft);
    case types.CLOSE_WINDOW:
      return state.merge({
        windowOpen: action.windowOpen
      })
    default:
      return state;
  }
};
