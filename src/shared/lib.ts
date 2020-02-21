import i18n from "i18next"

type Keys =
    | "homeLink"
    | "aboutLink"
    | "home"
    | "about"
    | "ok"
    | "cancel"
    | "lang"

const resources = {
    en: {
        translation: {
            "homeLink": "Home",
            "aboutLink": "About",
            "home": "Welcome to Wikipedia, the free encyclopedia that anyone can edit. 6, 018, 337 articles in English",
            "about": "Wikipedia is a multilingual, web-based, free-content encyclopedia project",
            "ok": "OK",
            "cancel": "Cancel",
            "lang": "ไทย"
        }
    },
    th: {
        translation: {
            "homeLink": "หน้าแรก",
            "aboutLink": "เกี่ยวกับ",
            "home": "ยินดีต้อนรับสู่วิกิพีเดีย สารานุกรมเสรีที่ทุกคนแก้ไขได้ วิกิพีเดียภาษาไทยมี 135, 362 บทความ",
            "about": "วิกิพีเดีย เป็นโครงการสารานุกรมเนื้อหาเสรีหลายภาษาบนเว็บ ",
            "ok": "ตกลง",
            "cancel": "ยกเลิก",
            "lang": "English"
        }
    }
}

let X = typeof (resources.en).translation

i18n.init({
    resources,
    lng: "en"
})

export { i18n, Keys };