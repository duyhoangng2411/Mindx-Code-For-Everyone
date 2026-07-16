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

// Chon trang 
const allCourses = document.querySelectorAll('.Article1-Holder[data-page]');
const pageButtons = document.querySelectorAll('.page-num');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentPage = 1;
const totalPages = pageButtons.length;

function showPage(page) {
currentPage = page;

// Ẩn/hiện đúng khóa học theo data-page
allCourses.forEach(course => {
    const coursePage = Number(course.dataset.page);
    course.classList.toggle('hidden-course', coursePage !== page);
});

// Đổi trạng thái active của số trang
pageButtons.forEach(btn => {
    btn.classList.toggle('active-page', Number(btn.dataset.page) === page);
});

// Cuộn lên đầu section Course cho dễ nhìn (tuỳ chọn)
document.querySelector('.Article1-Holder').scrollIntoView({ behavior: 'smooth' });
}

pageButtons.forEach(btn => {
btn.addEventListener('click', () => showPage(Number(btn.dataset.page)));
});

prevBtn.addEventListener('click', () => {
if (currentPage > 1) showPage(currentPage - 1);
});

nextBtn.addEventListener('click', () => {
if (currentPage < totalPages) showPage(currentPage + 1);
});

// Hiện trang 1 khi tải trang lần đầu
showPage(1);

// Filter - Category
const articleCards = document.querySelectorAll('.Article1-Holder');
const filterGroups = document.querySelectorAll('.Filter-List');

function applyFilters() {
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

    articleCards.forEach(card => {
        let visible = true;

        Object.keys(activeFilters).forEach(groupName => {
            const selectedValues = activeFilters[groupName];
            if (selectedValues.length === 0) return; // Không có gì được tick -> bỏ qua nhóm này

            if (groupName === 'tags') {
                // Card có nhiều tag, cách nhau bởi dấu phẩy -> tách thành mảng
                const cardTags = (card.dataset.tags || '').split(',').map(t => t.trim());
                // Chỉ cần TRÙNG ít nhất 1 tag đang chọn là hiển thị (OR logic)
                const hasMatch = selectedValues.some(v => cardTags.includes(v));
                if (!hasMatch) visible = false;
            } else {
                // Category/Instructor/Price... mỗi card chỉ có 1 giá trị duy nhất
                const cardValue = card.dataset[groupName];
                if (!selectedValues.includes(cardValue)) visible = false;
            }
        });

        card.classList.toggle('filtered-out', !visible);
    });
}

// Checkbox (Category, Instructor, Price, Review, Level)
document.querySelectorAll('.Filter-List:not(.Filter-Tags) input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});

// Button (Tags)
document.querySelectorAll('.Filter-Tags .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        applyFilters();
    });
});