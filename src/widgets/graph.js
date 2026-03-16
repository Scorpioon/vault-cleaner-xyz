import { getCurrentPersona, getCurrentTool } from '../state.js'

let container
let canvas
let ctx
let width, height

export function init(containerEl) {
    container = containerEl
    canvas = document.createElement('canvas')
    canvas.width = container.clientWidth || 400
    canvas.height = container.clientHeight || 200
    container.appendChild(canvas)
    ctx = canvas.getContext('2d')
    draw()
    window.addEventListener('contextchange', update)
    window.addEventListener('resize', resize)
}

function resize() {
    canvas.width = container.clientWidth || 400
    canvas.height = container.clientHeight || 200
    draw()
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Simple abstract graph: nodes and edges
    const nodes = [
        { x: 0.2, y: 0.5, label: 'Project' },
        { x: 0.4, y: 0.3, label: 'Assets' },
        { x: 0.4, y: 0.7, label: 'Library' },
        { x: 0.6, y: 0.2, label: 'Textures' },
        { x: 0.6, y: 0.8, label: 'Scripts' },
        { x: 0.8, y: 0.5, label: 'Build' }
    ]
    const edges = [
        [0, 1], [0, 2], [1, 3], [1, 4], [2, 5]
    ]

    // Draw edges
    ctx.strokeStyle = '#666'
    ctx.lineWidth = 1
    edges.forEach(edge => {
        const from = nodes[edge[0]]
        const to = nodes[edge[1]]
        ctx.beginPath()
        ctx.moveTo(from.x * canvas.width, from.y * canvas.height)
        ctx.lineTo(to.x * canvas.width, to.y * canvas.height)
        ctx.stroke()
    })

    // Draw nodes
    nodes.forEach((node, i) => {
        ctx.fillStyle = i === 0 ? 'var(--accent, #E9486E)' : '#fff'
        ctx.beginPath()
        ctx.arc(node.x * canvas.width, node.y * canvas.height, 5, 0, 2 * Math.PI)
        ctx.fill()
        ctx.strokeStyle = '#fff'
        ctx.stroke()
    })
}

function update() {
    // In v1, just redraw the same graph (or we could change node labels based on context)
    draw()
}