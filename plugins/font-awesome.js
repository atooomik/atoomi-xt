import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faCatSpace,
  faMountain
} from "@fortawesome/pro-duotone-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentDots,
  faHandshake,
  faPenNib,
  faUserAstronaut,
  faLightbulbOn,
  faGameConsoleHandheld,
  faEnvelope,
  faMapMarkerSmile
} from "@fortawesome/pro-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,
  faCommentDots,
  faHandshake,
  faPenNib,
  faUserAstronaut,
  faLightbulbOn,
  faCatSpace,
  faGameConsoleHandheld,
  faMountain,
  faWhatsapp,
  faEnvelope,
  faMapMarkerSmile
);

Vue.component("fa-icon", FontAwesomeIcon);
