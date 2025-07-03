import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  DestroyRef,
  DoCheck,
  ElementRef,
  input,
  Renderer2,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ui-control-input',
  imports: [],
  templateUrl: './control-input.component.html',
  styleUrl: './control-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlInputComponent implements DoCheck {
  private readonly _feedbackNode = viewChild.required('feedbackRef', {
    read: ElementRef,
  });

  private _label: HTMLLabelElement | null = null;

  private _field: HTMLInputElement | HTMLSelectElement | null = null;

  public readonly ngControl = contentChild(NgControl);

  public readonly attrFor = input.required<string>();

  private get nativeElement(): HTMLElement {
    return this._elemRef.nativeElement;
  }

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elemRef: ElementRef,
    private readonly _destroyRef: DestroyRef
  ) {
    afterNextRender({
      read: () => {
        this.setLabelConfig();
        this.setFieldConfig();
        this.setFeedbackLocation();

        this.ngControl()
          ?.control?.statusChanges.pipe(takeUntilDestroyed(this._destroyRef))
          .subscribe(() => {
            this.setStatusClass();
          });
      },
    });
  }

  public ngDoCheck(): void {
    if (this.ngControl()?.touched || this.ngControl()?.dirty)
      this.setStatusClass();
  }

  private setLabelConfig(): void {
    this._label = this.nativeElement.querySelector('label');

    if (!this._label) throw new Error('Label not found');

    this._renderer.addClass(this._label, 'form-label');
    this._renderer.setAttribute(this._label, 'for', this.attrFor());
  }

  private setFieldConfig(): void {
    this._field = this.nativeElement.querySelector('input,textarea,select');

    if (!this._field) throw new Error('Field not found');

    const controlClass =
      this._field.nodeName === 'SELECT' ? 'form-select' : 'form-control';

    this._renderer.addClass(this._field, controlClass);
    this._renderer.setAttribute(this._field, 'id', this.attrFor());

    //the field is a select control
    const { nodeName } = this._field!;
    if (nodeName === 'SELECT')
      this._renderer.listen(this._field, 'blur', () => this.setStatusClass());
    //else this._renderer.setAttribute(this._field, 'autocomplete', 'off');
  }

  private setStatusClass(): void {
    const control = this.ngControl()?.control;

    if (
      control === undefined ||
      control?.disabled ||
      control?.validator === null ||
      control?.validator === undefined
    ) {
      this._renderer.removeClass(this._field, 'is-invalid');
      this._renderer.removeClass(this._field, 'is-valid');
      return;
    }

    const isValid = Boolean(
      control?.valid && (control?.touched || control?.dirty)
    );

    //reset classes input
    this._renderer.removeClass(this._field, 'is-invalid');
    this._renderer.removeClass(this._field, 'is-valid');

    //set current class input
    this._renderer.addClass(this._field, isValid ? 'is-valid' : 'is-invalid');
  }

  private setFeedbackLocation(): void {
    const inputGroup = this.nativeElement.querySelector('.input-group');

    if (!inputGroup) return;

    this._renderer.appendChild(inputGroup, this._feedbackNode().nativeElement);
  }
}
