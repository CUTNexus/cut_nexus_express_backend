import { db } from "../config/firebase";
import { Location } from "../models/Location";


export class LocationService {
    private collection = 'locations';

    async createLocation(location: Location): Promise<string> {
        const docRef = await db.collection(this.collection).add(location);
        return docRef.id;
    }

    async getLocation(id: string): Promise<Location | null> {
        const doc = await db.collection(this.collection).doc(id).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() } as Location;
    }

    async updateLocation(id: string, location: Partial<Location>): Promise<void> {
        await db.collection(this.collection).doc(id).update(location);
    }

    async deleteLocation(id: string): Promise<void> {
        await db.collection(this.collection).doc(id).delete();
    }

    async getAllLocations(): Promise<Location[]> {
        const snapshot = await db.collection(this.collection).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Location);
    }
}
