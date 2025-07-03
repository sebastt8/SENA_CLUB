export const AppBaseRoutes = {
  Auth: 'auth',
  Athlete: 'athlete',
  Trainer: 'trainer',
  AdminArea: 'area-admin',
} as const;

export const AppRoutes = {
  Login: 'auth/login',
  AthleteList: '/athlete/list',
  AthleteEdit: '/athlete/edit',
  AthleteCreate: '/athlete/create',
  TrainerList: '/trainer/list',
  TrainerEdit: '/trainer/edit',
  TrainerCreate: '/trainer/create',
  AdminArea: '/area-admin',
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];
export type AppBaseRoutesType =
  (typeof AppBaseRoutes)[keyof typeof AppBaseRoutes];
