---
title: Rubik’s Cube MR Solver
tagline: Mixed reality puzzle solving with passthrough, AI detection and guided overlays.
excerpt: A FoVR Labs prototype that scans a real Rubik’s Cube in passthrough and guides the user through solving it on Meta Quest.
category: FoVR Labs
status: Prototype
highlight: false
order: 10
cover:
  src: 'https://www.matthewaisthorpe.com.au/assets/projects/rubiks-cube-solver.jpg'
  alt: Rubik’s Cube being scanned in VR via passthrough.
trailer:
  youtubeId: EJ0kb_iAUuU
  title: Rubik’s Cube MR Solver
role: Design, development and Quest prototype
platforms:
  - Meta Quest
  - Mixed Reality
  - Passthrough
techStack:
  - Unity
  - C#
  - YOLOv9
  - ONNX
  - Unity Sentis
  - Meta Quest SDK
tags:
  - Mixed Reality
  - AI
  - Passthrough
  - Quest
---

## Overview

Rubik’s Cube MR Solver is a mixed reality prototype that explores how AI and passthrough can help with a real-world puzzle. The app scans a physical Rubik’s Cube, detects cube faces and visualises the solving process inside the headset.

Instead of turning the cube into a purely digital object, the experience keeps the real cube in the user’s hands and adds guidance around it. That makes it a strong FoVR Labs example: practical, spatial and playful.

## Goals and objectives

### Blend physical and digital interaction

Use passthrough to keep the real puzzle visible while adding virtual guidance, feedback and solve steps in the user’s view.

### Test AI object detection in XR

Explore how on-device detection and face accumulation can support a live mixed reality workflow on Meta Quest.

### Make solving feel guided, not automated

The experience is designed to assist the user rather than replace the interaction. The cube stays physical, while the headset helps explain what to do next.

## Key features

### Cube face detection

The prototype uses computer vision to identify cube faces and build up the state needed for solving guidance.

### Passthrough-first interaction

Users keep working with the real Rubik’s Cube while digital overlays provide context and next steps.

### Step-by-step solving overlay

The headset can guide the user through moves, making the puzzle easier to understand without losing the hands-on feel.

### Meta Quest prototype

The project was built as a Quest-focused experiment, testing what lightweight AI-assisted spatial tools could become.

## Lab notes

This project sits in FoVR Labs because it is less about a finished game and more about exploring a useful interaction pattern: physical object plus AI guidance plus spatial UI.

It points toward a broader idea for FoVR: XR can be a practical helper for real-world tasks, not just a separate virtual space.