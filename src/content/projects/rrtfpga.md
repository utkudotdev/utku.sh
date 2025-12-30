---
title: rrt-fpga
link: https://github.com/utkudotdev/rrt-fpga
order: 0
image: ../images/rrtfpga.png
imageAlt: An RRT tree visualized finding a goal point by going around an obstacle. 
---

I'm working on accelerating the classic [RRT](https://en.wikipedia.org/wiki/Rapidly_exploring_random_tree) 
algorithm. The goal is to port the algorithm to an FPGA to learn more about accelerator design.
I may one day also explore parallelizing various components of the algorithm (point generation, raytracing for collision detection, etc.) to see if a parallel accelerator can more effectively explore the high-dimensional spaces frequently encountered in robotics.

Currently, there is only a CPU implementation available, but I'm actively working on the Verilog implementation!
