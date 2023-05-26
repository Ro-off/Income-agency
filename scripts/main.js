import * as contact_menu from './contact-menu.js';
import * as opened_sample from './opened-sample.js';
import * as adwers_list from './adwears_list.js';
import * as adwersGet from './getAdweres.js';
import * as map from './map.js';
import * as map_switcher from './map-switcher.js'



contact_menu.createListenersForButtons();
opened_sample.createListenersForButtons();
await adwersGet.addContentOnPage();
map_switcher.createListenersForButtons();
// opened_sample.makeSampleOpenedAndFillItWithData(null);

