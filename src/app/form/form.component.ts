import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$') ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^\d{9}$/) 
    ]),
    direccion: new FormControl('', Validators.required),
  });

  enviar() {
    if (this.formulario.valid) {
      console.log('Datos de registro:', this.formulario.value);
      this.formulario.reset(); 
    } else {
      console.log('Formulario inválido');
    }
  }
}