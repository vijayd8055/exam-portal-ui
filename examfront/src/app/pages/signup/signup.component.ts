import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  message={value:''}
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this._snackBar.open('Username is required !!','',
      {duration:1500,
      verticalPosition:'top',
      horizontalPosition:'right'});
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        Swal.fire('Success', 'User is successfully registered !!', 'success');
        // this._snackBar.open('Data submitted successfully !!','',
        // {duration:1500,
        // verticalPosition:'top',
        // horizontalPosition:'right'});
      },
      (error)=> {
        //error
        console.log(error);
        this._snackBar.open( '<< Something Went Wrong !! >>','',
        {duration:1500,
        verticalPosition:'top',
        horizontalPosition:'right'});
      }
    );
  }



}
