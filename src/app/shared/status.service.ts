import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private statusURL = '/api/status';

  constructor(private http: HttpClient) {}

  // get server status
  // getStatus(): Promise<void | any> {
  //   return this.http
  //     .get(this.statusURL)
  //     .toPromise()
  //     .then((res) => console.log(res))
  //     .catch(() => {
  //       console.log(this.error);
  //     });
  // }

  getStatus(): Observable<void | any> {
    return this.http.get(this.statusURL);
  }
  // async getStatus() {
  //   const status = await this.http
  //     .get(this.statusURL)
  //     .toPromise()
  //     .then((res) => console.log(res))
  //     .catch(() => console.log(this.error));
  //   return status;
  // }

  // handle error
  private error(err: any) {
    let message = err.message
      ? err.message
      : err.status
      ? `${err.status} - ${err.statusText}`
      : 'Server error';
    console.error(message);
  }
}
