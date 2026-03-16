let container

export function init(containerEl) {
    container = containerEl
    render()
    window.addEventListener('contextchange', update)
}

function render() {
    container.innerHTML += `
    <div class="stack-simulation">
      <div class="stack-layer layer1"></div>
      <div class="stack-layer layer2"></div>
      <div class="stack-layer layer3"></div>
      <div class="stack-layer layer4"></div>
    </div>
  `
}

function update() {
    // Subtle accent change on hover or context shift
    const layers = container.querySelectorAll('.stack-layer')
    layers.forEach((layer, i) => {
        layer.style.borderColor = `var(--accent, #E9486E)`
    })
}