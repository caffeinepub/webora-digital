import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type Lead, createActor } from "../backend";

/* ─── GET ALL LEADS ─── */
export function useLeads() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeads();
    },
    enabled: !!actor && !isFetching,
  });
}

/* ─── ADD LEAD ─── */
export function useAddLead() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.addLead(
        data.name,
        data.email,
        data.phone,
        data.service,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
