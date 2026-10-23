# Varun's 3D Avatar Asset Directory

Place your 3D character model here:
`varuns-avatar.glb`

Supported formats:
- `.glb` (GLTF Binary, recommended for web performance)
- `.gltf` (with embedded textures or bin)

Recommended animation clips in the GLB:
- `Idle` (default natural breathing/standing pose)
- `Wave` or `Greeting` (triggered on click)
- `Point` or `PointProjects` (triggered when hovering over "Explore My Work")

The 3D portfolio engine will automatically detect and load `varuns-avatar.glb` from:
1. `./assets/models/varuns-avatar.glb`
2. `./public/models/varuns-avatar.glb`

If the file is not found, the portfolio seamlessly falls back to the high-resolution 3D rendered avatar (`assets/Varun's-avatar.png`) with real-time Three.js lighting, rim glow, floating particles, and 3D pointer parallax.