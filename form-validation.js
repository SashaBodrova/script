(function () {
  window.deleteErrorsFn = function (formElement) {
    const errors = formElement.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
  };
  window.insertAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  };

  const showAlertModal = function() {
    const alertModal = document.querySelector('.alert-modal'),
      alertModalClose = document.querySelector('.alert-modal__close');

    alertModal.style.display = 'block';

    alertModalClose.addEventListener('click', e => {
      if(e.target === alertModalClose) {
        alertModal.style.display = 'none';
      }
    })
  }

  const changeContactLabelsFn = function (val, fieldLabel, fieldInput) {
      switch (val) {
        case 'phone':
        case 'whatsapp':
          fieldLabel.innerText = 'Номер телефона для связи'
          fieldInput.placeholder = '+7 (999) 999-99 99'
          break;
        case 'telegram':
          fieldLabel.innerText = 'Имя пользователя или номер телефона'
          fieldInput.placeholder = '@telegramuser'
          break;
        case 'email':
          fieldLabel.innerText = 'Электронная почта для связи'
          fieldInput.placeholder = 'user@mail.ru'
      }
    },
    bottomFormElement = document.querySelector('.request-block-form');

  if (bottomFormElement) {
    // validation
    bottomFormElement.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      deleteErrorsFn(bottomFormElement);
      checkFieldsEmptiness(e);
    }, {once: false});

    const checkFieldsEmptiness = function (e) {
      let errorExists = false;

      // // name
      // let nameEl = bottomFormElement.querySelector('.form-control-name'),
      //   nameValue = nameEl ? '' + nameEl.value : '';
      // if (!nameValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, nameEl);
      //   nameEl.style.background = '#FFE7E7';
      //   nameEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   nameEl.style.background = '#EBF3F8';
      //   nameEl.style.color = '#818181FF';
      // }

      // phone
      let phoneEl = bottomFormElement.querySelector('.form-control-phone');
        // phoneValue = phoneEl ? '' + phoneEl.value : '';
      if (!phoneValue.trim()) {
        let error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Обязательно к заполнению';
        insertAfter(error, phoneEl);
        phoneEl.style.background = '#FFE7E7';
        phoneEl.style.color = '#CC2B24';
        errorExists = true;
      } else {
        phoneEl.style.background = '#EBF3F8';
        phoneEl.style.color = '#818181FF';
      }

      // // message
      // let messageEl = bottomFormElement.querySelector('.form-control-message'),
      //   messageValue = messageEl ? '' + messageEl.value : '';
      // if (!messageValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, messageEl);
      //   messageEl.style.background = '#FFE7E7';
      //   messageEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   messageEl.style.background = '#EBF3F8';
      //   messageEl.style.color = '#818181FF';
      // }

      if (!errorExists) {
        let pjaxContainer = bottomFormElement.parentNode;
        jQuery.pjax.submit(
          event, {
            "push": false,
            "replace": false,
            "timeout": 1000,
            "scrollTo": false,
            "container": "#" + pjaxContainer.id,
          });
        showAlertModal();
      }
    }

// Changing labels
    const numberField = bottomFormElement.querySelector('.request-block_form-group__number'),
      fieldLabel = numberField.querySelector('.control-label'),
      fieldInput = numberField.querySelector('.form-control');

    const select = bottomFormElement.querySelector('.form-control-connect-type');
    select.addEventListener('change', function (selectEvent) {
      changeContactLabelsFn(selectEvent.target.value, fieldLabel, fieldInput)
    })
  }

// Main service form validation ########################################
  const mainServiceForm = document.querySelector('.main-services-form');

  if (mainServiceForm) {
    mainServiceForm.addEventListener('submit', e => {
      e.preventDefault();
      e.stopPropagation();
      deleteErrorsFn(mainServiceForm);
      checkFieldsEmptiness(e);
    })

    const checkFieldsEmptiness = function (event) {
      let errorExists = false;

      // // fio
      // let fioEl = mainServiceForm.querySelector('.form-control-fio'),
      //   fioValue = fioEl ? '' + fioEl.value : '';
      // if (!fioValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, fioEl);
      //   fioEl.style.background = '#FFE7E7';
      //   fioEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   fioEl.style.background = '#EBF3F8';
      //   fioEl.style.color = '#818181FF';
      // }

      // phone
      let phoneEl = mainServiceForm.querySelector('.form-control-phone');
        // phoneValue = phoneEl ? '' + phoneEl.value : '';
      if (!phoneValue.trim()) {
        let error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Обязательно к заполнению';
        insertAfter(error, phoneEl);
        phoneEl.style.background = '#FFE7E7';
        phoneEl.style.color = '#CC2B24';
        errorExists = true;
      } else {
        phoneEl.style.background = '#EBF3F8';
        phoneEl.style.color = '#818181FF';
      }

      if (!errorExists) {
        let pjaxContainer = mainServiceForm.parentNode;
        jQuery.pjax.submit(
          event, {
            "push": false,
            "replace": false,
            "timeout": 1000,
            "scrollTo": false,
            "container": "#" + pjaxContainer.id,
          });
        showAlertModal();
      }
    };
  } else {
    console.log('there is no main service form')
  }


// Feedback from validation ########################################
  const feedbackForm = document.querySelector('.feedback-form-bottom-second');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      deleteErrorsFn(feedbackForm);
      checkFieldsEmptiness(e);
    })

    const checkFieldsEmptiness = function (event) {
      let errorExists = false;

      // // name
      // let nameEl = feedbackForm.querySelector('.feedback-form-input'),
      //   nameValue = nameEl ? '' + nameEl.value : '';
      // if (!nameValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, nameEl);
      //   nameEl.style.background = '#FFE7E7';
      //   nameEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   nameEl.style.background = '#EBF3F8';
      //   nameEl.style.color = '#818181FF';
      // }

      // phone
      let phoneEl = feedbackForm.querySelector('.form-control-phone');
        // phoneValue = phoneEl ? '' + phoneEl.value : '';
      if (!phoneValue.trim()) {
        let error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Обязательно к заполнению';
        insertAfter(error, phoneEl);
        phoneEl.style.background = '#FFE7E7';
        phoneEl.style.color = '#CC2B24';
        errorExists = true;
      } else {
        phoneEl.style.background = '#EBF3F8';
        phoneEl.style.color = '#818181FF';
      }

      if (!errorExists) {
        let pjaxContainer = feedbackForm.parentNode;
        jQuery.pjax.submit(
          event, {
            "push": false,
            "replace": false,
            "timeout": 1000,
            "scrollTo": false,
            "container": "#" + pjaxContainer.id,
          });
        showAlertModal();
      }
    };

    const numberField = feedbackForm.querySelector('.feedback-form-group__number'),
      fieldLabel = numberField.querySelector('.control-label'),
      fieldInput = numberField.querySelector('.form-control-phone');

    const select = feedbackForm.querySelector('.form-control-connect-type');
    select.addEventListener('change', function (selectEvent) {
      changeContactLabelsFn(selectEvent.target.value, fieldLabel, fieldInput)
    })
  }

  // Modal form validation #######################
  const modalForm = document.querySelector('.modal-request-form');

  if(modalForm) {
    modalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      deleteErrorsFn(modalForm);
      checkFieldsEmptiness(e);
    })

    const checkFieldsEmptiness = function (event) {
      let errorExists = false;

      // // name
      // let nameEl = modalForm.querySelector('.input-name'),
      //   nameValue = nameEl ? '' + nameEl.value : '';
      // if (!nameValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, nameEl);
      //   nameEl.style.background = '#FFE7E7';
      //   nameEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   nameEl.style.background = '#EBF3F8';
      //   nameEl.style.color = '#818181FF';
      // }

      // phone
      let phoneEl = modalForm.querySelector('.input-phone');
        // phoneValue = phoneEl ? '' + phoneEl.value : '';
      if (!phoneValue.trim()) {
        let error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Обязательно к заполнению';
        insertAfter(error, phoneEl);
        phoneEl.style.background = '#FFE7E7';
        phoneEl.style.color = '#CC2B24';
        errorExists = true;
      } else {
        phoneEl.style.background = '#EBF3F8';
        phoneEl.style.color = '#818181FF';
      }

      // // mail
      // let mailEl = modalForm.querySelector('.input-email'),
      //   mailValue = mailEl ? '' + mailEl.value : '';
      // if (!mailValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, mailEl);
      //   mailEl.style.background = '#FFE7E7';
      //   mailEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   mailEl.style.background = '#EBF3F8';
      //   mailEl.style.color = '#818181FF';
      // }

      // // message
      // let messageEl = modalForm.querySelector('.modal-form-task'),
      //   messageValue = messageEl ? '' + messageEl.value : '';
      // if (!messageValue.trim()) {
      //   let error = document.createElement('div');
      //   error.className = 'error';
      //   error.innerHTML = 'Обязательно к заполнению';
      //   insertAfter(error, messageEl);
      //   messageEl.style.background = '#FFE7E7';
      //   messageEl.style.color = '#CC2B24';
      //   errorExists = true;
      // } else {
      //   messageEl.style.background = '#EBF3F8';
      //   messageEl.style.color = '#818181FF';
      // }

      if (!errorExists) {
        let pjaxContainer = modalForm.parentNode;
        jQuery.pjax.submit(
          event, {
            "push": false,
            "replace": false,
            "timeout": 1000,
            "scrollTo": false,
            "container": "#" + pjaxContainer.id,
          });
        showAlertModal();
      }
    };
  }
}())