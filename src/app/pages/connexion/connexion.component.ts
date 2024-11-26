import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-connexion',
  imports: [
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  formBuilder = inject(FormBuilder)

  formulaire = this.formBuilder.group(
    {
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    }
  )

  onConnexion() {

    if (this.formulaire.valid) {

      console.log(this.formulaire.value)

    }

  }


}
