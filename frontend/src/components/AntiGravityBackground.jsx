import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function AntiGravityBackground() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobileState = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobileState();
    window.addEventListener('resize', checkMobileState);
    return () => window.removeEventListener('resize', checkMobileState);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    // 1. Setup Scene, Camera, Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    
    // Perspective camera to enable 3D depth and parallax
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Create Grid of Points
    const cols = 100;
    const rows = 50;
    const spacingX = 1.4;
    const spacingY = 1.4;

    const numPoints = cols * rows;
    const positions = new Float32Array(numPoints * 3);
    const initialPositions = []; // save original layout for wave rest state

    let index = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Center the grid around origin (0, 0)
        const x = (c - cols / 2) * spacingX;
        const y = (r - rows / 2) * spacingY;
        const z = 0;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        initialPositions.push({ x, y, z });
        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom shader material or simple PointsMaterial for dots
    // We choose a round dot using a canvas-generated texture to prevent square points
    const createCircleTexture = (color, size) => {
      const matCanvas = document.createElement('canvas');
      matCanvas.width = size;
      matCanvas.height = size;
      const matContext = matCanvas.getContext('2d');
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2;

      matContext.beginPath();
      matContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      matContext.fillStyle = color;
      matContext.fill();

      return new THREE.CanvasTexture(matCanvas);
    };

    // Use a soft white/gray point based on the current body theme color
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    const pointColor = isDarkTheme ? '#ffffff' : '#1d1d1f';
    const dotTexture = createCircleTexture(pointColor, 16);

    const material = new THREE.PointsMaterial({
      size: 0.35,
      map: dotTexture,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // 3. Handle Mouse Movement Interactivity
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    // Project mouse coordinates into 3D Space coordinate systems
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates from -1 to 1
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 4. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (easing)
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Project mouse into 3D plane dynamically based on viewport aspect ratio
      const vFOV = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;
      const mouse3D = new THREE.Vector3(
        (mouse.x * visibleWidth) / 2,
        (mouse.y * visibleHeight) / 2,
        0
      );

      // Mutate geometry vertices
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < numPoints; i++) {
        const i3 = i * 3;
        const init = initialPositions[i];

        // 1. Natural floating wave (sine + cosine)
        const waveX = Math.sin(elapsedTime * 1.5 + init.x * 0.2) * 0.35;
        const waveY = Math.cos(elapsedTime * 1.2 + init.y * 0.2) * 0.35;

        // 2. Mouse perturbation / 3D distorts (magnetic attraction following the mouse)
        const dx = init.x - mouse3D.x;
        const dy = init.y - mouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let xOffset = 0;
        let yOffset = 0;
        let zOffset = 0;
        const maxDist = 12.0;

        if (dist < maxDist) {
          // Closer points are pulled more towards the mouse cursor
          const force = (1.0 - dist / maxDist) ** 1.5;
          xOffset = -dx * force * 0.35;
          yOffset = -dy * force * 0.35;
          zOffset = force * 4.0; // push towards camera
        }

        // Apply positions
        posArray[i3] = init.x + waveX + xOffset;
        posArray[i3 + 1] = init.y + waveY + yOffset;
        posArray[i3 + 2] = init.z + zOffset;
      }

      posAttr.needsUpdate = true;

      // Subtle dynamic camera rotation for background depth
      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Subtle dynamic tilting of the entire particle system
      pointCloud.rotation.y += (mouse.x * 0.15 - pointCloud.rotation.y) * 0.05;
      pointCloud.rotation.x += (-mouse.y * 0.15 - pointCloud.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Observe theme changes to dynamically update grid dot colors
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          material.color.set(isDark ? 0xffffff : 0x1d1d1f);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  if (isMobile) {
    // Performant CSS static dot grid on mobile screens
    return (
      <div 
        className="static-grid-bg"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          opacity: 0.35
        }}
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none' // Don't block clicks on content/links
      }}
    />
  );
}
