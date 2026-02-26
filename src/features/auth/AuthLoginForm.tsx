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
// import { api } from "../../api/axios";
import {api} from '../../api/axios'
import { setTokens } from "../../store/authSlice";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import type { AxiosError } from "axios";
import { useMantineColorScheme } from '@mantine/core';
    // import type { AxiosError } from "axios";

export const AuthLoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';

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

      navigate("/subjects/private-sector");
    } catch (err: unknown) {
        const error = err as AxiosError<{ message: string }>;
        console.error("Login failed", error);
        setError(error.response?.data?.message || "Ошибка авторизации");
        } finally {
        setLoading(false);
        }
    };


// interface LoginResponse {
//   authenticationToken: string;
//   refreshToken: string;
//   roles: string[];
//   menu: {
//     parent: string;
//     children: string[];
//   }[];
//   systemLanguage: string;
// }

// export const AuthLoginForm = () => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const { colorScheme } = useMantineColorScheme();
//   const isDark = colorScheme === "dark";

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await api.post<LoginResponse>(
//         "/api/v1/auth/login",
//         {
//           username,
//           password,
//         }
//       );

//       const {
//         authenticationToken,
//         refreshToken,
//         roles,
//         menu,
//         systemLanguage,
//       } = response.data;

//       dispatch(
//         setTokens({
//           accessToken: authenticationToken,
//           refreshToken,
//           roles,
//           menu,
//           language: systemLanguage,
//         })
//       );

//       localStorage.setItem("accessToken", authenticationToken);
//       localStorage.setItem("refreshToken", refreshToken);

//       navigate("/");
//     } catch (err) {
//       const error = err as AxiosError<{ message: string }>;

//       setError(
//         error.response?.data?.message || "Ошибка авторизации"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };


  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDark ? "#0e1315" : "#f3f3f3",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container size="lg">
        <Paper
          radius="lg"
           p="xl"
          style={{
            background: isDark ? "#161d21" : "#fdfdfd",
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
                 src={
                    isDark
                    ? "http://10.111.70.97:3004/public/logo_light.svg"
                    : "http://10.111.70.97:3004/public/logo_dark.svg"
                }
                alt="logo"
                style={{ width: 200 }}
                
              />

           
     
              <Text
                size="lg"
                c={isDark ? "white" : "dark"}
                style={{
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
                c={isDark ? "white" : "dark"}
                style={{
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
              <Paper radius="md"  
                style={{
                    background: "transparent",
                }}>
                <Stack style={{ display: "flex", gap: 60 }}>
                  <Title order={2} ta="center"  c={isDark ? "white" : "dark"}>
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
                            background: "transparent",
                            height: 48,
                            borderRadius: 16,
                            fontSize: 20,
                            padding: "0 15px",
                        },
                        label: { fontSize: 14, marginBottom: 4 },
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
                            background: "transparent",
                            height: 48,
                            borderRadius: 16,
                            fontSize: 20,
                            padding: "0 15px",
                        },
                        label: { color: "white", fontSize: 14, marginBottom: 4 },
                      }}
                      visibilityToggleIcon={({ reveal }) =>
                        reveal ? <IconEye size={24} /> : <IconEyeOff size={24}   />
                      }
                    />

                    {error && <Text c="red">{error}</Text>}

                    <Button
                      type="submit"
                      fullWidth
                      style={{
                        height: 44,
                        borderRadius: 16,
                        fontSize: 20,
                        backgroundColor: isDark ? "#ffffff" : "#000000",
                        color: isDark ? "#000000" : "#ffffff",
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


// import {
//   Paper,
//   Grid,
//   Text,
//   Title,
//   TextInput,
//   PasswordInput,
//   Button,
//   Container,
//   Stack,
// } from "@mantine/core";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../hooks/use-app-dispatch";
// import { api } from "../../api/axios";
// import { setTokens } from "../../store/authSlice";
// import { IconEye, IconEyeOff } from "@tabler/icons-react";
// import { useMantineColorScheme } from "@mantine/core";
// import type { AxiosError } from "axios";

// interface LoginResponse {
//   authenticationToken: string;
//   refreshToken: string;
//   roles: string[];
//   menu: {
//     parent: string;
//     children: string[];
//   }[];
//   systemLanguage: string;
// }

// export const AuthLoginForm = () => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const { colorScheme } = useMantineColorScheme();
//   const isDark = colorScheme === "dark";

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await api.post<LoginResponse>(
//         "/api/v1/auth/login",
//         {
//           username,
//           password,
//         }
//       );

//       const {
//         authenticationToken,
//         refreshToken,
//         roles,
//         menu,
//         systemLanguage,
//       } = response.data;

//       dispatch(
//         setTokens({
//           accessToken: authenticationToken,
//           refreshToken,
//           roles,
//           menu,
//           language: systemLanguage,
//         })
//       );

//       localStorage.setItem("accessToken", authenticationToken);
//       localStorage.setItem("refreshToken", refreshToken);

//       navigate("/");
//     } catch (err) {
//       const error = err as AxiosError<{ message: string }>;

//       setError(
//         error.response?.data?.message || "Ошибка авторизации"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: isDark ? "#0e1315" : "#f3f3f3",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Container size="lg">
//         <Paper
//           radius="lg"
//           p="xl"
//           style={{
//             background: isDark ? "#161d21" : "#fdfdfd",
//             width: 1100,
//           }}
//         >
//           <Grid align="center">
//             <Grid.Col span={{ base: 12, md: 6 }}>
//               <Stack align="center">
//                 <Title order={2}>Авторизация</Title>

//                 <form
//                   onSubmit={handleLogin}
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: 20,
//                     width: "100%",
//                   }}
//                 >
//                   <TextInput
//                     placeholder="Логин"
//                     value={username}
//                     onChange={(e) =>
//                       setUsername(e.currentTarget.value)
//                     }
//                     required
//                   />

//                   <PasswordInput
//                     placeholder="Пароль"
//                     value={password}
//                     onChange={(e) =>
//                       setPassword(e.currentTarget.value)
//                     }
//                     required
//                     visibilityToggleIcon={({ reveal }) =>
//                       reveal ? (
//                         <IconEye size={18} />
//                       ) : (
//                         <IconEyeOff size={18} />
//                       )
//                     }
//                   />

//                   {error && <Text c="red">{error}</Text>}

//                   <Button
//                     type="submit"
//                     loading={loading}
//                     fullWidth
//                   >
//                     Войти
//                   </Button>
//                 </form>
//               </Stack>
//             </Grid.Col>
//           </Grid>
//         </Paper>
//       </Container>
//     </div>
//   );
// };