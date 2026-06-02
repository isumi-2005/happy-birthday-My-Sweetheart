// ⚡ WRITE YOUR PERSONAL LOVE LETTER CONTENT HERE:
const loveLetterText = `My dearest,

Happy Birthday to my favorite software engineer! 💻🚀

You think you're the only one who can write scalable, production-ready systems? Look at this tab switching architecture. Absolute optimization. No memory leaks. Linear runtime performance!

Jokes aside, you mean the entire world to me. Seeing how passionate you are about building code inspires me every single day. Thank you for debugging my bad days and always maintaining an infinite loop of love for me.

Forever and always running on your core server,
Your Favorite Dev 💚`;


// 🕵️‍♂️ 1. DEVELOPER CONSOLE EASTER EGG
console.log(
    "%c🕵️‍♂️ ALERT FOR THE ENGINEER BOYFRIEND: %cI see you checking my source code! Don't try to bypass the logic variables. I coded this completely with love, zero bugs allowed! Happy Birthday! ❤️", 
    "color: #39ff14; font-size: 16px; font-weight: bold; background: #11141a; padding: 5px;",
    "color: #00d2ff; font-size: 14px;"
);


// 🔒 2. CODE CHECK UNLOCK SYSTEM
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    
    // Set your 4-digit code here (Anniversary)
    if (input === "0624") { 
        document.getElementById('lock-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('lock-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block'; 
            
            startMusic();
            setInterval(createHeart, 350);
            initCanvasSparkles(); 
        }, 500);
    } else {
        errorMessage.innerText = "Error: Unauthorized Dragon Rider. Retrying... 😘";
    }
}


// 🎵 3. MUSIC SYSTEM
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

function startMusic() {
    music.play().then(() => {
        musicBtn.innerText = "⚙️ pause_audio()";
    }).catch(() => {
        musicBtn.innerText = "⚙️ play_audio()";
    });
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "⚙️ pause_audio()";
    } else {
        music.pause();
        musicBtn.innerText = "⚙️ play_audio()";
    }
}


// 💖 4. FLOATING HEARTS & DRAGONS
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    // Included cute Toothless emojis & matching hearts
    const heartIcons = ['❤️', '🐉', '✨', '⚡', '💚', '💙', '🖤'];
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--random-x', (Math.random() * 200 - 100) + 'px');
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; 
    
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 4500);
}


// 🗂️ 5. NAVIGATION STATE ENGINE
let typewriterStarted = false;

function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active-content');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add('active-content');
    }

    buttons.forEach(btn => {
        if(btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });

    if (tabId === 'letter' && !typewriterStarted) {
        typewriterStarted = true;
        document.getElementById('typewriter-text').innerHTML = '';
        typeWriter(loveLetterText, 0, 'typewriter-text');
    }
}

function typeWriter(text, i, elementId) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        setTimeout(() => { typeWriter(text, i + 1, elementId); }, 40); 
    }
}


// 🧁 6. REASONS ACCORDION LOGIC
function toggleAccordion(element) {
    const isOpen = element.classList.contains('open');
    
    // Close all open sections first
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('open');
    });
    
    // Toggle clicked section
    if (!isOpen) {
        element.classList.add('open');
    }
}


// 🎟️ 7. LOVE VOUCHER COUPONS REDEEM LOGIC
function redeemCoupon(button) {
    button.classList.add('redeemed');
    button.innerText = "Redeemed Successfully! ✔️";
    button.disabled = true;
    
    // Fire off a quick cute mini blast of hearts
    for(let i=0; i<6; i++) {
        setTimeout(createHeart, i * 100);
    }
}


// 🧩 8. RELATIONSHIP TRIVIA QUIZ STATE MACHINE
function solvePuzzle() {
    const userAnswer = document.getElementById('puzzle-answer').value.trim().toLowerCase();
    const puzzleError = document.getElementById('puzzle-error');
    
    // 💡 CHANGE THIS VALUE: Set your secret quiz answer keyword here (all lowercase!)
    const secretAnswer = "pizza"; 

    if (userAnswer === secretAnswer) {
        // 1. Hide the puzzle box completely
        document.getElementById('puzzle-container').classList.add('display-none');
        puzzleError.innerText = ""; // Clear any errors
        
        // 2. Make the matrix terminal console block appear
        const terminalBox = document.getElementById('terminal-box');
        terminalBox.classList.remove('display-none');
        document.getElementById('terminal-text').innerHTML = ""; // Clear old text
        
        const terminalLines = [
            "> Initializing verification_sequence.sh...",
            "> Decrypting core_relationship_parameters...",
            "> Connection secured. Alpha Night Fury Match: Status 200 OK",
            "> [SUCCESS] Loading birthday celebration asset module..."
        ];
        
        // 3. Simulate the hacker console log text typing out
        runTerminalLogs(terminalLines, 0, () => {
            setTimeout(() => {
                // 4. Hide terminal window and reveal the grand gift screen!
                terminalBox.classList.add('display-none');
                
                const revealBox = document.getElementById('gift-reveal');
                revealBox.classList.remove('display-none');
                
                // Blast an explosion of decorative floating hearts
                for(let i = 0; i < 25; i++) { 
                    setTimeout(createHeart, i * 50); 
                }
            }, 1000);
        });
        
    } else {
        // If he types the wrong thing:
        puzzleError.innerText = "System Exception: String match mismatch. Try again! Hint: Think about food or our first dates... 👀";
    }
}

function runTerminalLogs(lines, index, callback) {
    if (index < lines.length) {
        const textContainer = document.getElementById('terminal-text');
        textContainer.innerHTML += lines[index] + "<br>";
        setTimeout(() => { runTerminalLogs(lines, index + 1, callback); }, 650);
    } else {
        callback();
    }
}


// ✨ 9. MOUSE TRAIL POINTER SPARKLES LOOP (Updated to Glowing Neon Blues/Greens)
function initCanvasSparkles() {
    const canvas = document.getElementById('sparkle-canvas');
    const ctx = canvas.getContext('2d');
    let sparkArray = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
        for(let i=0; i<2; i++) {
            const colors = ['rgba(57, 255, 20, ', 'rgba(0, 210, 255, '];
            const selectedColor = colors[Math.floor(Math.random() * colors.length)];
            sparkArray.push({
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 4 + 1.5,
                vx: (Math.random() - 0.5) * 2.5,
                vy: (Math.random() - 0.5) * 2.5,
                hue: `${selectedColor}${Math.random() * 0.5 + 0.5})`
            });
        }
    });

    function drawLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < sparkArray.length; i++) {
            let s = sparkArray[i];
            s.x += s.vx; s.y += s.vy; s.size -= 0.05;
            if(s.size <= 0) {
                sparkArray.splice(i, 1); i--;
            } else {
                ctx.fillStyle = s.hue;
                ctx.shadowBlur = 10;
                ctx.shadowColor = s.hue.includes('255, 20') ? '#39ff14' : '#00d2ff';
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.shadowBlur = 0; // Reset canvas glow properties
        requestAnimationFrame(drawLoop);
    }
    drawLoop();
}