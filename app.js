document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const startBtn = document.getElementById('start-simulation');
    const terminalOutput = document.getElementById('terminal-output');
    const tokenCount = document.getElementById('token-count');
    const latencyVal = document.getElementById('latency-val');
    
    const nodes = {
        planner: { el: document.querySelector('.node-master'), status: document.getElementById('status-planner') },
        coder: { el: document.querySelectorAll('.node-worker')[0], status: document.getElementById('status-coder') },
        reviewer: { el: document.querySelectorAll('.node-worker')[1], status: document.getElementById('status-reviewer') },
        executor: { el: document.querySelector('.node-executor'), status: document.getElementById('status-executor') }
    };

    const flowLines = document.querySelectorAll('.flow-line');

    let isRunning = false;
    let tokens = 2450000;
    
    // --- Utils ---
    function getTimestamp() {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;
    }

    function addLog(message, type = 'system') {
        const line = document.createElement('div');
        line.className = `log-line ${type}`;
        line.innerHTML = `<span class="timestamp">[${getTimestamp()}]</span> ${message}`;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function updateStats() {
        if (!isRunning) return;
        tokens += Math.floor(Math.random() * 500) + 100;
        tokenCount.textContent = (tokens / 1000000).toFixed(2) + 'M';
        latencyVal.textContent = (Math.floor(Math.random() * 80) + 80) + ' ms';
        setTimeout(updateStats, 1500);
    }

    // --- Simulation Steps ---
    const workflowSteps = [
        {
            time: 500,
            action: () => {
                addLog('User requested new feature: "Implement MiMo Gateway Authentication"', 'agent');
                nodes.planner.el.classList.add('active');
                nodes.planner.status.textContent = 'Analyzing...';
                flowLines[0].classList.add('active');
            }
        },
        {
            time: 2000,
            action: () => {
                addLog('Planner: Task decomposed into 3 sub-tasks.', 'success');
                addLog('Assigning Sub-task 1 to Coder (MiMo-Coder)...', 'system');
                nodes.planner.status.textContent = 'Delegating';
                nodes.coder.el.classList.add('active');
                nodes.coder.status.textContent = 'Writing Code...';
                flowLines[0].classList.remove('active');
                flowLines[1].classList.add('active');
            }
        },
        {
            time: 4000,
            action: () => {
                addLog('Coder: Generated 145 lines of auth.ts', 'success');
                addLog('Sending to Reviewer (MiMo-Vision) for security check...', 'system');
                nodes.coder.status.textContent = 'Waiting';
                nodes.reviewer.el.classList.add('active');
                nodes.reviewer.status.textContent = 'Reviewing...';
                flowLines[1].classList.remove('active');
                flowLines[2].classList.add('active');
            }
        },
        {
            time: 6500,
            action: () => {
                addLog('Reviewer: Found 1 potential timing attack vulnerability.', 'warning');
                addLog('Reviewer: Requesting Coder to fix constant-time comparison.', 'warning');
                nodes.reviewer.status.textContent = 'Feedback Sent';
                flowLines[2].classList.remove('active');
                flowLines[1].classList.add('active');
            }
        },
        {
            time: 8500,
            action: () => {
                addLog('Coder: Fixed vulnerability. Committing changes.', 'success');
                nodes.coder.status.textContent = 'Idle';
                nodes.coder.el.classList.remove('active');
                flowLines[1].classList.remove('active');
                flowLines[3].classList.add('active');
            }
        },
        {
            time: 10000,
            action: () => {
                addLog('Reviewer: Code approved.', 'success');
                nodes.reviewer.status.textContent = 'Idle';
                nodes.reviewer.el.classList.remove('active');
                addLog('Deploying via OpenClaw Gateway...', 'system');
                nodes.executor.el.classList.add('active');
                nodes.executor.status.textContent = 'Deploying...';
            }
        },
        {
            time: 12500,
            action: () => {
                addLog('Executor: Deployment successful! Available at /api/v1/mimo/auth', 'success');
                nodes.executor.status.textContent = 'Idle';
                nodes.executor.el.classList.remove('active');
                nodes.planner.status.textContent = 'Idle';
                nodes.planner.el.classList.remove('active');
                flowLines[3].classList.remove('active');
                
                isRunning = false;
                startBtn.innerHTML = '<i class="fa-solid fa-play"></i> 重新运行';
                startBtn.disabled = false;
            }
        }
    ];

    // --- Event Listeners ---
    startBtn.addEventListener('click', () => {
        if (isRunning) return;
        isRunning = true;
        startBtn.disabled = true;
        startBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 运行中...';
        
        terminalOutput.innerHTML = '';
        addLog('NebulaBot Orchestrator Engine v2.0 initialized.', 'system');
        
        // Reset states
        Object.values(nodes).forEach(n => {
            n.el.classList.remove('active');
            n.status.textContent = 'Idle';
        });
        flowLines.forEach(l => l.classList.remove('active'));
        
        updateStats();

        // Run workflow sequence
        workflowSteps.forEach(step => {
            setTimeout(step.action, step.time);
        });
    });

    // Sidebar Tabs Interaction
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
