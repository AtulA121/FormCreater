import { Component } from '@angular/core';
import { User } from './user';
import { UserInformationService } from './user-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormCreater';
  public array=["atul","sagar","kiran","amit"];
  public userModel=new User("atulpisal.ap@gmail.com",9970774553,"atul","morning",true);

  constructor(private userInformationService : UserInformationService)
  {
    
  }

  onSubmit()
  {
    console.log("submitted : ",this.userModel);
    this.userInformationService.sendUserData(this.userModel).subscribe((data)=>{
      console.log("response : ",data);
    },(error)=>{
      console.log("error : ",error);
    });
  }

}
