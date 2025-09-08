---
title: MIT Lincoln Labs
link: https://www.ll.mit.edu/r-d/engineering/control-and-autonomous-systems-engineering
order: 0
image: ../images/cbf.png
imageAlt: The core idea of a CBF. A grey blob represents the unsafe set, like an obstacle. A red path shows the path of the system. Where the path intersects the boundary, there are two arrows, one representing direciton of motion and the other the gradient of h(x).
---

I worked with Group 76 (Controls and Autonomous Systems) at MIT Lincoln Labs on control barrier functions (CBFs) for dynamic obstacle avoidance in ground robots. CBFs are a somewhat recent technique for controlling dynamical systems that, under some conditions, can provide mathematical guarantees that the system will not enter undesirable states. The core idea is shown in the image: for a dynamical system changing according to F(x,u), if the system can be controlled such that on the boundary of the undesirable set (where h(x) = 0), the direction of motion and the gradient of h(x) are aligned, then the system is provably safe, and h(x) is called a CBF.

For realistic systems, actually getting such a guarantee is easier said than done. Uncertainty in the system dynamics and control limits (where u is restricted) pose challenges. My work revolved around construction CBFs for Ackermann drive ground robots based on LiDAR data. I worked largely in [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac/sim) and implemented CBFs using [JAX](https://github.com/jax-ml/jax) for automatic differentiation. Because construction h(x) using classical techniques was particularly challenging for our system, I turned to neural CBF techniques that learn CBFs from data, as described in ["How to Train Your Neural Control Barrier Function."](https://doi.org/10.48550/arXiv.2310.15478) I used a Graph Neural Network trained on synthetic LiDAR data I collected from Isaac Sim to learn h(x).
