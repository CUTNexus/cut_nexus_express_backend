import { Request, Response } from 'express';
import { LocationService } from '../services/LocationService';
import { Location } from '../models/Location';

export class LocationController {
    private locationService: LocationService;

    constructor() {
        this.locationService = new LocationService();
    }

    createLocation = async (req: Request, res: Response) => {
        try {
            const location: Location = req.body;
            const id = await this.locationService.createLocation(location);
            res.status(201).json({ id, message: 'Location created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create location' });
        }
    };

    getLocation = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const location = await this.locationService.getLocation(id);
            if (!location) {
                return res.status(404).json({ error: 'Location not found' });
            }
            res.json(location);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get location' });
        }
    };

    updateLocation = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const location: Partial<Location> = req.body;
            await this.locationService.updateLocation(id, location);
            res.json({ message: 'Location updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update location' });
        }
    };

    deleteLocation = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await this.locationService.deleteLocation(id);
            res.json({ message: 'Location deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete location' });
        }
    };

    getAllLocations = async (_req: Request, res: Response) => {
        try {
            const locations = await this.locationService.getAllLocations();
            res.json(locations);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get locations' });
        }
    };
}