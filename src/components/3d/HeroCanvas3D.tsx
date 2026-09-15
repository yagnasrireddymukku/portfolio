import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroCanvas3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Master Group for Mouse Inertia
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Core AI Sphere (Inner Glowing Nucleus)
    const nucleusGeometry = new THREE.SphereGeometry(1.0, 32, 32);
    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: 0x070b14,
      emissive: 0x38d9ff,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    masterGroup.add(nucleus);

    // 2. Outer Geodesic Icosahedron Wireframe
    const icosaGeometry = new THREE.IcosahedronGeometry(1.45, 2);
    const icosaWireframe = new THREE.WireframeGeometry(icosaGeometry);
    const icosaLineMaterial = new THREE.LineBasicMaterial({
      color: 0x4f8cff,
      transparent: true,
      opacity: 0.65
    });
    const icosaMesh = new THREE.LineSegments(icosaWireframe, icosaLineMaterial);
    masterGroup.add(icosaMesh);

    // 3. Floating Node Vertices on the Icosahedron
    const vertexCount = icosaGeometry.attributes.position.count;
    const nodeGeometry = new THREE.SphereGeometry(0.035, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x38d9ff });
    const nodesInstanced = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, vertexCount);
    const dummy = new THREE.Object3D();
    const posAttribute = icosaGeometry.attributes.position;
    for (let i = 0; i < vertexCount; i++) {
      dummy.position.set(
        posAttribute.getX(i),
        posAttribute.getY(i),
        posAttribute.getZ(i)
      );
      dummy.updateMatrix();
      nodesInstanced.setMatrixAt(i, dummy.matrix);
    }
    nodesInstanced.instanceMatrix.needsUpdate = true;
    masterGroup.add(nodesInstanced);

    // 4. Concentric Cyber Orbital Rings
    const rings: THREE.Mesh[] = [];
    const ringConfigs = [
      { radius: 2.1, tube: 0.018, color: 0x38d9ff, rotX: Math.PI / 4, rotY: 0 },
      { radius: 2.55, tube: 0.015, color: 0x8b5cf6, rotX: -Math.PI / 3, rotY: Math.PI / 6 },
      { radius: 2.95, tube: 0.012, color: 0x4f8cff, rotX: Math.PI / 6, rotY: -Math.PI / 4 }
    ];

    ringConfigs.forEach((cfg) => {
      const ringGeom = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.8,
        roughness: 0.3,
        metalness: 0.7
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.set(cfg.rotX, cfg.rotY, 0);
      masterGroup.add(ring);
      rings.push(ring);
    });

    // 5. Ambient Cloud of Floating Data Particles
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
      particleScales[i] = Math.random();
    }

    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x38d9ff,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeom, particlesMat);
    masterGroup.add(particles);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38d9ff, 4, 10);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 10);
    pointLight2.position.set(-3, -2, -2);
    scene.add(pointLight2);

    // Mouse Tracking with Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.8;
    };

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => {
      setIsInteracting(false);
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Touch Support for Mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((touch.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotationY = mouseX * 0.8;
        targetRotationX = -mouseY * 0.8;
      }
    };
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth Inertial Rotation toward cursor
      masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.05;

      // Autonomous 3D Kinetic Spins
      const spinMultiplier = isInteracting ? 1.5 : 1.0;
      icosaMesh.rotation.y += 0.25 * delta * spinMultiplier;
      icosaMesh.rotation.x += 0.15 * delta * spinMultiplier;
      nodesInstanced.rotation.y = icosaMesh.rotation.y;
      nodesInstanced.rotation.x = icosaMesh.rotation.x;

      nucleus.rotation.y -= 0.3 * delta;

      // Pulse Core Scale
      const pulse = 1.0 + Math.sin(elapsedTime * 2.5) * 0.04;
      nucleus.scale.set(pulse, pulse, pulse);

      // Rings Counter-Rotations
      if (rings[0]) rings[0].rotation.z += 0.4 * delta * spinMultiplier;
      if (rings[1]) rings[1].rotation.z -= 0.3 * delta * spinMultiplier;
      if (rings[2]) rings[2].rotation.z += 0.2 * delta * spinMultiplier;

      // Floating Particles Drift
      particles.rotation.y += 0.08 * delta;
      particles.rotation.x = Math.sin(elapsedTime * 0.4) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Geometries & Materials Disposal
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      icosaGeometry.dispose();
      icosaWireframe.dispose();
      icosaLineMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      particlesGeom.dispose();
      particlesMat.dispose();
      rings.forEach((r) => {
        r.geometry.dispose();
        if (Array.isArray(r.material)) {
          r.material.forEach((m) => m.dispose());
        } else {
          r.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [isInteracting]);

  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center p-8 ${className}`}>
        <div className="w-56 h-56 rounded-full border-2 border-cyan-500/40 animate-spin-slow flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border-2 border-purple-500/40 animate-reverse-spin flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 to-brand-500/20 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center font-mono text-xs text-cyan-300">
              AI CORE
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      aria-label="Interactive 3D AI Neural Core"
      role="img"
    >
      {/* Ambient Radial Backlight */}
      <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none -z-10" />
      
      {/* 3D Interactive Badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-dark-card/80 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300 pointer-events-none shadow-lg shadow-cyan-500/10 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D Interactive Neural Core • Drag / Move Cursor</span>
      </div>
    </div>
  );
};
