// Icons should be imported individually to keep bundle size down
import * as faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import * as faSearch from '@fortawesome/fontawesome-free-solid/faSearch';


import * as fontawesome from '@fortawesome/fontawesome';

fontawesome.config.searchPseudoElements = false;
fontawesome.config.observeMutations = false;

export const faIcons = [
	faHeart,
	faSearch
	// import icons here
];

faIcons.forEach(ic => fontawesome.library.add(ic));
