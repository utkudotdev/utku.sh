---
title: rrt-gpu
link: https://github.com/utkudotdev/rrt-gpu
order: 0
image: ../images/rrtgpu.png
imageAlt: An RRT tree visualized finding a goal point by going around an obstacle. 
---

I'm working on accelerating the classic [RRT](https://en.wikipedia.org/wiki/Rapidly_exploring_random_tree) 
algorithm. The goal is to parallelize tree expansion to more effectively explore high-dimensional spaces.
I may port the algorithm to an FPGA one day to learn more about accelerator design.

Currently, there is only a CPU implementation available. A KD-tree is used for nearest-neighbor lookup,
though I plan to add spatial hashing as an alternative as it may be more amenable to a GPU/FPGA
implementation.
