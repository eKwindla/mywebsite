import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-nothing',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './nothing.component.html',
  styleUrl: './nothing.component.scss'
})
export class NothingComponent {
  title = $localize`MelPort`;
}
