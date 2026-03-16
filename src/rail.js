import { sections } from './data.js'

let railEl
let sectionElements = []
let observer

export function initRail() {
    railEl = document.getElementById('leftRail')
    buildRail()
    observeSections()
    attachClickHandlers()
}

function buildRail() {
    railEl.innerHTML = sections.map(s => `
    <div class="rail-item" data-target="${s.id}">
      <span class="rail-dot"></span>
      <span class="rail-label">${s.title}</span>
    </div>
  `).join('')
}

function observeSections() {
    sectionElements = sections.map(s => document.getElementById(s.id)).filter(el => el)

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id
                setActiveRailItem(id)
            }
        })
    }, { threshold: 0.3 })

    sectionElements.forEach(el => observer.observe(el))
}

function setActiveRailItem(activeId) {
    document.querySelectorAll('.rail-item').forEach(item => {
        const target = item.dataset.target
        if (target === activeId) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}

function attachClickHandlers() {
    document.querySelectorAll('.rail-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.target
            const targetEl = document.getElementById(targetId)
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
}