(function () {
  // якорное движение к форме
  const consultAnchors = document.querySelectorAll('a[data-slider*="#"]');

  if (consultAnchors) {
    for (let anchor of consultAnchors) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const blockId = anchor.getAttribute('data-slider');
        document.querySelector('' + blockId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    }
  }


// // раскрытие сертификатов в полный размер
//   const modal = document.getElementById('certificateModal'),
//     certificateImgs = document.querySelectorAll('.certificate-img'),
//     modalImg = document.getElementById('certificateOpened'),
//     close = document.querySelector('.close');
//
//   if (certificateImgs || modal) {
//     for (let img of certificateImgs) {
//       img.onclick = function () {
//         modal.style.display = 'block';
//         modalImg.src = img.src;
//       }
//     }
//     if (close) {
//       close.onclick = function () {
//         modal.style.display = 'none';
//       }
//     }
//   }


// // модальное окно о получении сертификата
//   const fstekModal = document.getElementById('fstek-modal'),
//     getConsult = document.getElementById('getConsult'),
//     priceBlock = document.getElementById('price'),
//     fstekClosure = document.querySelector('.close-fstek');
//
//   if (priceBlock) {
//     const Visible = function () {
//       // позиции элемента
//       const targetPosition = {
//           top: priceBlock.getBoundingClientRect().top,
//           bottom: window.pageYOffset + priceBlock.getBoundingClientRect().bottom
//         },
//         // позиции окна
//         windowPosition = {
//           top: window.pageYOffset,
//           bottom: window.pageYOffset + document.documentElement.clientHeight
//         };
//
//       if (targetPosition.bottom > windowPosition.top &&
//         targetPosition.top < windowPosition.bottom) {
//         showFstekModal();
//       } else {
//         clearModal();
//       }
//     };
//
// // Запускаем функцию при прокрутке страницы
//     window.addEventListener('scroll', Visible)
//
//     function showFstekModal() {
//       fstekModal.style.display = 'block';
//     }
//
//     function clearModal() {
//       fstekModal.style.display = 'none'
//     }
//
//     document.addEventListener('click', e => {
//       if (e.target === fstekClosure || e.target === getConsult) {
//         window.removeEventListener('scroll', Visible)
//         fstekModal.style.display = 'none'
//       }
//     })
//   }


// // Dropdown header menu
//   document.addEventListener('click', e => {
//     const isDropdownButton = e.target.matches('[data-dropdown-button]');
//
//     if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return
//
//     let currentDropdown;
//     if (isDropdownButton) {
//       currentDropdown = e.target.closest('[data-dropdown]');
//       currentDropdown.classList.toggle('active')
//     }
//
//     document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
//       if (dropdown === currentDropdown) return
//       dropdown.classList.remove('active')
//     })
//   })

// Adaptive ==============

// change request-form button text
  const availableScreenWidth = window.screen.availWidth;
  if (document.querySelector('.request-block')) {
    const requestBottomForm = document.querySelector('.request-block'),
      submitButton = requestBottomForm.querySelector('.adaptive-form__btn');

    if(submitButton) {
      const submitButtonSpan = submitButton.querySelector('span');

      if (requestBottomForm) {
        if (availableScreenWidth <= '500') {
          submitButtonSpan.innerText = 'Оставить заявку'
        }
      }
    }

  }
// adaptive blocks ==========

// adaptive header
  if (document.querySelector('.header')) {
    const header = document.querySelector('.header'),
      headerIcon = header.querySelector('img[data-header-icon]'),
      headerPhoneImg = header.querySelector('img[data-adaptive-phone-img]'),
      headerNavBar = header.querySelector('nav[data-adaptive-nav]');

    if (headerIcon) {
      const setAdaptiveHeader = function () {
        if (availableScreenWidth > 500) {
          headerIcon.src = "/img/icons/header-icon1.svg"
        } else if (availableScreenWidth <= 500) {
          headerIcon.src = "/img/items/main-page/logo-text.png"
        }

        if (availableScreenWidth > 500) {
          headerPhoneImg.src = "/img/icons/phone.svg"
        } else if (availableScreenWidth <= 500) {
          headerPhoneImg.src = "/img/icons/green-phone-icon.png"
        }
      }
      setAdaptiveHeader()
    }
  }

// adaptive alladin btn
  if (document.querySelector('.alladin-card__btn')) {
    const alladinBtns = document.querySelectorAll('.alladin-card__btn');

    if (alladinBtns) {
      if (availableScreenWidth <= 500) {
        alladinBtns.forEach(alladinBtn => {
          alladinBtn.remove();
        })
      }
    }
  }

// Modal-form
  if (document.getElementById('form-modal')) {
    const formModal = document.getElementById('form-modal')

    const buttons = document.querySelectorAll('.modal-button'),
      equipmentCards = document.querySelectorAll('.equipment-card'),
      equipmentCardsSmall = document.querySelectorAll('.equipment-card-small'),
      formModalClose = document.querySelector('.form-modal__close'),
      navListItems = document.querySelectorAll('.nav-list-item');

    if (formModal) {

      for (let button of buttons) {
        button.onclick = function () {
          formModal.style.display = 'block'
        }
      }

      for (let card of equipmentCards) {
        card.onclick = function () {
          formModal.style.display = 'block'
        }
      }

      for (let cardSmall of equipmentCardsSmall) {
        cardSmall.onclick = function () {
          formModal.style.display = 'block'
        }
      }

      for (let navListItem of navListItems) {
        navListItem.onclick = function () {
          formModal.style.display = 'block'
        }
      }
      document.onclick = function (e) {
        if (e.target === formModalClose) {
          clearFormModal();
        }
      }

      function clearFormModal() {
        formModal.style.display = 'none'
      }
    }
  }
}())


// alert modal when request form submitted
const alertModal = document.querySelector('.alert-modal'),
  alertModalClose = document.querySelector('.alert-modal__close');