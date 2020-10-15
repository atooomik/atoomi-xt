import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
  faCogs,
  faEnvelope,
  faMapMarkerAlt,
  faLaptopCode,
  faTimesCircle,
  faAngleDoubleDown,
  faBars,
  faHome
} from "@fortawesome/free-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,
  faCommentDots,
  faHandshake,
  faPenNib,
  faBriefcase,
  faWhatsapp,
  faEnvelope,
  faMapMarkerAlt,
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
  faNpm,
  faAngleDoubleDown,
  faCogs,
  faHome
);

Vue.component("fa-icon", FontAwesomeIcon);
