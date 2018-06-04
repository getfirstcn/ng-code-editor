import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  language = 'javascript';
  status = {
    'type': 'Available',
    'status': 'True',
    'lastUpdateTime': '2018-03-30T11:51:45Z',
    'lastTransitionTime': '2018-03-30T11:51:45Z',
    'reason': 'MinimumReplicasAvailable',
    'message': 'Deployment has minimum availability.'
};
}
