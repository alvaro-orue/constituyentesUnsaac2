import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y FormBuilder
import { Router } from '@angular/router';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';// Corrige el nombre del servicio aquí

@Component({
  selector: 'app-recuperarContraseña',
  templateUrl: './recuperarContraseña.component.html',
  styleUrls: ['./recuperarContraseña.component.scss']
})
export class recuperarContraseñaComponent implements OnInit {
  myForm!: FormGroup; // Declarar el FormGroup

  constructor(
    private authSvc: AutentifacionService,
    private formBuilder: FormBuilder, // Inyecta FormBuilder
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]] // Define el FormControl 'usuario' con validadores requeridos y de email
    });
  }

  async onReset() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    // Lógica para el restablecimiento de contraseña usando this.myForm.value.usuario
    try {
      await this.authSvc.limpiarToken();
      alert('Email sent, check your inbox!');
      // Agrega la redirección después del restablecimiento de contraseña si es necesario
      // this.router.navigateByUrl('/ruta_de_redireccion');
    } catch (error) {
      console.log(error);
    }
  }
}
