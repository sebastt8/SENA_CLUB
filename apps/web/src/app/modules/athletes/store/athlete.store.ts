import { signalStore } from '@ngrx/signals';
import { AthleteResponse } from '@sacd/core/http/responses';
import { withDataTableFeature } from '@web/libs/shared/ui/tables';

export const AthleteStore = signalStore(
  withDataTableFeature<AthleteResponse>((athlete) => athlete.id)
);
