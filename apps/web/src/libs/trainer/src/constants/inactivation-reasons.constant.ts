export const TrainerInactivationReason = {
  Mora: 'Despido',
  Desercion: 'Renuncia voluntaria',
  Otro: 'Otro',
} as const;

export const TRAINER_INACTIVATION_REASONS: readonly (typeof TrainerInactivationReason)[keyof typeof TrainerInactivationReason][] =
  Object.values(TrainerInactivationReason);
