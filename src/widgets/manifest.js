import { getMockFiles, getExampleExtensions } from '../state.js'

let container
let manifestEl

export function init(containerEl) {
    container = containerEl
    render()
    window.addEventListener('contextchange', update)
}

function render() {
    const files = getMockFiles()
    const ext = getExampleExtensions()[0] || '.file'
    let html = '<div class="manifest-list">'
    files.forEach((file, i) => {
        const size = (Math.random() * 10 + 0.1).toFixed(1) + ' MB'
        html += `
      <div class="manifest-item">
        <input type="checkbox" class="manifest-checkbox" id="file-${i}" checked>
        <label for="file-${i}" class="manifest-filename">${file}</label>
        <span class="manifest-size">${size}</span>
      </div>
    `
    })
    html += '</div><button class="manifest-simulate">Simulate pack</button>'
    container.innerHTML += html
    manifestEl = container.querySelector('.manifest-list')
    const btn = container.querySelector('.manifest-simulate')
    btn.addEventListener('click', () => {
        alert('Simulated packing: your working set would be prepared for travel/handoff.')
    })
}

function update() {
    const files = getMockFiles()
    const items = manifestEl.querySelectorAll('.manifest-item')
    items.forEach((item, idx) => {
        if (idx < files.length) {
            const label = item.querySelector('.manifest-filename')
            label.textContent = files[idx]
        }
    })
}