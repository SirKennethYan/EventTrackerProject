export class Trail {
  id: number;
  name: string;
  description: string;
  trailLength: number;
  elevationGain: number;
  routeType: string;
  // dateHiked: Date;
  imageUrl: string;
  location: any;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    trailLength: number = 0,
    elevationGain: number = 0,
    routeType: string = '',
    // dateHiked: Date = new Date()
    imageUrl: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.trailLength = trailLength;
    this.elevationGain = elevationGain;
    this.routeType = routeType;
    // this.dateHiked = dateHiked;
    this.imageUrl = imageUrl;
  }
}
