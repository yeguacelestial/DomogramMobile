import I18n, { getLanguages } from 'react-native-i18n'

import en from './en'
import es from './es'

I18n.fallbacks = true

I18n.translations = {
    es,
    en
}

getLanguages()
    .then((languages) => {
        console.log('getLanguages', languages)
    })
    .catch(error => {
        console.log('getLanguages error: ', error)
    })

export default I18n
