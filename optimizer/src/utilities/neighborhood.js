export const neighborhood=(hood)=>{
    const lookup={'Friedrichshain-Kreuzberg': 1,
    'Mitte': 2,
    'Pankow': 3,
    'Neukölln': 4,
    'Charlottenburg-Wilm.': 5,
    'Tempelhof - Schöneberg': 6,
    'Lichtenberg': 7,
    'Treptow - Köpenick': 8,
    'Steglitz - Zehlendorf': 9,
    'Reinickendorf': 10,
    'Marzahn - Hellersdorf':11,
    'Spandau': 12,
    1:'Friedrichshain-Kreuzberg',
    2:'Mitte',
    3:'Pankow',
    4:'Neukölln',
    5:'Charlottenburg-Wilm.',
    6:'Tempelhof - Schöneberg',
    7:'Lichtenberg',
    8:'Treptow, - Köpenick',
    9:'Steglitz, - Zehlendorf',
    10:'Reinicken,dorf',
    11:'Marzahn - Hellersdorf',
    12:'Spandau'}
    
    return lookup[hood];
}