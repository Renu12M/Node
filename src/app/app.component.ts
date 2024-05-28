import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstFormModule } from './first-form/first-form.module';
import { FirstFormComponent } from './first-form/first-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,FirstFormModule]
})
export class AppComponent{

  title = 'angularProject';
}
