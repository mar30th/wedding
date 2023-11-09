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
        groomResName: "Western Palace",
        brideResName: "Pleiku Palace",
        groomResLobby: "Spring Palace Lobby - 4th Floor",
        brideResLobby: "Vien Ngoc Xanh 1 Lobby - Ground Floor",
        groomResAddress: "443 - 445 Le Hong Phong Street, Ward 02, District 10, Ho Chi Minh City, Vietnam",
        brideResAddress: "03 Nguyen Tat Thanh Street, Ward Hoa Lu, Pleiku City, Gia Lai, Vietnam",
        mapButton: "Where to go",
        findOutButton: "Find Out More",
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
        groomResName: "Western Palace",
        brideResName: "Pleiku Palace",
        groomResLobby: "Sảnh Spring Palace - Tầng 4",
        brideResLobby: "Sảnh Viên Ngọc Xanh 1 - Tầng Trệt",
        groomResAddress: "443 - 445 Đường Lê Hồng Phong, Phường 02, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
        brideResAddress: "03 Đường Nguyễn Tất Thành, Phường Hoa Lư, Thành phố Pleiku, Tỉnh Gia Lai, Việt Nam",
        mapButton: "Xem Bản Đồ",
        findOutButton: "Xem Thêm",
        welcome: "Chào mừng",
        description: "Đây là một mô tả mẫu",
        test: "Đây là test",
      },
    },
  },
  fallbackLng: "vn",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
