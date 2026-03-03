// import {
//     Stack,
//     Group,
//     Switch,
//     Grid,
//     Box,
//     Title,
//     Divider,
// } from '@mantine/core';
// import { useState } from 'react';
// import { FloatingInput } from '../../../UI/input/FloatingInput';
// import { useDispatch } from 'react-redux';
// import  {  addItem } from '../../../store/dataSlice';
// import { FloatingSelect } from '../../../UI/input/FloatingSelect';
// import { IconCheck, IconX } from '@tabler/icons-react';
// import { BaseModal } from '../../../UI/modal/BaseModal';
// import { BaseButton } from '../../../UI/button/BaseButton';
// import { useTranslation } from "react-i18next";


// interface AiAddModalProps {
//     opened: boolean;
//     onClose: () => void;
// }

// export const AiAddModal: React.FC<AiAddModalProps> = ({
//     opened,
//     onClose,
// }) => {
//   const dispatch = useDispatch();
//   const [useAPI, setUseAPI] = useState(false);
//   const { t } = useTranslation();

//   const [form, setForm] = useState({
//     subject: '',
//     platformType: '',
//     equipmentName: '',
//     equipmentPurpose: '',
//     ownerDepartment: '',
//     equipmentSupplier: '',
//     purchaseDate: '',
//     purchaseAmount: '',
//     currency: '',
//     shortCharacteristics: '',
//     aiModelName: '',
//     aiModelPurpose: '',
//     aiModelDeveloper: '',
//     apiProvider: '',
//   });

//   const handleChange = (field: string, value: string) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     dispatch(
//        addItem({
//         id: crypto.randomUUID(),
//         type: 'ai',
//         data: {
//           name: form.aiModelName,
//           value: 0, 
//           action: 'new',
//           apiUsage: useAPI,
//           subject: form.subject,
//           platformType: form.platformType,
//           equipmentName: form.equipmentName,
//           equipmentPurpose: form.equipmentPurpose,
//           ownerDepartment: form.ownerDepartment,
//           equipmentSupplier: form.equipmentSupplier,
//           purchaseDate: form.purchaseDate,
//           purchaseAmount: Number(form.purchaseAmount),
//           currency: form.currency,
//           shortCharacteristics: form.shortCharacteristics,
//           aiModelName: form.aiModelName,
//           aiModelPurpose: form.aiModelPurpose,
//           aiModelDeveloper: form.aiModelDeveloper,
//           apiProvider: useAPI ? form.apiProvider : '',
//         },
//       })
//     );


//     setForm({
//       subject: '',
//       platformType: '',
//       equipmentName: '',
//       equipmentPurpose: '',
//       ownerDepartment: '',
//       equipmentSupplier: '',
//       purchaseDate: '',
//       purchaseAmount: '',
//       currency: '',
//       shortCharacteristics: '',
//       aiModelName: '',
//       aiModelPurpose: '',
//       aiModelDeveloper: '',
//       apiProvider: '',
//     });

//     setUseAPI(false);
//     onClose();
//   };

//   return (
//     <BaseModal
//       opened={opened}
//       onClose={onClose}
//       size={1200} 
//       radius={15}
//       centered
//       withCloseButton={false}
//       styles={{
//         body: { padding: 24 },
//       }}
//     >
//       <Box
//         p="md"
//         style={{
//             border: '1px solid #303d43',
//             borderRadius: 8,
//         }}
//       >
//         <Stack gap="lg">
//           <Title order={3} ta="center">
//              {t("aiModal.title")}
//           </Title>

//         <Divider 
//             style={{
//                 border: '1px solid #303d43',
//             }}
//         />

         
//           <Box
//             p="md"
//             style={{
//                 border: '1px solid #303d43',
//                 borderRadius: 8,
//             }}
//           >
//             <Stack gap="md">
//               <Title order={5} ta="center">
//                 {t("aiModal.model")}
//               </Title>

//               <Grid gutter="xs">
//                 <Grid.Col span={6}>
//                   <FloatingSelect
//                     labelText={t("aiModal.fields.subject")}
//                     value={form.subject}
//                     onChange={(value) =>
//                     handleChange('subject', value || '')
//                     }
//                      data={[
//                         { value: 'state', label: 'Мамлекеттик' },
//                         { value: 'private', label: 'Жеке' },
//                      ]}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingSelect
//                     labelText={t("aiModal.fields.platformType")}
//                     value={form.platformType}
//                     onChange={(value) =>
//                     handleChange('platformType', value || '')
//                     }
//                       data={[
//                         { value: 'server', label: 'Сервер' },
//                         { value: 'workstation', label: 'Рабочая станция' },
//                       ]}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.equipmentName")}
//                     value={form.equipmentName}
//                     onChange={(e) =>
//                       handleChange('equipmentName', e.currentTarget.value)
//                     }
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.equipmentPurpose")}
//                     value={form.equipmentPurpose}
//                     onChange={(e) =>
//                       handleChange('equipmentPurpose', e.currentTarget.value)
//                     }
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.ownerDepartment")}
//                     value={form.ownerDepartment}
//                     onChange={(e) =>
//                       handleChange('ownerDepartment', e.currentTarget.value)
//                     }
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.equipmentSupplier")}
//                     value={form.equipmentSupplier}
//                     onChange={(e) =>
//                       handleChange(
//                         'equipmentSupplier',
//                         e.currentTarget.value
//                       )
//                     }
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     type="date"
//                     labelText={t("aiModal.fields.purchaseDate")}
//                     value={form.purchaseDate}
//                     onChange={(e) =>
//                        handleChange('purchaseDate', e.currentTarget.value)
//                     }
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.purchaseAmount")}
//                     type="number"
//                     value={form.purchaseAmount}
//                     onChange={(e) =>
//                       handleChange(
//                         'purchaseAmount',
//                         e.currentTarget.value
//                       )
//                     }
//                   />
//                 </Grid.Col>

//                <Grid.Col span={6}>
//                   <FloatingSelect
//                     labelText={t("aiModal.fields.currency")}
//                     value={form.currency}
//                     onChange={(value) =>
//                       handleChange('currency', value || '')
//                     }
//                     data={[
//                       { value: 'сом', label: t("softwareModal.currencyOptions.som") },
//                       { value: 'евро', label:  t("softwareModal.currencyOptions.euro") },
//                       { value: 'доллар', label:  t("softwareModal.currencyOptions.dollar") },
//                     ]}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.shortCharacteristics")}
//                     value={form.shortCharacteristics}
//                     onChange={(e) =>
//                       handleChange(
//                         'shortCharacteristics',
//                         e.currentTarget.value
//                       )
//                     }
//                   />
//                 </Grid.Col>
//               </Grid>
//             </Stack>
//           </Box>

      
//           <Box
//             p="md"
//             style={{
//               border: '1px solid #303d43',
//               borderRadius: 8,
//             }}
//           >
//             <Stack gap="md">
//               <Title order={5} ta="center">
//                  {t("aiModal.model")}
//               </Title>

//               <Switch
//                 label={t("aiModal.fields.useAPI")}
//                 checked={useAPI}
//                 onChange={(event) =>
//                     setUseAPI(event.currentTarget.checked)
//                 }

                
//                 color="green"

               
//                 thumbIcon={
//                     useAPI ? (
//                     <IconCheck size={12} color="green" />
//                     ) : (
//                     <IconX size={12} color="red" />
//                     )
//                 }

//                 styles={{
//                     track: {
//                     backgroundColor: useAPI ? '#12b886' : '#fa5252', 
//                     },
//                     thumb: {
//                     backgroundColor: 'white',
//                     },
//                 }}
//                 />

//               <Grid gutter="md">
//                 <Grid.Col span={6}>
//                   <FloatingSelect
//                     labelText={t("aiModal.fields.aiModelName")}
//                     value={form.aiModelName}
//                     onChange={(value) =>
//                         handleChange('aiModelName', value || '')
//                     }
//                     data={[
//                       { value: 'gpt-3.5', label: 'GPT-3.5' },
//                     ]}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.aiModelPurpose")}
//                     value={form.aiModelPurpose}
//                     onChange={(e) =>
//                       handleChange(
//                         'aiModelPurpose',
//                         e.currentTarget.value
//                       )
//                     }
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.aiModelDeveloper")}
//                     value={form.aiModelDeveloper}
//                     onChange={(e) =>
//                       handleChange(
//                         'aiModelDeveloper',
//                         e.currentTarget.value
//                       )
//                     }
//                   />
//                 </Grid.Col>

//                 {useAPI && (
//                   <Grid.Col span={12}>
//                     <FloatingInput
//                       labelText={t("aiModal.fields.apiProvider")}
//                       value={form.apiProvider}
//                       onChange={(e) =>
//                         handleChange(
//                           'apiProvider',
//                           e.currentTarget.value
//                         )
//                       }
//                     />
//                   </Grid.Col>
//                 )}
//               </Grid>
//             </Stack>
//           </Box>

//           <Group justify="center" mt="md">
//             <BaseButton 
//                 variantType="secondary" 
//                 onClick={onClose}
//             >
//               {t("aiModal.buttons.cancel")}
//             </BaseButton>
//             <BaseButton 
//                 variantType='primary' 
//                 onClick={handleSubmit}
//             >
//               {t("aiModal.buttons.confirm")}
//             </BaseButton>
//           </Group>
//         </Stack>
//       </Box>
//     </BaseModal>
//   );
// };



// import {
//   Stack,
//   Group,
//   Switch,
//   Grid,
//   Box,
//   Title,
//   Divider,
// } from "@mantine/core";
// import { useState } from "react";
// import { useForm } from "@mantine/form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { notifications } from "@mantine/notifications";
// import { IconCheck, IconX } from "@tabler/icons-react";
// import { BaseModal } from "../../../UI/modal/BaseModal";
// import { BaseButton } from "../../../UI/button/BaseButton";
// import { FloatingInput } from "../../../UI/input/FloatingInput";
// // import { FloatingSelect } from "../../../UI/input/FloatingSelect";
// import { useTranslation } from "react-i18next";
// // import axios from "axios";

// import type {AiFormValues} from "../../../types/ai/ai.form.types";
// import type {CreateAiRequest} from "../../../types/ai/ai.request.types";

// import { api } from "../../../api/axios";

// interface AiAddModalProps {
//   opened: boolean;
//   onClose: () => void;
// }

// export const AiAddModal: React.FC<AiAddModalProps> = ({
//   opened,
//   onClose,
// }) => {
//   const { t } = useTranslation();
//   const queryClient = useQueryClient();
//   const [useAPI, setUseAPI] = useState(false);

//   // ✅ useForm with generic
//   const form = useForm<AiFormValues>({
//     initialValues: {
//       ministryId: "",
//       computePlatformTypeId: "",
//       hardwareName: "",
//       hardwarePurpose: "",
//       responsibleUnit: "",
//       hardwareSupplier: "",
//       purchaseDate: "",
//       purchaseAmount: "",
//       purchaseCurrencyId: "",
//       hardwareSpecs: "",
//       modelName: "",
//       modelPurpose: "",
//       modelDeveloper: "",
//       usesApi: false,
//       apiProvider: "",
//     },
//   });

//   // ✅ payload mapping function
//   const mapToRequest = (values: AiFormValues): CreateAiRequest => {
//   return {
//     ministryId: Number(values.ministryId),
//     computePlatformTypeId: Number(values.computePlatformTypeId),
//     hardwareName: values.hardwareName,
//     hardwarePurpose: values.hardwarePurpose,
//     responsibleUnit: values.responsibleUnit,
//     hardwareSupplier: values.hardwareSupplier,
//     purchaseDate: values.purchaseDate,
//     purchaseAmount: values.purchaseAmount,
//     purchaseCurrencyId: Number(values.purchaseCurrencyId),
//     hardwareSpecs: values.hardwareSpecs,
//     modelName: values.modelName,
//     modelPurpose: values.modelPurpose,
//     modelDeveloper: values.modelDeveloper,
//     usesApi: values.usesApi,
//     apiProvider: values.usesApi ? values.apiProvider : "",
//   };
// };

//   // ✅ POST mutation
//   const mutation = useMutation({
//     mutationFn: async (data: CreateAiRequest) => {
//       // const response = await axios.post("/api/v1/ai",data);
//       const response = await api.post("/api/v1/ai", data);
//       // const response = await api.post("/api/v1/auth/login", { username, password });
//       return response.data;
//     },
//     onSuccess: () => {
//       notifications.show({
//         title: "Success",
//         message: "AI created successfully",
//         color: "green",
//       });

//       queryClient.invalidateQueries({ queryKey: ["ai"] });

//       form.reset();
//       setUseAPI(false);
//       onClose();
//     },
//     onError: () => {
//       notifications.show({
//         title: "Error",
//         message: "Something went wrong",
//         color: "red",
//       });
//     },
//   });

//   // ✅ submit handler
//   const handleSubmit = (values: AiFormValues) => {
//     const requestData = mapToRequest(values);
//     mutation.mutate(requestData);
//   };

//   return (
//     <BaseModal
//   opened={opened}
//   onClose={onClose}
//   size={1200}
//   radius={15}
//   centered
//   withCloseButton={false}
// >
//   <Box p="md">
//     <Stack gap="lg">
//       <Title order={3} ta="center">
//         {t("aiModal.title")}
//       </Title>

//       <Divider />

//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <Stack gap="xl">

//           {/* ================= MODEL INFO ================= */}
//           <Box
//             p="md"
//             style={{
//               border: "1px solid #303d43",
//               borderRadius: 8,
//             }}
//           >
//             <Stack gap="md">
//               <Title order={5} ta="center">
//                 {t("aiModal.model")}
//               </Title>

//               <Grid gutter="md">
//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.aiModelName")}
//                     {...form.getInputProps("aiModelName")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.aiModelPurpose")}
//                     {...form.getInputProps("aiModelPurpose")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.aiModelDeveloper")}
//                     {...form.getInputProps("aiModelDeveloper")}
//                   />
//                 </Grid.Col>
//               </Grid>
//             </Stack>
//           </Box>

//           {/* ================= HARDWARE INFO ================= */}
//           <Box
//             p="md"
//             style={{
//               border: "1px solid #303d43",
//               borderRadius: 8,
//             }}
//           >
//             <Stack gap="md">
//               <Title order={5} ta="center">
//                 {t("aiModal.hardware")}
//               </Title>

//               <Grid gutter="md">
//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.subject")}
//                     {...form.getInputProps("subject")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.platformType")}
//                     {...form.getInputProps("platformType")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.equipmentName")}
//                     {...form.getInputProps("equipmentName")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.equipmentPurpose")}
//                     {...form.getInputProps("equipmentPurpose")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.ownerDepartment")}
//                     {...form.getInputProps("ownerDepartment")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.equipmentSupplier")}
//                     {...form.getInputProps("equipmentSupplier")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     type="date"
//                     labelText={t("aiModal.fields.purchaseDate")}
//                     {...form.getInputProps("purchaseDate")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     type="number"
//                     labelText={t("aiModal.fields.purchaseAmount")}
//                     {...form.getInputProps("purchaseAmount")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={6}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.currency")}
//                     {...form.getInputProps("currency")}
//                   />
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                   <FloatingInput
//                     labelText={t("aiModal.fields.shortCharacteristics")}
//                     {...form.getInputProps("shortCharacteristics")}
//                   />
//                 </Grid.Col>
//               </Grid>
//             </Stack>
//           </Box>

//           {/* ================= API SECTION ================= */}
//           <Box
//             p="md"
//             style={{
//               border: "1px solid #303d43",
//               borderRadius: 8,
//             }}
//           >
//             <Stack gap="md">
//               <Title order={5} ta="center">
//                 API
//               </Title>

//               <Switch
//                 label={t("aiModal.fields.useAPI")}
//                 checked={useAPI}
//                 onChange={(e) =>
//                   setUseAPI(e.currentTarget.checked)
//                 }
//                 thumbIcon={
//                   useAPI ? (
//                     <IconCheck size={12} />
//                   ) : (
//                     <IconX size={12} />
//                   )
//                 }
//               />

//               {useAPI && (
//                 <Grid>
//                   <Grid.Col span={12}>
//                     <FloatingInput
//                       labelText={t("aiModal.fields.apiProvider")}
//                       {...form.getInputProps("apiProvider")}
//                     />
//                   </Grid.Col>
//                 </Grid>
//               )}
//             </Stack>
//           </Box>

//           {/* ================= BUTTONS ================= */}
//           <Group justify="center" mt="md">
//             <BaseButton
//               variantType="secondary"
//               type="button"
//               onClick={onClose}
//             >
//               {t("aiModal.buttons.cancel")}
//             </BaseButton>

//             <BaseButton
//               variantType="primary"
//               type="submit"
//               loading={mutation.isPending}
//             >
//               {t("aiModal.buttons.confirm")}
//             </BaseButton>
//           </Group>

//         </Stack>
//       </form>
//     </Stack>
//   </Box>
// </BaseModal>
//   );
// };

// import {
//   Stack,
//   Group,
//   Switch,
//   Grid,
//   Box,
//   Title,
//   Divider,
// } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { notifications } from "@mantine/notifications";
// import { IconCheck, IconX } from "@tabler/icons-react";
// import { BaseModal } from "../../../UI/modal/BaseModal";
// import { BaseButton } from "../../../UI/button/BaseButton";
// import { FloatingInput } from "../../../UI/input/FloatingInput";
// import { useTranslation } from "react-i18next";

// import type { AiFormValues } from "../../../types/ai/ai.form.types";
// import type { CreateAiRequest } from "../../../types/ai/ai.request.types";

// import { api } from "../../../api/axios";

// interface AiAddModalProps {
//   opened: boolean;
//   onClose: () => void;
// }

// export const AiAddModal: React.FC<AiAddModalProps> = ({
//   opened,
//   onClose,
// }) => {
//   const { t } = useTranslation();
//   const queryClient = useQueryClient();

//   // ✅ FORM
//   const form = useForm<AiFormValues>({
//     initialValues: {
//       ministryId: "",
//       computePlatformTypeId: "",
//       hardwareName: "",
//       hardwarePurpose: "",
//       responsibleUnit: "",
//       hardwareSupplier: "",
//       purchaseDate: "",
//       purchaseAmount: "",
//       purchaseCurrencyId: "",
//       hardwareSpecs: "",
//       modelName: "",
//       modelPurpose: "",
//       modelDeveloper: "",
//       usesApi: false,
//       apiProvider: "",
//     },
//   });

//   // ✅ MAP TO DTO
//   const mapToRequest = (
//     values: AiFormValues
//   ): CreateAiRequest => {
//     return {
//       ministryId: Number(values.ministryId),
//       computePlatformTypeId: Number(values.computePlatformTypeId),
//       hardwareName: values.hardwareName,
//       hardwarePurpose: values.hardwarePurpose,
//       responsibleUnit: values.responsibleUnit,
//       hardwareSupplier: values.hardwareSupplier,
//       purchaseDate: values.purchaseDate,
//       purchaseAmount: values.purchaseAmount,
//       purchaseCurrencyId: Number(values.purchaseCurrencyId),
//       hardwareSpecs: values.hardwareSpecs,
//       modelName: values.modelName,
//       modelPurpose: values.modelPurpose,
//       modelDeveloper: values.modelDeveloper,
//       usesApi: values.usesApi,
//       apiProvider: values.usesApi ? values.apiProvider : "",
//     };
//   };

//   // ✅ MUTATION
//   const mutation = useMutation({
//     mutationFn: async (data: CreateAiRequest) => {
//       const response = await api.post("/api/v1/ai", data);
//       return response.data;
//     },
//     onSuccess: () => {
//       notifications.show({
//         title: "Success",
//         message: "AI created successfully",
//         color: "green",
//       });

//       queryClient.invalidateQueries(); //{ queryKey: ["ai"] }

//       form.reset();
//       onClose();
//     },
//     onError: () => {
//       notifications.show({
//         title: "Error",
//         message: "Something went wrong",
//         color: "red",
//       });
//     },
//   });

//   // ✅ SUBMIT
//   const handleSubmit = (values: AiFormValues) => {
//     const requestData = mapToRequest(values);
//     mutation.mutate(requestData);
//   };

//   return (
//     <BaseModal
//       opened={opened}
//       onClose={onClose}
//       size={1200}
//       radius={15}
//       centered
//       withCloseButton={false}
//     >
//       <Box p="md">
//         <Stack gap="lg">
//           <Title order={3} ta="center">
//             {t("aiModal.title")}
//           </Title>

//           <Divider />

//           <form onSubmit={form.onSubmit(handleSubmit)}>
//             <Stack gap="xl">

//               {/* ================= BASIC INFO ================= */}
//               <Box
//                 p="md"
//                 style={{
//                   border: "1px solid #303d43",
//                   borderRadius: 8,
//                 }}
//               >
//                 <Stack gap="md">
//                   <Title order={5} ta="center">
//                     Basic Information
//                   </Title>

//                   <Grid gutter="md">
//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Ministry ID"
//                         {...form.getInputProps("ministryId")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Compute Platform Type ID"
//                         {...form.getInputProps("computePlatformTypeId")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Hardware Name"
//                         {...form.getInputProps("hardwareName")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Hardware Purpose"
//                         {...form.getInputProps("hardwarePurpose")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Responsible Unit"
//                         {...form.getInputProps("responsibleUnit")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Hardware Supplier"
//                         {...form.getInputProps("hardwareSupplier")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         type="date"
//                         labelText="Purchase Date"
//                         {...form.getInputProps("purchaseDate")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         type="number"
//                         labelText="Purchase Amount"
//                         {...form.getInputProps("purchaseAmount")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Purchase Currency ID"
//                         {...form.getInputProps("purchaseCurrencyId")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={12}>
//                       <FloatingInput
//                         labelText="Hardware Specs"
//                         {...form.getInputProps("hardwareSpecs")}
//                       />
//                     </Grid.Col>
//                   </Grid>
//                 </Stack>
//               </Box>

//               {/* ================= MODEL INFO ================= */}
//               <Box
//                 p="md"
//                 style={{
//                   border: "1px solid #303d43",
//                   borderRadius: 8,
//                 }}
//               >
//                 <Stack gap="md">
//                   <Title order={5} ta="center">
//                     Model Information
//                   </Title>

//                   <Grid>
//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Model Name"
//                         {...form.getInputProps("modelName")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={6}>
//                       <FloatingInput
//                         labelText="Model Purpose"
//                         {...form.getInputProps("modelPurpose")}
//                       />
//                     </Grid.Col>

//                     <Grid.Col span={12}>
//                       <FloatingInput
//                         labelText="Model Developer"
//                         {...form.getInputProps("modelDeveloper")}
//                       />
//                     </Grid.Col>
//                   </Grid>
//                 </Stack>
//               </Box>

//               {/* ================= API ================= */}
//               <Box
//                 p="md"
//                 style={{
//                   border: "1px solid #303d43",
//                   borderRadius: 8,
//                 }}
//               >
//                 <Stack gap="md">
//                   <Title order={5} ta="center">
//                     API
//                   </Title>

//                   <Switch
//                     label="Uses API"
//                     {...form.getInputProps("usesApi", {
//                       type: "checkbox",
//                     })}
//                     thumbIcon={
//                       form.values.usesApi ? (
//                         <IconCheck size={12} />
//                       ) : (
//                         <IconX size={12} />
//                       )
//                     }
//                   />

//                   {form.values.usesApi && (
//                     <FloatingInput
//                       labelText="API Provider"
//                       {...form.getInputProps("apiProvider")}
//                     />
//                   )}
//                 </Stack>
//               </Box>

//               {/* ================= BUTTONS ================= */}
//               <Group justify="center">
//                 <BaseButton
//                   variantType="secondary"
//                   type="button"
//                   onClick={onClose}
//                 >
//                   Cancel
//                 </BaseButton>

//                 <BaseButton
//                   variantType="primary"
//                   type="submit"
//                   loading={mutation.isPending}
//                 >
//                   Confirm
//                 </BaseButton>
//               </Group>

//             </Stack>
//           </form>
//         </Stack>
//       </Box>
//     </BaseModal>
//   );
// };

import {
  Stack,
  Group,
  Switch,
  Grid,
  Box,
  Title,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { BaseModal } from "../../../UI/modal/BaseModal";
import { BaseButton } from "../../../UI/button/BaseButton";
import { FloatingInput } from "../../../UI/input/FloatingInput";
import { useTranslation } from "react-i18next";

import type { AiFormValues } from "../../../types/ai/ai.form.types";
import type { CreateAiRequest } from "../../../types/ai/ai.request.types";

import { api } from "../../../api/axios";

interface AiAddModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AiAddModal: React.FC<AiAddModalProps> = ({
  opened,
  onClose,
}) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const form = useForm<AiFormValues>({
    initialValues: {
      ministryId: "",
      computePlatformTypeId: "",
      hardwareName: "",
      hardwarePurpose: "",
      responsibleUnit: "",
      hardwareSupplier: "",
      purchaseDate: "",
      purchaseAmount: "",
      purchaseCurrencyId: "",
      hardwareSpecs: "",
      modelName: "",
      modelPurpose: "",
      modelDeveloper: "",
      usesApi: false,
      apiProvider: "",
    },
  });

  const mapToRequest = (
    values: AiFormValues
  ): CreateAiRequest => {
    return {
      ministryId: Number(values.ministryId),
      computePlatformTypeId: Number(values.computePlatformTypeId),
      hardwareName: values.hardwareName,
      hardwarePurpose: values.hardwarePurpose,
      responsibleUnit: values.responsibleUnit,
      hardwareSupplier: values.hardwareSupplier,
      purchaseDate: values.purchaseDate,
      purchaseAmount: values.purchaseAmount,
      purchaseCurrencyId: Number(values.purchaseCurrencyId),
      hardwareSpecs: values.hardwareSpecs,
      modelName: values.modelName,
      modelPurpose: values.modelPurpose,
      modelDeveloper: values.modelDeveloper,
      usesApi: values.usesApi,
      apiProvider: values.usesApi ? values.apiProvider : "",
    };
  };

  const mutation = useMutation({
    mutationFn: async (data: CreateAiRequest) => {
      const response = await api.post("/api/v1/ai", data);
      return response.data;
    },
    onSuccess: () => {
      notifications.show({
        title: t("notifications.success"),
        message: t("notifications.aiCreated"),
        color: "green",
      });

      queryClient.invalidateQueries({ queryKey: ["ai"] });

      form.reset();
      onClose();
    },
    onError: () => {
      notifications.show({
        title: t("notifications.error"),
        message: t("notifications.somethingWrong"),
        color: "red",
      });
    },
  });

  const handleSubmit = (values: AiFormValues) => {
    mutation.mutate(mapToRequest(values));
  };

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      size={1200}
      radius={15}
      centered
      withCloseButton={false}
    >
      <Box p="md">
        <Stack gap="lg">

          <Title order={3} ta="center">
            {t("aiModal.title")}
          </Title>

          <Divider />

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="xl">

              {/* ================= HARDWARE ================= */}
              <Box p="md" style={{ border: "1px solid #303d43", borderRadius: 8 }}>
                <Stack gap="md">

                  <Title order={5} ta="center">
                    {t("aiModal.hardware")}
                  </Title>

                  <Grid gutter="md">
                    {[
                      "ministryId",
                      "computePlatformTypeId",
                      "hardwareName",
                      "hardwarePurpose",
                      "responsibleUnit",
                      "hardwareSupplier",
                      "purchaseDate",
                      "purchaseAmount",
                      "purchaseCurrencyId",
                      "hardwareSpecs",
                    ].map((field) => (
                      <Grid.Col span={6} key={field}>
                        <FloatingInput
                          type={field === "purchaseDate" ? "date" : field === "purchaseAmount" ? "number" : "text"}
                          labelText={t(`aiModal.fields.${field}`)}
                          {...form.getInputProps(field)}
                        />
                      </Grid.Col>
                    ))}
                  </Grid>
                </Stack>
              </Box>

              {/* ================= MODEL ================= */}
              <Box p="md" style={{ border: "1px solid #303d43", borderRadius: 8 }}>
                <Stack gap="md">

                  <Title order={5} ta="center">
                    {t("aiModal.model")}
                  </Title>

                  <Grid>
                    {[
                      "modelName",
                      "modelPurpose",
                      "modelDeveloper",
                    ].map((field) => (
                      <Grid.Col span={field === "modelDeveloper" ? 12 : 6} key={field}>
                        <FloatingInput
                          labelText={t(`aiModal.fields.${field}`)}
                          {...form.getInputProps(field)}
                        />
                      </Grid.Col>
                    ))}
                  </Grid>
                </Stack>
              </Box>

              {/* ================= API ================= */}
              <Box p="md" style={{ border: "1px solid #303d43", borderRadius: 8 }}>
                <Stack gap="md">

                  <Title order={5} ta="center">
                    API
                  </Title>

                  <Switch
                    label={t("aiModal.fields.usesApi")}
                    {...form.getInputProps("usesApi", {
                      type: "checkbox",
                    })}
                    thumbIcon={
                      form.values.usesApi ? (
                        <IconCheck size={12} />
                      ) : (
                        <IconX size={12} />
                      )
                    }
                  />

                  {form.values.usesApi && (
                    <FloatingInput
                      labelText={t("aiModal.fields.apiProvider")}
                      {...form.getInputProps("apiProvider")}
                    />
                  )}
                </Stack>
              </Box>

              {/* ================= BUTTONS ================= */}
              <Group justify="center">
                <BaseButton
                  variantType="secondary"
                  type="button"
                  onClick={onClose}
                >
                  {t("aiModal.buttons.cancel")}
                </BaseButton>

                <BaseButton
                  variantType="primary"
                  type="submit"
                  loading={mutation.isPending}
                >
                  {t("aiModal.buttons.confirm")}
                </BaseButton>
              </Group>

            </Stack>
          </form>
        </Stack>
      </Box>
    </BaseModal>
  );
};