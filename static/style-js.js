// Function must be in global scope to work with onclick="toggleMenu()" in HTML
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.querySelector(".pixel-btn-submit");
    const inputField = document.querySelector(".pixel-input");

    if (!sendBtn || !inputField) return;

    function sendMessage() {
        const message = inputField.value;

        if (message.trim() === "") {
            alert("[Error] Please enter a message before sending.");
            return;
        }


        alert("[Success] Your message has been prepared: " + message);
        
        const email = "itachi@gmail.com";
        const subject = "Multiplayer Connection";
        const body = message;

        window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }

    sendBtn.addEventListener("click", sendMessage);

    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        // 1. Select all timeline items
        const items = document.querySelectorAll('.timeline-item');

        // 2. Set up the Intersection Observer (The "Watcher")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the item enters the screen
                if (entry.isIntersecting) {
                    // Add the class 'visible' to make it appear
                    entry.target.classList.add('visible');
                    // Stop watching it so it doesn't animate again
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        // 3. Start watching every timeline item
        items.forEach(item => {
            observer.observe(item);
        });
    });


document.addEventListener("DOMContentLoaded", () => {
            const skillData = {
                frontend: {
                    title: "Front-End",
                    icon: "fa-solid fa-code",
                    skills: [
                        { name: "HTML", level: "90%" },
                        { name: "CSS", level: "60%" },
                        { name: "Qt Designer", level: "85%" },
                        { name: "PyQt", level: "60%" },
                        { name: "Tkinter", level: "60%" }
                    ]
                },
                backend: {
                    title: "Back-End",
                    icon: "fa-solid fa-server",
                    skills: [
                        { name: "Python", level: "82%" },
                        { name: "Django", level: "60%" },
                        { name: "MySQL", level: "85%" },
                        {name: "PHP", level: "60%"},
                        {name: "Laravel", level: "60%"},
                        {name: "Node JS", level: "60%"},
                    ]
                },
                tools: {
                    title: "Tools",
                    icon: "fa-solid fa-screwdriver-wrench",
                    skills: [
                        { name: "Postman", level: "90%" },
                        { name: "VS Code", level: "85%" },
                        { name: "PyCharm", level: "75%" },
                        {name: "Docker", level: "70%"},
                        {name: "Git", level: "65%"},
                        {name: "Linux", level: "60%"},
                        {name :"Vercel", level: "90%"},
                        {name:"Railway", level: "85%"}                 
                    ]
                },
                softskills: {
                    title: "Programming & Others",
                    icon: "fa-solid fa-user-group",
                    skills: [
                        { name: "C", level: "60%" },
                        { name: "C++", level: "65%" },  
                        { name: "Problem Solving", level: "85%" },
                        { name: "Teamwork", level: "90%" },
                        { name: "Leadership", level: "60%" }
                    ]
                }
            };

            const tabsContainer = document.getElementById('skills-tabs');
            const contentContainer = document.getElementById('skills-content');

            if (tabsContainer && contentContainer) {
                function renderContent(categoryKey) {
                    const data = skillData[categoryKey];
                    
                    // 1. Title
                    contentContainer.innerHTML = `<h3 class="category-title"><i class="${data.icon}"></i> ${data.title}</h3>`;

                    // 2. Bars
                    data.skills.forEach(skill => {
                        const barHTML = `
                            <div class="skill-bar-wrapper">
                                <div class="skill-info">
                                    <span>${skill.name}</span>
                                    <span>${skill.level}</span>
                                </div>
                                <div class="progress-line">
                                    <span data-width="${skill.level}"></span>
                                </div>
                            </div>
                        `;
                        contentContainer.innerHTML += barHTML;
                    });

                    // 3. Animation
                    setTimeout(() => {
                        const bars = contentContainer.querySelectorAll('.progress-line span');
                        bars.forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width');
                        });
                    }, 50);
                }

                let isFirst = true;
                for (const key in skillData) {
                    const data = skillData[key];
                    const tabBtn = document.createElement('div');
                    tabBtn.className = 'tab-card';
                    if (isFirst) tabBtn.classList.add('active');

                    tabBtn.innerHTML = `<i class="${data.icon}"></i> <span>${data.title}</span>`;

                    tabBtn.addEventListener('click', () => {
                        document.querySelectorAll('.tab-card').forEach(t => t.classList.remove('active'));
                        tabBtn.classList.add('active');
                        renderContent(key);
                    });

                    tabsContainer.appendChild(tabBtn);

                    if (isFirst) {
                        renderContent(key);
                        isFirst = false;
                    }
                }
            }
        });

// --- Theme Switcher Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (!themeToggleBtn || !themeIcon) return;

    // Detect system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Determine the current theme
    const currentTheme = localStorage.getItem("theme");

    // Helper to apply theme
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        if (theme === "dark") {
            themeIcon.classList.remove("fa-sun", "fa-circle-half-stroke");
            themeIcon.classList.add("fa-moon");
        } else {
            themeIcon.classList.remove("fa-moon", "fa-circle-half-stroke");
            themeIcon.classList.add("fa-sun");
        }
    }

    // Initialize theme on load
    if (currentTheme === "dark") {
        applyTheme("dark");
    } else if (currentTheme === "light") {
        applyTheme("light");
    } else {
        // Auto Mode
        applyTheme(prefersDarkScheme.matches ? "dark" : "light");
    }

    // Toggle button click event
    themeToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let theme = document.documentElement.getAttribute("data-theme");
        
        if (theme === "dark") {
            applyTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            applyTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    });

    // Listen for system theme changes (Auto mode response)
    prefersDarkScheme.addEventListener("change", (e) => {
        // Only change if user hasn't manually overridden via localStorage
        if (!localStorage.getItem("theme")) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });
});

// =============================================
// THREE.JS VOXEL PLANET
// =============================================
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("planet-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x87CEEB, 0.015);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 16);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // --- SOLAR SYSTEM GROUPS ---
    const solarSystem = new THREE.Group();
    scene.add(solarSystem);

    const overworldPivot = new THREE.Group();
    const netherPivot = new THREE.Group();
    const endPivot = new THREE.Group();
    const skyPivot = new THREE.Group(); // For moon, sun, clouds
    
    solarSystem.add(overworldPivot);
    solarSystem.add(netherPivot);
    solarSystem.add(endPivot);
    solarSystem.add(skyPivot);

    const overworldGroup = new THREE.Group();
    const netherGroup = new THREE.Group();
    const endGroup = new THREE.Group();
    const cloudGroup = new THREE.Group();

    overworldPivot.add(overworldGroup);
    skyPivot.add(cloudGroup);

    netherGroup.position.set(7, 2, -5);
    netherGroup.scale.set(0.5, 0.5, 0.5);
    netherPivot.add(netherGroup);
    
    endGroup.position.set(-8, -3, -7);
    endGroup.scale.set(0.6, 0.6, 0.6);
    endPivot.add(endGroup);

    // --- LIGHTING & WEATHER ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e0, 1.2);
    sunLight.position.set(10, 20, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;
    const d = 10;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    scene.add(sunLight);

    const lightningLight = new THREE.DirectionalLight(0xffffff, 0);
    lightningLight.position.set(0, 20, 0);
    scene.add(lightningLight);

    const endLight = new THREE.PointLight(0xaa00aa, 0, 20);
    endGroup.add(endLight);

    const netherLight = new THREE.PointLight(0xff5500, 0, 20);
    netherGroup.add(netherLight);

    let weatherState = 'sunny'; 
    let weatherTimer = 0;

    // --- RAIN SYSTEM ---
    const rainCount = 1000;
    const rainGeo = new THREE.BufferGeometry();
    const rainPos = new Float32Array(rainCount * 3);
    for(let i=0; i<rainCount; i++) {
        rainPos[i*3] = (Math.random() - 0.5) * 30;
        rainPos[i*3+1] = Math.random() * 20;
        rainPos[i*3+2] = (Math.random() - 0.5) * 30;
    }
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
    const rainMat = new THREE.LineBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.0 });
    const rainSystem = new THREE.LineSegments(rainGeo, rainMat);
    scene.add(rainSystem);

    // --- TEXTURES & MATERIALS ---
    function createColorTex(colorHex, transparent=false) {
        const c = document.createElement('canvas');
        c.width = 8; c.height = 8;
        const ctx = c.getContext('2d');
        ctx.fillStyle = colorHex;
        ctx.fillRect(0,0,8,8);
        return new THREE.CanvasTexture(c);
    }
    
    const createMat = (hex, emissive=0x000000, opacity=1.0) => new THREE.MeshStandardMaterial({ 
        color: hex, roughness: 0.9, flatShading: true, emissive: emissive, 
        transparent: opacity < 1.0, opacity: opacity 
    });

    const materials = {
        dirt: createMat(0x5c3a21),
        grass: createMat(0x589c3a),
        stone: createMat(0x7d7d7d),
        netherrack: createMat(0x602020),
        lava: createMat(0xff4400, 0xaa2200),
        basalt: createMat(0x3a3a3a),
        endStone: createMat(0xdde2a3),
        obsidian: createMat(0x1a0f2e),
        grassBlade: createMat(0x71c24a),
        water: createMat(0x2b6cc4, 0x000000, 0.8),
        flowerRed: createMat(0xff3333),
        flowerYellow: createMat(0xffdd00),
        portal: createMat(0xaa00ff, 0x5500aa, 0.7),
        moon: createMat(0xeeeeee, 0x333333),
        cloud: createMat(0xffffff, 0x000000, 0.9)
    };

    const blockGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);

    // --- PLANET GENERATOR ---
    const swayingGrass = []; 
    
    // Perlin noise substitute for rivers/mountains
    function pseudoNoise(x, y, z) {
        return (Math.sin(x*1.5) + Math.cos(y*1.5) + Math.sin(z*1.5)) / 3;
    }

    function generatePlanet(group, type, radius) {
        const dummy = new THREE.Object3D();
        const blockPositions = [];
        
        let coreMat = 'stone', surfaceMat = 'grass', liquidMat = null;
        if (type === 'nether') { coreMat = 'netherrack'; surfaceMat = 'netherrack'; liquidMat = 'lava'; }
        if (type === 'end') { coreMat = 'endStone'; surfaceMat = 'endStone'; liquidMat = null; }

        const maxBlocks = 1800;
        const imSurface = new THREE.InstancedMesh(blockGeo, materials[surfaceMat], maxBlocks);
        const imCore = new THREE.InstancedMesh(blockGeo, materials[coreMat], maxBlocks);
        const imLiquid = liquidMat ? new THREE.InstancedMesh(blockGeo, materials[liquidMat], 300) : null;
        const imWater = type === 'overworld' ? new THREE.InstancedMesh(blockGeo, materials.water, 300) : null;
        
        imSurface.castShadow = true; imSurface.receiveShadow = true;
        imCore.castShadow = true; imCore.receiveShadow = true;
        
        let sCount = 0, cCount = 0, lCount = 0, wCount = 0;

        for (let x = -radius; x <= radius; x++) {
            for (let y = -radius; y <= radius; y++) {
                for (let z = -radius; z <= radius; z++) {
                    const dist = Math.sqrt(x*x + y*y + z*z);
                    if (dist > radius || dist < radius - 1.5) continue; 

                    let bX = x * 0.5, bY = y * 0.5, bZ = z * 0.5;
                    const noise = Math.random();
                    const pNoise = pseudoNoise(x, y, z);
                    
                    let isMountain = false;
                    let isRiver = false;

                    if (type === 'overworld' && dist > radius - 0.5) {
                        if (pNoise > 0.6) {
                            isMountain = true;
                            // Push outwards
                            const l = Math.sqrt(bX*bX + bY*bY + bZ*bZ);
                            bX += (bX/l)*0.25; bY += (bY/l)*0.25; bZ += (bZ/l)*0.25;
                        } else if (pNoise < -0.6) {
                            isRiver = true;
                            // Sink inwards
                            const l = Math.sqrt(bX*bX + bY*bY + bZ*bZ);
                            bX -= (bX/l)*0.2; bY -= (bY/l)*0.2; bZ -= (bZ/l)*0.2;
                        }
                    }

                    dummy.position.set(bX, bY, bZ);
                    dummy.updateMatrix();

                    if (dist > radius - 0.5) {
                        if (type === 'nether' && y < -radius * 0.3 && noise > 0.3) {
                            imLiquid.setMatrixAt(lCount++, dummy.matrix);
                        } else if (isRiver) {
                            imWater.setMatrixAt(wCount++, dummy.matrix);
                        } else {
                            if (isMountain) imCore.setMatrixAt(cCount++, dummy.matrix); // Stone mountain
                            else imSurface.setMatrixAt(sCount++, dummy.matrix);
                            
                            // Flora
                            if (type === 'overworld' && !isMountain && noise > 0.7) {
                                if (noise > 0.95) addFlower(group, bX, bY, bZ, 'flowerRed');
                                else if (noise > 0.9) addFlower(group, bX, bY, bZ, 'flowerYellow');
                                else addGrassBlade(group, bX, bY, bZ);
                            }
                        }
                    } else {
                        imCore.setMatrixAt(cCount++, dummy.matrix);
                    }
                    if (!isRiver) blockPositions.push({x: bX, y: bY, z: bZ}); // Don't spawn mobs on rivers
                }
            }
        }
        
        imSurface.count = sCount; imCore.count = cCount;
        if(imLiquid) imLiquid.count = lCount;
        if(imWater) imWater.count = wCount;

        group.add(imSurface); group.add(imCore);
        if(imLiquid) group.add(imLiquid);
        if(imWater) group.add(imWater);

        if (type === 'overworld') {
            for(let i=0; i<8; i++) addTree(group, radius);
            buildNetherPortal(group, radius);
        } else if (type === 'end') {
            for(let i=0; i<4; i++) addObsidianPillar(group, radius);
        }
        return blockPositions;
    }

    function addGrassBlade(group, x, y, z) {
        const length = Math.sqrt(x*x + y*y + z*z);
        const nx = x/length, ny = y/length, nz = z/length;
        const grass = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), materials.grassBlade);
        grass.position.set(x + nx*0.35, y + ny*0.35, z + nz*0.35);
        grass.lookAt(grass.position.x * 2, grass.position.y * 2, grass.position.z * 2);
        grass.rotateX(Math.PI/2);
        group.add(grass);
        swayingGrass.push({ mesh: grass, baseRotX: grass.rotation.x, baseRotZ: grass.rotation.z, offset: Math.random() * Math.PI * 2 });
    }

    function addFlower(group, x, y, z, matName) {
        const length = Math.sqrt(x*x + y*y + z*z);
        const nx = x/length, ny = y/length, nz = z/length;
        const flower = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.1), materials[matName]);
        flower.position.set(x + nx*0.3, y + ny*0.3, z + nz*0.3);
        flower.lookAt(flower.position.x * 2, flower.position.y * 2, flower.position.z * 2);
        flower.rotateX(Math.PI/2);
        group.add(flower);
        swayingGrass.push({ mesh: flower, baseRotX: flower.rotation.x, baseRotZ: flower.rotation.z, offset: Math.random() * Math.PI * 2 });
    }

    function addTree(group, r) {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.acos(2 * Math.random() - 1);
        const rPos = (r * 0.5) + 0.25;
        const x = rPos * Math.sin(theta) * Math.cos(phi);
        const y = rPos * Math.sin(theta) * Math.sin(phi);
        const z = rPos * Math.cos(theta);

        const treeGroup = new THREE.Group();
        treeGroup.position.set(x,y,z);
        treeGroup.lookAt(0,0,0);
        treeGroup.rotateX(Math.PI/2); 

        const log = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 0.3), materials.dirt);
        log.position.y = 0.4; log.castShadow = true;
        treeGroup.add(log);

        const leaves = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), materials.grass);
        leaves.position.y = 1.0; leaves.castShadow = true;
        treeGroup.add(leaves);
        group.add(treeGroup);
    }

    function addObsidianPillar(group, r) {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.acos(2 * Math.random() - 1);
        const rPos = (r * 0.5);
        const x = rPos * Math.sin(theta) * Math.cos(phi);
        const y = rPos * Math.sin(theta) * Math.sin(phi);
        const z = rPos * Math.cos(theta);

        const p = new THREE.Group();
        p.position.set(x,y,z); p.lookAt(0,0,0); p.rotateX(Math.PI/2);

        const h = 1.5 + Math.random();
        const obs = new THREE.Mesh(new THREE.BoxGeometry(0.6, h, 0.6), materials.obsidian);
        obs.position.y = h/2; p.add(obs);
        
        const crystal = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new THREE.MeshStandardMaterial({color: 0xffaaff, emissive: 0xaa00aa}));
        crystal.position.y = h + 0.3; p.add(crystal);
        group.add(p);
    }

    function buildNetherPortal(group, r) {
        const pGroup = new THREE.Group();
        pGroup.position.set(0, r*0.5 + 0.3, 0); // Put near north pole
        
        // Frame
        const obsGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        for(let i=0; i<4; i++) {
            const m = new THREE.Mesh(obsGeo, materials.obsidian);
            m.position.set(-0.3 + i*0.2, 0, 0); pGroup.add(m);
            const m2 = new THREE.Mesh(obsGeo, materials.obsidian);
            m2.position.set(-0.3 + i*0.2, 0.8, 0); pGroup.add(m2);
        }
        for(let i=1; i<4; i++) {
            const m = new THREE.Mesh(obsGeo, materials.obsidian);
            m.position.set(-0.3, i*0.2, 0); pGroup.add(m);
            const m2 = new THREE.Mesh(obsGeo, materials.obsidian);
            m2.position.set(0.3, i*0.2, 0); pGroup.add(m2);
        }
        
        // Portal center
        const center = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.6, 0.05), materials.portal);
        center.position.set(0, 0.4, 0);
        pGroup.add(center);

        // Portal Light
        const pLight = new THREE.PointLight(0xaa00ff, 1, 3);
        pLight.position.set(0, 0.4, 0.2);
        pGroup.add(pLight);

        group.add(pGroup);
    }

    // Generate Planets
    const overworldRadius = 6;
    const overworldBlocks = generatePlanet(overworldGroup, 'overworld', overworldRadius);
    generatePlanet(netherGroup, 'nether', 4);
    generatePlanet(endGroup, 'end', 4);

    // --- SKYBOX (MOON, STARS, CLOUDS) ---
    // Moon
    const moon = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), materials.moon);
    moon.position.set(-15, 10, -15);
    skyPivot.add(moon);
    const moonlight = new THREE.DirectionalLight(0xaaaaff, 0);
    moonlight.position.set(-15, 10, -15);
    scene.add(moonlight);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(500 * 3);
    for(let i=0; i<500; i++) {
        starPos[i*3] = (Math.random()-0.5)*100;
        starPos[i*3+1] = (Math.random()-0.5)*100;
        starPos[i*3+2] = (Math.random()-0.5)*100;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({color: 0xffffff, size: 0.2, transparent: true, opacity: 0});
    const starSystem = new THREE.Points(starGeo, starMat);
    scene.add(starSystem);

    // Clouds
    for(let i=0; i<8; i++) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(2 + Math.random(), 0.5, 1 + Math.random()), materials.cloud);
        c.position.set((Math.random()-0.5)*20, 8 + Math.random()*2, (Math.random()-0.5)*20);
        cloudGroup.add(c);
    }


    // === PARTICLES ===
    function createParticleSystem(count, colorHex, size) {
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(count * 3);
        const pVel = [];
        for(let i=0; i<count; i++) {
            pPos[i*3] = (Math.random()-0.5)*30;
            pPos[i*3+1] = (Math.random()-0.5)*30;
            pPos[i*3+2] = (Math.random()-0.5)*30;
            pVel.push({
                x: (Math.random()-0.5)*0.02,
                y: (Math.random()-0.5)*0.02 + 0.01,
                z: (Math.random()-0.5)*0.02
            });
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        
        const cCanvas = document.createElement('canvas');
        cCanvas.width = 16; cCanvas.height = 16;
        const ctx = cCanvas.getContext('2d');
        const g = ctx.createRadialGradient(8,8,0,8,8,8);
        g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g; ctx.fillRect(0,0,16,16);
        
        const pMat = new THREE.PointsMaterial({
            color: colorHex, size: size, transparent: true, opacity: 0.6,
            map: new THREE.CanvasTexture(cCanvas), blending: THREE.AdditiveBlending, depthWrite: false
        });
        
        const sys = new THREE.Points(pGeo, pMat);
        sys.userData = { velocities: pVel, count: count };
        return sys;
    }

    const owParticles = createParticleSystem(300, 0xffffff, 0.4); overworldGroup.add(owParticles);
    const netherParticles = createParticleSystem(200, 0xffaa00, 0.6); netherGroup.add(netherParticles);
    const endParticles = createParticleSystem(200, 0xaa00ff, 0.5); endGroup.add(endParticles);
    const fireflies = createParticleSystem(100, 0xaaff00, 0.3); overworldGroup.add(fireflies);
    const butterflies = createParticleSystem(50, 0xffbb55, 0.2); overworldGroup.add(butterflies);


    // --- ADVANCED MOB AI ---
    const allMobs = [];
    function spawnMob(type, colorHex, isFlying=false, isHostile=false) {
        let size = 0.2;
        if(type === 'bee' || type === 'bird') size = 0.08;
        if(type === 'chicken') size = 0.12;
        if(type === 'horse') size = 0.3;
        if(type === 'wolf' || type === 'fox' || type === 'creeper') size = 0.2;

        const mob = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshStandardMaterial({
            color: colorHex, emissive: type === 'enderman' ? 0x220022 : 0x000000
        }));
        
        const block = overworldBlocks[Math.floor(Math.random() * overworldBlocks.length)];
        const length = Math.sqrt(block.x*block.x + block.y*block.y + block.z*block.z);
        const normX = block.x/length; const normY = block.y/length; const normZ = block.z/length;
        
        const hover = isFlying ? 1.0 + Math.random()*0.5 : 0.3;
        mob.position.set(block.x + normX*hover, block.y + normY*hover, block.z + normZ*hover);
        mob.lookAt(mob.position.x * 2, mob.position.y * 2, mob.position.z * 2);
        
        mob.userData = { 
            type: type, isFlying: isFlying, isHostile: isHostile, 
            angle: Math.random() * Math.PI * 2, speed: 0.002 + Math.random()*0.005,
            axis: new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize(),
            timer: 0, state: 'walk', hoverDist: hover 
        };
        overworldGroup.add(mob);
        allMobs.push(mob);
    }
    
    // Day Mobs
    for(let i=0; i<3; i++) spawnMob('villager', 0x8b5a2b);
    for(let i=0; i<4; i++) spawnMob('cow', 0x5c3a21);
    for(let i=0; i<4; i++) spawnMob('sheep', 0xeeeeee);
    for(let i=0; i<3; i++) spawnMob('chicken', 0xffffff);
    for(let i=0; i<2; i++) spawnMob('horse', 0x8B4513);
    for(let i=0; i<2; i++) spawnMob('wolf', 0xaaaaaa);
    for(let i=0; i<2; i++) spawnMob('fox', 0xff7700);
    for(let i=0; i<5; i++) spawnMob('bee', 0xffcc00, true);
    for(let i=0; i<3; i++) spawnMob('bird', 0x4488ff, true);
    
    // Night Mobs
    for(let i=0; i<4; i++) spawnMob('zombie', 0x2a5298, false, true);
    for(let i=0; i<2; i++) spawnMob('skeleton', 0xdddddd, false, true);
    for(let i=0; i<3; i++) spawnMob('spider', 0x222222, false, true);
    for(let i=0; i<2; i++) spawnMob('creeper', 0x55ff55, false, true);
    for(let i=0; i<2; i++) spawnMob('enderman', 0x111111, false, true);


    // --- PARALLAX ---
    let mouseX = 0; let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // --- THEME SYNC ---
    let isDay = true;
    function updateThemeLighting() {
        const theme = document.documentElement.getAttribute("data-theme") || localStorage.getItem("theme");
        isDay = (theme !== "dark");
        if (!isDay) {
            sunLight.intensity = 0.05;
            moonlight.intensity = 0.8;
            ambientLight.color.setHex(0x223355);
            if(weatherState === 'sunny') scene.fog.color.setHex(0x0c0d14);
            netherLight.intensity = 2; endLight.intensity = 1.5;
            starMat.opacity = 0.8;
            fireflies.visible = true; butterflies.visible = false;
        } else {
            sunLight.intensity = weatherState === 'sunny' ? 1.2 : 0.4;
            moonlight.intensity = 0;
            ambientLight.color.setHex(weatherState === 'sunny' ? 0xffffff : 0xaaaaaa);
            if(weatherState === 'sunny') scene.fog.color.setHex(0x87CEEB);
            netherLight.intensity = 0; endLight.intensity = 0;
            starMat.opacity = 0;
            fireflies.visible = false; butterflies.visible = true;
        }
    }
    updateThemeLighting();

    const themeBtn = document.getElementById("theme-toggle");
    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            setTimeout(updateThemeLighting, 50);
        });
    }

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();

    function animateParticles(sys, special=false) {
        if(!sys.visible) return;
        const pArr = sys.geometry.attributes.position.array;
        const vel = sys.userData.velocities;
        for(let i=0; i<sys.userData.count; i++) {
            pArr[i*3] += vel[i].x; pArr[i*3+1] += vel[i].y; pArr[i*3+2] += vel[i].z;
            if(special) {
                pArr[i*3] += Math.sin(clock.getElapsedTime()*2 + i)*0.05; // flutter
            }
            if (pArr[i*3+1] > 15) pArr[i*3+1] = -15; 
        }
        sys.geometry.attributes.position.needsUpdate = true;
    }

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        // Parallax
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 2 + 2 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);

        // Planet Rotation
        overworldGroup.rotation.y += 0.002;
        overworldGroup.rotation.z += 0.0005;
        netherGroup.rotation.y -= 0.003;
        endGroup.rotation.y += 0.001;

        // Orbit
        netherPivot.rotation.y += 0.001;
        netherPivot.rotation.z = Math.sin(time * 0.2) * 0.2;
        endPivot.rotation.y -= 0.0008;
        endPivot.rotation.x = Math.cos(time * 0.1) * 0.3;
        skyPivot.rotation.y += 0.0005; // orbit clouds and moon

        // Particles
        animateParticles(owParticles);
        animateParticles(netherParticles);
        animateParticles(endParticles);
        animateParticles(fireflies, true);
        animateParticles(butterflies, true);

        // Sway Grass & Flowers
        swayingGrass.forEach(g => {
            g.mesh.rotation.x = g.baseRotX + Math.sin(time * 2 + g.offset) * 0.2;
            g.mesh.rotation.z = g.baseRotZ + Math.cos(time * 1.5 + g.offset) * 0.2;
        });

        // Weather Logic
        weatherTimer += delta;
        if(weatherTimer > 30) {
            weatherTimer = 0;
            const rand = Math.random();
            if(rand < 0.6) weatherState = 'sunny';
            else if (rand < 0.9) weatherState = 'rain';
            else weatherState = 'thunder';
            updateThemeLighting(); 
        }

        if (weatherState !== 'sunny') {
            rainMat.opacity = 0.5;
            scene.fog.color.setHex(isDay ? 0x445566 : 0x08090a);
            const rArr = rainSystem.geometry.attributes.position.array;
            for(let i=0; i<rainCount; i++) {
                rArr[i*3+1] -= 0.5;
                if(rArr[i*3+1] < -10) rArr[i*3+1] = 20; 
            }
            rainSystem.geometry.attributes.position.needsUpdate = true;

            if (weatherState === 'thunder') {
                if (Math.random() < 0.02) { 
                    lightningLight.intensity = 5;
                    setTimeout(() => { lightningLight.intensity = 0; }, 100);
                }
            }
        } else {
            rainMat.opacity = 0;
        }

        // Mob AI
        allMobs.forEach(mob => {
            if (mob.userData.isHostile && isDay) { mob.visible = false; return; }
            else if (!mob.userData.isHostile && !isDay) { mob.visible = false; return; }
            else { mob.visible = true; }

            mob.userData.timer -= delta;
            
            // Enderman Teleport
            if(mob.userData.type === 'enderman' && mob.userData.timer < 0) {
                mob.userData.timer = 5 + Math.random() * 5;
                const rBlock = overworldBlocks[Math.floor(Math.random() * overworldBlocks.length)];
                const rLen = Math.sqrt(rBlock.x*rBlock.x + rBlock.y*rBlock.y + rBlock.z*rBlock.z);
                mob.position.set(rBlock.x + (rBlock.x/rLen)*0.3, rBlock.y + (rBlock.y/rLen)*0.3, rBlock.z + (rBlock.z/rLen)*0.3);
                mob.lookAt(mob.position.x*2, mob.position.y*2, mob.position.z*2);
            }

            // Normal Walking/Flying
            if (mob.userData.state === 'walk') {
                mob.position.applyAxisAngle(mob.userData.axis, mob.userData.speed);
                mob.lookAt(mob.position.x*2, mob.position.y*2, mob.position.z*2);
                
                if(mob.userData.isFlying) {
                    const n = mob.position.clone().normalize();
                    const targetLen = overworldRadius + mob.userData.hoverDist + Math.sin(time*5)*0.2;
                    mob.position.copy(n.multiplyScalar(targetLen));
                }

                if(mob.userData.timer < 0 && !mob.userData.isFlying) {
                    mob.userData.state = 'idle';
                    mob.userData.timer = 2 + Math.random() * 3;
                }
                
                // Villager interaction check
                if (mob.userData.type === 'villager' && Math.random() < 0.01) {
                    allMobs.forEach(otherMob => {
                        if (otherMob !== mob && otherMob.userData.type === 'villager' && mob.position.distanceTo(otherMob.position) < 1.0) {
                            mob.userData.state = 'idle';
                            otherMob.userData.state = 'idle';
                            mob.lookAt(otherMob.position);
                            otherMob.lookAt(mob.position);
                            mob.userData.timer = 3;
                            otherMob.userData.timer = 3;
                        }
                    });
                }
            } else {
                if(mob.userData.timer < 0) {
                    mob.userData.state = 'walk';
                    mob.userData.timer = 3 + Math.random() * 5;
                    mob.userData.axis = new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
                }
            }
        });

        renderer.render(scene, camera);
    }
    animate();
});
