import Control from "./Control.js";

if (typeof window !== "undefined") {
	window.uuidControl = Control
}

const attachToCMS = function (CMS) {
	CMS.registerWidget('uuid', Control)
}

export default {
	Control,
	attachToCMS
}
