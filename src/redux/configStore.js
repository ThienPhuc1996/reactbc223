import { combineReducers, createStore } from "redux";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { gioHangReducer } from "./reducers/GioHangReducer";
import { stateNumber } from "./reducers/numberReducers";
import { stateImgCar } from "./reducers/stateImgCarReducers";
import baiTapDatVeReducer from "./BaiTapBookingTicketReducer/BookingTicketReducer";



const rootReducer = combineReducers({
  // Các state dự án sẽ dc khai báo tại đây (cách setup redux)
  stateNumber: stateNumber,
  stateImgCar: stateImgCar,
  gioHangReducer: gioHangReducer,
  gameXucXacReducer,
  baiTapDatVeReducer

  // stateA: (state='A',action) => {
  //   console.log(action);
  // return state;},
  // stateB: (state={id:'', name:''},action) => {
  //   console.log(action);
  // return state;}
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
