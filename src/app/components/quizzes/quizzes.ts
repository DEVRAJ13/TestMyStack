import { Component } from '@angular/core';
import { Sidebar } from "../../shared/sidebar/sidebar";
import { MainContent } from "../../shared/main-content/main-content";
import { Rightbar } from "../../shared/rightbar/rightbar";

@Component({
  selector: 'app-quizzes',
  imports: [Sidebar, MainContent, Rightbar],
  templateUrl: './quizzes.html',
  styleUrl: './quizzes.scss'
})
export class Quizzes {

}
