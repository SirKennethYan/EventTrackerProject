import { Trail } from 'src/app/models/trail';
import { TrailService } from 'src/app/services/trail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trail-list',
  templateUrl: './trail-list.component.html',
  styleUrls: ['./trail-list.component.css'],
})
export class TrailListComponent implements OnInit {
  // *FIELDS/PROPERTIES
  title = 'ngTrail';
  trails: Trail[] = [];
  selected: Trail | null = null;
  newTrail: Trail = new Trail();
  editTrail: Trail | null = null;
  showComplete: boolean = false;

  // *METHODS
  // *ngOnInit() is a lifecycle hook that is called when the component is initialized
  // *loadTrails() is a method that calls the trailService to retrieve all the trails
  // *addTrail() is a method that adds a new trail to the database
  // *updateTrail() is a method that updates an existing trail in the database
  // *deleteTrail() is a method that deletes an existing trail from the database
  // *reload() is a method that calls the trailService to retrieve all the trails

  constructor(
    private trailService: TrailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.newTrail = new Trail();
  }

  ngOnInit(): void {
    // Check if a trailId parameter was provided in the route
    let trailIdString = this.route.snapshot.paramMap.get('trailId');
    if (trailIdString) {
      console.log('ngOnInit: trailId: ' + trailIdString);
      let trailId = parseInt(trailIdString);
      if (isNaN(trailId)) {
        this.router.navigateByUrl('invalidId');
      } else {
        // Call the trailService to retrieve the selected trail
        this.trailService.getTrails().subscribe({
          next: (trails) => {
            if (trails.length > 0) {
              this.selected = trails[0];
            } else {
              this.router.navigateByUrl('TrailNotFound');
            }
          },
          error: (fail) => {
            this.router.navigateByUrl('TrailNotFound');
          },
        });
      }
    }
    // Load trails when component is initialized
    this.loadTrails();
  }

  loadTrails(): void {
    // *Call the trail service to get all the trails and store them in the 'trails' property
    this.trailService.getTrails().subscribe((trails) => {
      this.trails = trails;
    });
  }

  addTrail(trail: Trail) {
    // *Call the trail service to add a new trail, then reload the list of trails
    this.trailService.createTrail(this.newTrail).subscribe({
      next: (createdTrail) => {
        console.log(createdTrail);
        this.newTrail = new Trail();
        this.reload();
      },
      error: (fail) => {
        console.error('Error creating trail');
        console.error(fail);
      },
    });
    console.log('trailService.create() called.');
  }

  setEditTrail() {
    this.editTrail = Object.assign({}, this.selected);
  }

  updateTrail(trail: Trail, goToDetail = true) {
    // *Call the trail service to update the selected trail, then reload the list of trails
    console.log(trail);
    this.trailService.updateTrail(trail).subscribe({
      next: (updatedTrail) => {
        this.editTrail = null;
        if (goToDetail) {
          this.selected = updatedTrail;
        }
        this.reload();
      },
      error: (kaboom) => {
        console.error('Error updating todo:');
        console.error(kaboom);
      },
    });
  }

  deleteTrail(trailId: number) {
    // *Call the trail service to delete the selected trail, then reload the list of trails
    this.trailService.destroyTrail(trailId).subscribe({
      next: () => {
        this.reload();
      },
      error: (myBad) => {
        console.error('Error deleting trail:');
        console.error(myBad);
      },
    });
  }

  reload() {
    this.trailService.getTrails().subscribe({
      next: (TrailList) => {
        this.trails = TrailList;
      },
      error: (nojoy) => {
        console.error('Error getting Trail List:');
        console.error(nojoy);
      },
    });
  }
}
