export const roomType=(room)=>{
    const lookup={
        1:'Entire home/apt',
        2:'Private room',
        3:'Shared room',
        'Entire home/apt':1,
        'Private room':2,
        'Shared room':3
    }
    return lookup[room];
}