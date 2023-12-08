const Event =  {
    Types: {
        conflict: 0,
        economy: 1,
        sport: 2,
        politics: 3,
        artch: 4,
    },
    Colors: color => [
        '#ef476f',
        '#ffd166',
        '#06d6a0',
        '#6564db',
        '#118ab2'
    ][color],
} 

const events = [
    {
        'name': 'Evenement',
        'date': 1998,
        'type': 0,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'refs': {},
        'tags': [],
    },
    {
        'name': 'Evenement',
        'date': 1995,
        'type': 2,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'refs': {},
        'tags': [],
    },
    {
        'name': 'Evenement',
        'date': 1991,
        'type': 3,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'refs': {},
        'tags': [],
    },
    {
        'name': 'Evenement',
        'date': 1988,
        'type': 4,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'refs': {},
        'tags': [],
    },
    {
        'name': 'Evenement',
        'date': 1994,
        'type': 1,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'refs': {},
        'tags': [],
    },
]

const h_unit_offset = 32

const makeEvent = (event, is_left) => {
    const h_offset = (2000 - event.date) * h_unit_offset
    const color = Event.Colors(event.type)
    console.log(event.date, h_offset, color, is_left)
}

window.onload = () => {
    for(let i = 0; i < events.length; i++) {
        const event = events[i]
        makeEvent(event, i % 2)
    }
}