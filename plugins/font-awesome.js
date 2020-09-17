import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faCatSpace,
  faMountain,
  faAngleDoubleDown,
  faChevronDoubleRight,
  faChevronDoubleLeft,
  faTimesCircle
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
  faGitAlt,
  faLaravel,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import {
  faCommentDots,
  faHandshake,
  faPenNib,
  faBriefcase,
  faLightbulbOn,
  faGameConsoleHandheld,
  faEnvelope,
  faMapMarkerSmile,
  faLaptopCode
} from "@fortawesome/pro-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,
  faCommentDots,
  faHandshake,
  faPenNib,
  faBriefcase,
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
  faGitAlt,
  faLaptopCode,
  faTimesCircle,
  faLaravel,
  faNpm
);

Vue.component("fa-icon", FontAwesomeIcon);
