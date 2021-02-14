require("./dom.check");

const helloWorld = require("./ts/hello-world").helloWorld();

console.log(helloWorld);
window.Livewire.emit('helloWorld', helloWorld);
window.Livewire.on('yay', (yay) => console.log(yay))
