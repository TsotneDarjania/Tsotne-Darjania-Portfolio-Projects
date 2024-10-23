import { onCleanup, onMount } from "solid-js";
import * as THREE from "three";
import style from "./style.module.css";

export default function Skills() {
  let container: HTMLDivElement | null = null;
  const skills = [
    "JavaScript",
    "TypeScript",
    "C#",
    "MongoDB",
    "MySQL",
    "React",
    "Next.js",
    "Unity",
    "Phaser.js",
    "Three.js",
    "Node.js",
    "Express",
    "Framer",
    "PHP",
    "Laravel",
    "Supabase",
    "Solid.js",
    "Webpack",
    "NPM",
  ];

  onMount(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background to white
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (container) {
      container.appendChild(renderer.domElement);
    }

    // Create text textures for each skill and add as Sprites
    const sprites = skills.map((skill) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d")!;
      const randomSize = Math.random() * (80 - 40) + 20; // Random size between 40 and 80
      context.font = `Bold ${randomSize}px Arial`;
      context.fillStyle = "green"; // Set text color to green
      context.fillText(skill, 0, randomSize); // Center text horizontally

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);

      // Set random position (within the viewport bounds)
      sprite.position.set(
        (Math.random() - 0.5) * 4, // Random x position between -10 and 10
        (Math.random() - 0.5) * 8.5, // Random y position between -5 and 5
        (Math.random() - 0.5) * 10 // Random z position between -5 and 5
      );

      // Set scale for the sprite
      sprite.scale.set(3, 1.5, 1); // Fixed scale to make text readable
      scene.add(sprite);
      return sprite;
    });

    // Set camera position
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate all sprites slightly for animation effect
      sprites.forEach((sprite) => {
        sprite.rotation.y += 0.05; // Increase rotation speed
        sprite.position.x += (Math.random() - 0.5) * 0.03; // Increased random x motion
        sprite.position.y += (Math.random() - 0.5) * 0.03; // Increased random y motion
        sprite.position.z += (Math.random() - 0.5) * 0.03; // Increased random z motion
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    });
  });

  return (
    <div id="skills" class={style.skills}>
      <div class={"custom-font-1 " + style.title}>My Skills</div>
      <div
        class={style.container}
        ref={(el) => (container = el)}
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        {/* Three.js scene will be rendered here */}
      </div>
      <button
        onclick={() => {
          window.open("../static/files/resume.pdf", "_blank");
        }}
        class={style.downloadButton + " custom-font-1"}
      >
        Download Resume
      </button>
    </div>
  );
}
