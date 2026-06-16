import sys

file_path = 'c:\\Users\\itachi uchiha\\Desktop\\Web Dev Rupp M5\\Static Personal Portfolio\\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace modal content styles
content = content.replace(
    'class="modal-content text-dark" style="background-color: var(--mc-gui); border: 4px solid var(--mc-dark); border-radius: 0;"',
    'class="modal-content text-light" style="background-color: #111424; border: 4px solid #5dade2; border-radius: 0; box-shadow: 0 0 20px rgba(93, 173, 226, 0.4);"'
)

# Replace modal header styles
content = content.replace(
    'class="modal-header border-dark" style="border-bottom: 2px solid var(--mc-dark);"',
    'class="modal-header" style="border-bottom: 2px solid #5dade2;"'
)

# Replace modal title color
content = content.replace(
    'color: var(--mc-dark);',
    'color: #fff;'
)

# Replace modal footer styles
content = content.replace(
    'class="modal-footer border-dark',
    'class="modal-footer'
)
content = content.replace(
    'style="border-top: 2px solid var(--mc-dark);"',
    'style="border-top: 2px solid #5dade2;"'
)

# Replace close button
content = content.replace(
    'class="btn-close"',
    'class="btn-close btn-close-white"'
)

# Fix image borders
content = content.replace(
    'border border-dark',
    'border border-info'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Modals updated successfully in index.html')
