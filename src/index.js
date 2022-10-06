import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from "lodash.debounce";
import { fetchCountryByName } from "./js/api-service";
import { createCountriesListMarkup, createCountryInfoMarkup } from "./js/createMarkup";


const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    counrtyList: document.querySelector('.country-list'),
    counrtyInfo: document.querySelector('.country-info'),
}

refs.input.addEventListener('input', debounce(e => { onGetNameCountryInput(e.target.value.trim())}, DEBOUNCE_DELAY));


function onGetNameCountryInput(name) {
    if (!name) {
        clearMarkup();
        return;
    }
    
    fetchCountryByName(name)
        .then(data => {
            if (data.length > 10) {
                clearMarkup();
                Notify.info('Too many matches found. Please enter a more specific name.');
                return;
            }
            if (data.length > 1) {
                clearMarkup();
                refs.counrtyList.innerHTML = createCountriesListMarkup(data);
                return;
            }
            clearMarkup();
            refs.counrtyInfo.innerHTML = createCountryInfoMarkup(data);
           
        }).catch(onError);
}
function clearMarkup() {
    refs.counrtyList.innerHTML = '';
    refs.counrtyInfo.innerHTML = '';
}
function onError(error) {
    clearMarkup();
    Notify.failure('Oops, there is no country with that name');
}






