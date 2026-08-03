// Mobile / Tablet Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
const hamburgerBtn = document.getElementById('hamburgerBtn');
const midNav = document.getElementById('midNav');
const navBackdrop = document.getElementById('navBackdrop');

if (hamburgerBtn && midNav) {
    hamburgerBtn.addEventListener('click', function () {
        const isOpen = midNav.classList.toggle('mobile-open');
        hamburgerBtn.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
    });

    // Đóng menu khi click ra ngoài (backdrop)
    if (navBackdrop) {
        navBackdrop.addEventListener('click', function () {
            midNav.classList.remove('mobile-open');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            navBackdrop.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    }

    // Đóng menu khi click vào 1 link thường (không phải nút dropdown "Page")
    midNav.querySelectorAll('li:not(.Page-dropdown) > a').forEach(function (link) {
        link.addEventListener('click', function () {
            midNav.classList.remove('mobile-open');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            if (navBackdrop) navBackdrop.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // Đóng menu khi resize về desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            midNav.classList.remove('mobile-open');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            if (navBackdrop) navBackdrop.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    });
}
});
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