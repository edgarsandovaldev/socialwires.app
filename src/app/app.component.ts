import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socialwires.app';
  private email: string ='othertesting@yopmail.com';
  private password: string ='';
  public error: boolean = false

  constructor (private userService: UserService){

  }
  ngOnInit(): void {
    if (!this.email || !this.password){
      this.error=true
      return
     }


   this.userService.login({email:this.email, password: this.password}).subscribe({
    next:data=>{
      console.log('Conecto satisfactoriamente', data)
    },
    error:error=>{
      console.error('error haciendo login', error);

    }
   })
  }
}
