const paymentMethodsSection = document.querySelector('.payment-methods-section')

const paymentMethods = [
  {
    'title': '<i class="fa-solid fa-credit-card"></i> Tarjetas de crédito ',
    'imgs': [
      'cc_visa.png',
      'cc_mastercard.png',
      'cc_visaelectron.png',
      'cc_maestro.png',
      'cc_americanexpress.png',
      'cc_dinersclub.png',
      'cc_visableue.png'
    ]
  },
  {
    'title': '<i class="fa-solid fa-money-check-dollar"></i> Plataformas online',
    'imgs': [
      'op_facebook.png',
      'op_apple.png',
      'op_google.png',
      'op_amazon.png',
      'op_epay.png',
      'op_paypal.png',
      'op_binance.png'
    ]
  }
]

paymentMethods.forEach((method) => {
  // create HTML elements
  const paymentMethodArticle = document.createElement('article')
  const paymentMethodTitle = document.createElement('h4')
  const paymentMethodImageBox = document.createElement('div')

  // add classes to elements
  paymentMethodArticle.classList.add('payment-method-article')
  paymentMethodImageBox.classList.add('payment-method-image-box')

  // insert more HTML into the elements
  paymentMethodTitle.innerHTML = method.title
  method.imgs.forEach((img) => {
    paymentMethodImageBox.innerHTML += `<img src='img/medios-de-pago/${img}' />`
  })

  // append elements
  paymentMethodArticle.append(paymentMethodTitle)
  paymentMethodArticle.append(paymentMethodImageBox)
  paymentMethodsSection.append(paymentMethodArticle)
})
