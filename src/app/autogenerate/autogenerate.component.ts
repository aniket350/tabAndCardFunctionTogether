import { Component, OnInit} from '@angular/core';
import { ServiceprovidersService } from '../serviceproviders.service';
import { AutogenerateTeamService } from '../autogenerate-team.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autogenerate',
  templateUrl: './autogenerate.component.html',
  styleUrls: ['./autogenerate.component.css']
})

export class AutogenerateComponent implements OnInit {

  public items: any;
  public postedIdeaDetails: any;
  public tabNumber: any;



  // tslint:disable-next-line:max-line-length
  constructor(  private serviceProviders: ServiceprovidersService, private autogenerateteam: AutogenerateTeamService, private http: HttpClient) {}

ngOnInit() {
  this.getPostedIdeas();
}

getTab(value: any) {
    console.log(value, 'currentIndex');
    this.autogenerateteam.participantsByRole(this.postedIdeaDetails.role[value].role).subscribe((response) => {
    console.log(response);

    if (response) {
       response = response.map(e => {
        e.acceptStatus = 'Accept';
        e.rejectStatus = 'Reject';
        return e
      })
      this.items = response;
      console.log(this.items);
      }
      }, (err) => {
      console.log(err);
    });
}

clickedAccept(item, role) {
  this.items = this.items.map(e => {
    if (item.Emailid == e.Emailid) {
      e.rejectStatus = 'Reject';
      e.acceptStatus = 'Accepted';

    }
    return e;
});

  // item.statusA = 'Accepted';
  // item.statusR = 'Reject';
  // let path: string = 'http://localhost:3000/' + role + '/' + item.id;
  // console.log(path);
  // this.http.patch(path, {'statusA' : item.statusA, 'statusR' : item.statusR}).subscribe();


}
clickedReject(item , role) {
  console.log(item, role);
  this.items = this.items.map(e => {
      if (item.Emailid == e.Emailid) {
        e.rejectStatus = 'Rejected';
        e.acceptStatus = 'Accept';

      }
      return e;
  });
//   item.statusA = 'Accept';
//   item.statusR = 'Rejected';
//   let path: string = 'http://localhost:3000/' + role + '/' + item.id;
//   let value = 'Accept';
//   let statusR = 'Rejected';
//   this.http.patch(path, {'statusR': item.statusR,'statusA': item.statusA}).subscribe();
 }

getPostedIdeas() {
  this.autogenerateteam.posetedIdeas().subscribe((response) => {
    console.log(response);
    if (response) {
     this.postedIdeaDetails = response;
      console.log(response);
      this.getTab(0);
      }
    }, (err) => {
      console.log(err);
  });
}
}
