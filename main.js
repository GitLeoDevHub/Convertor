const sel = document.querySelector('#sel')
const Input = document.querySelector('.input')
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
            if (sel.value = "rub") {
                usdValue.textContent = `USD ${(Input.value * courses.rates.USD).toFixed(2)}$`
                eurValue.textContent = `EUR ${(Input.value * courses.rates.EUR).toFixed(2)}€`
                cnyValue.textContent = `CNY ${(Input.value * courses.rates.CNY).toFixed(2)}¥`
                rubValue.textContent = `RUB ${Input.value}₽`
            }
            if (sel.value = "eur") {
                usdValue.textContent = `USD ${(Input.value * courses.rates.USD).toFixed(2)}$`
                eurValue.textContent = `EUR ${Input.value}€`
                cnyValue.textContent = `CNY ${(Input.value * courses.rates.CNY).toFixed(2)}¥`
                rubValue.textContent = `RUB ${(Input.value / courses.rates.EUR).toFixed(2)}₽`
            }
            if (sel.value = "usd") {
                usdValue.textContent = `USD ${Input.value}$`
                eurValue.textContent = `EUR ${(Input.value * courses.rates.EUR).toFixed(2)}€`
                cnyValue.textContent = `CNY ${(Input.value * courses.rates.CNY).toFixed(2)}¥`
                rubValue.textContent = `RUB ${(Input.value / courses.rates.RUB).toFixed(2)}₽`
            }
            if (sel.value = "cny") {
                usdValue.textContent = `USD ${(Input.value * courses.rates.USD).toFixed(2)}$`
                eurValue.textContent = `EUR ${(Input.value * courses.rates.EUR).toFixed(2)}€`
                cnyValue.textContent = `CNY ${Input.value}¥`
                rubValue.textContent = `RUB ${(Input.value * courses.rates.RUB).toFixed(2)}₽`
            }

        })
})
