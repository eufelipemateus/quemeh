import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domain } from 'src/app/interfaces/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  constructor(
    private http: HttpClient,
  ) {}

  getDomain(domain:string){
    return this.http.post<Domain>('domain/get',{domain});
  }
}
