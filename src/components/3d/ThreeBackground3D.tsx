import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Verify WebGL availability
    let gl: WebGLRenderingContext | null = null;
    try {
      const testCanvas = document.createElement('canvas');
      gl = (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
      if (!gl) return;
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b14, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // keep lightweight for background
      powerPreference: 'low-power'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 1. Deep 3D Particle Constellation
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38d9ff); // Cyan
    const color2 = new THREE.Color(0x4f8cff); // Blue
    const color3 = new THREE.Color(0x8b5cf6); // Purple

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mixed = Math.random();
      const c = mixed < 0.45 ? color1 : mixed < 0.8 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // 2. Subtle 3D Wireframe Cyber Grid on the Floor
    const gridHelper = new THREE.GridHelper(80, 40, 0x38d9ff, 0x1e293b);
    gridHelper.position.y = -15;
    if (gridHelper.material instanceof THREE.Material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.18;
    }
    scene.add(gridHelper);

    // Scroll & Mouse Tracking
    let targetCameraY = 0;
    let targetCameraX = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      targetCameraY = -scrollY * 0.008;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetCameraX = ((e.clientX / window.innerWidth) - 0.5) * 3;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Slow 3D drift
      pointCloud.rotation.y += 0.03 * delta;
      pointCloud.rotation.x += 0.015 * delta;

      // Camera parallax
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;

      gridHelper.rotation.y += 0.01 * delta;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-[-4] overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
};
