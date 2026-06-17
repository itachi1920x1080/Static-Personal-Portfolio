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
        wood: createMat(0x6e4a2c),
        sand: createMat(0xdfd498),
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
        const imLiquid = liquidMat ? new THREE.InstancedMesh(blockGeo, materials[liquidMat], 400) : null;
        const imWater = type === 'overworld' ? new THREE.InstancedMesh(blockGeo, materials.water, 800) : null;
        const imSand = type === 'overworld' ? new THREE.InstancedMesh(blockGeo, materials.sand, 600) : null;
        
        imSurface.castShadow = true; imSurface.receiveShadow = true;
        imCore.castShadow = true; imCore.receiveShadow = true;
        if(imSand) { imSand.castShadow = true; imSand.receiveShadow = true; }
        
        let sCount = 0, cCount = 0, lCount = 0, wCount = 0, sandCount = 0;

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
                    let isSand = false;

                    if (type === 'overworld' && dist > radius - 0.5) {
                        if (pNoise > 0.5) {
                            isMountain = true;
                            const l = Math.sqrt(bX*bX + bY*bY + bZ*bZ);
                            bX += (bX/l)*0.3; bY += (bY/l)*0.3; bZ += (bZ/l)*0.3;
                        } else if (pNoise < -0.3) {
                            isRiver = true;
                            const l = Math.sqrt(bX*bX + bY*bY + bZ*bZ);
                            bX -= (bX/l)*0.2; bY -= (bY/l)*0.2; bZ -= (bZ/l)*0.2;
                        } else if (pNoise < -0.1) {
                            isSand = true;
                        }
                    }

                    dummy.position.set(bX, bY, bZ);
                    dummy.updateMatrix();

                    if (dist > radius - 0.5) {
                        if (type === 'nether' && y < -radius * 0.3 && noise > 0.3) {
                            imLiquid.setMatrixAt(lCount++, dummy.matrix);
                        } else if (isRiver) {
                            imWater.setMatrixAt(wCount++, dummy.matrix);
                        } else if (isSand) {
                            imSand.setMatrixAt(sandCount++, dummy.matrix);
                        } else {
                            if (isMountain) imCore.setMatrixAt(cCount++, dummy.matrix);
                            else imSurface.setMatrixAt(sCount++, dummy.matrix);
                            
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
        if(imSand) imSand.count = sandCount;

        group.add(imSurface); group.add(imCore);
        if(imLiquid) group.add(imLiquid);
        if(imWater) group.add(imWater);
        if(imSand) group.add(imSand);

        if (type === 'overworld') {
            for(let i=0; i<8; i++) addTree(group, radius);
            const villagePhi = Math.random() * Math.PI * 2;
            const villageTheta = Math.acos(2 * Math.random() - 1);
            for(let i=0; i<4; i++) {
                const offsetPhi = (Math.random() - 0.5) * 0.4;
                const offsetTheta = (Math.random() - 0.5) * 0.4;
                addVillageHouse(group, radius, villagePhi + offsetPhi, villageTheta + offsetTheta);
            }
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
    function addVillageHouse(group, r, overridePhi=null, overrideTheta=null) {
        const phi = overridePhi !== null ? overridePhi : Math.random() * Math.PI * 2;
        const theta = overrideTheta !== null ? overrideTheta : Math.acos(2 * Math.random() - 1);
        const rPos = (r * 0.5) + 0.25;
        const x = rPos * Math.sin(theta) * Math.cos(phi);
        const y = rPos * Math.sin(theta) * Math.sin(phi);
        const z = rPos * Math.cos(theta);

        const houseGroup = new THREE.Group();
        houseGroup.position.set(x,y,z);
        houseGroup.lookAt(0,0,0);
        houseGroup.rotateX(Math.PI/2); 

        const walls = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 1.5), materials.wood);
        walls.position.y = 0.6;
        houseGroup.add(walls);

        const roof1 = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.3, 1.7), materials.dirt);
        roof1.position.y = 1.35;
        houseGroup.add(roof1);

        const roof2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.3, 1.1), materials.dirt);
        roof2.position.y = 1.65;
        houseGroup.add(roof2);

        const doorMat = new THREE.MeshStandardMaterial({color: 0x221100, roughness: 1.0});
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.8, 1.55), doorMat);
        door.position.set(0, 0.4, 0);
        houseGroup.add(door);

        group.add(houseGroup);
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

    // Clouds (Fluffy Voxel Clouds)
    for(let i=0; i<3; i++) {
        const cloud = new THREE.Group();
        
        const base = new THREE.Mesh(new THREE.BoxGeometry(4 + Math.random(), 0.5, 3 + Math.random()), materials.cloud);
        cloud.add(base);
        
        const top1 = new THREE.Mesh(new THREE.BoxGeometry(2 + Math.random(), 0.5, 2 + Math.random()), materials.cloud);
        top1.position.set(0.5, 0.5, 0);
        cloud.add(top1);
        
        const top2 = new THREE.Mesh(new THREE.BoxGeometry(1.5 + Math.random(), 0.5, 1.5 + Math.random()), materials.cloud);
        top2.position.set(-1, 0.5, -0.5);
        cloud.add(top2);

        const bottom = new THREE.Mesh(new THREE.BoxGeometry(2, 0.5, 2), materials.cloud);
        bottom.position.set(0, -0.5, 0.5);
        cloud.add(bottom);
        
        cloud.position.set((Math.random()-0.5)*20, 8 + Math.random()*2, (Math.random()-0.5)*20);
        cloudGroup.add(cloud);
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
    class VoxelMob {
        constructor(type, planet='overworld') {
            this.group = new THREE.Group();
            this.type = type;
            this.planet = planet;
            this.speed = (type === 'ghast') ? 0.003 : 0.003 + Math.random() * 0.005;
            this.angle = Math.random() * Math.PI * 2;
            this.latitude = (Math.random() - 0.5) * 1.5;
            this.targetAngle = this.angle;
            this.targetLatitude = this.latitude;
            this.state = 'idle';
            this.timer = Math.random() * 2;
            this.parts = []; 
            this.hoverDist = (type === 'ghast') ? 3.0 : ((type === 'bee' || type === 'bird') ? 1.0 + Math.random()*0.5 : 0.3);
            this.isHostile = ['zombie', 'skeleton', 'spider', 'creeper', 'enderman', 'ghast'].includes(type);
            this.visible = true;
            this.velocityY = 0;
            this.isJumping = false;
            this.jumpOffset = 0;
            this.isWaving = false;
            this.waveTimer = 0;
            
            this.buildModel();
            this.updatePosition();
        }

        jump() {
            if (this.type === 'player') {
                this.isWaving = true;
                this.waveTimer = 1.0;
                return;
            }
            if (!this.isJumping && !['ghast', 'bee', 'bird'].includes(this.type)) {
                this.velocityY = 4.0; 
                this.isJumping = true;
            }
        }

        buildModel() {
            const mat = (color, emissive=0x000000) => new THREE.MeshStandardMaterial({ 
                color: color, emissive: emissive, roughness: 0.9, flatShading: true 
            });

            if (this.type === 'cow' || this.type === 'sheep') {
                const isSheep = this.type === 'sheep';
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.3), mat(isSheep ? 0xffffff : 0x5c3a21));
                body.position.y = 0.15;
                const head = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), mat(isSheep ? 0xdddddd : 0x3d2616));
                head.position.set(0, 0.25, 0.15);
                this.group.add(body, head);
                this.parts.push({mesh: body, type: 'body'});
            } 
            else if (this.type === 'chicken') {
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.16), mat(0xffffff));
                body.position.y = 0.1;
                const beak = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.04), mat(0xffaa00));
                beak.position.set(0, 0.02, 0.08);
                body.add(beak);
                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            else if (this.type === 'villager') {
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 0.1), mat(0x8b5a2b));
                body.position.y = 0.2;
                const head = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), mat(0xffccaa));
                head.position.set(0, 0.22, 0);
                body.add(head);
                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            else if (this.type === 'player') {
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.1), mat(0x00a8ff)); 
                body.position.y = 0.25;
                const head = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), mat(0xffccaa)); 
                head.position.set(0, 0.2, 0);
                
                const hair = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.04, 0.16), mat(0x3d2616));
                hair.position.set(0, 0.06, 0);
                head.add(hair);

                const armL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.25, 0.06), mat(0xffccaa));
                armL.position.set(-0.11, 0, 0);
                const armR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.25, 0.06), mat(0xffccaa));
                armR.position.set(0.11, 0, 0);
                
                // Add sleeves
                const sleeveL = new THREE.Mesh(new THREE.BoxGeometry(0.061, 0.12, 0.061), mat(0x00a8ff));
                sleeveL.position.set(0, 0.06, 0);
                armL.add(sleeveL);
                const sleeveR = new THREE.Mesh(new THREE.BoxGeometry(0.061, 0.12, 0.061), mat(0x00a8ff));
                sleeveR.position.set(0, 0.06, 0);
                armR.add(sleeveR);

                body.add(armL, armR);

                const legL = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.25, 0.07), mat(0x3a2c82)); 
                legL.position.set(-0.04, -0.25, 0);
                const legR = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.25, 0.07), mat(0x3a2c82));
                legR.position.set(0.04, -0.25, 0);
                body.add(legL, legR);
                
                body.add(head);
                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
                this.parts.push({mesh: armL, type: 'armL'});
                this.parts.push({mesh: armR, type: 'armR'});
                this.parts.push({mesh: legL, type: 'legL'});
                this.parts.push({mesh: legR, type: 'legR'});
                
                // Player stands out
                this.speed = 0.005;
                this.group.scale.set(1.5, 1.5, 1.5);
            }
            else if (this.type === 'zombie' || this.type === 'creeper') {
                const isCreeper = this.type === 'creeper';
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 0.1), mat(isCreeper ? 0x3a6b1f : 0x2a5298));
                body.position.y = 0.2;
                const head = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), mat(isCreeper ? 0x58813c : 0x3a6b1f));
                head.position.set(0, 0.22, 0);
                
                const eyes = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.04, 0.16), mat(0x000000, isCreeper ? 0x000000 : 0x880000));
                head.add(eyes);
                body.add(head);

                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            else if (this.type === 'enderman') {
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), mat(0x111111));
                body.position.y = 0.25;
                const head = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), mat(0x111111));
                head.position.set(0, 0.26, 0);
                const eyes = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.02, 0.13), mat(0xaa00aa, 0xff55ff));
                head.add(eyes);
                body.add(head);
                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            else if (this.type === 'spider') {
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.2), mat(0x222222));
                body.position.y = 0.05;
                const eyes = new THREE.Mesh(new THREE.BoxGeometry(0.31, 0.02, 0.21), mat(0x000000, 0xff0000));
                body.add(eyes);
                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            else if (this.type === 'ghast') {
                const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), mat(0xeeeeee));
                body.position.y = 0.75;
                
                const eyeMat = mat(0x000000, 0x111111);
                const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.1), eyeMat);
                eyeL.position.set(-0.3, 0.2, 0.75);
                const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.1), eyeMat);
                eyeR.position.set(0.3, 0.2, 0.75);
                body.add(eyeL, eyeR);
                
                const tearMat = mat(0x777777);
                const tearL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.1), tearMat);
                tearL.position.set(-0.3, -0.05, 0.75);
                const tearR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.1), tearMat);
                tearR.position.set(0.3, -0.05, 0.75);
                body.add(tearL, tearR);
                
                const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.1), eyeMat);
                mouth.position.set(0, -0.2, 0.75);
                body.add(mouth);

                for(let i=0; i<9; i++) {
                    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.15), mat(0xeeeeee));
                    const lx = -0.5 + (i%3)*0.5;
                    const lz = -0.5 + Math.floor(i/3)*0.5;
                    leg.position.set(lx, -0.7, lz);
                    body.add(leg);
                    this.parts.push({mesh: leg, type: 'leg'});
                }

                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            else {
                let s = 0.2;
                if(this.type === 'bee' || this.type === 'bird') s = 0.08;
                if(this.type === 'horse') s = 0.3;
                let c = 0xaaaaaa;
                if(this.type === 'bee') c = 0xffcc00;
                if(this.type === 'bird') c = 0x4488ff;
                if(this.type === 'horse') c = 0x8B4513;
                if(this.type === 'fox') c = 0xff7700;
                const body = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), mat(c));
                body.position.y = s/2;
                this.group.add(body);
                this.parts.push({mesh: body, type: 'body'});
            }
            
            if(this.type !== 'player') {
                this.group.scale.set(0, 0, 0);
            }
        }

        updatePosition() {
            let radius = 6;
            if (this.planet === 'nether' || this.planet === 'end') radius = 4;
            const r = radius + this.hoverDist + this.jumpOffset; 
            const px = Math.cos(this.latitude) * Math.cos(this.angle) * r;
            const py = Math.sin(this.latitude) * r;
            const pz = Math.cos(this.latitude) * Math.sin(this.angle) * r;
            this.group.position.set(px, py, pz);
            
            const normal = new THREE.Vector3(
                Math.cos(this.latitude) * Math.cos(this.angle),
                Math.sin(this.latitude),
                Math.cos(this.latitude) * Math.sin(this.angle)
            ).normalize();
            
            const dAngle = this.targetAngle - this.angle;
            const dLat = this.targetLatitude - this.latitude;
            
            const lookAngle = this.angle + (Math.abs(dAngle) > 0.01 ? Math.sign(dAngle) * 0.1 : 0.1);
            const lookLat = this.latitude + (Math.abs(dLat) > 0.01 ? Math.sign(dLat) * 0.1 : 0);
            
            let radiusLook = 6;
            if (this.planet === 'nether' || this.planet === 'end') radiusLook = 4;
            const rLook = radiusLook + this.hoverDist;
            const lookX = Math.cos(lookLat) * Math.cos(lookAngle) * rLook;
            const lookY = Math.sin(lookLat) * rLook;
            const lookZ = Math.cos(lookLat) * Math.sin(lookAngle) * rLook;
            
            this.group.up.copy(normal);
            this.group.lookAt(lookX, lookY, lookZ);
        }

        update(delta, isDay) {
            if (this.planet !== 'overworld') {
                this.group.visible = true;
            } else {
                if (this.isHostile && isDay) { 
                    this.group.visible = false; 
                    return; 
                } else if (!this.isHostile && !isDay && this.type !== 'player') { 
                    this.group.visible = false; 
                    return; 
                } else { 
                    this.group.visible = true; 
                }
            }

            this.timer -= delta;
            
            // Jumping Physics
            if (this.isJumping) {
                this.jumpOffset += this.velocityY * delta;
                this.velocityY -= 10.0 * delta; 
                if (this.jumpOffset <= 0) {
                    this.jumpOffset = 0;
                    this.isJumping = false;
                    this.velocityY = 0;
                }
            }

            if(this.type === 'enderman' && this.timer < 0) {
                this.timer = 5 + Math.random() * 5;
                this.angle = Math.random() * Math.PI * 2;
                this.latitude = (Math.random() - 0.5) * 1.5;
                this.targetAngle = this.angle;
                this.targetLatitude = this.latitude;
            }

            if (this.state === 'idle') {
                if (this.timer <= 0) {
                    this.state = 'walk';
                    this.timer = 1 + Math.random() * 3;
                    this.targetAngle = this.angle + (Math.random() - 0.5) * 0.8;
                    this.targetLatitude = this.latitude + (Math.random() - 0.5) * 0.4;
                }
            } else if (this.state === 'walk') {
                const dAngle = this.targetAngle - this.angle;
                const dLat = this.targetLatitude - this.latitude;
                
                if (Math.abs(dAngle) < 0.01 && Math.abs(dLat) < 0.01) {
                    this.state = 'idle';
                    this.timer = 1 + Math.random() * 4;
                    this.parts.forEach(p => { if(p.type === 'body') p.mesh.rotation.z = 0; });
                } else {
                    this.angle += Math.sign(dAngle) * Math.min(Math.abs(dAngle), this.speed);
                    this.latitude += Math.sign(dLat) * Math.min(Math.abs(dLat), this.speed);
                    
                    this.parts.forEach(p => {
                        if(p.type === 'body') p.mesh.rotation.z = Math.sin(Date.now() * 0.01) * 0.1;
                        if(p.type === 'leg') p.mesh.rotation.x = Math.sin(Date.now() * 0.01) * 0.2;
                    });
                }
            }

            // Wave Animation for Player
            if (this.isWaving) {
                this.waveTimer -= delta;
                this.parts.forEach(p => {
                    if (p.type === 'armR') {
                        p.mesh.rotation.z = Math.sin(this.waveTimer * 15) * 0.5 - 1.0;
                        p.mesh.rotation.x = Math.PI; // arm up
                    }
                });
                if (this.waveTimer <= 0) {
                    this.isWaving = false;
                    this.parts.forEach(p => { if(p.type === 'armR') { p.mesh.rotation.z = 0; p.mesh.rotation.x = 0; } });
                }
            } else if (this.state === 'walk' && this.type === 'player') {
                this.parts.forEach(p => {
                    if (p.type === 'armL') p.mesh.rotation.x = Math.sin(Date.now() * 0.01) * 0.5;
                    if (p.type === 'armR') p.mesh.rotation.x = -Math.sin(Date.now() * 0.01) * 0.5;
                    if (p.type === 'legL') p.mesh.rotation.x = -Math.sin(Date.now() * 0.01) * 0.5;
                    if (p.type === 'legR') p.mesh.rotation.x = Math.sin(Date.now() * 0.01) * 0.5;
                });
            } else if (this.state === 'idle' && this.type === 'player') {
                this.parts.forEach(p => {
                    if (['armL','armR','legL','legR'].includes(p.type)) {
                        p.mesh.rotation.x = 0;
                    }
                });
            }

            this.updatePosition();
            
            if (this.group.scale.x < 1.0 && this.type !== 'player') {
                this.group.scale.x += (1.0 - this.group.scale.x) * 0.05;
                this.group.scale.y = this.group.scale.x;
                this.group.scale.z = this.group.scale.x;
            }
        }
    }
    const allMobs = [];
    function spawnVoxelMob(type, planet='overworld') {
        const mob = new VoxelMob(type, planet);
        if (planet === 'nether') {
            netherGroup.add(mob.group);
        } else if (planet === 'end') {
            endGroup.add(mob.group);
        } else {
            overworldGroup.add(mob.group);
        }
        allMobs.push(mob);
    }
    
    // Day Mobs
    for(let i=0; i<3; i++) spawnVoxelMob('villager');

    // --- PLAYER & INTERACTIONS ---
    spawnVoxelMob('player');

    const raycaster = new THREE.Raycaster();
    const mouseClick = new THREE.Vector2();

    window.addEventListener('click', (e) => {
        mouseClick.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseClick.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouseClick, camera);
        
        const intersects = raycaster.intersectObjects(allMobs.map(m => m.group), true);
        if (intersects.length > 0) {
            const obj = intersects[0].object;
            let parent = obj;
            while(parent && parent.parent !== overworldGroup && parent.parent !== netherGroup && parent.parent !== endGroup) {
                if (parent.type === 'Group') {
                    const clickedMob = allMobs.find(m => m.group === parent);
                    if (clickedMob) {
                        clickedMob.jump();
                        break;
                    }
                }
                parent = parent.parent;
            }
        }
    });

    for(let i=0; i<4; i++) spawnVoxelMob('cow');
    for(let i=0; i<4; i++) spawnVoxelMob('sheep');
    for(let i=0; i<3; i++) spawnVoxelMob('chicken');
    for(let i=0; i<2; i++) spawnVoxelMob('horse');
    for(let i=0; i<2; i++) spawnVoxelMob('wolf');
    for(let i=0; i<2; i++) spawnVoxelMob('fox');
    for(let i=0; i<5; i++) spawnVoxelMob('bee');
    for(let i=0; i<3; i++) spawnVoxelMob('bird');
    
    // Night Mobs
    for(let i=0; i<4; i++) spawnVoxelMob('zombie');
    for(let i=0; i<2; i++) spawnVoxelMob('skeleton');
    for(let i=0; i<3; i++) spawnVoxelMob('spider');
    for(let i=0; i<2; i++) spawnVoxelMob('creeper');
    for(let i=0; i<4; i++) spawnVoxelMob('enderman', 'end');
    for(let i=0; i<3; i++) spawnVoxelMob('ghast', 'nether');


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
            mob.update(delta, isDay);
        });

        renderer.render(scene, camera);

    }
    animate();
});
