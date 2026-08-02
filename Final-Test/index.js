const X_IMG = "x.png";
const O_IMG = "o.png";

const boardEl = document.getElementById('board');
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const turnDisplayEl = document.getElementById('turnDisplay');
const startBtn = document.getElementById('startBtn');
const replayBtn = document.getElementById('replayBtn');

const WIN_COMBOS = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];

let board = Array(9).fill('');
let cells = [];
let currentPlayer = 'X';
let starterQueue = 'X';   // who starts the NEXT game
let startingPlayerThisGame = 'X';
let gameStarted = false;  // a game is currently in progress
let gameOver = false;     // current game has concluded (win/draw)

function buildBoard() {
boardEl.innerHTML = '';
cells = [];
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.addEventListener('click', () => handleCellClick(i));
    boardEl.appendChild(cell);
    cells.push(cell);
}
}
buildBoard();

function updateTurnDisplay() {
turnDisplayEl.textContent = currentPlayer.toLowerCase();
}

function setTitle(text, cls, subtitle) {
titleEl.textContent = text;
titleEl.className = cls;
subtitleEl.textContent = subtitle || '';
}

function refreshButtons() {
startBtn.disabled = !(!gameStarted || gameOver);
replayBtn.disabled = !gameOver;
}

startBtn.addEventListener('click', () => {
if (!(!gameStarted || gameOver)) return;

board = Array(9).fill('');
cells.forEach(c => {
    c.innerHTML = '';
    c.classList.remove('filled', 'win-cell', 'disabled');
});

currentPlayer = starterQueue;
startingPlayerThisGame = starterQueue;

gameStarted = true;
gameOver = false;

setTitle('Hãy chiến đấu hết mình!', 'playing');
updateTurnDisplay();
refreshButtons();
});

replayBtn.addEventListener('click', () => {
if (!gameOver) return;

board = Array(9).fill('');
cells.forEach(c => {
    c.innerHTML = '';
    c.classList.remove('filled', 'win-cell', 'disabled');
});

gameStarted = false;
gameOver = false;

currentPlayer = starterQueue;
setTitle('Bấm bắt đầu để chơi', 'playing');
updateTurnDisplay();
refreshButtons();
});
// (Chơi lại reset xong, dòng phụ để trống cho tới ván tiếp theo)

function handleCellClick(index) {
if (!gameStarted || gameOver) return;
if (board[index] !== '') return;

board[index] = currentPlayer;
const cell = cells[index];
const img = document.createElement('img');
img.src = currentPlayer === 'X' ? X_IMG : O_IMG;
img.alt = currentPlayer;
cell.appendChild(img);
cell.classList.add('filled');

const winCombo = checkWin(currentPlayer);
if (winCombo) {
    gameOver = true;
    winCombo.forEach(i => cells[i].classList.add('win-cell'));
    cells.forEach(c => c.classList.add('disabled'));
    setTitle(`Người chơi ${currentPlayer} đã chiến thắng! 🎉`, 'win', 'Bấm "Chơi lại" để bắt đầu ván mới!');
    starterQueue = startingPlayerThisGame === 'X' ? 'O' : 'X';
    refreshButtons();
    return;
}

if (board.every(v => v !== '')) {
    gameOver = true;
    cells.forEach(c => c.classList.add('disabled'));
    setTitle('Ván đấu hòa!', 'draw', 'Bấm "Chơi lại" để bắt đầu ván mới!');
    starterQueue = startingPlayerThisGame === 'X' ? 'O' : 'X';
    refreshButtons();
    return;
}

currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
updateTurnDisplay();
}

function checkWin(player) {
for (const combo of WIN_COMBOS) {
    if (combo.every(i => board[i] === player)) return combo;
}
return null;
}

refreshButtons();
updateTurnDisplay();