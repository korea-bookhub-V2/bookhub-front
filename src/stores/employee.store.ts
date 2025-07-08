import { Employee } from "@/dtos/employee/employee";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

let logoutTimer: ReturnType<typeof setTimeout> | null = null;

interface EmployeeStore {
  employee: Employee | null;
  setEmployee: (employee: Employee) => void;
  clearEmployee: () => void;

  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
  setLogoutTimer: (milliseconds: number) => void;
}

export const useEmployeeStore = create<EmployeeStore>()(
  persist(
    (set) => ({
      employee: null,
      isLogin: false,
      setEmployee: (employee) => set({ employee }),
      clearEmployee: () => set({ employee: null }),
      setLogin: () => set({ isLogin: true }),
      setLogout: () => {
        if (logoutTimer) clearTimeout(logoutTimer);
        set({ isLogin: false, employee: null });
        localStorage.clear();
        useEmployeeStore.getState().clearEmployee();
        alert("로그아웃하였습니다.");
        window.location.href = "/auth/login";
      },
      setLogoutTimer: (milliseconds: number) => {
        if (logoutTimer) clearTimeout(logoutTimer);
        logoutTimer = setTimeout(() => {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          useEmployeeStore.getState().setLogout();
          window.location.href = "/auth/login";
        }, milliseconds);
      },
    }),
    {
      name: "employee-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
