import {Zenith} from '/Zenith.esp.js'
const {DOM,APP,ZNativeImport,$bind} = Zenith

Zenith.setGlobal({$bind})

fetch("templates/main.znt.n.xml").then(e=>e.text().then(console.log))
//alert("hello")
//temp.runIn(DOM.body)