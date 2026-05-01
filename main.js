import {Zenith} from '/Zenith.esp.js'
const {DOM,APP,ZNativeImport,$bind} = Zenith

Zenith.setGlobal({$bind})

const temp=ZNativeImport('main')
alert(temp.html)
//alert("hello")
//temp.runIn(DOM.body)