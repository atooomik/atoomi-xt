import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faCatSpace,
  faMountain,
  faAngleDoubleDown,
  faChevronDoubleRight,
  faChevronDoubleLeft
} from "@fortawesome/pro-duotone-svg-icons";

import {
  faWhatsapp,
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faNode,
  faVuejs,
  faReact,
  faPhp,
  faWordpress,
  faGitAlt
} from "@fortawesome/free-brands-svg-icons";
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
  faMapMarkerSmile,
  faAngleDoubleDown,
  faChevronDoubleRight,
  faChevronDoubleLeft,
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faNode,
  faVuejs,
  faReact,
  faPhp,
  faWordpress,
  faGitAlt
);

Vue.component("fa-icon", FontAwesomeIcon);
