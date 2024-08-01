import { Component, OnInit } from '@angular/core';
import { SseService } from './sse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  messages: string[] = [];

  constructor(private sseService: SseService) {}

  ngOnInit() {
    this.sseService
      .getServerSentEvent('/events/stream')
      .subscribe((event: any) => {
        this.messages.push(event.data);
      });
  }
}
