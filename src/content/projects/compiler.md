---
title: x86ISTMB
link: https://github.com/ethanuppal/cs3110_compiler
order: 1
image: ../images/x86lang.png
imageAlt: A simple recursive fibonnaci program in the toy language we built a compiler for.
---

I was a major contributor to my [CS 3110](https://www.cs.cornell.edu/courses/cs3110) group's
final project: an optimizing compiler to x86 for our own language written in OCaml. I worked
on the intermediate representation generation, register allocation, bug fixes in emission,
and randomized property-based testing. I also created the continuous integration pipeline
and the language documentation.

The register allocator uses an algorithm called [linear scan](https://en.wikipedia.org/wiki/Register_allocation#Linear_scan).
Linear scan was attractive over alternatives like graph coloring due to it's simplicity.
It is also the algorithm of choice in many JIT compilers due to it's lower time
complexity.
