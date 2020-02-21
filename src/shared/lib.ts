import i18n from "i18next"
import { useTranslation, initReactI18next, WithTranslation } from "react-i18next"

const resources = {
    en: {
        translation: {
            "welcome": "Hello world",
            "ok": "OK",
            "cancel": "Cancel"
        }
    },
    th: {
        translation: {
            "welcome": "สวัสดีชาวโลก",
            "ok": "ตกลง",
            "cancel": "ยกเลิก"
        }
    }
}

i18n.init({
    resources,
    lng: "en"
})

export default i18n;