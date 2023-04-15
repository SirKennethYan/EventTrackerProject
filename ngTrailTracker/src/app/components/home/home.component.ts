import { Component, OnInit } from '@angular/core';
import { TrailTracker } from 'src/app/models/trails';
import { TrailTrackerService } from 'src/app/services/trail-tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trailTracker: TrailTracker[] = [];

  constructor(private trailService: TrailTrackerService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.trailService.index().subscribe({
      next: (data) => {
        this.trailTracker = data;
      },
      error: (fail) => {
        console.log(fail);
      },
    });
  }
}
