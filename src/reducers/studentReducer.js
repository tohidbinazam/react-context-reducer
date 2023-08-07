

export const initialStudent = {
    name : 'Tohid Bin Azam',
    email : 'tohidbinazam@gmail.com',
    cell : '+8801994249463',
    alert : false
}


export const studentReducer = ( state, { type, payload }) => {

    
    switch (type) {
        case 'STU_DATA':
            return { ...state , ...payload }
        case 'ALERT':
            let alert = payload.alert === 'ON' ? true : false
            return { ...state , alert}
        default:
            return state
    }
}

