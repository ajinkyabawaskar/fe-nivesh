import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private _windowWidth = new BehaviorSubject<number>(window.innerWidth);
  private _isMobile = new BehaviorSubject<boolean>(false);
  
  private _windowWidth$ = this._windowWidth.asObservable();
  private _isMobile$ = this._isMobile.asObservable();

  constructor() {}

  width(): Observable<number> {
    return this._windowWidth$;
  }

  isMobile(): Observable<boolean> {
    return this._isMobile$;
  }

  updateWidth(width: number) {
    width > 767 ? this._isMobile.next(false) : this._isMobile.next(true);
    this._windowWidth.next(width);    
  }
}
