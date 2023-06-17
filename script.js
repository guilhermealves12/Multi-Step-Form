let currentStep = 0
const formStep = document.querySelectorAll(".form-step")
const form = document.querySelector("form")

/* STEPS */

form.addEventListener("click", (e) => {
  if (!e.target.matches("[data-action]")) {
    return
  }

  const actions = {
    next() {
      currentStep++
    },
    prev() {
      currentStep--
    },
  }

  const action = e.target.dataset.action
  actions[action]()

  updateActiveStep()
  updateProgressStep()
})

/* ENVIO DO FORMULÁRIO */

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

/* UPDATES STEPS */

function updateActiveStep() {
  formSteps.forEach((step) => step.classList.remove("active"))
  formSteps[currentStep].classList.add("active")
}

const progressStep = document.querySelectorAll(".step-progress [data-step]")
function updateProgressStep() {
  progressStep.forEach((step, idx) => {
    step.classList.remove("active")
    step.classList.remove("done")

    if (idx < currentStep + 1) {
      step.classList.add("active")
    }

    if (idx < currentStep) {
      step.classList.add("done")
    }
  })
}
