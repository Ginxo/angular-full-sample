import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import {Process} from '../shared/process';
import {ProcessService} from '../shared/process.service';
import {ProcessHistoryService} from '../shared/processHistory.service';

import {Message} from '../../modal-message/message';
import {MessageType} from '../../modal-message/message-type';
import {MessageStatus} from '../../modal-message/message-status';
import {MessageService} from '../../modal-message/message.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Subscription} from 'rxjs/Subscription';
import {ProcessHistory} from '../shared/processHistory';
import {MessageFormat} from '../../modal-message/message-format';

import {fadeInAnimation} from '../../_animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@fadeInAnimation]': ''}
})
export class ProcessDetailComponent implements OnInit {
  process: Process;
  processHistoryList: ProcessHistory[];

  constructor(public route: ActivatedRoute,
              private router: Router,
              private service: ProcessService,
              private historyService: ProcessHistoryService,
              private messageService: MessageService,) {
    // subscribe to the messages sent from other components
    /*this.subscription = this.messageService.getConfirmed().subscribe((isConfirmed: boolean) => {
     this.onOkDelete(isConfirmed);
     });*/
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.findById(params['id']).subscribe((process: Process) => {
        this.process = process;
      });
    });

    this.route.params.subscribe(params => {
      this.historyService.findByProcessInstanceId(params['id']).subscribe((processHistoryList: ProcessHistory[]) => {
        this.processHistoryList = processHistoryList;
      });
    });
  }

  delete(id: string) {
    const confirmation = window.confirm('Are you sure you want to delete this Super Process?');
    if (confirmation) {
      this.service.delete(id).subscribe(res => {
        if (res.ok) {
          this.router.navigate(['/process']);
        } else {
          alert('Couldn\'t delete 💩');
        }
      });
    }
  }
}