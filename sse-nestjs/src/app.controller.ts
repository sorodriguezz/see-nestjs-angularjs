import { Controller, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller('events')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('stream')
  sendEvents(): Observable<MessageEvent> {
    return this.appService.sendEvents();
  }
}
