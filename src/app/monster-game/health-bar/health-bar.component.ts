import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent implements OnInit {
  @Input() percent: number;

  constructor() { }

  ngOnInit(): void {
  }

}
