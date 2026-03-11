import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { TableData, type Column } from "../../layout/tableData/TableData";
import {CriteriaAddModal,CriteriaEditModal} from "../../features/directories/criteria/index";
import { api } from "../../api/axios";
import type {CriteriaSearchRequest} from "../../types/criteria/criteria.request.types";
import type {CriteriaSearchResponse} from "../../types/criteria/criteria.response.types";
import type {CriteriaItem} from "../../types/criteria/criteria.item.types"
import {Button,Flex,Menu,useMantineColorScheme} from "@mantine/core";
import {IconChevronRight,IconMenu2,IconCheck,IconX} from "@tabler/icons-react";
import { changeCriteriaStatus } from "../../services/criteria.service";
import { FilterModal, type FilterField } from "../../UI/filter/FilterModal";
import {criteriaFilterFields, criteriaFilterInitialValues,type CriteriaFilter} from "../../filters/criteria.filter";

export const CriteriaPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);
  const [openedEdit, setOpenedEdit] = useState(false);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const queryClient = useQueryClient();

  const statusMutation = useMutation({
    mutationFn: ({ id, activation }: { id: number; activation: boolean }) =>
      changeCriteriaStatus(id, activation),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["criteria"],
      });
    },
  });

    const [filter, setFilter] = useState<{
        id?: number;
        title?: string;
        controlId?: number;
    }>({
        id: undefined,
        title: undefined,
        controlId: undefined,
    });

  const { data, isLoading } = useQuery<CriteriaSearchResponse>({
    queryKey: ["criteria", page, pageSize, filter],

    queryFn: async () => {
      const request: CriteriaSearchRequest = {
        pageRequest: {
          page: page - 1,
          limit: pageSize,
        },

        sorting: {
          sortBy: "ID",
          sortDirection: "ASC",
        },

        filter: filter,
      };

      const response = await api.post(
        "/api/v1/criteria/search",
        request
      );

      return response.data;
    },
  });

  const columns: Column<CriteriaItem>[] = [
    {
      key: "id",
      label: "ID",
    },

    {
      key: "action",
      label: t("tableData.actions"),
      render: (row) => (
        <Flex justify="center">
          <Menu shadow="md" width={160} position="bottom-end">
            <Menu.Target>
              <Button
                size="xs"
                radius="md"
                rightSection={<IconChevronRight size={14} />}
                style={{
                  backgroundColor: isDark ? "#ffffff" : "#000000",
                  color: isDark ? "#000000" : "#ffffff",
                }}
              >
                <IconMenu2 size={18} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown
              style={{
                backgroundColor: isDark ? "#1c1f23" : "#ffffff",
              }}
            >

              <Menu.Item
                style={{
                  color: row.enabled ? "red" : "green",
                }}
                onClick={() =>
                  statusMutation.mutate({
                    id: row.id,
                    activation: !row.enabled,
                  })
                }
              >
                {row.enabled
                  ? t("buttons.deactivate")
                  : t("buttons.activate")}
              </Menu.Item>

              <Menu.Item
                style={{
                  color: isDark ? "#ffffff" : "#000000",
                }}
                onClick={() => {
                  setEditId(row.id);
                  setOpenedEdit(true);
                }}
              >
                {t("buttons.edit")}
              </Menu.Item>

            </Menu.Dropdown>
          </Menu>
        </Flex>
      ),
    },

    {
      key: "enabled",
      label: t("tableData.status"),
      render: (row) => (
        <Flex justify="center">
          {row.enabled ? (
            <IconCheck size={20} color="green" />
          ) : (
            <IconX size={20} color="red" />
          )}
        </Flex>
      ),
    },

    {
      key: "titleRu",
      label: t("criteriaModal.fields.titleRu"),
      render: (row) =>
        i18n.language === "kg"
          ? row.titleKg
          : row.titleRu,
    },

    {
      key: "titleKg",
      label: t("criteriaModal.fields.titleKg"),
      render: (row) =>
        i18n.language === "kg"
          ? row.titleKg
          : row.titleRu,
    },

    {
      key: "control",
      label: t("criteriaModal.fields.control"),
      render: (row) =>
        row.control
          ? i18n.language === "kg"
            ? row.control.titleKg
            : row.control.titleRu
          : "-",
    },
  ];

  return (
    <>
      <TableData
        columns={columns}
        data={data?.content ?? []}
        loading={isLoading}

        page={page}
        totalPages={data?.totalPages ?? 1}
        totalElements={data?.totalElements ?? 0}
        pageSize={pageSize}

        onPageChange={setPage}

        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}

        onAdd={() => setOpenedAdd(true)}
        onFilter={() => setOpenedFilter(true)}
      />

      <CriteriaAddModal
        opened={openedAdd}
        onClose={() => setOpenedAdd(false)}
      />

      <CriteriaEditModal
        opened={openedEdit}
        onClose={() => setOpenedEdit(false)}
        criteriaId={editId}
      />

      <FilterModal<CriteriaFilter>
        opened={openedFilter}
        onClose={() => setOpenedFilter(false)}
        title={t("criteriaFilter.title")}
        initialValues={criteriaFilterInitialValues}
         fields={criteriaFilterFields.map((field: FilterField<CriteriaFilter>) => ({
            ...field,
            label: t(`criteriaFilter.fields.${field.name}`),
            placeholder: t(`criteriaFilter.placeholders.${field.name}`),
        }))}
        onApply={(values) => {
            setFilter({
            id: values.id ? Number(values.id) : undefined,
            title: values.titleRu || values.titleKg || undefined,
            controlId: values.controlId ? Number(values.controlId) : undefined,
            });

            setPage(1);
        }}

      />
    </>
  );
};