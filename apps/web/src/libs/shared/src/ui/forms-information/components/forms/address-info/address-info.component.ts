import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStore } from '@web/libs/locations';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ControlInputComponent } from '../../../../control-field/components/control-input/control-input.component';
import { FormComponent } from '../../../directives/form-component.directive';
import {
  AddressInfoForm,
  createAddressInfoForm,
} from '../../../form-controls/address-info.form';

@Component({
  selector: 'ui-address-info',
  host: { class: 'form-section' },
  imports: [ReactiveFormsModule, ControlInputComponent],
  providers: [{ provide: FormComponent, useExisting: AddressInfoComponent }],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInfoComponent extends FormComponent<AddressInfoForm> {
  public override readonly type = 'addressInfo';

  public readonly form = createAddressInfoForm();

  protected readonly locationStore = inject(LocationStore);

  protected readonly departamentos = this.locationStore.departamentos;

  protected readonly municipios = computed(() => {
    return this.locationStore
      .municipios()
      .filter(
        (municipio) => municipio.idDepartamento === this._departamentoSelected()
      );
  });

  private readonly _departamentoSelected$ =
    this.form.controls.departamento.valueChanges.pipe(
      map((value) => Number(value)),
      distinctUntilChanged()
    );

  private readonly _departamentoSelected = toSignal(
    this._departamentoSelected$
  );

  constructor() {
    super();

    this._departamentoSelected$
      .pipe(takeUntilDestroyed())
      .subscribe((departamento) =>
        this.locationStore.getMunicipios(departamento)
      );
  }
}
