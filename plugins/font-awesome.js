import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/pro-duotone-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

config.showMissingIcons = true;

library.add(faBars);

Vue.component("fa-icon", FontAwesomeIcon);
