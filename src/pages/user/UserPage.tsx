import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TableData, type Column } from "../../layout/tableData/TableData";
import { Button, Flex, Menu, Box, Text } from "@mantine/core";
import { IconMenu2, IconChevronRight, IconCheck, IconX } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { api } from "../../api/axios";

import { UserAddModal, UserEditModal } from "../../features/users/index";
import type { UserItem } from "../../entities/user/types/types";
import type { UserSearchRequest } from "../../entities/user/types/user.request.types";
import type { UserSearchResponse } from "../../entities/user/types/user.response.types";

export const UserPage = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedEdit, setOpenedEdit] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading } = useQuery<UserSearchResponse>({
    queryKey: ["users", page, pageSize],
    queryFn: async () => {
      const request: UserSearchRequest = {
        pageRequest: { page: page - 1, limit: pageSize },
        sorting: { sortBy: "ID", sortDirection: "ASC" },
        filter: {},
      };

      const res = await api.post("/api/v1/users/search", request);
      return res.data;
    },
  });

  const statusMutation = useMutation({
    mutationFn: ({ id, activation }: { id: number; activation: boolean }) =>
      api.put(`/api/v1/users/activation/${id}?activation=${activation}`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const columns: Column<UserItem>[] = [
    {
      key: "action",
      label: t("tableData.actions"),
      render: (row) => (
        <Flex justify="center">
          <Menu>
            <Menu.Target>
              <Button size="xs" rightSection={<IconChevronRight size={14} />}>
                <IconMenu2 size={16} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                color={row.enabled ? "red" : "green"}
                onClick={() =>
                  statusMutation.mutate({
                    id: row.id,
                    activation: !row.enabled,
                  })
                }
              >
                {row.enabled ? t("buttons.deactivate") : t("buttons.activate")}
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  setEditId(row.id);
                  setOpenedEdit(true);
                }}
              >
                {t("buttons.edit")}
              </Menu.Item>

              <Menu.Item onClick={() => setSelectedUser(row)}>
                👁 View
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      ),
    },

    {
      key: "username",
      label: t("userModal.fields.username"),
    },

    {
      key: "fullName",
      label: "ФИО",
    },

    {
      key: "division",
      label: t("userModal.fields.division"),
      render: (row) => row.division?.titleRu || "-",
    },

    {
      key: "enabled",
      label: t("tableData.status"),
      render: (row) =>
        row.enabled ? <IconCheck color="green" /> : <IconX color="red" />,
    },
  ];

  return (
    <Flex gap="md">
      <Box style={{ flex: 3 }}>
        <TableData
          columns={columns}
          data={data?.content ?? []}
          loading={isLoading}
          page={page}
          totalPages={data?.totalPages ?? 1}
          totalElements={data?.totalElements ?? 0}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={(s) => {
            setPageSize(s);
            setPage(1);
          }}
          onAdd={() => setOpenedAdd(true)}
        />
      </Box>

      {/* RIGHT PANEL */}
      <Box style={{ flex: 1 }}>
        {selectedUser && (
          <Box p="md" style={{ border: "1px solid #ddd", borderRadius: 8 }}>
            <Text>Имя пользователя: {selectedUser.username}</Text>
            <Text>ФИО: {selectedUser.fullName}</Text>
            <Text>Телефон: {selectedUser.phone || "-"}</Text>
            <Text>Email: {selectedUser.email || "-"}</Text>
          </Box>
        )}
      </Box>

      <UserAddModal opened={openedAdd} onClose={() => setOpenedAdd(false)} />

      <UserEditModal
        opened={openedEdit}
        onClose={() => setOpenedEdit(false)}
        userId={editId}
      />
    </Flex>
  );
};

