const $start = $('.start')
const $box = $('.box')

$start.on('click', () => {
  $box.addClass('js-box-animate')
})
