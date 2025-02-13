// src/routes/locationRoutes.ts
import { Router } from 'express';
import { LocationController } from '../controllers/LocationController';

const router = Router();
const locationController = new LocationController();

router.post('/', locationController.createLocation);
router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getLocation);
router.put('/:id', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

export default router;
