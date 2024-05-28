import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NgForm } from '@angular/forms';
@Component(
  {
  selector: 'app-first-form',
  standalone: false,
  templateUrl: './first-form.component.html',
  styleUrl: './first-form.component.css'
  
})
export class FirstFormComponent implements OnInit {
  gender=[{id:'1',Value:'male'},{id:'2',Value:'female'},{id:'3',Value:'other'}];


  timelineList:Insurancetime[]=[new Insurancetime('1001','one year'),
  new Insurancetime('1002','Five Years'),
  new Insurancetime('1003','Ten Years')];
  
 
 insuranceList:Insurance[]=[new Insurance('1001','Educational'),
 new Insurance('1002','Children Category'),
 new Insurance('1003','Lifetime Policy')];
 

title="Insurance Policy";
Colour ="Green";
 countryList:Country[]=[new Country('1','India'),
 new Country('2','Australia'),
 new Country('3','USA')
];

contact!:Contact;
ngOnInit(): void {
  this.contact= {

    firstName:"Type here",
    
     lastName:"Type here",
     emailId:"Type here",
     Gender:true,
     address:{street:"Type here",city:"Type here",pinCode:"Type here"}


}
}
onSubmit(form:NgForm)
{console.log(form)}

}

class Country
{
  id:String;
  Name:String;
  constructor(id:String,Name:String)
  {;

  this.id=id;
  this.Name=Name;
}

}
class Insurance{
 id1:String;
 Name1:String;
 constructor(id1:String,Name1:String)

 {
   this.id1=id1;
 this.Name1=Name1;
  }
}
class Contact
{
  firstName!:String;
  lastName!:String;
  emailId!:String;
  Gender!:Boolean;
  address!:{
    street:String;
    city:String;
    pinCode:String;
  }
}

class Insurancetime
  { 
    id2:String;
    Name2:String;
    constructor(id2:String,Name2:String)
   
    {
      this.id2=id2;
    this.Name2=Name2;
     }
    }


