

const stateDefault = {
     banChon: false, // True là tài, false là xỉu
     soBanThang: 10,
     tongSoBanChoi: 20,
     mangXucXac: [
         {hinhAnh: './img/gameXucXac/6.png', diem:6},
         {hinhAnh: './img/gameXucXac/6.png', diem:6},
         {hinhAnh: './img/gameXucXac/6.png', diem:6},

     ]
}

export const gameXucXacReducer = (state = stateDefault,action) => {
    switch (action.type) {
        
        default: return state;
    }
}