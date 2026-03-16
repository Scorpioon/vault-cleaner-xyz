// Minimum visible personas and tools (full lists)
export const personas = [
    'Designer',
    'Technical Designer',
    'Prompt Engineer',
    'Game Developer',
    'Artist',
    'Creative Developer',
    '3D Artist',
    'Music Producer'
]

export const tools = [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'Blender',
    'Ableton',
    'FL Studio',
    'VS Code',
    'Python',
    'Unity',
    'Unreal',
    'Figma',
    'TouchDesigner',
    'Cursor'
]

// Current state
let currentPersona = personas[0]
let currentTool = tools[0]

// Content maps (simplified internal grouping to avoid 104 combos)
const personaContent = {
    'Designer': {
        pain: 'Endless iterations, scattered assets, and no clear view of what’s final.',
        workflow: 'You move between Adobe tools, Figma, and maybe some 3D. Projects often outgrow their folders.'
    },
    'Technical Designer': {
        pain: 'Bridging design and code means juggling engine projects, version control, and ever‑growing asset folders.',
        workflow: 'Unity, Unreal, and Python scripts are your daily tools.'
    },
    'Prompt Engineer': {
        pain: 'Hundreds of generated images, text files, and iterations – it’s chaos to find the right one.',
        workflow: 'You work with large sets of generated assets, often mixing Python scripts and output folders.'
    },
    'Game Developer': {
        pain: 'Game projects are a forest of assets, scripts, and build artifacts. Generic cleaners would break your pipeline.',
        workflow: 'Unity, Unreal, Blender, and VS Code – every folder is a living project.'
    },
    'Artist': {
        pain: 'Your work spans 2D, 3D, and sometimes animation. Keeping everything organised without losing context is a struggle.',
        workflow: 'Photoshop, Blender, Illustrator – each project has its own logic.'
    },
    'Creative Developer': {
        pain: 'Code, visuals, and interactive pieces all in one repo. Structure is everything.',
        workflow: 'VS Code, TouchDesigner, Python – you live in mixed ecosystems.'
    },
    '3D Artist': {
        pain: 'Model files, textures, references, and renders quickly explode into unmanageable folders.',
        workflow: 'Blender, Maya, Substance – your projects are deep and interconnected.'
    },
    'Music Producer': {
        pain: 'Sample libraries, project files, stems, and exports – finding the right take is like archaeology.',
        workflow: 'Ableton, FL Studio – every session has its own web of audio and MIDI.'
    }
}

const toolContent = {
    'Photoshop': { extensions: ['.psd', '.tiff', '.jpg'], structure: 'Layered files, often with separate asset folders.' },
    'Illustrator': { extensions: ['.ai', '.eps', '.svg'], structure: 'Vector projects with linked assets.' },
    'InDesign': { extensions: ['.indd', '.idml', '.icml'], structure: 'Documents with linked images and fonts.' },
    'Blender': { extensions: ['.blend', '.fbx', '.obj'], structure: 'Projects with textures, models, and renders.' },
    'Ableton': { extensions: ['.als', '.wav', '.mid'], structure: 'Sessions with samples, clips, and project data.' },
    'FL Studio': { extensions: ['.flp', '.wav', '.mid'], structure: 'Projects with patterns, samples, and stems.' },
    'VS Code': { extensions: ['.js', '.ts', '.json', '.md'], structure: 'Workspaces with node_modules, configs, source.' },
    'Python': { extensions: ['.py', '.ipynb', '.txt'], structure: 'Virtual envs, scripts, data files.' },
    'Unity': { extensions: ['.unity', '.asset', '.prefab'], structure: 'Assets, Library, ProjectSettings – a fragile package.' },
    'Unreal': { extensions: ['.uasset', '.umap', '.cpp'], structure: 'Content, Source, Config – deep folder trees.' },
    'Figma': { extensions: ['.fig'], structure: 'Single files, but often with linked teams and libraries.' },
    'TouchDesigner': { extensions: ['.toe', '.tox'], structure: 'Projects can reference many external media files.' },
    'Cursor': { extensions: ['.js', '.ts', '.json'], structure: 'Code projects with AI‑generated context.' }
}

// Accent color per persona (mapped to the five approved pairs)
const personaAccent = {
    'Designer': '#E9486E',          // pink
    'Technical Designer': '#00A8EF', // blue
    'Prompt Engineer': '#9694F4',    // violet
    'Game Developer': '#FB9D04',     // amber
    'Artist': '#E9486E',             // pink (grouped)
    'Creative Developer': '#39F669',  // green
    '3D Artist': '#00A8EF',          // blue
    'Music Producer': '#9694F4'       // violet
}

// Background accent (the darker companion) – we'll just use the dark background from the approved pairs
const personaAccentBg = {
    'Designer': '#2B0502',
    'Technical Designer': '#001E36',
    'Prompt Engineer': '#01005D',
    'Game Developer': '#2B0502',
    'Artist': '#2B0502',
    'Creative Developer': '#003400',
    '3D Artist': '#001E36',
    'Music Producer': '#01005D'
}

export function initState() {
    // Set default
    currentPersona = personas[0]
    currentTool = tools[0]
    applyAccentColor()
}

export function getCurrentPersona() {
    return currentPersona
}

export function getCurrentTool() {
    return currentTool
}

export function setCurrentPersona(persona) {
    if (personas.includes(persona)) {
        currentPersona = persona
        applyAccentColor()
        dispatchContextChange()
    }
}

export function setCurrentTool(tool) {
    if (tools.includes(tool)) {
        currentTool = tool
        dispatchContextChange()
    }
}

function applyAccentColor() {
    const accent = personaAccent[currentPersona] || '#E9486E'
    const accentBg = personaAccentBg[currentPersona] || '#2B0502'
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--accent-bg', accentBg)
}

function dispatchContextChange() {
    window.dispatchEvent(new CustomEvent('contextchange', {
        detail: { persona: currentPersona, tool: currentTool }
    }))
}

// Context‑dependent data getters
export function getPainStatement() {
    return personaContent[currentPersona]?.pain || 'Work archives grow chaotically.'
}

export function getWorkflowSummary() {
    return personaContent[currentPersona]?.workflow || 'Creative work across many tools.'
}

export function getExampleExtensions() {
    return toolContent[currentTool]?.extensions || ['.file']
}

export function getToolStructure() {
    return toolContent[currentTool]?.structure || 'Project folders with internal structure.'
}

// For widgets: example file names that combine persona and tool
export function getMockFiles() {
    const baseNames = {
        'Designer': ['final.psd', 'wireframe.fig', 'render.jpg'],
        'GameDeveloper': ['level.unity', 'character.fbx', 'script.cs'],
        'MusicProducer': ['track.als', 'drumloop.wav', 'mix.flp'],
        // fallback
    }
    // simplistic – we'll just use a generic list based on tool extensions
    const ext = getExampleExtensions()[0] || '.file'
    return [
        `project${ext}`,
        `backup${ext}`,
        `work-in-progress${ext}`,
        `export${ext}`
    ]
}