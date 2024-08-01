import { Injectable } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  sendEvents(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num) => {
        return { data: { message: `Event number ${num}` } } as MessageEvent;
      }),
    );
  }
}
