// Central image registry. Add a file once here, then reference it as IMG.<key>
// in user.js (or anywhere else). Keys are flat — no need to remember folders.

const IMG = {
	// projects/
	gzm: require("../assets/projects/gzm.png"),
	litools: require("../assets/projects/litools.png"),
	openainews: require("../assets/projects/openainews.png"),
	retirely: require("../assets/projects/retirely.png"),
	onetab: require("../assets/projects/onetab.png"),
	washzone: require("../assets/projects/washzone.png"),



	// workex/
	intelion: require("../assets/workex/intelion.png"),
	linkites: require("../assets/workex/linkiteslogo.png"),
	stackracers: require("../assets/workex/sr_logo.png"),
	syba: require("../assets/workex/syba.png"),
};

export default IMG;
