import { useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FloatingInput, FloatingSelect } from "../../../UI";
import { api } from "../../../api/axios";
import { useTranslation } from "react-i18next";
import type { CriteriaFormValues } from "../../../types/criteria/criteria.form.types";
import type { CriteriaItem } from "../../../types/criteria/criteria.item.types";

interface Props {
  defaultValues?: CriteriaFormValues;
  onSubmit: (values: CriteriaFormValues) => void;
}

export const CriteriaForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  const { t } = useTranslation();
  const [criteriaList, setCriteriaList] = useState<CriteriaItem[]>([]);

  const form = useForm<CriteriaFormValues>({
    initialValues: defaultValues || {
      titleRu: "",
      titleKg: "",
      controlId: 0,
    },

    validate: {
      titleRu: (value) =>
        !value || value.trim() === "" ? "Заполните это поле" : null,
      titleKg: (value) =>
        !value || value.trim() === "" ? "Заполните это поле" : null,
      controlId: (value) => (value === 0 ? "Заполните это поле" : null),
    },
  });

  useEffect(() => {
    const fetchCriteria = async () => {
      try {
        const { data } = await api.post<{
          content: CriteriaItem[];
        }>("/api/v1/criteria/search", {
          pageRequest: { page: 0, limit: 100 },
          sorting: { sortBy: "ID", sortDirection: "ASC" },
          filter: {}, 
        });

        setCriteriaList(data.content || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCriteria();
  }, []);

  useEffect(() => {
    if (defaultValues) {
      form.setValues(defaultValues);
    }
  }, [defaultValues]);

  const allFieldsValid = () =>
    Object.values(form.errors).every((error) => error === null);

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <Grid>
        <Grid.Col span={6}>
          <FloatingInput
            required
            labelText={t("criteriaModal.fields.titleRu")}
            placeholder={t("criteriaModal.fields.titleRu")}
            {...form.getInputProps("titleRu")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <FloatingInput
            required
            labelText={t("criteriaModal.fields.titleKg")}
            placeholder={t("criteriaModal.fields.titleKg")}
            {...form.getInputProps("titleKg")}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <FloatingSelect
            labelText={t("criteriaModal.fields.controlId")}
            placeholder={t("criteriaModal.fields.controlId")}
             {...form.getInputProps("controlId")}
            searchable
            clearable
            data={criteriaList.map((c) => ({
              value: String(c.id),
              label: c.titleRu,
            }))}
            value={form.values.controlId?.toString() ?? "0"}
            onChange={(value) =>
              form.setFieldValue("controlId", value ? Number(value) : 0)
            }
            error={form.errors.controlId}
          />
        </Grid.Col>
      </Grid>

      <button
        type="submit"
        disabled={!allFieldsValid()}
        style={{ display: "none" }}
      />
    </form>
  );
};