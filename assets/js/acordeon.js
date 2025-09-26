const acordeonTriggers = document.querySelectorAll(".accordion .trigger");

acordeonTriggers.forEach((trigger) => {
   trigger.addEventListener('click', (e) => {
      const accordion = trigger.parentElement
      const isOpen = accordion.classList.contains('open')

      if (isOpen) {
         accordion.classList.remove('open')
      } else {
         accordion.classList.add('open')
      }
   })
});