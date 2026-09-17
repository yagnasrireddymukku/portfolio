import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Brain, Code, ShoppingBag, Sparkles } from 'lucide-react';

interface DisciplineData {
  id: string;
  name: string;
  role: string;
  color: string;
  hex: number;
  icon: React.ReactNode;
}

const DISCIPLINES: DisciplineData[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    role: 'Generative AI, LLM Pipelines, Vision & Neural Architectures',
    color: '#12B3A6',
    hex: 0x12b3a6,
    icon: <Brain className="w-4 h-4 text-cyan-400" />
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Development',
    role: 'Python, FastAPI, React 19, TypeScript & Microservices',
    color: '#3660DE',
    hex: 0x3660de,
    icon: <Code className="w-4 h-4 text-blue-400" />
  },
  {
    id: 'commerce',
    name: 'Digital Platforms & Shopify',
    role: 'Liquid Storefronts, Hostinger Cloud & High-Conversion Funnels',
    color: '#C2622E',
    hex: 0xc2622e,
    icon: <ShoppingBag className="w-4 h-4 text-purple-400" />
  },
  {
    id: 'creative',
    name: 'Creative Tech & Products',
    role: 'AI Media Production, Digital Art & Interactive Experiences',
    color: '#10B981',
    hex: 0x10b981,
    icon: <Sparkles className="w-4 h-4 text-emerald-400" />
  }
];

export const PillarsHologram3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeDiscipline, setActiveDiscipline] = useState<number>(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      const testCanvas = document.createElement('canvas');
      gl = (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
      if (!gl) return;
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Dodecahedron Core
    const dodecaGeom = new THREE.DodecahedronGeometry(1.35, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0x070b14,
      emissive: DISCIPLINES[activeDiscipline].hex,
      emissiveIntensity: 0.35,
      roughness: 0.3,
      metalness: 0.8
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeom, dodecaMat);
    group.add(dodecaMesh);

    // 2. Glowing Wireframe Outline
    const wireGeom = new THREE.WireframeGeometry(dodecaGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: DISCIPLINES[activeDiscipline].hex,
      transparent: true,
      opacity: 0.75
    });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    group.add(wireMesh);

    // 3. 4 Floating Satellite Nodes representing each discipline
    const satellites: THREE.Mesh[] = [];
    const satelliteRadius = 2.1;

    DISCIPLINES.forEach((item, index) => {
      const angle = (index / DISCIPLINES.length) * Math.PI * 2;
      const satGeom = new THREE.SphereGeometry(0.16, 16, 16);
      const satMat = new THREE.MeshStandardMaterial({
        color: item.hex,
        emissive: item.hex,
        emissiveIntensity: 0.85,
        roughness: 0.2
      });
      const sat = new THREE.Mesh(satGeom, satMat);
      sat.position.set(
        Math.cos(angle) * satelliteRadius,
        Math.sin(angle) * 0.5,
        Math.sin(angle) * satelliteRadius
      );
      group.add(sat);
      satellites.push(sat);
    });

    // 4. Orbit Halo Ring
    const haloGeom = new THREE.TorusGeometry(satelliteRadius, 0.012, 16, 80);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x12b3a6,
      transparent: true,
      opacity: 0.35
    });
    const halo = new THREE.Mesh(haloGeom, haloMat);
    halo.rotation.x = Math.PI / 2.3;
    group.add(halo);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x12b3a6, 3, 10);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Mouse Tracking
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = x * 0.9;
      targetRotX = -y * 0.9;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia
      group.rotation.y += (targetRotY - group.rotation.y) * 0.05 + 0.12 * delta;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.05;

      // Pulse active emissive color
      dodecaMat.emissive.setHex(DISCIPLINES[activeDiscipline].hex);
      wireMat.color.setHex(DISCIPLINES[activeDiscipline].hex);
      pointLight.color.setHex(DISCIPLINES[activeDiscipline].hex);

      // Float satellites
      satellites.forEach((sat, i) => {
        const floatOffset = Math.sin(elapsedTime * 2 + i) * 0.08;
        sat.position.y += floatOffset * delta;
        sat.scale.setScalar(activeDiscipline === i ? 1.35 : 1.0);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      dodecaGeom.dispose();
      dodecaMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      haloGeom.dispose();
      haloMat.dispose();
      satellites.forEach((s) => {
        s.geometry.dispose();
        if (Array.isArray(s.material)) s.material.forEach((m) => m.dispose());
        else s.material.dispose();
      });
      renderer.dispose();
    };
  }, [activeDiscipline]);

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8 rounded-3xl bg-dark-card/90 border border-dark-border shadow-2xl backdrop-blur-xl ${className}`}>
      {/* 3D Hologram Canvas */}
      <div className="relative w-full lg:w-1/2 h-[340px] sm:h-[400px] flex items-center justify-center">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        <div className="absolute bottom-2 px-3 py-1 rounded-full bg-dark-bg/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
          Interactive 3D Core • Tilt & Orbit
        </div>
      </div>

      {/* Interactive Discipline Picker */}
      <div className="w-full lg:w-1/2 space-y-3 text-left">
        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
          Core Pillars of Mastery
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Multi-Disciplinary Engineering Architecture
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 text-justified leading-relaxed pb-2">
          Click any discipline below to focus the 3D neural hologram and inspect how AI pipelines, robust full-stack software, and digital commerce converge in my production work.
        </p>

        <div className="space-y-2.5">
          {DISCIPLINES.map((item, idx) => {
            const isActive = activeDiscipline === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveDiscipline(idx)}
                className={`w-full p-3.5 rounded-2xl border transition-all text-left flex items-start gap-3.5 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/10 translate-x-1'
                    : 'bg-dark-surface/60 border-dark-border hover:border-slate-700 hover:bg-dark-surface'
                }`}
              >
                <div
                  className="p-2 rounded-xl shrink-0 border"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}35`
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Active Node
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 text-justified">
                    {item.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
