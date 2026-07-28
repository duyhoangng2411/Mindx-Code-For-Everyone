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
// Grid View
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const courseHolder = document.getElementById('courseHolder');

function setView(view) {
    if (view === 'grid') {
        courseHolder.classList.remove('list-view');
        gridBtn.classList.add('active-view');
        listBtn.classList.remove('active-view');
    } else {
        courseHolder.classList.add('list-view');
        listBtn.classList.add('active-view');
        gridBtn.classList.remove('active-view');
    }
}

gridBtn.addEventListener('click', () => setView('grid'));
listBtn.addEventListener('click', () => setView('list'));

// ===== SELECTORS =====
const courseCards = document.querySelectorAll('.Course1-Holder');
const filterGroups = document.querySelectorAll('.Filter-List');
const pageButtons = document.querySelectorAll('.page-num');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageOptionHolder = document.querySelector('.Page-Option-Holder');
const searchInput = document.querySelector('.Search input'); // kiểm tra lại selector này cho đúng HTML thật

// ===== STATE =====
let currentPage = 1;
let searchKeyword = '';
const totalPages = pageButtons.length;

// ===== LẤY CÁC FILTER ĐANG ĐƯỢC TICK =====
function getActiveFilters() {
    const activeFilters = {};
    filterGroups.forEach(group => {
        const groupName = group.dataset.filterGroup;
        const checked = group.querySelectorAll('input[type="checkbox"]:checked');
        activeFilters[groupName] = Array.from(checked).map(cb => cb.value);
    });
    return activeFilters;
}

// ===== CÓ ĐANG LỌC (FILTER HOẶC SEARCH) HAY KHÔNG =====
function hasAnyActiveFilter(activeFilters) {
    return Object.values(activeFilters).some(arr => arr.length > 0) || searchKeyword.trim() !== '';
}

// ===== KIỂM TRA 1 CARD CÓ KHỚP VỚI FILTER + SEARCH HAY KHÔNG =====
function cardMatchesFilters(card, activeFilters) {
    let visible = true;

    // Kiểm tra từng nhóm filter (course, instructor, price, review, level)
    Object.keys(activeFilters).forEach(groupName => {
        const selectedValues = activeFilters[groupName];
        if (selectedValues.length === 0) return;
        const cardValue = card.dataset[groupName];
        if (!selectedValues.includes(cardValue)) visible = false;
    });

    // Kiểm tra search theo tên khóa học
    if (searchKeyword.trim() !== '') {
        const titleEl = card.querySelector('.Course1-Nav h1');
        const title = titleEl ? titleEl.textContent.toLowerCase() : '';
        if (!title.includes(searchKeyword.trim().toLowerCase())) {
            visible = false;
        }
    }

    return visible;
}

// ===== RENDER LẠI DANH SÁCH CARD =====
function render() {
    const activeFilters = getActiveFilters();
    const filtering = hasAnyActiveFilter(activeFilters);

    if (filtering) {
        // Đang lọc: hiện tất cả card khớp (bất kể trang), ẩn thanh phân trang
        courseCards.forEach(card => {
            const match = cardMatchesFilters(card, activeFilters);
            card.classList.toggle('filtered-out', !match);
            card.style.display = match ? '' : 'none';
        });
        if (pageOptionHolder) pageOptionHolder.style.display = 'none';
    } else {
        // Không lọc gì: quay lại phân trang bình thường
        if (pageOptionHolder) pageOptionHolder.style.display = '';
        courseCards.forEach(card => {
            card.classList.remove('filtered-out');
            const cardPage = parseInt(card.dataset.page, 10);
            card.style.display = (cardPage === currentPage) ? '' : 'none';
        });
    }
}

// ===== CHUYỂN TRANG =====
function showPage(page) {
    currentPage = page;
    pageButtons.forEach(btn => {
        btn.classList.toggle('active-page', parseInt(btn.dataset.page, 10) === page);
    });
    render();
}

// ===== SỰ KIỆN: CHECKBOX FILTER =====
document.querySelectorAll('.Filter-List input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', render);
});

// ===== SỰ KIỆN: NÚT SỐ TRANG =====
pageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(parseInt(btn.dataset.page, 10));
    });
});

// ===== SỰ KIỆN: PREV / NEXT =====
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });
}
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) showPage(currentPage + 1);
    });
}

// ===== SỰ KIỆN: SEARCH (gõ tới đâu lọc tới đó) =====
if (searchInput) {
    searchInput.addEventListener('input', () => {
        searchKeyword = searchInput.value;
        render();
    });
}

// ===== KHỞI TẠO LẦN ĐẦU =====
showPage(1);

