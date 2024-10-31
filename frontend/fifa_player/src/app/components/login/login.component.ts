import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Aquí puedes manejar la lógica de inicio de sesión
      console.log('Email:', email);
      console.log('Password:', password);
      // Resetea el formulario si es necesario
      this.loginForm.reset();
    } else {
      this.loginError = 'Por favor, completa todos los campos correctamente.';
    }
  }
}
