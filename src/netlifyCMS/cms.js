import CMS from 'netlify-cms-app'
import { pl } from 'netlify-cms-locales'

CMS.registerLocale('pl', pl)
console.log('TEST')
const localePL = CMS.getLocale('pl')
console.log(localePL)

CMS.init({ locale: localePL })
