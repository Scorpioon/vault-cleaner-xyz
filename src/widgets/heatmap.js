import { getCurrentTool, getExampleExtensions } from '../state.js'

let container

export function init(containerEl) {
    container = containerEl
    render()
    window.addEventListener('contextchange', update)
}

function render() {
    const tool = getCurrentTool()
    const ext = getExampleExtensions()[0] || '.file'

    // Generate a 7x30 grid of "activity" squares
    const rows = 7
    const cols = 30
    let html = '<div class="heatmap-grid">'
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Random activity level (0-4) for simulation
            const level = Math.floor(Math.random() * 5)
            html += `<div class="heatmap-cell" data-level="${level}" title="Example: activity on ${ext} file"></div>`
        }
    }
    html += '</div>'
    container.innerHTML += html
}

function update() {
    // For v1, just re-render with new random data
    // In a more refined version, we could change the pattern based on persona/tool
    const grid = container.querySelector('.heatmap-grid')
    if (grid) {
        const cells = grid.querySelectorAll('.heatmap-cell')
        cells.forEach(cell => {
            const newLevel = Math.floor(Math.random() * 5)
            cell.setAttribute('data-level', newLevel)
        })
    }
}