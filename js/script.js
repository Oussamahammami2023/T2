// دالة لتفعيل العنصر المحدد
    function setActive(element) {
      const currentActive = document.querySelector('.unique-active');
      if (currentActive) {
        currentActive.classList.remove('unique-active');
      }
    
      element.classList.add('unique-active');
      localStorage.setItem('activeGroup', element.getAttribute('data-group'));
    }
    
    // استعادة الحالة النشطة عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', () => {
      const activeGroup = localStorage.getItem('activeGroup');
      if (activeGroup) {
        const activeElement = document.querySelector(`[data-group="${activeGroup}"]`);
        if (activeElement) {
          activeElement.classList.add('unique-active');
        }
      } else {
        const defaultActive = document.querySelector(`[data-group="Design"]`);
        if (defaultActive) {
          defaultActive.classList.add('unique-active');
        }
      }
    });
    const container = document.getElementById('groupContainer');
const groups = container.children;
let currentIndex = 0;

function scrollGroups() {
    currentIndex = (currentIndex + 1) % groups.length;
    const groupWidth = groups[currentIndex].offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollPosition = groups[currentIndex].offsetLeft - (containerWidth / 2) + (groupWidth / 2);
    container.scrollLeft = scrollPosition;
}

setInterval(scrollGroups, 5000);
const collectionDetails1_3 = [
  {
    title: 'Boutiques locaux',
    content: '<div class="group-list-inner-1-3">' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Ldesigner\'">' +
             'Tunis<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/designers-page.html\'">' +
             'Ariana<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Manouba<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Ben Arous<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Nabeul<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Zaghouan<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Sousse<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Monastir<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Mahdia<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Bizerte<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Beja<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Le kef<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Jendouba<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Siliana<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Kairouan<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Sfax<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Kasserine<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Sidi Bouzid<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Gafsa<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Tozeur<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Kebili<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Gabès<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Médenine<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '<div class="group-item-inner-1-3" onclick="window.location.href=\'/pages/Development\'">' +
             'Tataouine<span class="subtitle">0 Boutiques</span>' +
             '</div>' +
             '</div>'
  }
];

function openModal1_3(index) {
  const modal = document.getElementById('modal1_3');
  const modalTitle = document.getElementById('modalTitle1_3');
  const modalContent = document.getElementById('modalContent1_3');

  // تحقق من أن الفهرس صحيح
  if (collectionDetails1_3[index]) {
    modalTitle.textContent = collectionDetails1_3[index].title;
    modalContent.innerHTML = collectionDetails1_3[index].content; // تحميل المحتوى الجديد
    modal.style.display = 'block';
    document.body.classList.add('no-scroll'); // منع التمرير في الصفحة الرئيسية
  }
}

function closeModal1_3() {
  const modal = document.getElementById('modal1_3');
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll'); // السماح بالتمرير في الصفحة الرئيسية
}
// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('ServiceWorker registered with scope:', registration.scope);
        }, function(error) {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}

// دالة لتحويل الصفحة إلى وضع ملء الشاشة
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

// استدعاء الدالة بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    openFullscreen();
});
