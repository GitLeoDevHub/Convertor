const rubInput = document.querySelector('#rub')
const eurInput = document.querySelector('#eur')
const usdInput = document.querySelector('#usd')
const cnyInput = document.querySelector('#cny')
const startBtn = document.querySelector('#start')
const usdValue = document.querySelector('#usd_value')
const eurValue = document.querySelector('#eur_value')
const cnyValue = document.querySelector('#cny_value')
const rubValue = document.querySelector('#rub_value')

const getData = async (url) => {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}`)
    } else {
        return await response.json()
    }
}

startBtn.addEventListener('click', () => {
    getData('https://www.cbr-xml-daily.ru/latest.js')
        .then((courses) => {

            usdValue.textContent = `USD ${(rubInput.value * courses.rates.USD).toFixed(2)} $`
            eurValue.textContent = `EUR ${(rubInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyValue.textContent = `CNY ${(rubInput.value * courses.rates.CNY).toFixed(2)} ¥`
            rubValue.textContent = `RUB ${(rubInput.value).toFixed(2)} ₽`

            usdValue.textContent = `USD ${(eurInput.value * courses.rates.USD).toFixed(2)} $`
            eurValue.textContent = `EUR ${(eurInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyValue.textContent = `CNY ${(eurInput.value * courses.rates.CNY).toFixed(2)} ¥`
            rubValue.textContent = `RUB ${(eurInput.value).toFixed(2)} ₽`

            usdValue.textContent = `USD ${(rubInput.value * courses.rates.USD).toFixed(2)} $`
            eurValue.textContent = `EUR ${(rubInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyValue.textContent = `CNY ${(rubInput.value * courses.rates.CNY).toFixed(2)} ¥`
            rubValue.textContent = `RUB ${(rubInput.value).toFixed(2)} ₽`

            usdValue.textContent = `USD ${(rubInput.value * courses.rates.USD).toFixed(2)} $`
            eurValue.textContent = `EUR ${(rubInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyValue.textContent = `CNY ${(rubInput.value * courses.rates.CNY).toFixed(2)} ¥`
            rubValue.textContent = `RUB ${(rubInput.value).toFixed(2)} ₽`
        })
})