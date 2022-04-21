import { DAT_GHE, HUY_GHE } from "../Types/BookingTicketType";

const stateDefault = {
    danhSachGheDangDat:[

    ]
}

const baiTapDatVeReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(gheDangDat => 
                gheDangDat.soGhe === action.ghe.soGhe);
                if (index !== -1) {
                    danhSachGheUpdate.splice(index,1);
                } else{
                    danhSachGheUpdate.push(action.ghe)
                }
                state.danhSachGheDangDat = danhSachGheUpdate;
            
            return {...state}
        }
        case HUY_GHE: {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(gheDangDat => 
                gheDangDat.soGhe === action.soGhe);
                if (index !== -1) {
                    danhSachGheUpdate.splice(index,1);
                }
                state.danhSachGheDangDat = danhSachGheUpdate;
                return {...state};
        }
        default: return {...state}
    }
}

export default baiTapDatVeReducer;