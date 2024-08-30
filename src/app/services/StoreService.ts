import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    getItem(key: string): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return null;
    }
}