(function () {
  // Mask for phone inputs
  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  const setPhoneMask = function (e, el) {
      let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        formattedInputValue = '',
        // cursor position
        selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return input.value = '';
      }

      if (input.value.length !== selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }

      if (inputNumbersValue.length < 12) {
        let error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Неверный номер';
        insertAfter(error, el);
        el.style.background = '#FFE7E7';
        el.style.color = '#CC2B24';
      } else if (inputNumbersValue.length === 12) {
        el.style.background = '#EBF3F8';
        el.style.color = '#818181FF';
      }

      if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        // Russian phone number
        if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;

        let firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
        formattedInputValue = firstSymbols + ' ';

        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += ' ' + inputNumbersValue.substring(9, 11);
        }
      } else {
        // Not Russian phone number
        formattedInputValue = '+' + inputNumbersValue;
      }

      input.value = formattedInputValue;
    },
    setEmailMask = function (e, el) {
      let input = e.target,
        emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
        inputStringValue = input.value;

      if (emailTest.test(inputStringValue)) {
        el.style.background = '#EBF3F8';
        el.style.color = '#818181FF';
      }
      if (!emailTest.test(inputStringValue)) {
        let error = document.createElement('div');
        error.className = 'error';

        if (inputStringValue === '') {
          error.innerHTML = 'Обязательно к заполнению';
          insertAfter(error, el);
          el.style.background = '#FFE7E7';
          el.style.color = '#CC2B24';
        } else {
          error.innerHTML = 'Неправильный электронный адрес';
          insertAfter(error, el);
          el.style.background = '#FFE7E7';
          el.style.color = '#CC2B24';
          // errorExists = true;
        }
      }
    },
    setTelegramCheck = function (e, el) {
      let input = e.target,
        inputStringValue = input.value;
      let error = document.createElement('div');
      error.className = 'error';

      if (inputStringValue === '') {
        error.innerHTML = 'Обязательно к заполнению';
        insertAfter(error, el);
        el.style.background = '#FFE7E7';
        el.style.color = '#CC2B24';
      } else {
        el.style.background = '#EBF3F8';
        el.style.color = '#818181FF';
      }
    }

    const onPhoneInput = function (e) {
      // set masks for bottom request form

      if(document.querySelector('.request-block-form')) {
        const bottomFormElement = document.querySelector('.request-block-form'),
          bottomFormMaskInput = bottomFormElement.querySelector('.form-control-phone'),
          selectBottomForm = bottomFormElement.querySelector('.form-control-connect-type');

        if (e.target === bottomFormMaskInput) {
          if (selectBottomForm.value === 'phone' || selectBottomForm.value === 'whatsapp') {
            deleteErrorsFn(bottomFormElement);
            setPhoneMask(e, bottomFormMaskInput);
          } else if (selectBottomForm.value === 'email') {
            deleteErrorsFn(bottomFormElement);
            setEmailMask(e, bottomFormMaskInput);
          } else if (selectBottomForm.value === 'telegram') {
            deleteErrorsFn(bottomFormElement);
            setTelegramCheck(e, bottomFormMaskInput)
          }
        }
      }

      // set masks for feedback form
      if(document.querySelector('.feedback-form-bottom-second')) {
        const feedbackForm = document.querySelector('.feedback-form-bottom-second'),
          feedbackMaskInput = feedbackForm.querySelector('.form-control-phone'),
          selectFeedbackForm = feedbackForm.querySelector('.form-control-connect-type');

        if (e.target === feedbackMaskInput) {
          if (selectFeedbackForm.value === 'phone' || selectFeedbackForm.value === 'whatsapp') {
            deleteErrorsFn(feedbackForm);
            setPhoneMask(e, feedbackMaskInput);
          } else if (selectFeedbackForm.value === 'email') {
            deleteErrorsFn(feedbackForm);
            setEmailMask(e, feedbackMaskInput);
          } else if (selectFeedbackForm.value === 'telegram') {
            deleteErrorsFn(feedbackForm);
            setTelegramCheck(e, feedbackMaskInput)
          }
        }
      }

      // set phone mask for service form
      if(document.querySelector('.main-services-form')) {
        const serviceForm = document.querySelector('.main-services-form'),
          serviceFormPhoneInput = serviceForm.querySelector('.service-form-number');

        if (e.target === serviceFormPhoneInput) {
          deleteErrorsFn(serviceForm);
          setPhoneMask(e, serviceFormPhoneInput);
        }
      }

      // set masks to modal form
      if(document.querySelector('.modal-request-form')) {
        const modalRequestForm = document.querySelector('.modal-request-form'),
          formPhoneInput = modalRequestForm.querySelector('.input-phone'),
          formEmailInput = modalRequestForm.querySelector('.input-email');

        if(e.target === formPhoneInput) {
          deleteErrorsFn(modalRequestForm);
          setPhoneMask(e, formPhoneInput);
        } else if(e.target === formEmailInput) {
          deleteErrorsFn(modalRequestForm);
          setEmailMask(e, formEmailInput)
        }
      }
    }

    const onPhoneKeyDown = function (e) {
      let input = e.target;

      if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
        input.value = '';
      }
    }
    const onPhonePaste = function (e) {
      let pasted = e.clipboardData || window.clipboardData,
        input = e.target,
        inputNumbersValue = getInputNumbersValue(input);

      if (pasted) {
        let pastedText = pasted.getData('Text')

        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    }

  document.addEventListener('DOMContentLoaded', function (e) {
    if(document.querySelector('.modal-request-form')) {
      const modalRequestForm = document.querySelector('.modal-request-form'),
        formPhoneInput = modalRequestForm.querySelector('.input-phone'),
        formEmailInput = modalRequestForm.querySelector('.input-email');

      formPhoneInput.addEventListener('input', onPhoneInput);
      formPhoneInput.addEventListener('keydown', onPhoneKeyDown);
      formPhoneInput.addEventListener('paste', onPhonePaste);

      formEmailInput.addEventListener('input', onPhoneInput);
      formEmailInput.addEventListener('keydown', onPhoneKeyDown);
      formEmailInput.addEventListener('paste', onPhonePaste);
    }

    if(document.querySelector('.main-services-form')) {
      const serviceForm = document.querySelector('.main-services-form'),
        serviceFormPhoneInput = serviceForm.querySelector('.service-form-number');

      serviceFormPhoneInput.addEventListener('input', onPhoneInput);
      serviceFormPhoneInput.addEventListener('keydown', onPhoneKeyDown);
      serviceFormPhoneInput.addEventListener('paste', onPhonePaste);
    }

    if(document.querySelector('.feedback-form-bottom-second')) {
      const feedbackForm = document.querySelector('.feedback-form-bottom-second'),
        feedbackMaskInput = feedbackForm.querySelector('.form-control-phone')

      feedbackMaskInput.addEventListener('input', onPhoneInput);
      feedbackMaskInput.addEventListener('keydown', onPhoneKeyDown);
      feedbackMaskInput.addEventListener('paste', onPhonePaste);
    }

    if(document.querySelector('.request-block-form')) {
      const bottomFormElement = document.querySelector('.request-block-form'),
        bottomFormMaskInput = bottomFormElement.querySelector('.form-control-phone')

      bottomFormMaskInput.addEventListener('input', onPhoneInput);
      bottomFormMaskInput.addEventListener('keydown', onPhoneKeyDown);
      bottomFormMaskInput.addEventListener('paste', onPhonePaste);
    }
  })
}())
