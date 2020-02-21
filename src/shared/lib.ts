import i18n from "i18next"
import { useTranslation, initReactI18next, WithTranslation } from "react-i18next"

const resources = {
    en: {
        translation: {
            "welcome": "Welcome to React and react-i18next"
        }
    },
    th: {
        translation: {
            "welcome": "สวัสดีชาวโลก"
        }
    }
}

i18n.init({
    resources,
    lng: "en"
})

export default i18n;