import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls
import earthTexture from "../Images/earth_texture.jpeg"; // Import Earth texture

const Book3D = () => {
  useEffect(() => {
    let mounted = true;

    // Code Three.js here
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      95,
      window.innerWidth / window.innerHeight,
      2.1,
      1500
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("book-container");

    if (container && !container.querySelector("canvas")) {
      container.appendChild(renderer.domElement);
    }

    // Create a sphere (globe)
    const geometry = new THREE.SphereGeometry(2, 32, 32); // Radius: 2, number of segments: 32
    const texture = new THREE.TextureLoader().load(earthTexture); // Load Earth texture
    const material = new THREE.MeshBasicMaterial({ map: texture }); // Apply texture to the sphere
    const globeMesh = new THREE.Mesh(geometry, material);
    scene.add(globeMesh);

    camera.position.z = 5; // Adjust camera position as needed

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping to slow down rotation
    controls.dampingFactor = 0.1; // Adjust damping factor to control the speed of damping
    controls.enableZoom = false; // Disable zoom
    controls.enablePan = false; // Disable pan

    const animate = () => {
      if (!mounted) return;

      requestAnimationFrame(animate);
      // Update animations here
      globeMesh.rotation.y += 0.002; // Slow down the rotation of the globe
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mounted = false;
      // Clean up Three.js resources when the component is unmounted if necessary
      if (container && container.querySelector("canvas")) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div id="container">
      <div id="content">
        <h1>Our Mission:</h1>
        <p>
          At YourBookhub Online, our mission is to provide a dynamic space where
          readers can explore a diverse collection of books and connect with
          others who share their passion for literature. We emphasize fostering
          a sense of community and meaningful interactions.
        </p>
      </div>
      <div id="content-1">
        <h2>Welcome to Bookhub</h2>
        <p>
          Become part of our reading community today! Sign up to access our
          virtual library and connect with fellow readers from around the world.
        </p>
      </div>
      <div id="book-container" className="canvas-container"></div>
      {/* Container where the Three.js render will be displayed */}
    </div>
  );
};

export default Book3D;
