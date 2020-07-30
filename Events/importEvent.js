import ev from "./events.js"

ev.on("testEvent", () => {
    console.log("ouviu Também");
})

ev.emit("testEvent", "blablabla");