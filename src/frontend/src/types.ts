/* ═══════════════════════ SHARED TYPES ═══════════════════════ */

export interface Lead {
  id: bigint;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
  timestamp: bigint;
}

export interface NavLink {
  label: string;
  path: string;
  anchor?: string;
}
