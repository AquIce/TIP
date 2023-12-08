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

const h_unit_offset = 42
const event_width = 300

const insideDiv = (div, event, is_left) => {
	const arrow_div = document.createElement('div')
	arrow_div.style.height = '100%'
	arrow_div.innerHTML = `<img src="./src/img/arrow.png" alt="arrow" class="${is_left ? 'right-arrow' : 'left-arrow'}">`
	const name_div = document.createElement('div')
	name_div.innerHTML = event.name
	const date_div = document.createElement('div')
	date_div.innerHTML = event.date
	div.appendChild(arrow_div)
	div.appendChild(name_div)
	div.appendChild(date_div)
	div.style.display = 'flex'
	div.style.flexDirection = 'row'
	div.style.justifyContent = 'space-between'
	div.style.alignItems = 'center'
	div.style.padding = '0 15px 0 15px'
}

const makeEvent = (event, is_left) => {
    const h_offset = (2000 - event.date) * h_unit_offset
    const color = Event.Colors(event.type)
	const event_div = document.createElement('div')
	event_div.classList.add('event')
	event_div.style.marginTop = `${h_offset}px`
	event_div.style.backgroundColor = color
	event_div.style.height = `${h_unit_offset}px`
	event_div.style.width = `${event_width}px`
	insideDiv(event_div, event, is_left)
	if(is_left) {
		event_div.style.marginRight = `${h_unit_offset}px`
		event_div.style.marginLeft = `calc(100% - ${event_width}px - ${h_unit_offset + 15 * 2}px)` 
		event_div.style.flexDirection = 'row-reverse'
	} else {
		event_div.style.marginLeft  = `${h_unit_offset}px`
	}
	document.querySelector(`#${is_left ? 'left' : 'right'}-events`).appendChild(event_div)
}

window.onload = () => {
    for(let i = 0; i < events.length; i++) {
        const event = events[i]
        makeEvent(event, i % 2)
    }
}