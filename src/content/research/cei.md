---
title: Collective Embodied Intelligence Lab
link: https://cei.ece.cornell.edu/
order: 1
image: ../images/saw.png
imageAlt: The SAW robot I work on. It has two flexible 3D printed waves that it can move with its motors.
---

I work on the Single-Actuator Wave (SAW) robot project at CEI. The core idea behind our robots is that they can use their wave-shaped bodies to modify terrain, including building mounds, digging holes, and burrowing. As the name suggests, each wave is driven by just a single motor using a central helix.

My work is mostly about getting two or more of these robots to collaborate, as they are much more successful at their task when they climb on top of each other or use their peers as solid platforms. To this end, this semester, I have mostly been working on embedded signal processing to passively infer the state of another robot (such as the frequency of its waves or its location) using just a microphone. I've enjoyed working around the constraints of an embedded environment and have learned a lot about signals and microcontrollers. For example, I've had to write my own custom fixed-point FFT to get reasonable performance out of our Cortex-M0+, which doesn't have an FPU. I've also touched on some PCB design, for example to integrate the microphone amplifier into the main robot PCB.
