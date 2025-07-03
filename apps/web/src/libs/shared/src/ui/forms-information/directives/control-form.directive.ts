import {
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[uiControlForm]',
  standalone: true,
})
export class ControlFormDirective implements OnInit {
  @HostBinding('class.is-valid') public isValid: boolean | null = null;

  @HostBinding('class.is-invalid')
  public get isInvalid() {
    if (this.isValid === null) return false;

    return !this.isValid;
  }

  constructor(
    private readonly _ngControl: NgControl,
    private readonly _elemRef: ElementRef,
    private readonly _destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this._ngControl.control?.statusChanges
      ?.pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => this.setControlClass());
  }

  @HostListener('blur')
  protected markAsTouched(): void {
    const { nodeName } = this._elemRef.nativeElement;

    if (nodeName !== 'SELECT') return;
    this.setControlClass();
  }

  private setControlClass(): void {
    const control = this._ngControl.control;

    this.isValid = Boolean(
      control?.valid && (control?.touched || control?.dirty)
    );
  }
}
