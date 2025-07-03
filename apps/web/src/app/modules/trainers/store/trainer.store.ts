import { signalStore } from '@ngrx/signals';
import { TrainerResponse } from '@sacd/core/http/responses';
import { withDataTableFeature } from '@web/libs/shared/ui/tables';

export const TrainerStore = signalStore(
  withDataTableFeature<TrainerResponse>((trainer) => trainer.id)
);
