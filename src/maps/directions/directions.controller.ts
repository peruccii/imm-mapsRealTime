import { Controller } from '@nestjs/common';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js'
import { ConfigService } from '@nestjs/config';

@Controller('directions')
export class DirectionsController {
  constructor(
    private googleMapsClient: GoogleMapsClient,
    private configService: ConfigService
    ) {}


}
