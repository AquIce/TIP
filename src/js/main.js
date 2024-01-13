/*
	TODO:
		- Fix hitboxes (margin -> padding?)
		- Add animations (on expand)
*/

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
        'name': 'Hermann Alexandre de Pourtalès Jeux Olympiques',
        'date': 1900,
        'type': Event.Types.sport,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    {
        'name': 'Maison Blanche',
        'date': 1912,
        'type': Event.Types.artch,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    {
        'name': 'Villa Schwob',
        'date': 1916,
        'type': Event.Types.artch,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    {
        'name': 'Hôtel de ville du Locle',
        'date': 1917,
        'type': Event.Types.artch,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    {
        'name': 'Première guerre mondiale',
        'date': 1914,
        'type': Event.Types.conflict,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    {
        'name': 'Deuxième guerre mondiale',
        'date': 1939,
        'type': Event.Types.conflict,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    {
        'name': 'Saut à ski du Locle',
        'date': 1932,
        'type': Event.Types.sport,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },

    {
        'name': 'Tunnel de la vue des alpes',
        'date': 1989,
        'type': Event.Types.economy,
        'text': 'Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
        'refs': {
			
		},
        'tags': [],
    },
    
]
// [
//     {
//         'name': 'Guerre',
//         'date': 1998,
//         'type': Event.Types.conflict,
//         'text': 'Lorem ipsum dolor sit amet, [consectetur adipiscing elit], sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [img_0]',
//         'refs': {
// 			'img_0': 'arrow.png',
// 			'consectetur adipiscing elit': 'https://www.google.com',
// 		},
//         'tags': [],
//     },
//     {
//         'name': 'Coupe du Monde',
//         'date': 1995,
//         'type': Event.Types.sport,
//         'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         'refs': {},
//         'tags': [],
//     },
//     {
//         'name': 'Élections',
//         'date': 1991,
//         'type': Event.Types.politics,
//         'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         'refs': {},
//         'tags': [],
//     },
//     {
//         'name': 'Villa turque',
//         'date': 1994,
//         'type': Event.Types.artch,
//         'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod [img_villa] tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         'refs': {
// 			'img_villa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/CF05.jpg/1200px-CF05.jpg'
// 		},
//         'tags': [],
//     },
//     {
//         'name': 'Crash boursier',
//         'date': 1988,
//         'type': Event.Types.economy,
//         'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         'refs': {},
//         'tags': [],
//     },
// ]

const prepareEvent = event => {
	if(event.refs) {
		for(const ref of Object.keys(event.refs)) {
			if(ref.startsWith('img_')) {
				event.text = event.text.replace(`[${ref}]`, `<style>img { width: 100% }</style><img src="${!event.refs[ref].startsWith('http') ? './src/img/' : ''}${event.refs[ref]}" alt="${event.refs[ref].split('.')[0]}">`)
			} else {
				event.text = event.text.replace(`[${ref}]`, `<a href="${event.refs[ref]}">${ref}</a>`)
			}
		}
	}
}

const h_unit_offset = 42
const event_width = 350

const insideDiv = (div, event, is_left) => {
	
	/**
	 * Div containing the arrow
	 */
	const arrow_div = document.createElement('img')
	arrow_div.src = './src/img/arrow.png'
	arrow_div.alt = 'arrow'
	arrow_div.classList.add(is_left ? 'right-arrow' : 'left-arrow')

	/**
	 * Div containing the name
	 */
	const name_div = document.createElement('div')
	name_div.innerHTML = event.name
	
	/**
	 * Div containing the date
	 */
	const date_div = document.createElement('div')
	date_div.innerHTML = event.date

	// Append all children
	div.appendChild(arrow_div)
	div.appendChild(name_div)
	div.appendChild(date_div)

	// Setup for the inside div
	div.style.display = 'flex'
	div.style.flexDirection = 'row'
	div.style.justifyContent = 'space-between'
	div.style.alignItems = 'center'
}

const destroyContent = (full_div, cancel=true) => {
	if(cancel && full_div.children.length > 1) {
		full_div.firstChild.style.flexDirection = full_div.firstChild.style.flexDirection === 'row-reverse' ? 'row' : 'row-reverse'
		full_div.firstChild.firstChild.style.rotate = full_div.firstChild.firstChild.style.rotate === '180deg' ? '0deg' : '180deg'
	}
	full_div.style.width = `${event_width}px`
	full_div.removeChild(full_div.lastChild)
}

const findName = name => {
	for(const event of events) {
		if(event.name === name) {
			return events.indexOf(event)
		}
	}
}

const extendInvert = (event, full_div, is_left) => {
	full_div.firstChild.style.flexDirection = full_div.firstChild.style.flexDirection === 'row-reverse' ? 'row' : 'row-reverse'
	full_div.firstChild.firstChild.style.rotate = full_div.firstChild.firstChild.style.rotate === '180deg' ? '0deg' : '180deg'
	if(event.extended) {
		destroyContent(full_div, false)
		for(const ev of document.querySelectorAll('.full-div')) {
			ev.classList.remove('closed')
		}
	} else {
		const full_divs = document.querySelectorAll('.full-div')
		for(const ev of full_divs) {
			const index = findName(ev.firstChild.childNodes[1].innerHTML)
			if(events[index].extended) {
				events[index].extended = false
				destroyContent(ev)
			} else {
				ev.classList.remove('closed')
			}
		}

		if(is_left) {
			full_div.firstChild.firstChild.style.rotate = '0deg'
		} else {
			full_div.firstChild.firstChild.style.rotate = '180deg'
		}

		full_div.style.width = `${event_width + 100}px`
		console.log(full_div.style.width)

		/**
		 * Div containing the event's text
		 */
		const overdiv = document.createElement('div')
		full_div.style.marginLeft = '0'
		const text_div = document.createElement('div')
		text_div.classList.add('text-div')
		text_div.innerHTML = `${event.text}`
		text_div.style.backgroundColor = event.color
		text_div.style.padding = '15px'
		text_div.style.color = 'white' // Change to dynamic
		text_div.style.fontSize = '16px'
		text_div.style.width = 'calc(100% - 95px)'
		overdiv.appendChild(text_div)

		overdiv.style.display = 'flex'
		overdiv.style.justifyContent = 'end'

		if(Array.from(document.querySelector('#left-events').children).indexOf(full_div) !== -1) {
			overdiv.style.justifyContent = 'start'
		} else {
			overdiv.style.justifyContent = 'end'
		}


		full_div.appendChild(overdiv)

		const side_divs = full_div.parentNode.children
		for(const ev of side_divs) {
			if(
				parseInt(ev.style.top.replace('px', '')) < parseInt(full_div.style.top.replace('px', '')) + full_div.offsetHeight &&
				parseInt(ev.style.top.replace('px', '')) > parseInt(full_div.style.top.replace('px', '')) &&
				ev !== full_div	
			) {
				ev.classList.add('closed')
			} else {
				ev.classList.remove('closed')
			}
		}
	}
	event.extended = !event.extended
	for(const ev of document.querySelectorAll('.full-div')) {
		if(ev.classList.contains('closed')) {
			for(const e of ev.firstChild.children) {
				e.style.display = 'none'
			}
			ev.style.width = '65px'
			ev.firstChild.firstChild.style.display = 'block'
		} else if (ev.firstChild.lastChild.style.display === 'none') {
			for(const e of ev.firstChild.children) {
				e.style.display = 'block'
			}
			ev.style.width = ev === full_div && event.extended ? `${event_width + 100}px` : `${event_width}px`
		}
	}
	
	return event
}

const makeEvent = (event, is_left) => {

	/**
	 * Offset from the top of the page (depends on the date)
	 */
	const h_offset = (2000 - event.date) * h_unit_offset + 20
	
	event.color = Event.Colors(event.type)
	
	/**
	 * Div containing the event
	 */
	const full_div = document.createElement('div')
	full_div.classList.add('full-div')
	full_div.style.position = 'absolute'
	full_div.style.top = `${h_offset}px`
	full_div.style.height = 'auto'
	full_div.style.width = `${event_width}px`
	full_div.style.display = 'flex'
	full_div.style.flexDirection = 'column'
	full_div.style.justifyContent = 'start'
	
	/**
	 * Div containing the event's content
	*/
	const event_div = document.createElement('div')
	event_div.classList.add('event')
	event_div.style.backgroundColor = event.color
	event_div.style.height = `${h_unit_offset}px`
	event_div.style.width = 'calc(100% - 30px)'
	event_div.style.padding = '5px 15px 5px 15px'

	// Inside div setup
	insideDiv(event_div, event, is_left)

	// Setup for right or left div
	if(is_left) {
		full_div.style.right = `${h_unit_offset}px`
		event_div.firstChild.style.rotate = '180deg'
	} else {
		event_div.style.flexDirection = 'row-reverse'
		full_div.style.alignItems = 'end'
		full_div.style.left  = `${h_unit_offset}px`
	}

	// Event listener for the full div
	event_div.addEventListener('click', () => { event = extendInvert(event, full_div, is_left) })

	full_div.appendChild(event_div)
	
	document.querySelector(`#${is_left ? 'left' : 'right'}-events`).appendChild(full_div)
}

const compareByDate = (a, b) => b.date - a.date

window.onload = () => {
	// Set height of the main container (for 100 years)
	document.querySelector('#main-container').style.height = 100 * h_unit_offset  + 75 + 'px'

	// Sort events by date inversed but then display them in the right order
	events.sort(compareByDate)
    for(let i = 0; i < events.length; i++) {
        const event = events[i]
		prepareEvent(event)
		event.extended = false
        makeEvent(event, i % 2)
    }

	// Set position of the milestones
	for(const milestone of document.querySelectorAll('#timeline > div')) {
		milestone.style.position = 'absolute'
		milestone.style.top = `${(2000 - parseInt(milestone.innerHTML)) * h_unit_offset + 25}px`
		milestone.style.left = `${(100 - milestone.offsetWidth) / 2}px`
	}
}