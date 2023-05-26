import * as contact_menu from './contact-menu.js';
import * as opened_sample from './opened-sample.js';
import * as adwares_list from './adwares_list.js';
import * as adwaresGet from './getAdwares.js';
import * as map from './map.js';
import * as map_switcher from './map-switcher.js'



contact_menu.createListenersForButtons();
opened_sample.createListenersForButtons();
await adwaresGet.addContentOnPage();
await adwaresGet.addMarkersOnMap();
map_switcher.createListenersForButtons();
// opened_sample.makeSampleOpenedAndFillItWithData(null);

