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
// FAQ
const faqHeaders = document.querySelectorAll('.FAQ-P1-Header');

faqHeaders.forEach(header => {
header.addEventListener('click', function() {
    // Đổi màu tiêu đề FAQ
    const title = this.querySelector('.FAQ-P1');
    if(title) title.classList.toggle('active');
    
    // Tìm nội dung FAQ nằm dưới
    const parent = this.closest('.FAQ-P1-Holder');
    const content = parent.querySelector('.FAQ-P1-ND');
    if (content) {
    content.classList.toggle('show');
    }
});
});