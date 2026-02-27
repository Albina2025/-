import React, { useEffect } from "react";
import { Group, Button, Select } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { logout } from "../store/authSlice";

export const Header: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isDark = colorScheme === "dark";
  const currentLang = i18n.language || "ru";

  useEffect(() => {
    console.log("Language changed:", i18n.language);
  }, [i18n.language]);

    const handleLogout = () => {
    dispatch(logout());        
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");   
    navigate("/");        
  };

  return (
    <Group justify="space-between" style={{ height: "100%", maxWidth: "100%" }}>
   

      <div style={{ fontWeight: 700, fontSize: 28 }}>
        КЦОКБ
      </div>

      <Group gap="md">

        <Select
          value={currentLang}
          onChange={(value) => {
            if (!value) return;
            i18n.changeLanguage(value);
            localStorage.setItem("i18nextLng", value);
          }}
          data={[
            { value: "ru", label: "Русский" },
            { value: "kg", label: "Кыргызча" },
          ]}
          size="md"
          radius="xl"
          w={160}
        />

        <Button
          variant="outline"
          onClick={() => toggleColorScheme()}
          radius="xl"
        >
          {isDark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
        </Button>

        <Button variant="outline" radius="xl"  onClick={handleLogout}>
          {t("header.getOut")}
        </Button>

      </Group>
    </Group>
  );
};