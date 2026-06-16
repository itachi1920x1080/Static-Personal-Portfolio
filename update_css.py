import sys
import re

file_path = 'static/style.css'

with open(file_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Add theme variables
theme_vars = """
:root[data-theme="dark"] {
    --bg-main: var(--mc-dark);
    --text-main: #fff;
    --bg-nav: rgba(0, 0, 0, 0.85);
    --text-nav: #fff;
    --nav-hover: var(--mc-green-light);
    --bg-profile: #111;
    --bg-skills: #2f2f2f;
    --bg-experience: #451919;
    --bg-connect: #12081c;
    --text-shadow-nav: 2px 2px 0 #000;
    
    /* Projects Starry Night Default */
    --projects-bg: #090a0f;
    --projects-border: #1a1b26;
    --projects-stars: radial-gradient(1.5px 1.5px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #dddddd, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 160px 120px, #dddddd, rgba(0,0,0,0));
    --projects-stars-animation: twinkle 5s infinite ease-in-out;
}

:root[data-theme="light"] {
    --bg-main: #f4f4f5;
    --text-main: #1d1d1d;
    --bg-nav: rgba(255, 255, 255, 0.95);
    --text-nav: #333;
    --nav-hover: var(--mc-green);
    --bg-profile: #e2e8f0;
    --bg-skills: #cbd5e1;
    --bg-experience: #fef08a;
    --bg-connect: #e0e7ff;
    --text-shadow-nav: none;

    /* Projects Daytime Sky */
    --projects-bg: #87CEEB;
    --projects-border: #4682B4;
    --projects-stars: radial-gradient(40px 40px at 20% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0)), radial-gradient(50px 50px at 70% 60%, rgba(255,255,255,0.6), rgba(255,255,255,0));
    --projects-stars-animation: none;
}
"""

css = theme_vars + '\n' + css

# 2. Update Body & Nav
css = css.replace('background-color: var(--mc-dark);\n    color: #fff;', 'background-color: var(--bg-main);\n    color: var(--text-main);\n    transition: background-color 0.5s ease, color 0.5s ease;')
css = css.replace('background: rgba(0, 0, 0, 0.85);', 'background: var(--bg-nav);\n    transition: background-color 0.5s ease;')
css = css.replace('color: #fff;\n    text-decoration: none;', 'color: var(--text-nav);\n    text-decoration: none;')
css = css.replace('text-shadow: 2px 2px 0 #000;', 'text-shadow: var(--text-shadow-nav);')
css = css.replace('color: var(--mc-green-light);\n    text-shadow: 0 0 10px var(--mc-green-light);', 'color: var(--nav-hover);\n    text-shadow: none;')

# 3. Update Sections
css = css.replace('background-color: #111;', 'background-color: var(--bg-profile);\n    transition: background-color 0.5s ease;')
css = css.replace('background-color: #2f2f2f;', 'background-color: var(--bg-skills);\n    transition: background-color 0.5s ease;')
css = css.replace('background-color: #451919;', 'background-color: var(--bg-experience);\n    transition: background-color 0.5s ease;')
css = css.replace('background-color: #12081c;', 'background-color: var(--bg-connect);\n    transition: background-color 0.5s ease;')

# 4. Update Projects Background
css = css.replace('background-color: #090a0f;\n    padding: 100px 0;\n    border-top: 10px solid #1a1b26;', 'background-color: var(--projects-bg);\n    padding: 100px 0;\n    border-top: 10px solid var(--projects-border);\n    transition: background-color 0.5s ease, border-top-color 0.5s ease;')
css = css.replace('background-image: \n        radial-gradient(1.5px 1.5px at 20px 30px, #ffffff, rgba(0,0,0,0)),\n        radial-gradient(1.5px 1.5px at 40px 70px, #ffffff, rgba(0,0,0,0)),\n        radial-gradient(2px 2px at 50px 160px, #dddddd, rgba(0,0,0,0)),\n        radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0)),\n        radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),\n        radial-gradient(1.5px 1.5px at 160px 120px, #dddddd, rgba(0,0,0,0));', 'background-image: var(--projects-stars);')
css = css.replace('animation: twinkle 5s infinite ease-in-out;', 'animation: var(--projects-stars-animation);')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(css)

print('CSS Updated successfully!')
