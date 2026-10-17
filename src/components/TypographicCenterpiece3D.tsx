import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

interface TypographicCenterpiece3DProps {
  className?: string;
  onModeChange?: (isColor: boolean, isTamil: boolean) => void;
}

export const TypographicCenterpiece3D: React.FC<TypographicCenterpiece3DProps> = ({
  className = '',
  onModeChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Interactive Modes
  const [isColorMode, setIsColorMode] = useState<boolean>(false);
  const [isTamilMode, setIsTamilMode] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sculptureGroupRef = useRef<THREE.Group | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);
  const studioLightRef = useRef<THREE.PointLight | null>(null);
  const rimLightRef = useRef<THREE.DirectionalLight | null>(null);
  const frontMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const sideMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  // Physics & Inertia references: Permanent physical resting tilt so depth is apparent at first glance
  const rotationVelocity = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRotation = useRef<{ x: number; y: number }>({ x: 0.045, y: -0.06 });
  const isDragging = useRef<boolean>(false);
  const lastPointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragDistance = useRef<number>(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  // Animation frame reference
  const animationFrameId = useRef<number | null>(null);
  const clock = useRef(new THREE.Clock());

  // Texture generator: Oversized Monumental Heavy Display Typography in Anton
  // Generates both a front face texture and a solid depth extrusion texture
  const createSculptureCanvases = useCallback(
    (isTamil: boolean, isColor: boolean) => {
      const W = 2800;
      const H = 1400;

      // Front Face Canvas
      const frontCanvas = document.createElement('canvas');
      frontCanvas.width = W;
      frontCanvas.height = H;
      const fCtx = frontCanvas.getContext('2d');

      // Side Extrusion Canvas (solid silhouette for clean 3D physical depth)
      const sideCanvas = document.createElement('canvas');
      sideCanvas.width = W;
      sideCanvas.height = H;
      const sCtx = sideCanvas.getContext('2d');

      if (!fCtx || !sCtx) return { frontCanvas, sideCanvas };

      fCtx.clearRect(0, 0, W, H);
      sCtx.clearRect(0, 0, W, H);

      if (!isTamil) {
        // =========================================================================
        // ENGLISH MODE: MONUMENTAL ANTON DISPLAY
        // Line 1: SANJAY
        // Line 2: SHRIRAM N (Visible typographic gap, NO period, NO M/N collision)
        // =========================================================================
        const displayFont = '400 480px "Anton", "Barlow Condensed", "Space Grotesk", sans-serif';
        fCtx.font = displayFont;
        sCtx.font = displayFont;
        fCtx.textBaseline = 'alphabetic';
        sCtx.textBaseline = 'alphabetic';

        // Measure exact string metrics
        const sanjayMetrics = fCtx.measureText('SANJAY');
        const shriramMetrics = fCtx.measureText('SHRIRAM');
        const spaceMetrics = fCtx.measureText(' ');
        const nMetrics = fCtx.measureText('N'); // Note: 'N' NOT 'N.'! No period!

        // Clearly visible gap before the final N
        const gap = Math.max(spaceMetrics.width * 1.35, 84);
        const totalLine2Width = shriramMetrics.width + gap + nMetrics.width;

        // Horizontally center both lines with optical precision
        const line1X = (W - sanjayMetrics.width) / 2;
        const line2StartX = (W - totalLine2Width) / 2;
        const nX = line2StartX + shriramMetrics.width + gap;

        // Vertical positioning: fills central vertical space with monumental dominance
        const line1Y = 470;
        const line2Y = 1030;

        // Front Face Color Palette
        // Default: Warm Ivory (#FAF8F2) with fine Deep Ink (#242424) contour
        // Chromatic: Bold Oxblood (#9E2939), Deep Cobalt (#2448C5), Muted Brass (#D5A65A)
        let fillSanjay = '#FAF8F2';
        let strokeSanjay: string | null = '#242424';
        let fillShriram = '#FAF8F2';
        let strokeShriram: string | null = '#242424';
        let fillN = '#9E2939'; // Oxblood deliberate accent mark
        let strokeN: string | null = '#7A1E2C';

        if (isColor) {
          fillSanjay = '#9E2939'; // Oxblood
          strokeSanjay = '#FAF8F2';
          fillShriram = '#2448C5'; // Cobalt
          strokeShriram = '#FAF8F2';
          fillN = '#D5A65A'; // Muted Brass
          strokeN = '#FAF8F2';
        }

        // --- 1. RENDER FRONT FACE ---
        // Draw SANJAY (Line 1)
        fCtx.fillStyle = fillSanjay;
        fCtx.fillText('SANJAY', line1X, line1Y);
        if (strokeSanjay) {
          fCtx.strokeStyle = strokeSanjay;
          fCtx.lineWidth = 3.5;
          fCtx.strokeText('SANJAY', line1X, line1Y);
        }

        // Draw SHRIRAM (Line 2 part 1)
        fCtx.fillStyle = fillShriram;
        fCtx.fillText('SHRIRAM', line2StartX, line2Y);
        if (strokeShriram) {
          fCtx.strokeStyle = strokeShriram;
          fCtx.lineWidth = 3.5;
          fCtx.strokeText('SHRIRAM', line2StartX, line2Y);
        }

        // Draw N (Line 2 part 2) - Cleanly separated by visible gap, no overlap, no knockout
        fCtx.fillStyle = fillN;
        fCtx.fillText('N', nX, line2Y);
        if (strokeN) {
          fCtx.strokeStyle = strokeN;
          fCtx.lineWidth = 3.5;
          fCtx.strokeText('N', nX, line2Y);
        }

        // --- 2. RENDER SOLID EXTRUSION SILHOUETTES (For depth slices) ---
        // Pure solid white silhouettes for Three.js material color tinting
        sCtx.fillStyle = '#FFFFFF';
        sCtx.fillText('SANJAY', line1X, line1Y);
        sCtx.fillText('SHRIRAM', line2StartX, line2Y);
        sCtx.fillText('N', nX, line2Y);
      } else {
        // =========================================================================
        // TAMIL IDENTITY MODE: சஞ்ஜய் ஸ்ரீராம் நா
        // =========================================================================
        const fillTamil = isColor ? '#9E2939' : '#FAF8F2';
        const strokeTamil = isColor ? '#FAF8F2' : '#242424';
        const subColor = isColor ? '#2448C5' : '#D5A65A';

        // Front Face
        fCtx.textAlign = 'center';
        fCtx.textBaseline = 'middle';
        fCtx.font = '700 240px "Noto Sans Tamil", sans-serif';
        fCtx.fillStyle = fillTamil;
        fCtx.fillText('சஞ்ஜய் ஸ்ரீராம் நா', W / 2, 500);
        fCtx.strokeStyle = strokeTamil;
        fCtx.lineWidth = 3.5;
        fCtx.strokeText('சஞ்ஜய் ஸ்ரீராம் நா', W / 2, 500);

        fCtx.font = '400 120px "Anton", "Barlow Condensed", sans-serif';
        fCtx.fillStyle = subColor;
        fCtx.fillText('SANJAY SHRIRAM N', W / 2, 880);

        // Side Extrusion Silhouette
        sCtx.textAlign = 'center';
        sCtx.textBaseline = 'middle';
        sCtx.fillStyle = '#FFFFFF';
        sCtx.font = '700 240px "Noto Sans Tamil", sans-serif';
        sCtx.fillText('சஞ்ஜய் ஸ்ரீராம் நா', W / 2, 500);
        sCtx.font = '400 120px "Anton", "Barlow Condensed", sans-serif';
        sCtx.fillText('SANJAY SHRIRAM N', W / 2, 880);
      }

      return { frontCanvas, sideCanvas };
    },
    []
  );

  // Update dynamic texture and lighting on mode change
  const updateSculptureTextures = useCallback(
    (isTamil: boolean, isColor: boolean) => {
      if (!sculptureGroupRef.current) return;

      const { frontCanvas, sideCanvas } = createSculptureCanvases(isTamil, isColor);

      const frontTexture = new THREE.CanvasTexture(frontCanvas);
      frontTexture.colorSpace = THREE.SRGBColorSpace;
      frontTexture.generateMipmaps = true;
      frontTexture.minFilter = THREE.LinearMipmapLinearFilter;
      frontTexture.magFilter = THREE.LinearFilter;

      const sideTexture = new THREE.CanvasTexture(sideCanvas);
      sideTexture.colorSpace = THREE.SRGBColorSpace;
      sideTexture.generateMipmaps = true;
      sideTexture.minFilter = THREE.LinearMipmapLinearFilter;
      sideTexture.magFilter = THREE.LinearFilter;

      // Update side materials (slices 0 to SLICES - 2)
      sideMaterialsRef.current.forEach((mat) => {
        mat.map = sideTexture;
        mat.needsUpdate = true;
        if (isColor) {
          mat.roughness = 0.48;
          mat.metalness = 0.20;
        } else {
          mat.roughness = 0.58;
          mat.metalness = 0.12;
        }
      });

      // Update front face material (slice SLICES - 1)
      if (frontMaterialRef.current) {
        frontMaterialRef.current.map = frontTexture;
        frontMaterialRef.current.needsUpdate = true;
        frontMaterialRef.current.roughness = isColor ? 0.28 : 0.38;
        frontMaterialRef.current.metalness = isColor ? 0.22 : 0.14;
      }

      // Lighting updates
      if (keyLightRef.current && fillLightRef.current && studioLightRef.current && rimLightRef.current) {
        if (isColor) {
          keyLightRef.current.color.setHex(0xfffef7);
          fillLightRef.current.color.setHex(0x9e2939); // Oxblood fill
          studioLightRef.current.color.setHex(0x2448c5); // Cobalt bounce
          rimLightRef.current.color.setHex(0xd5a65a); // Brass rim
        } else {
          keyLightRef.current.color.setHex(0xfffdf6);
          fillLightRef.current.color.setHex(0x7a1e2c); // Subtle oxblood depth
          studioLightRef.current.color.setHex(0xd5a65a); // Brass bounce
          rimLightRef.current.color.setHex(0x242424); // Ink definition
        }
      }
    },
    [createSculptureCanvases]
  );

  // Refresh sculpture once Google Font Anton is fully parsed
  useEffect(() => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.load('400 480px Anton').then(() => {
        updateSculptureTextures(isTamilMode, isColorMode);
      }).catch(() => {});
      document.fonts.ready.then(() => {
        updateSculptureTextures(isTamilMode, isColorMode);
      }).catch(() => {});
    }
  }, [isTamilMode, isColorMode, updateSculptureTextures]);

  // Initialize Three.js Scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 560;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera with Wide Perspective (8.6 distance for 1.5x larger scale)
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.6);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 4. Physical Studio Lighting for Warm Paper Environment
    const ambientLight = new THREE.AmbientLight(0xf2ebdd, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffdf6, 2.6);
    keyLight.position.set(6, 8, 9);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 30;
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.DirectionalLight(0x7a1e2c, 1.4); // Oxblood ambient fill
    fillLight.position.set(-6, -4, 6);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    // Subtle brass specular highlight
    const rimLight = new THREE.DirectionalLight(0xd5a65a, 1.2);
    rimLight.position.set(0, -6, -4);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    const studioLight = new THREE.PointLight(0xd5a65a, 1.2, 24);
    studioLight.position.set(0, 0, 5);
    scene.add(studioLight);
    studioLightRef.current = studioLight;

    // 5. 3D Typographic Sculpture Assembly (16 Continuous Slices with Seamless Solid Oxblood Relief)
    const sculptureGroup = new THREE.Group();
    sculptureGroup.position.set(0, 0, 0);
    sculptureGroupRef.current = sculptureGroup;
    scene.add(sculptureGroup);

    const { frontCanvas, sideCanvas } = createSculptureCanvases(false, false);
    const frontTexture = new THREE.CanvasTexture(frontCanvas);
    frontTexture.colorSpace = THREE.SRGBColorSpace;
    frontTexture.generateMipmaps = true;
    frontTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const sideTexture = new THREE.CanvasTexture(sideCanvas);
    sideTexture.colorSpace = THREE.SRGBColorSpace;
    sideTexture.generateMipmaps = true;
    sideTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const SLICES = 16;
    const TOTAL_DEPTH = 0.18; // Moderate, tight architectural relief with zero card gaps
    const slicePlaneGeo = new THREE.PlaneGeometry(10.8, 5.4);

    sideMaterialsRef.current = [];

    for (let i = 0; i < SLICES; i++) {
      const zOffset = (i / (SLICES - 1) - 0.5) * TOTAL_DEPTH;
      const isFront = i === SLICES - 1;

      if (isFront) {
        const frontMat = new THREE.MeshStandardMaterial({
          map: frontTexture,
          transparent: true,
          alphaTest: 0.05,
          color: new THREE.Color(0xffffff),
          roughness: 0.36,
          metalness: 0.14,
          side: THREE.DoubleSide,
        });
        frontMaterialRef.current = frontMat;

        const sliceMesh = new THREE.Mesh(slicePlaneGeo, frontMat);
        sliceMesh.position.z = zOffset;
        sliceMesh.castShadow = true;
        sculptureGroup.add(sliceMesh);
      } else {
        // Smooth, tight extrusion gradient in rich deep oxblood / ink
        const depthFactor = i / (SLICES - 2);
        const sliceColor = new THREE.Color().lerpColors(
          new THREE.Color(0x181818), // Deep ink back
          new THREE.Color(0x8a202e), // Rich oxblood relief
          depthFactor
        );

        const sideMat = new THREE.MeshStandardMaterial({
          map: sideTexture,
          transparent: true,
          alphaTest: 0.05,
          color: sliceColor,
          roughness: 0.65,
          metalness: 0.08,
          side: THREE.DoubleSide,
        });
        sideMaterialsRef.current.push(sideMat);

        const sliceMesh = new THREE.Mesh(slicePlaneGeo, sideMat);
        sliceMesh.position.z = zOffset;
        sculptureGroup.add(sliceMesh);
      }
    }

    // Ground plane drop shadow receiver on warm paper substrate
    const shadowGeo = new THREE.PlaneGeometry(15, 7.5);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.14 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.set(0, -0.6, -0.5);
    shadowMesh.receiveShadow = true;
    scene.add(shadowMesh);

    // Initial orientation: Permanent tactile tilt showing dimensional depth immediately
    sculptureGroup.rotation.x = targetRotation.current.x;
    sculptureGroup.rotation.y = targetRotation.current.y;

    // Resize Handler with responsive camera distance for 1.5x visual scale
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 560;

      camera.aspect = w / h;
      if (w < 640) {
        camera.position.z = 13.6; // Mobile safe margins
      } else if (w < 1024) {
        camera.position.z = 10.4; // Tablet
      } else {
        camera.position.z = 8.6; // Desktop: Monumental 1.5x visual scale
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // 6. Inertia Physics & Parallax Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      const elapsedTime = clock.current.getElapsedTime();

      if (sculptureGroupRef.current) {
        const group = sculptureGroupRef.current;

        if (isDragging.current) {
          group.rotation.x += rotationVelocity.current.x;
          group.rotation.y += rotationVelocity.current.y;
        } else {
          // Inertia damping
          rotationVelocity.current.x *= 0.92;
          rotationVelocity.current.y *= 0.92;

          group.rotation.x += rotationVelocity.current.x;
          group.rotation.y += rotationVelocity.current.y;

          // Spring restoration to resting orientation with subtle physical float
          if (
            Math.abs(rotationVelocity.current.x) < 0.001 &&
            Math.abs(rotationVelocity.current.y) < 0.001
          ) {
            const floatBob = shouldReduceMotion ? 0 : Math.sin(elapsedTime * 1.0) * 0.06;
            const floatTilt = shouldReduceMotion ? 0 : Math.cos(elapsedTime * 0.6) * 0.015;

            const desiredY = targetRotation.current.y + pointerPos.current.x * 0.16 + floatTilt;
            const desiredX = targetRotation.current.x - pointerPos.current.y * 0.1;

            group.rotation.y += (desiredY - group.rotation.y) * 0.045;
            group.rotation.x += (desiredX - group.rotation.x) * 0.045;
            group.position.y = floatBob;
          }
        }
      }

      // Studio specular highlight follows pointer
      if (studioLightRef.current) {
        studioLightRef.current.position.x = pointerPos.current.x * 5.0;
        studioLightRef.current.position.y = pointerPos.current.y * 3.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      renderer.dispose();
      slicePlaneGeo.dispose();
      if (frontMaterialRef.current) frontMaterialRef.current.dispose();
      sideMaterialsRef.current.forEach((m) => m.dispose());
    };
  }, [createSculptureCanvases, shouldReduceMotion]);

  // Pointer & Touch Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = true;
    setIsInteracting(true);
    lastPointer.current = { x: e.clientX, y: e.clientY };
    dragDistance.current = 0;
    rotationVelocity.current = { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      pointerPos.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      };
    }

    if (!isDragging.current) return;

    const deltaX = e.clientX - lastPointer.current.x;
    const deltaY = e.clientY - lastPointer.current.y;
    dragDistance.current += Math.hypot(deltaX, deltaY);

    const sensitivity = 0.0055;
    rotationVelocity.current = {
      x: deltaY * sensitivity,
      y: deltaX * sensitivity,
    };

    lastPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = false;
    setIsInteracting(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // Disambiguate click vs drag (< 6px movement = tap)
    if (dragDistance.current < 6) {
      handleDisambiguatedClick();
    }
  };

  const handleDisambiguatedClick = () => {
    if (clickTimer.current) {
      // Double Click: Reveal Tamil
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      handleToggleTamil();
    } else {
      // Single Click: Richer Color Mode
      clickTimer.current = setTimeout(() => {
        clickTimer.current = null;
        handleToggleColor();
      }, 260);
    }
  };

  const handleToggleColor = useCallback(() => {
    setIsColorMode((prev) => {
      const next = !prev;
      updateSculptureTextures(isTamilMode, next);
      if (onModeChange) onModeChange(next, isTamilMode);
      return next;
    });
  }, [isTamilMode, updateSculptureTextures, onModeChange]);

  const handleToggleTamil = useCallback(() => {
    setIsTamilMode((prev) => {
      const next = !prev;
      updateSculptureTextures(next, isColorMode);
      if (onModeChange) onModeChange(isColorMode, next);
      return next;
    });
  }, [isColorMode, updateSculptureTextures, onModeChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggleColor();
    } else if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      handleToggleTamil();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      rotationVelocity.current.y = -0.04;
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      rotationVelocity.current.y = 0.04;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      rotationVelocity.current.x = -0.04;
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      rotationVelocity.current.x = 0.04;
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Enormous 3D Typography of Sanjay Shriram N. Click to reveal richer color treatment, double-click to reveal Tamil identity, drag to rotate."
      onKeyDown={handleKeyDown}
      className={`relative w-full overflow-hidden select-none outline-none focus-visible:ring-2 focus-visible:ring-[#9E2939] ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Screen Reader Semantic Announcement */}
      <h1 className="sr-only">
        {isTamilMode
          ? 'சஞ்ஜய் ஸ்ரீராம் நா — Sanjay Shriram N — AI & Systems Researcher'
          : 'Sanjay Shriram N — சஞ்ஜய் ஸ்ரீராம் நா — AI & Systems Researcher'}
      </h1>

      {/* 3D WebGL Canvas — Monumental & Uncluttered (Scale ~1.5x) */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`w-full h-[360px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[620px] cursor-grab active:cursor-grabbing transition-opacity duration-300 ${
          isInteracting ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      />

      {/* Discrete Mobile Touch Toggle (Only visible on small touch screens) */}
      <div className="sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          onClick={handleToggleTamil}
          className="px-3 py-1 text-[10px] font-mono-meta bg-[#FAF6EE] text-[#242424] border border-[#D8CEBA] rounded-full shadow-sm"
        >
          {isTamilMode ? 'ENGLISH' : 'தமிழ்'}
        </button>
      </div>
    </div>
  );
};
