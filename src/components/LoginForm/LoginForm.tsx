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
// import { useAppDispatch } from "../../hooks/use-app-dispatch";
// import { useNavigate } from "react-router-dom";
// import { login } from "../../store/authSlice";
// import { IconEye, IconEyeOff } from "@tabler/icons-react";



// export const LoginForm = () => {

//     const [loginV, setLoginV] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();

//     const doLogin = (e: React.FormEvent) => {
//     e.preventDefault(); 
//     dispatch(login({ login: loginV, password }));
//     navigate("/home");
//   };

//   return (
//     <div 
//         style={{ 
//             minHeight: "100vh", 
//             background: "#0f1a1f", 
//             display: "flex", 
//             alignItems: "center" 
//         }}
//     >
//       <Container size="lg" >
//         <Paper
//           radius="lg"      
//           style={{
//             background: "#162126",
//             width: 1100, 
//             padding: "32px 16px 32px 16px",
            
//           }}
//         >
//             <Grid align="center">
            
          
//            <Grid.Col span={{ base: 12, md: 6 }}
           
//                 style={{
//                     width: 548,
//                     height: 428,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",     
//                     textAlign: "center",
//                     gap: "10px",
                
//                 }}
//             >
//             <img
//                 src="http://10.111.70.97:3004/public/logo_light.svg"
//                 alt="logo"
//                 style={{ width: 200 }}
//             />
//             <Text 
//                 size="lg" 
//                 style={{ color: "white", 
//                 textAlign: "center",
//                 letterSpacing: "-0.2px",  
//                 lineHeight: 1.4, 
//                 }}
//             >
//                 Координационный центр по обеспечению кибербезопасности
//                 ГКНБ Кыргызской Республики
//             </Text>
            
//             <Text 
//                 size="lg" 
//                 style={{ 
//                     color: "white", 
//                     textAlign: "center", 
//                     letterSpacing: "-0.2px",
//                     lineHeight: 1.4, 
//                     }}
//                 >
//                 Кыргыз Республикасынын Улуттук коопсуздук мамлекеттик
//                 комитетинин Киберкоопсуздукту камсыздоо боюнча координациялык борбор
//             </Text>
//             </Grid.Col>


          
        
//             <Grid.Col  span={{ base: 12, md: 6 }}
//               style={{width: 546, height: 416, padding: "32px 16px 32px 16px",}}>
//               <Paper
                
//                 radius="md"
//                 style={{ background: "#162126" }}
//               >
//                 <Stack 
//                     style={{display: "flex", gap: 60}}
//                 >
//                   <Title order={2} ta="center" c="white" >
//                     Авторизация
//                   </Title>

                

//                 <form 
//                     onSubmit={doLogin} 
//                     style={{ 
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: 30 
//                     }}
//                 >

//                     <TextInput
//                         label={loginV ? "Логин" : undefined}
//                         placeholder="Логин"
//                         value={loginV}
//                         onChange={(e) => setLoginV(e.currentTarget.value)}
//                         required
//                         styles={{
//                             input: {
//                             backgroundColor: "#162126",
//                             color: "white",
//                             height: 48,
//                             borderRadius: 16,
//                             fontSize: 20,
//                             padding: "0 15",
//                             },
//                             label: {
//                             color: "white",
//                             fontSize: 14,
//                             marginBottom: 4,
//                             },
//                         }}
//                     />


//                     <PasswordInput
//                         value={password} 
//                         onChange={(e) => setPassword(e.currentTarget.value)}
//                         label={password ? "Пароль" : undefined}
//                         placeholder="Пароль"
//                         type="password"
//                         required
//                         styles={{
//                             input: { 
//                                 backgroundColor: "#162126", 
//                                 color: "white", 
//                                 height: 48, 
//                                 borderRadius: 16, 
//                                 fontSize: 20, 
//                                 padding: "0 15px" 
//                             },        
//                             label: {
//                                 color: "white",
//                                 fontSize: 14,
//                                 marginBottom: 4,
//                             },
//                         }}
//                         visibilityToggleIcon={({ reveal }) =>
//                             reveal ? (
//                             <IconEyeOff size={24} color="white" />
//                             ) : (
//                             <IconEye size={24} color="white"  />
//                             )
//                         }
//                     />

//                     <div>
//                         <br />
//                     </div>

//                     <Button
//                         type="submit"
//                         fullWidth
//                         // mt="md"
//                         style={{
//                             height: 44,
//                             backgroundColor: "#fff",
//                             color: "black",
//                             borderRadius: 16,
//                             fontSize: 20,
//                         }}
//                         >
//                         Войти
//                     </Button>
//                 </form>
                
//                 </Stack>
//               </Paper>
//             </Grid.Col>

//           </Grid>
//         </Paper>


//       </Container>
//     </div>
//   );
// };


