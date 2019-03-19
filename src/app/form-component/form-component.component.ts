import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }
  error:string ;
  alpha:RegExp=/^[a-zA-Z]*$/;
  regex:RegExp= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  onSubmit(name ,email ,city ,state ,addl1 ,addl2 ,commission ):string{
    
    if (this.alpha.test(name)==false || name.length <3 || name.length>100 ) {
      
      return this.error="Name cannot be less than 3 and greater than 100 or a number";
    }
    else if(!this.regex.test(email)){
      return this.error="Email is invalid";
    }
    else if(this.alpha.test(city)==false || city.length <3 || city.length>100 ) {
      
      return this.error="Enter a valid city name with length between 3 and 100 characters";
    }
    
    return "success";
  }

  ngOnInit() {
  }
  
}
