// Section copy and static data (used by ui.js to build the page)
export const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'problem', title: 'What problem this solves' },
    { id: 'philosophy', title: 'How the product thinks' },
    { id: 'persona-selector', title: 'I’m a…' },
    { id: 'tool-selector', title: 'I work with…' },
    { id: 'feature-stories', title: 'Feature stories' },
    { id: 'visualized-logic', title: 'Visualized product logic' },
    { id: 'free-first', title: 'Free-first philosophy' },
    { id: 'plans', title: 'Plans overview' },
    { id: 'roadmap', title: 'Public roadmap' },
    { id: 'follow', title: 'Follow development' },
    { id: 'footer', title: 'Footer' }
]

// Feature pillars (for the Feature Stories section)
export const featurePillars = [
    {
        title: 'Project‑aware folder diagnosis',
        description: 'Designed to recognise that folders often represent meaningful projects (e.g., a Unity package, a Blender project, an Ableton session). Subfolder structure matters – we help you see the shape of your work.'
    },
    {
        title: 'Structure‑safe review staging',
        description: 'All flagged files appear in a staging area. You decide what to protect, queue, or inspect – detection is separate from action.'
    },
    {
        title: 'Evidence‑based timeline',
        description: 'A visual history of file activity helps you remember what you worked on and when. Not just storage – a memory layer for your process.'
    },
    {
        title: 'Portable project packing',
        description: 'Prepare a project folder for safe movement: to an external drive, a collaborator, another machine, or cloud staging. Designed to preserve relationships.'
    },
    {
        title: 'Creative workflow intelligence',
        description: 'Tuned for designers, developers, artists, musicians. Understands common patterns in creative tools and adapts accordingly.'
    }
]

// Plans (no prices)
export const plans = [
    { name: 'Free', description: 'Real personal workbench. Full local intelligence.' },
    { name: 'Pro', description: 'Advanced solo control – deeper analysis, custom rules.' },
    { name: 'Studio', description: 'Shared structure for small teams, collaboration features.' },
    { name: 'Enterprise', description: 'Governance, permissions, reporting, integrations.' }
]

// Roadmap items (static)
export const roadmapItems = [
    'Package relationship visualisation',
    'Timeline search and filtering',
    'Project manifest diffing',
    'External drive preparation assistant',
    'Rule‑based auto‑tagging'
]

// Follow links
export const followLinks = [
    { label: 'GitHub', url: '#' },
    { label: 'Discord', url: '#' },
    { label: 'Mastodon', url: '#' },
    { label: 'Blog', url: '#' }
]