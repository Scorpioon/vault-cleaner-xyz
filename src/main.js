import './styles.css'
import { initState } from './state.js'
import { renderAllSections, updateAllContext } from './ui.js'
import { initRail } from './rail.js'
import * as heatmap from './widgets/heatmap.js'
import * as graph from './widgets/graph.js'
import * as stack from './widgets/stack.js'
import * as review from './widgets/review.js'
import * as manifest from './widgets/manifest.js'

// Initialize global state
initState()

// Render the static page structure (sections without context‑specific copy yet)
renderAllSections()

// Initialize widgets (they will receive their containers and store update functions)
heatmap.init(document.getElementById('heatmap-container'))
graph.init(document.getElementById('graph-container'))
stack.init(document.getElementById('stack-container'))
review.init(document.getElementById('review-container'))
manifest.init(document.getElementById('manifest-container'))

// Set up left rail
initRail()

// Initial context update (sets copy and widget data based on default persona/tool)
updateAllContext()

// Listen for context changes
window.addEventListener('contextchange', () => {
    updateAllContext()
})