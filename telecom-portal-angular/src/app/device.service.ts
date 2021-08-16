import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  url = "http://localhost:9001/devices"
  constructor(private http:HttpClient) { }

  getDevices(): Observable<any>{
    return this.http.get(this.url);
  }

  getADevice(pNumber:number): Observable<any>{
    return this.http.get(this.url + "/" + "device/" + pNumber)
  }

  saveDevice(): Observable<any> {
    return new Observable;
  }


}
