const { h, app } = hyperapp

app({
  state: "Hi.",
  view: state => h("h1", null, state)
})
