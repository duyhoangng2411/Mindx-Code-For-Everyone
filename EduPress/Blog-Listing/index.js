// Page - Drop Down
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.mid-nav .Page-dropdown');

    dropdowns.forEach(function (item) {
        const link = item.querySelector('a');

        link.addEventListener('click', function (e) {
            e.preventDefault();

            dropdowns.forEach(function (other) {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.mid-nav .Page-dropdown')) {
            dropdowns.forEach(function (item) {
                item.classList.remove('active');
            });
        }
    });
});
// Đăng nhập + Đăng ký
function openModal(tab) {
document.getElementById('overlay').classList.add('open');
switchTab(tab || 'login');
}
function closeModal() {
document.getElementById('overlay').classList.remove('open');
}
document.getElementById('overlay').addEventListener('click', function(e) {
if (e.target === this) closeModal();
});
function switchTab(name) {
document.getElementById('tab-login').classList.toggle('active', name === 'login');
document.getElementById('tab-register').classList.toggle('active', name === 'register');
document.getElementById('panel-login').classList.toggle('active', name === 'login');
document.getElementById('panel-register').classList.toggle('active', name === 'register');
}
function togglePw(id, btn) {
const input = document.getElementById(id);
input.type = input.type === 'password' ? 'text' : 'password';
}
function fakeSubmit(type) {
if (type === 'register') {
    const pass = document.getElementById('reg-pass').value;
    const confirm = document.getElementById('reg-confirm').value;
    const confirmField = document.getElementById('reg-confirm').closest('.field');
    if (pass !== confirm) {
    confirmField.classList.add('has-error');
    return;
    } else {
    confirmField.classList.remove('has-error');
    }
}
alert((type === 'login' ? 'Đăng nhập' : 'Đăng ký') + ' thành công (demo)!');
closeModal();
}

// Switch GridView - ListView
const articleHolder = document.getElementById('articleHolder');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', () => {
    articleHolder.classList.remove('list-view');
    gridBtn.classList.add('active-view');
    listBtn.classList.remove('active-view');
});

listBtn.addEventListener('click', () => {
    articleHolder.classList.add('list-view');
    listBtn.classList.add('active-view');
    gridBtn.classList.remove('active-view');
});

// Chọn trang
const articleCards = document.querySelectorAll('.Article1-Holder');
const filterGroups = document.querySelectorAll('.Filter-List');
const pageButtons = document.querySelectorAll('.page-num');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageOptionHolder = document.querySelector('.Page-Option-Holder');
const searchInput = document.querySelector('.Search input');

let currentPage = 1;
let searchKeyword = '';
const totalPages = pageButtons.length;

function getActiveFilters() {
    const activeFilters = {};
    filterGroups.forEach(group => {
        const groupName = group.dataset.filterGroup;
        if (group.classList.contains('Filter-Tags')) {
            const activeBtns = group.querySelectorAll('.filter-btn.active');
            activeFilters[groupName] = Array.from(activeBtns).map(btn => btn.dataset.value);
        } else {
            const checked = group.querySelectorAll('input[type="checkbox"]:checked');
            activeFilters[groupName] = Array.from(checked).map(cb => cb.value);
        }
    });
    return activeFilters;
}

function hasAnyActiveFilter(activeFilters) {
    return Object.values(activeFilters).some(arr => arr.length > 0) || searchKeyword.trim() !== '';
}

function cardMatchesFilters(card, activeFilters) {
    let visible = true;

    Object.keys(activeFilters).forEach(groupName => {
        const selectedValues = activeFilters[groupName];
        if (selectedValues.length === 0) return;

        if (groupName === 'tags') {
            const cardTags = (card.dataset.tags || '').split(',').map(t => t.trim());
            const hasMatch = selectedValues.some(v => cardTags.includes(v));
            if (!hasMatch) visible = false;
        } else {
            const cardValue = card.dataset[groupName];
            if (!selectedValues.includes(cardValue)) visible = false;
        }
    });

    if (searchKeyword.trim() !== '') {
        const titleEl = card.querySelector('.Article1-Head h1');
        const title = titleEl ? titleEl.textContent.toLowerCase() : '';
        if (!title.includes(searchKeyword.trim().toLowerCase())) {
            visible = false;
        }
    }

    return visible;
}

function render() {
    const activeFilters = getActiveFilters();
    const filtering = hasAnyActiveFilter(activeFilters);

    if (filtering) {
        articleCards.forEach(card => {
            const match = cardMatchesFilters(card, activeFilters);
            card.classList.toggle('filtered-out', !match);
            card.style.display = match ? '' : 'none';
        });
        if (pageOptionHolder) pageOptionHolder.style.display = 'none';
    } else {
        if (pageOptionHolder) pageOptionHolder.style.display = '';
        articleCards.forEach(card => {
            card.classList.remove('filtered-out');
            const cardPage = parseInt(card.dataset.page, 10);
            card.style.display = (cardPage === currentPage) ? '' : 'none';
        });
    }
}

function showPage(page) {
    currentPage = page;
    pageButtons.forEach(btn => {
        btn.classList.toggle('active-page', parseInt(btn.dataset.page, 10) === page);
    });
    render();
}

// Checkbox category
document.querySelectorAll('.Filter-List:not(.Filter-Tags) input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', render);
});

// Nút tag
document.querySelectorAll('.Filter-Tags .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        render();
    });
});

// Nút số trang
pageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(parseInt(btn.dataset.page, 10));
    });
});

// Prev / Next
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) showPage(currentPage - 1);
});
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) showPage(currentPage + 1);
});

// Search - gõ tới đâu lọc tới đó
searchInput.addEventListener('input', () => {
    searchKeyword = searchInput.value;
    render();
});

// Khởi tạo lần đầu
showPage(1);