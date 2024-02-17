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
	TextColors: color => [
		'black',
		'black',
		'black',
		'white',
		'black',
		'black'
	][color],
}

/**
 * List of events
 */
const E = [
    {
        'name': 'Maison Blanche',
        'date': 1912,
        'type': Event.Types.artch,
        'text': 'La Maison Blanche, aussi appelée villa Jeanneret-Perret, est conçue par l’architecte Le Corbusier et construite en 1912. Se situant sur le haut de la ville de la Chaux-de-Fonds avec une architecture unique, cette maison est le résultat de nombreuses inspirations dues à ses voyages.[img_0]Dans un premier temps destinée aux parents du Corbusier, elle sera vendue peu après, en 1919, puis plusieurs propriétaires s’y succéderont. C’est en 2000 que la maison sera rachetée par une association et ouvrira ses portes au public en 2005',
        'refs': {
            'img_0':'https://maisonblanche.ch/wp-content/uploads/2020/03/amb_hiver.jpg'
		},
        'tags': [
			'architecture',
			'le Corbusier',
			'la Chaux-de-Fonds'
		],
    },
    {
        'name': 'Hockey club la Chaux-de-Fonds',
        'date': 1919,
        'type': Event.Types.sport,
        'text': 'Le 6 février 1919 la section hockey apparaît pour la première fois dans la ville. À cette époque la mauvaise qualité de glace, pousse le club à déménager quand il le faut sur le Lac des Taillères. Il faudra attendre 1951 pour que le club soit pour la première fois champion de Swiss League (2ème division suisse). Après 4 titres en 2ème division, le club fêtera son premier titre de National League (1er division suisse) fin de saison 1967/1968. Les 5 saisons suivantes seront un énorme succès avec 5 nouveaux titres de champion Suisse. Aujourd’hui le club Chaux-de-Fonnier évolue en 2ème division suisse et est soutenu par toute une région.<br /> La patinoire artificielle des Mélèzes créée en 1953, sera couverte en 1968.',
        'refs': {
			
		},
        'tags': [
			'la Chaux-de-Fonds',
			'hockey',
			'sport',
			'loisirs'
		],
    },
    {
        'name': 'Première Braderie',
        'date': 1932,
        'type': Event.Types.economy,
        'text': 'La Braderie a été créée en 1932 pendant une grande crise économique qui touchait la Chaux-de fonds. La ville, qui comptait beaucoup de chômeurs et avec de grandes quantités de marchandises invendues, a décidé de créer une grande foire qui permettrait aux commerçants de vider leurs stocks. Aujourd’hui la Braderie est une des plus grandes fête Chaux-de-Fonnière et réunit des habitants de toute la région pour ses animations et ses cortèges.[img_0]',
        'refs': {
           'img_0':'https://le-o.ch/wp-content/uploads/2022/09/photo_carrousel_c_-Museedhistoire.jpg' 
		},
        'tags': [
			'économie',
			'loisirs',
			'la Chaux-de-Fonds'
		],
    },
    {
        'name': 'Première femme au Grand Conseil',
        'date': 1960,
        'type': Event.Types.politics,
        'text': 'En 1959, les Neuchâtelois acceptent de donner le droit de vote aux femmes et ainsi ouvrent l’opportunité aux électrices neuchâteloises de se présenter. Une année après, la socialiste Raymond Schweizer est la première femme élue en Suisse, à la faveur d’une élection partielle au Grand Conseil, elle y restera jusqu’en 1969. Première suissesse élue dans un parlement cantonal qui a lutté pour l’égalité des hommes et des femmes.',
        'refs': {
           'img_0':'https://imagesdupatrimoine.ch/wp-content/uploads/2022/02/La-premiere-suissesse-a-sieger-dans-un-legislatif-cantonal.jpg' 
		},
        'tags': [
			'politique',
			'droits des femmes',
		],
    },
    {
        'name': 'Tremplin de la Combe-Girard',
        'date': 1932,
        'type': Event.Types.sport,
        'text': 'La construction de ce tremplin a fait naître un nouveau sport dans le Canton, avec un engouement gigantesque. La population se ruait en bas de la piste afin de contempler les sauts des skieurs. Le record du Tremplin est de 86,5 mètres détenus par un Suisse. Le Tremplin de la Combe-Girard est parmi les plus légendaires de Suisse. En effet, durant 60 ans, il accueillera de nombreuses compétitions dont une très célèbre, la Tournée Suisse des quatre tremplins. Puis dans les années 90 le tremplin sera laissé à l’abandon et se détériorera avec le temps.',
        'refs': {
			
		},
        'tags': [
			'le Locle',
			'sport',
			'loisirs'
		],
    }
]

let events = []

/**
 * List of filters
 */
const filters = Array.from(new Set(E.map(el => el.tags).flat()))

/**
 * The user filters div
 */
const user_filters = document.querySelector('#user-filters')
/**
 * The input element
 */
const input = document.querySelector('#input')
/**
 * The results div
 */
const results = document.querySelector('#results')

/**
 * The index of the selected filter
 */
let index = 0
/**
 * Whether the input is in the add event state
 */
let isAddEvent = false

const active_filters = []

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
 * Apply filters to the events
 * @param {string[]} filters The filters to apply
 * @return {Set<object>} The filtered events
 */
const filterDivs = filters => {
	if(filters.length === 0) {
		return E
	}
	const filtered_events = []
	for(const event of E) {
		for(const tag of event.tags) {
			if(filters.includes(tag)) {
				filtered_events.push(event)
			}
		}
	}
	return [...new Set(filtered_events)]
}

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
		text_div.style.textAlign = 'justify'
		text_div.style.backgroundColor = event.color
		text_div.style.padding = '15px'
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
	event.text_color = Event.TextColors(event.type)
	
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
	full_div.style.color = event.text_color
	
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

const refreshEvents = () => {
	document.querySelector('#left-events').innerHTML = ''
	document.querySelector('#right-events').innerHTML = ''
	events = filterDivs(active_filters)
	console.log(events)
	events.sort(compareByDate)
	for(let i = 0; i < events.length; i++) {
		const event = events[i]
		prepareEvent(event)
		event.extended = false
		makeEvent(event, i % 2)
	}
}

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
	refreshEvents()

	// Set position of the milestones
	for(const milestone of document.querySelectorAll('#timeline > div')) {
		milestone.style.position = 'absolute'
		milestone.style.top = `${(MAX_YEAR - parseInt(milestone.innerHTML)) * H_UNIT_OFFSET + 25}px`
		milestone.style.left = `${(TIMELINE_WIDTH - milestone.offsetWidth) / 2}px`
	}

	const colors = {
		'#ef476f': 'Conflit',
        '#ffd166': 'Economie',
        '#06d6a0': 'Sport et Loisirs',
        '#6564db': 'Politique',
        '#118ab2': 'Art / Architecture',
        '#ff964f': 'Personnalités'
	}

	const colorIndex = document.querySelector('#color-index')
	for(const [color, theme] of Object.entries(colors)) {
		const child = document.createElement('div')
		child.style.display = 'flex'
		child.style.gap = '10px'
		child.style.marginBottom = '5px'
		const circle = document.createElement('div')
		circle.style.width = '20px'
		circle.style.height = '20px'
		circle.style.borderRadius = '50%';
		circle.style.backgroundColor = color
		child.appendChild(circle)
		const text = document.createElement('p')
		text.innerHTML = theme
		text.style.margin = '0'
		child.appendChild(text)
		colorIndex.appendChild(child)
	}

	input.addEventListener('input', refreshResults)
	input.addEventListener('focusin', () => {
		user_filters.innerHTML = ''
		active_filters.map(el => {
			user_filters.appendChild(createUserFilter(el))
		})
		refreshResults()
		highlightDiv(0)
	})
	input.addEventListener('focusout', e => {
		setTimeout(() => {
			if(!isAddEvent) {
				results.innerHTML = '' 
			}
			isAddEvent = false
		}, 250)
	})
	input.addEventListener('keydown', keyListener)
}

//
// Filters
//

const highlightDiv = (new_index) => {
	if(!results.children[index]) {
		return
	}
	while(new_index >= results.children.length) {
		new_index -= results.children.length
	}
	while(new_index < 0) {
		new_index += results.children.length
	}
	results.children[index].classList.remove('active')
	results.children[new_index].classList.add('active')
	index = new_index
}

const addEvent = () => {
	active_filters.push(results.children[index].innerHTML)
	input.value = ''
	user_filters.innerHTML = ''
	active_filters.map(el => {
		user_filters.appendChild(createUserFilter(el))
	})
	refreshResults()
	refreshEvents()
}

const refreshResults = () => {
	index = 0
	results.innerHTML = ''
	if(filters.length === active_filters.length) {
		const no_more = document.createElement('div')
		no_more.innerHTML = 'Tous les filtres sont appliqués'
		results.appendChild(no_more)
		highlightDiv(0)
		return
	}
	for(const filter of filters.filter(el => !active_filters.includes(el))) {
		if(filter.startsWith(input.value)) {
			const filterdiv = document.createElement('div')
			filterdiv.innerHTML = filter
			results.appendChild(filterdiv)
		}
	}
	highlightDiv(0)
	for(const [i, res] of Object.entries(document.querySelectorAll('#results > div'))) {
		res.addEventListener('click', () => {
		isAddEvent = true
		index = i
		addEvent()
		input.focus()
		})
	}
}

const keyListener = e => {
	switch(e.key) {
		case 'ArrowUp':
		case 'ArrowDown':
			e.preventDefault()
			highlightDiv(index + (e.key === 'ArrowDown' ? 1 : - 1))
			input.value = document.querySelector('.active').innerHTML
			input.focus()
			break
		case 'Tab':
			e.preventDefault()
			addEvent()
			break
		case 'Backspace':
			refreshResults()
			break
	}
}

const createUserFilter = (name) => {
	const userFilter = document.createElement('div')
	const text = document.createElement('p')
	const x = document.createElement('button')
	text.innerHTML = name
	x.innerHTML = 'x'
	x.classList.add('x')
	x.addEventListener('click', () => {
		active_filters.splice(active_filters.indexOf(name), 1);
		isAddEvent = true
		refreshResults()
		userFilter.remove()
		input.focus()
		refreshEvents()
	})
	userFilter.classList.add('user-filter')
	userFilter.appendChild(text)
	userFilter.appendChild(x)
	return userFilter;
}