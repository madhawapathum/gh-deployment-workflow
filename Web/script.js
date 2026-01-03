/* 
  Terminal Interactivity Scale
*/

document.addEventListener('DOMContentLoaded', () => {

    const inputField = document.getElementById('terminal-input');
    const inputLine = document.querySelector('.input-line');
    const displayArea = document.querySelector('.output-area');
    const allSections = document.querySelectorAll('section');

    // Focus input on click anywhere
    document.addEventListener('click', () => {
        inputField.focus();
    });

    // Command Parser
    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = inputField.value.trim().toLowerCase();
            processCommand(command);
            inputField.value = '';
        }
    });

    function processCommand(cmd) {
        if (!cmd) return;

        // Create a history line
        const historyLine = document.createElement('div');
        historyLine.classList.add('prompt-line');
        historyLine.innerHTML = `<span class="user">user@devops:~$</span> <span class="command">${cmd}</span>`;
        // Insert before the input line
        inputLine.before(historyLine);

        let outputHtml = '';
        let targetSectionId = '';

        // Simple Router
        switch (cmd) {
            case 'help':
                outputHtml = `
                    <p>Available commands:</p>
                    <ul style="list-style: none; padding-left: 1rem; color: #d3d7cf;">
                        <li><span style="color: #fce94f">./home.sh</span> - Go to home</li>
                        <li><span style="color: #fce94f">cat about.txt</span> - View profile</li>
                        <li><span style="color: #fce94f">ls -la skills/</span> - List skills</li>
                        <li><span style="color: #fce94f">./show_projects.py</span> - View projects</li>
                        <li><span style="color: #fce94f">ssh contact</span> - Contact me</li>
                        <li><span style="color: #fce94f">clear</span> - Clear terminal</li>
                    </ul>
                `;
                break;
            case './home.sh':
            case 'home':
                targetSectionId = 'home';
                break;
            case 'cat about.txt':
            case 'about':
                targetSectionId = 'about';
                break;
            case 'ls -la skills/':
            case 'skills':
            case 'ls':
                targetSectionId = 'skills';
                break;
            case './show_projects.py':
            case 'projects':
                targetSectionId = 'projects';
                break;
            case 'ssh contact@me':
            case 'ssh contact':
            case 'contact':
                targetSectionId = 'contact';
                break;
            case 'clear':
                // Clear everything except the input line
                // We actually want to hide all sections and remove history
                document.querySelectorAll('.prompt-line').forEach(el => el.remove());
                document.querySelectorAll('.command-output').forEach(el => el.remove());
                allSections.forEach(sec => sec.classList.remove('active-section'));
                // Just return, no output processing needed
                return;
            default:
                outputHtml = `<p style="color: #ff5f56">bash: ${cmd}: command not found</p>`;
        }

        if (targetSectionId) {
            // Hide all sections
            allSections.forEach(sec => {
                sec.classList.remove('active-section');
                sec.classList.add('hidden-section');
            });

            // Show target section logic
            // In a real terminal, we wouldn't jump to sections like this, 
            // but for a portfolio it makes sense to show rich content.
            // We clone the inner content of the target section to display it as "fresh output"
            // or we simply toggle visibility if we want to keep it simple.

            const target = document.getElementById(targetSectionId);
            if (target) {
                target.classList.remove('hidden-section');
                target.classList.add('active-section');
                // Scroll to bottom
                setTimeout(() => {
                    displayArea.scrollTop = displayArea.scrollHeight;
                }, 10);
            }
        } else if (outputHtml) {
            const outputDiv = document.createElement('div');
            outputDiv.classList.add('command-output');
            outputDiv.innerHTML = outputHtml;
            inputLine.before(outputDiv);
        }

        // Auto scroll
        setTimeout(() => {
            displayArea.scrollTop = displayArea.scrollHeight;
        }, 10);
    }

    // Handle Navbar Clicks (simulate typing)
    document.querySelectorAll('.cmd-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cmd = link.getAttribute('data-cmd');

            // Typing effect
            inputField.focus();
            let i = 0;
            inputField.value = '';

            const typeInterval = setInterval(() => {
                inputField.value += cmd.charAt(i);
                i++;
                if (i >= cmd.length) {
                    clearInterval(typeInterval);
                    // Slight delay before execute
                    setTimeout(() => processCommand(cmd), 300);
                    inputField.value = '';
                }
            }, 50); // Typing speed
        });
    });

});
