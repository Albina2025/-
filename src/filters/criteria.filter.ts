import type { FilterField } from "../UI/filter/FilterModal"

export type CriteriaFilter = {
    id?: number
    titleRu?: string;
    titleKg?: string;
    controlId?: number
}

export const criteriaFilterInitialValues: CriteriaFilter = {
    id: undefined,
    titleRu: "",
    titleKg: "",
    controlId: undefined
}

export const criteriaFilterFields: FilterField<CriteriaFilter>[] = [
  {
    type:"number",
    name:"id",
    label:""
  },
  {
    type:"text",
    name:"titleRu",
    label:""
  },
   {
    type: "text",
    name: "titleKg",
    label: "", 
  },
  {
    type: "select",
    name: "controlId",
    label: "",
    placeholder: "Выберите группу контролей",
    data: [
        { value: "1", label: "Группа 1" },
        { value: "2", label: "Группа 2" },
    ],
    }
]

