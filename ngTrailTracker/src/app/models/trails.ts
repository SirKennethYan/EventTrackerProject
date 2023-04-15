export class TrailTracker {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  trailLength: number;
  elevationGain: number;
  routeType: string;
  dateHiked: Date;

  constructor(
    id: number = 0,
    name: string = '',
    imageUrl: string = '',
    description: string = '',
    trailLength: number = 0,
    elevationGain: number = 0,
    routeType: string = '',
    dateHiked: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.trailLength = trailLength;
    this.elevationGain = elevationGain;
    this.routeType = routeType;
    this.dateHiked = dateHiked;
  }
}
