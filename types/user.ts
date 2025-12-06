export interface WorkHistory {
  usreId: number;
  position: string;
  company: string;
  startYear: number; // 추천
  endYear: number | "Present"; // 현재 근무 중이면 표시
}

export interface User {
  userId: number;
  email: string;
  contacts?: string;
  country?: string;
  avatarUrl?: string;
  location?: string;
  workHistories?: WorkHistory[];
}
