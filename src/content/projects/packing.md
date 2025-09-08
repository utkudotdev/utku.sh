---
title: Packing Robot
order: 2
image: ../images/packer.png
imageAlt: An example run of the 3D pose registration algorithm.
---

For my robot manipulation class, my group programmed a robot arm to pack items into boxes of various sizes efficiently. I was responsible for a lot of the code outside of the main algorithm. For example, I built a 3D object pose registration system that uses [Fast Global Registration](https://doi.org/10.1007/978-3-319-46475-6_47) and [Iterative Closest Point](https://en.wikipedia.org/wiki/Iterative_closest_point) to match CAD models of objects to objects found in the scene. To improve results, I added an active perception system where the robot would look at the scene from multiple angles and combine the point clouds before attempting to match objects.

An example run of the algorithm is shown to the right. The fiducial marker is for better camera localization. You can see that the green bottle model is correctly matched to the black bottle in the scene. However, some highly ambiguous poses are not detected correctly, like the green milk carton in the background, which should be offset by 90 degrees.
