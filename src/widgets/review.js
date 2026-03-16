import { getMockFiles } from '../state.js'

let container
let listEl

export function init(containerEl) {
    container = containerEl
    render()
    window.addEventListener('contextchange', update)
}

function render() {
    const files = getMockFiles()
    let html = '<div class="review-list">'
    files.forEach(file => {
        const status = ['protect', 'inspect', 'queue'][Math.floor(Math.random() * 3)]
        html += `
      <div class="review-item">
        <span class="review-filename">${file}</span>
        <span class="review-status status-${status}">${status}</span>
      </div>
    `
    })
    html += '</div>'
    container.innerHTML += html
    listEl = container.querySelector('.review-list')
}

function update() {
    const files = getMockFiles()
    const items = listEl.querySelectorAll('.review-item')
    items.forEach((item, idx) => {
        if (idx < files.length) {
            const filenameSpan = item.querySelector('.review-filename')
            filenameSpan.textContent = files[idx]
        }
    })
}