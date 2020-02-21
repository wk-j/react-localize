import i18n from "i18next"

const resources = {
    en: {
        translation: {
            "home": "Welcome to Wikipedia, the free encyclopedia that anyone can edit. 6, 018, 337 articles in English",
            "about": "Wikipedia is a multilingual, web-based, free-content encyclopedia project",
            "ok": "OK",
            "cancel": "Cancel",
            "en": "English",
            "th": "Thai"
        }
    },
    th: {
        translation: {
            "home": "ยินดีต้อนรับสู่วิกิพีเดีย สารานุกรมเสรีที่ทุกคนแก้ไขได้ วิกิพีเดียภาษาไทยมี 135, 362 บทความ",
            "about": "วิกิพีเดีย เป็นโครงการสารานุกรมเนื้อหาเสรีหลายภาษาบนเว็บ ",
            "ok": "ตกลง",
            "cancel": "ยกเลิก",
            "en": "อังกฤษ",
            "th": "ไทย"
        }
    }
}

i18n.init({
    resources,
    lng: "en"
})

export default i18n;