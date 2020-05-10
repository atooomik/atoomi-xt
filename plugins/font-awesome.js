import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars, faCatSpace } from "@fortawesome/pro-duotone-svg-icons";
import {
  faCommentDots,
  faHandshake,
  faPenNib,
  faUserAstronaut,
  faLightbulbOn
} from "@fortawesome/pro-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,
  faCommentDots,
  faHandshake,
  faPenNib,
  faUserAstronaut,
  faLightbulbOn,
  faCatSpace
);

Vue.component("fa-icon", FontAwesomeIcon);
