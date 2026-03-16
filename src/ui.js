import { sections, featurePillars, plans, roadmapItems, followLinks } from './data.js'
import { personas, tools, getCurrentPersona, getCurrentTool, setCurrentPersona, setCurrentTool, getPainStatement, getWorkflowSummary, getExampleExtensions, getToolStructure, getMockFiles } from './state.js'

// Cache DOM elements
let contentEl

export function renderAllSections() {
    contentEl = document.getElementById('content')
    contentEl.innerHTML = '' // clear

    sections.forEach(section => {
        const sectionEl = document.createElement('section')
        sectionEl.id = section.id
        sectionEl.className = 'section'
        sectionEl.setAttribute('data-section', section.title)

        // Basic inner HTML – will be refined by context later
        sectionEl.innerHTML = getSectionTemplate(section.id)
        contentEl.appendChild(sectionEl)
    })

    // After sections are in DOM, we can populate selectors
    renderPersonaSelector()
    renderToolSelector()
    attachSelectorEvents()
}

function getSectionTemplate(sectionId) {
    // Return a simple structure; context‑sensitive parts will be updated later
    switch (sectionId) {
        case 'hero':
            return `
        <h1>Vault Cleaner</h1>
        <p class="hero-sub">A safer archive intelligence tool for creative and technical workflows.</p>
        <p class="hero-desc">Respects project structure. Reconstructs work‑memory. Prepares portable working sets.</p>
      `
        case 'problem':
            return `
        <h2>What problem this solves</h2>
        <div class="problem-content">
          <p class="pain-statement"></p>
          <p class="workflow-summary"></p>
        </div>
      `
        case 'philosophy':
            return `
        <h2>How the product thinks</h2>
        <p>Local‑first, rule‑based, structure‑aware. Detection is never action. Built for the way you actually work.</p>
      `
        case 'persona-selector':
            return `
        <h2>I’m a…</h2>
        <div class="selector-group" id="persona-selector-group"></div>
      `
        case 'tool-selector':
            return `
        <h2>I work with…</h2>
        <div class="selector-group" id="tool-selector-group"></div>
      `
        case 'feature-stories':
            return `
        <h2>Feature stories</h2>
        <div class="feature-grid">
          ${featurePillars.map(p => `
            <div class="feature-card">
              <h3>${p.title}</h3>
              <p>${p.description}</p>
            </div>
          `).join('')}
        </div>
      `
        case 'visualized-logic':
            return `
        <h2>Visualized product logic</h2>
        <p class="widget-note">Simulated examples of how Vault Cleaner thinks.</p>
        <div class="widget-grid">
          <div class="widget" id="heatmap-container">
            <h3>Evidence timeline</h3>
          </div>
          <div class="widget" id="graph-container">
            <h3>Project / package relationships</h3>
          </div>
          <div class="widget" id="stack-container">
            <h3>Structure over time</h3>
          </div>
          <div class="widget" id="review-container">
            <h3>Review staging</h3>
          </div>
          <div class="widget" id="manifest-container">
            <h3>Portable packing</h3>
          </div>
        </div>
      `
        case 'free-first':
            return `
        <h2>Free‑first philosophy</h2>
        <p>Free should be real. Students, freelancers, and solo builders get dignity. Paid tiers monetise leverage, collaboration, governance, integrations – not basic dignity.</p>
      `
        case 'plans':
            return `
        <h2>Plans overview</h2>
        <div class="plans-grid">
          ${plans.map(p => `
            <div class="plan-card">
              <h3>${p.name}</h3>
              <p>${p.description}</p>
            </div>
          `).join('')}
        </div>
      `
        case 'roadmap':
            return `
        <h2>Public roadmap</h2>
        <ul class="roadmap-list">
          ${roadmapItems.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `
        case 'follow':
            return `
        <h2>Follow development / collaborate</h2>
        <div class="follow-links">
          ${followLinks.map(link => `<a href="${link.url}" class="follow-link">${link.label}</a>`).join('')}
        </div>
      `
        case 'footer':
            return `
        <footer>
          <p>© 2026 Vault Cleaner – concept microsite</p>
        </footer>
      `
        default:
            return `<h2>${sectionId}</h2><p>Content coming.</p>`
    }
}

function renderPersonaSelector() {
    const group = document.getElementById('persona-selector-group')
    if (!group) return
    group.innerHTML = personas.map(p => {
        const activeClass = p === getCurrentPersona() ? 'active' : ''
        return `<button class="chip persona-chip ${activeClass}" data-persona="${p}">${p}</button>`
    }).join('')
}

function renderToolSelector() {
    const group = document.getElementById('tool-selector-group')
    if (!group) return
    group.innerHTML = tools.map(t => {
        const activeClass = t === getCurrentTool() ? 'active' : ''
        return `<button class="chip tool-chip ${activeClass}" data-tool="${t}">${t}</button>`
    }).join('')
}

function attachSelectorEvents() {
    document.querySelectorAll('.persona-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const persona = btn.dataset.persona
            setCurrentPersona(persona)
            // update active class
            document.querySelectorAll('.persona-chip').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
        })
    })
    document.querySelectorAll('.tool-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const tool = btn.dataset.tool
            setCurrentTool(tool)
            document.querySelectorAll('.tool-chip').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
        })
    })
}

export function updateAllContext() {
    // Update editorial copy
    const painEl = document.querySelector('.pain-statement')
    if (painEl) painEl.textContent = getPainStatement()

    const workflowEl = document.querySelector('.workflow-summary')
    if (workflowEl) workflowEl.textContent = getWorkflowSummary()

    // Widgets will update via their own listeners; we'll also re‑trigger a custom event for them
    // (they already listen to 'contextchange')
}