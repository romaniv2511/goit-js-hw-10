
export function createCountriesListMarkup(arr) {
    return arr.map(({name, flags}) => {
        return `<li class="country-item">
                            <img class="country-icon" src="${flags.svg}" alt="flag ${name.common}" width="20">
                            <p class="country-name">${name.official}</p>
                        </li>`
            }).join('')
    
}

export function createCountryInfoMarkup(arr) {
    return arr.map(({ name, flags, capital, population, languages }) => {
        return `<div class='country-info__box'> <img src="${flags.svg}" alt="flag ${name.common}" height="30">
      <h1 class="country-info__label">${name.official}</h1></div>
      <ul class="list">
        <li class="country-info__item"><b>Capital: </b>${capital[0]}</li>
        <li class="country-info__item"><b>Population: </b>${population}</li>
        <li class="country-info__item"><b>Languages: </b>${Object.values(languages)}</li>
      </ul>`
            }).join('')
    
}