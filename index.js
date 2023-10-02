const maFormation = require("./information.js")

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : ` Hi, my name is ${maFormation.name} and I study at ${maFormation.campus} WCS campus`,
	e : "**",
	T : "(I)"
}));
