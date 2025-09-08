---
title: computer-emulator
link: https://github.com/utkudotdev/computer-emulator
order: 4
image: ../images/comp_asm.png
imageAlt: Hello World in assembly for my emulator.
---

`computer-emulator` is an emulator written in Rust for my custom 4-bit computer
architecture. The architecture supports integer arithmetic, basic port-mapped I/O,
a rather limited 256 nibbles of RAM, and up to 1KB of instruciton ROM. There is
no stack, but subroutines can be called up to depth 1.

The emulator also has a device system for hooking up virtual devices, like a console,
though this system could use some work. There is also an incomplete assembler that
can (at least) assemble [Hello World](https://github.com/utkudotdev/computer-emulator/blob/50d02da96227a5988a0f635caed1117f048a8453/programs/hello_world.asm).
