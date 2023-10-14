import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        groomName: "Thomas",
        brideName: "Lacie",
        wedReception: "Wedding Reception",
        groomParty: "Groom's Party",
        brideParty: "Bride's Party",
        groomPartyTime: "Saturday | 02-12-2023 | 06:00 PM.",
        bridePartyTime: "Saturday | 18-11-2023 | 11:00 AM.",
        mapButton: "Where to go",
        welcome: "Welcome",
        description: "This is description",
        test: "This is test"
      },
    },
    vn: {
      translation: {
        groomName: "Đông",
        brideName: "Phương",
        wedReception: "Tiệc Đám Cưới",
        groomParty: "Tiệc Nhà Trai",
        brideParty: "Tiệc Nhà Gái",
        groomPartyTime: "Thứ Bảy | 02-12-2023 | 06:00 Tối.",
        bridePartyTime: "Thứ Bảy | 18-11-2023 | 11:00 Trưa.",
        mapButton: "Xem Bản Đồ",
        welcome: "Chào mừng",
        description: "Đây là một mô tả mẫu",
        test: "Đây là test",
      },
    },
  },
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
