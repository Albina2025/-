import {
  Paper,
  Grid,
  Text,
  Title,
  TextInput,
  PasswordInput,
  Button,
  Container,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { api } from "../../api/axios";
import { setTokens } from "../../store/authSlice";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import type { AxiosError } from "axios";

export const AuthLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
        const response = await api.post("/api/v1/auth/login", { username, password });

      
        const accessToken = response.data.authenticationToken;
        const refreshToken = response.data.refreshToken;

        dispatch(setTokens({ accessToken, refreshToken }));

      navigate("/home");
    } catch (err: unknown) {
        const error = err as AxiosError<{ message: string }>;
        console.error("Login failed", error);
        setError(error.response?.data?.message || "Ошибка авторизации");
        } finally {
        setLoading(false);
        }
    };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1a1f",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container size="lg">
        <Paper
          radius="lg"
          style={{
            background: "#162126",
            width: 1100,
            padding: "32px 16px 32px 16px",
          }}
        >
          <Grid align="center">
            {/* Левый блок (лого и текст) */}
            <Grid.Col
              span={{ base: 12, md: 6 }}
              style={{
                width: 548,
                height: 428,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "10px",
              }}
            >
              <img
                src="http://10.111.70.97:3004/public/logo_light.svg"
                alt="logo"
                style={{ width: 200 }}
              />
              <Text
                size="lg"
                style={{
                  color: "white",
                  textAlign: "center",
                  letterSpacing: "-0.2px",
                  lineHeight: 1.4,
                }}
              >
                Координационный центр по обеспечению кибербезопасности
                ГКНБ Кыргызской Республики
              </Text>

              <Text
                size="lg"
                style={{
                  color: "white",
                  textAlign: "center",
                  letterSpacing: "-0.2px",
                  lineHeight: 1.4,
                }}
              >
                Кыргыз Республикасынын Улуттук коопсуздук мамлекеттик
                комитетинин Киберкоопсуздукту камсыздоо боюнча координациялык
                борбор
              </Text>
            </Grid.Col>

            {/* Правый блок (форма) */}
            <Grid.Col
              span={{ base: 12, md: 6 }}
              style={{ width: 546, height: 416, padding: "32px 16px 32px 16px" }}
            >
              <Paper radius="md" style={{ background: "#162126" }}>
                <Stack style={{ display: "flex", gap: 60 }}>
                  <Title order={2} ta="center" c="white">
                    Авторизация
                  </Title>

                  <form
                    onSubmit={handleLogin}
                    style={{ display: "flex", flexDirection: "column", gap: 30 }}
                  >
                    <TextInput
                      label={username ? "Логин" : undefined}
                      placeholder="Логин"
                      value={username}
                      onChange={(e) => setUsername(e.currentTarget.value)}
                      required
                      styles={{
                        input: {
                          backgroundColor: "#162126",
                          color: "white",
                          height: 48,
                          borderRadius: 16,
                          fontSize: 20,
                          padding: "0 15px",
                        },
                        label: { color: "white", fontSize: 14, marginBottom: 4 },
                      }}
                    />

                    <PasswordInput
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      label={password ? "Пароль" : undefined}
                      placeholder="Пароль"
                      required
                      styles={{
                        input: {
                          backgroundColor: "#162126",
                          color: "white",
                          height: 48,
                          borderRadius: 16,
                          fontSize: 20,
                          padding: "0 15px",
                        },
                        label: { color: "white", fontSize: 14, marginBottom: 4 },
                      }}
                      visibilityToggleIcon={({ reveal }) =>
                        reveal ? <IconEyeOff size={24} color="white" /> : <IconEye size={24} color="white" />
                      }
                    />

                    {error && <Text c="red">{error}</Text>}

                    <Button
                      type="submit"
                      fullWidth
                      style={{
                        height: 44,
                        backgroundColor: "#fff",
                        color: "black",
                        borderRadius: 16,
                        fontSize: 20,
                      }}
                      disabled={loading}
                    >
                      {loading ? "Входим..." : "Войти"}
                    </Button>
                  </form>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};
