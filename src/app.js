const idText = document.querySelector(".id")
const advice = document.querySelector(".advice")
const btnRandom = document.querySelector(".btn-random")

btnRandom.addEventListener("click", handleClick)

const API = "https://api.adviceslip.com/advice"

async function handleClick() {
  const data = await getData()
  const { advice, id } = await data.slip

  setAdvice(advice, id)
}

async function getData() {
  let data = await fetch(API)
  let dataJson = await data.json()

  return dataJson
}

function setAdvice(adv, id) {
  idText.textContent = id
  advice.textContent = adv
}

handleClick()
