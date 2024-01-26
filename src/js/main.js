/*
	TODO:
		- Add animations (on expand)
*/

const Event =  {
    Types: {
        conflict: 0,
        economy: 1,
        sport: 2,
        politics: 3,
        artch: 4,
		personnality: 5,
    },
    Colors: color => [
        '#ef476f',
        '#ffd166',
        '#06d6a0',
        '#6564db',
        '#118ab2',
		'#ff964f'
    ][color],
} 

/**
 * List of events
 */
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
    {
        'name': 'Création du HCC',
        'date': 1919,
        'type': Event.Types.sport,
        'text': 'Le 6 février 1919 la section hockey apparaît pour la première fois dans la ville. À cette époque la mauvaise qualité de glace pousse parfois le club à déménager sur le Lac des Taillères. Il faudra attendre 1951 pour que le club soit pour la première fois champion de ligue nationale B (LNB 2ème division suisse). Après 4 titres en 2ème division et un aller-retour entre la ligue nationale A (LNA 1er division suisse) et la B, le club fêtera son premier titre de LNA fin de saison 1967/1968. Les 5 saisons suivantes seront un énorme succès avec 5 nouveaux titres de champion Suisse. Aujourd’hui le club Chaux-de-Fonnier évolue en 2ème division suisse et est soutenu par toute une région.',
        'refs': {
			
		},
        'tags': [],
    },
	{
		'name': 'Première Braderie',
		'date': 1932,
		'type': Event.Types.economy,
		'text': 'La braderie a été créée en 1932 pendant une grande crise économique qui touchait la Chaux-de fonds. La ville, qui comptait beaucoup de chômeurs et de grandes quantités de marchandises invendues, a décidé de créer une grande foire qui permettrait aux commerçants de vider leurs stocks. Aujourd’hui la braderie est l’une des plus grandes fête Chaux-de-Fonnières et réunit des habitants de toute la région pour ses animations et ses cortèges.',
		'refs': {
			
		},
        'tags': [],
	},
	{
		'name': 'Première Braderie',
		'date': 1932,
		'type': Event.Types.economy,
		'text': 'Lors de la Grande Dépression à La Chaux-de-Fonds, où 8000 personnes étaient sans emploi parmi les 40 000 habitants, la Braderie a été lancée. À cette époque, il y avait un surplus de marchandises invendues. La fête a permis aux commerçants de vendre ces articles à bas prix, offrant ainsi aux travailleurs la possibilité d\'acheter des choses à moindre coût pour améliorer leur quotidien. [img_0] Aujourd\'hui, la Braderie est devenue la plus grande fête de La Chaux-de-Fonds. Elle attire non seulement les habitants de la ville, mais aussi ceux des environs, attirés par les défilés et les animations.',
		'refs': {
			'img_0': 'https://le-o.ch/wp-content/uploads/elementor/thumbs/photo_carrousel_c_-Museedhistoire-pu41vrk9i0c9bmx3akwc6m10cuycwfi87ae70fdkxc.jpg'
		},
        'tags': [],
	},
	{
		'name': 'Création du Conservatoire de musique de La Chaux-de-Fonds',
		'date': 1927,
		'type': Event.Types.sport,
		'text': 'Grâce à Chales Faller, c’est en 1927 que nait l’Ecole de musique de La Chaux-de-Fonds qui prendra le nom de Conservatoire de musique de La Chaux-De-Fonds en 1931. [img_0] En 1934 le Conservatoire déménage dans son bâtiment actuel où y sont aménagées de nombreuses salles et studios. Une salle s’appelle « Salle Faller » en hommage au créateur du conservatoire.',
		'refs': {
			'img_0': 'https://patrimoine.versoix.com/pxo305/pxo_content/medias_fck/image/CharlesFaller.png'
		},
        'tags': [],
	},
	{
		'name': 'Test',
		'date': 1990,
		'type': Event.Types.personnality,
		'text': 'Grâce à Chales Faller, c’est en 1927 que nait l’Ecole de musique de La Chaux-de-Fonds qui prendra le nom de Conservatoire de musique de La Chaux-De-Fonds en 1931. [img_0] En 1934 le Conservatoire déménage dans son bâtiment actuel où y sont aménagées de nombreuses salles et studios. Une salle s’appelle « Salle Faller » en hommage au créateur du conservatoire.',
		'refs': {
			'img_0': 'https://patrimoine.versoix.com/pxo305/pxo_content/medias_fck/image/CharlesFaller.png'
		},
        'tags': [],
	}
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

/**
 * Parse an event an replace the references by their HTML equivalent
 * @param {object} event The event to parse
 */
const prepareEvent = event => {
	if(event.refs) {
		for(const ref of Object.keys(event.refs)) {
			if(ref.startsWith('img_')) {
				// Preload the image to prevent height calculation problems
				const img = new Image()
				img.src = `${!event.refs[ref].startsWith('http') ? './src/img/' : ''}${event.refs[ref]}`
				event.text = event.text.replace(`[${ref}]`, `<style>img { width: 100% }</style><img src="${img.src}" alt="${event.refs[ref].split('.')[0]}">`)
			} else {
				event.text = event.text.replace(`[${ref}]`, `<a href="${event.refs[ref]}">${ref}</a>`)
			}
		}
	}
}

/**
 * The offset from the top of the page per one year
 */
const H_UNIT_OFFSET = 42
/**
 * The width of an event div (not extended)
 */
const EVENT_WIDTH = 350
/**
 * The number of years to display
 */
const YEARS = 100
/**
 * The maximum year to display
 */
const MAX_YEAR = 2000
/**
 * The width of the timeline
 */
const TIMELINE_WIDTH = 100
/**
 * The gap between two dates displayed in the timeline
 */
const TIMELINE_GAP_YEARS = 25

/**
 * Creates the inside div of an event div
 * @param {HTMLElement} div The div to create the inside div for
 * @param {object} event The event to create the inside div for
 * @param {boolean} is_left Whether the event is on the left or right side
 */
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

/**
 * Destroy the content of an event div
 * @param {HTMLElement} full_div The div containing the event
 * @param {boolean} cancel Whether to invert the arrow and flex-direction or not
 */
const destroyContent = (full_div, cancel=true) => {
	if(cancel && full_div.children.length > 1) {
		full_div.firstChild.style.flexDirection = full_div.firstChild.style.flexDirection === 'row-reverse' ? 'row' : 'row-reverse'
		full_div.firstChild.firstChild.style.rotate = full_div.firstChild.firstChild.style.rotate === '180deg' ? '0deg' : '180deg'
	}
	full_div.style.width = `${EVENT_WIDTH}px`
	full_div.removeChild(full_div.lastChild)
}

/**
 * Find the index of an event by its name
 * @param {string} name The name of the event
 * @returns The index of the event
 */
const findName = name => {
	for(const event of events) {
		if(event.name === name) {
			return events.indexOf(event)
		}
	}
}

/**
 * Toggle the extension state of an event (extended <-> not extended)
 * @param {object} event The event to toggle
 * @param {HTMLElement} full_div The div containing the event
 * @param {boolean} is_left Whether the event is on the left or right side
 * @returns The event
 */
const toggleExtend = (event, full_div, is_left) => {
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

		full_div.style.width = `${EVENT_WIDTH + 100}px`

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
			ev.style.width = ev === full_div && event.extended ? `${EVENT_WIDTH + 100}px` : `${EVENT_WIDTH}px`
		}
	}
	
	return event
}

/**
 * Creates an event on the page
 * @param {object} event The event to create
 * @param {boolean} is_left Whether the event is on the left or right side
 */
const makeEvent = (event, is_left) => {

	/**
	 * Offset from the top of the page (depends on the date)
	 */
	const h_offset = (MAX_YEAR - event.date) * H_UNIT_OFFSET + 20
	
	event.color = Event.Colors(event.type)
	
	/**
	 * Div containing the event
	 */
	const full_div = document.createElement('div')
	full_div.classList.add('full-div')
	full_div.style.position = 'absolute'
	full_div.style.top = `${h_offset}px`
	full_div.style.height = 'auto'
	full_div.style.width = `${EVENT_WIDTH}px`
	full_div.style.display = 'flex'
	full_div.style.flexDirection = 'column'
	full_div.style.justifyContent = 'start'
	
	/**
	 * Div containing the event's content
	*/
	const event_div = document.createElement('div')
	event_div.classList.add('event')
	event_div.style.backgroundColor = event.color
	event_div.style.height = `${H_UNIT_OFFSET}px`
	event_div.style.width = 'calc(100% - 30px)'
	event_div.style.padding = '5px 15px 5px 15px'

	// Inside div setup
	insideDiv(event_div, event, is_left)

	// Setup for right or left div
	if(is_left) {
		full_div.style.right = `${H_UNIT_OFFSET}px`
		event_div.firstChild.style.rotate = '180deg'
	} else {
		event_div.style.flexDirection = 'row-reverse'
		full_div.style.alignItems = 'end'
		full_div.style.left  = `${H_UNIT_OFFSET}px`
	}

	// Event listener for the full div
	event_div.addEventListener('click', () => { event = toggleExtend(event, full_div, is_left) })

	full_div.appendChild(event_div)
	
	document.querySelector(`#${is_left ? 'left' : 'right'}-events`).appendChild(full_div)
}

/**
 * Compares two events by their date
 * @param {object} a The first event
 * @param {object} b The second event
 * @returns The difference between the two dates (b - a)
 */
const compareByDate = (a, b) => b.date - a.date

window.onload = () => {
	document.querySelector('html').style.backgroundImage = `url('src/img/background${Math.floor(Math.random() * 5)}.jpg')`
	// Set height of the main container
	const main_container = document.querySelector('#main-container')
	main_container.style.height = `${YEARS * H_UNIT_OFFSET + 90}px`
	main_container.style.gridTemplateColumns = `1fr ${TIMELINE_WIDTH}px 1fr`;
	for(let i = MAX_YEAR; i >= MAX_YEAR - YEARS; i -= TIMELINE_GAP_YEARS) {
		const div = document.createElement('div')
		div.innerHTML = i
		main_container.children[1].appendChild(div)
	}

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
		milestone.style.top = `${(MAX_YEAR - parseInt(milestone.innerHTML)) * H_UNIT_OFFSET + 25}px`
		milestone.style.left = `${(TIMELINE_WIDTH - milestone.offsetWidth) / 2}px`
	}
}