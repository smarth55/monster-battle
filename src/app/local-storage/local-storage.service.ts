import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get<T>(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
