import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  addLead: async (_name: string, _email: string, _phone: string, _service: string, _message: string) => {
    return undefined;
  },
  getLeads: async () => [
    {
      id: BigInt(1),
      name: "Arjun Mehta",
      email: "arjun.mehta@example.com",
      phone: "+91 98765 43210",
      service: "Web Development",
      message: "Looking for a premium e-commerce solution for our brand.",
      timestamp: BigInt(Date.now()),
    },
    {
      id: BigInt(2),
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      phone: "+91 87654 32109",
      service: "UI/UX Design",
      message: "Need a complete brand identity and website redesign.",
      timestamp: BigInt(Date.now() - 86400000),
    },
  ],
};
