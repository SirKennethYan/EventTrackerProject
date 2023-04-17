import { Component, OnInit } from '@angular/core';
import { Trail } from 'src/app/models/trail';
import { TrailService } from 'src/app/services/trail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trailTracker: Trail[] = [];
  location: any;

  constructor(private trailService: TrailService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.trailService.getTrails().subscribe({
      next: (data) => {
        this.trailTracker = data;
      },
      error: (fail) => {
        console.log(fail);
      },
    });
  }

  deleteTrail(trailId: number) {
    this.trailService.destroyTrail(trailId).subscribe(() => {
      this.reload();
    });
  }
}
