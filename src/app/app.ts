import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Quizzes } from "./components/quizzes/quizzes";
import { Header } from "./common/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Quizzes, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TMS');



}

