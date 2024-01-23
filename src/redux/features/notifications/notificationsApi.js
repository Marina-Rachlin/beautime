import { apiSlice } from "../api/apiSlice";

export const notificationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: "admin/get-all-notifications",
        method: "GET",
        credentials: "include" ,
      }),
    }),
    updateNotificationStatus: builder.mutation({
      query: (id) => ({
        url: `admin/update-notification/${id}`,
        method: "PUT",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useUpdateNotificationStatusMutation,
} = notificationsApi;