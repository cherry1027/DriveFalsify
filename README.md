# DriveFalsify — Autonomous Driving Safety Scenario Lab

DriveFalsify is an independent research prototype for exploring synthetic autonomous-driving safety scenarios and comparing illustrative failure-discovery strategies.

**Live demo:**  
https://drivefalsify-lab.charanvaranasi44.workers.dev

## Features

### Scenario Explorer

Configure four synthetic scenarios:

- Cut-In
- Pedestrian
- Hard Braking
- Merge

Adjust:

- Ego speed
- Target speed
- Initial distance
- Road friction
- Reaction delay

The deterministic model calculates synthetic:

- Minimum time-to-collision
- Minimum distance
- Deceleration
- Collision outcome
- Risk score

“Find Harder Scenario” progressively modifies parameters toward more safety-critical cases and records the search history.

### Failure Discovery

Compare synthetic benchmark results for:

- Random Search
- Search-Based Falsification
- Adversarial RL

The page includes:

- Method comparison metrics
- Discovered failure cases
- Speed-versus-distance safety heatmap
- Interactive failure details and explanations

## Technology

- React 19
- TypeScript
- Vinext
- Tailwind CSS
- Cloudflare Workers
- Wrangler
