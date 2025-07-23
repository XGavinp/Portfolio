import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const colors = ['#5c67de', '#ff7f50', '#32cd32', '#8a2be2', '#00ced1', '#ff1493'];

export default function ThreeDBackground({ theme }) {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const materialRef = useRef(null);
    const colorIndexRef = useRef(0);
    const targetColorRef = useRef(new THREE.Color(colors[0]));

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // Scene, Camera, Renderer (only initialize once)
        if (!rendererRef.current) {
            const scene = new THREE.Scene();
            sceneRef.current = scene;

            const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            camera.position.z = 5;
            cameraRef.current = camera;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            currentMount.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            // Particle Geometry
            const particlesCount = 5000;
            const positions = new Float32Array(particlesCount * 3);
            for (let i = 0; i < particlesCount * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 10;
            }
            const particlesGeometry = new THREE.BufferGeometry();
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            // Particle Material
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.015,
                color: colors[0],
                transparent: true,
                blending: THREE.AdditiveBlending,
            });
            materialRef.current = particlesMaterial;

            // Particles
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Mouse tracking
            const mouse = new THREE.Vector2();
            const onMouseMove = (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            };
            window.addEventListener('mousemove', onMouseMove);

            // Animation
            const clock = new THREE.Clock();
            const animate = () => {
                if (!rendererRef.current) return;
                const elapsedTime = clock.getElapsedTime();
                
                particles.rotation.y = elapsedTime * 0.05;
                particles.rotation.x = elapsedTime * 0.02;

                if (materialRef.current) {
                    materialRef.current.color.lerp(targetColorRef.current, 0.02);
                }

                camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                rendererRef.current.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();
        }

        // Handle Resize
        const onResize = () => {
            if (cameraRef.current && rendererRef.current && currentMount) {
                cameraRef.current.aspect = currentMount.clientWidth / currentMount.clientHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
            }
        };
        window.addEventListener('resize', onResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // Effect for automatic color switching
    useEffect(() => {
        const interval = setInterval(() => {
            colorIndexRef.current = (colorIndexRef.current + 1) % colors.length;
            targetColorRef.current.set(colors[colorIndexRef.current]);
        }, 5000); // Switch color every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
}