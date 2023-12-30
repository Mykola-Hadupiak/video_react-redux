import { createSlice } from '@reduxjs/toolkit';

// type MoveLeftAction = { type: 'position/MOVE_LEFT' };
// type MoveRightAction = { type: 'position/MOVE_RIGHT' };
// type MoveUpAction = { type: 'position/MOVE_UP' };
// type MoveDownAction = { type: 'position/MOVE_DOWN' };

// type Action = MoveLeftAction | MoveRightAction | MoveUpAction | MoveDownAction;

// const moveLeft = (): MoveLeftAction => ({ type: 'position/MOVE_LEFT' });
// const moveRight = (): MoveRightAction => ({ type: 'position/MOVE_RIGHT' });
// const moveUp = (): MoveUpAction => ({ type: 'position/MOVE_UP' });
// const moveDown = (): MoveDownAction => ({ type: 'position/MOVE_DOWN' });


type Position = {
  x: number,
  y: number,
};

const startPosition: Position = { x: 0, y: 0 };

const positionSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {
    moveLeft: position => ({ ...position, x: position.x - 1 }),
    moveRight: position => ({ ...position, x: position.x + 1 }),
    moveUp: position => ({ ...position, y: position.y - 1 }),
    moveDown: position => ({ ...position, y: position.y + 1 }),
  }
})

// const positionReducer = (position: Position = startPosition, action: Action): Position => {
//   switch (action.type) {
//     case 'position/MOVE_LEFT':
//       return { 
//         ...position,
//         x: position.x - 1,
//       };

//     case 'position/MOVE_RIGHT':
//       return {
//         ...position,
//         x: position.x + 1,
//       };

//     case 'position/MOVE_UP':
//       return {
//         ...position,
//         y: position.y - 1,
//       };

//     case 'position/MOVE_DOWN':
//       return {
//         ...position,
//         y: position.y + 1,
//       };
      
//     default:
//       return position;
//   }
// };

export default positionSlice.reducer;
export const { actions } = positionSlice;

