import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-term-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './term-form.component.html',
  styleUrl: './term-form.component.scss',
})
export class TermFormComponent {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
