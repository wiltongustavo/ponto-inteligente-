import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
  infoCards = [
    {name: 'Normal Info Card', value: '0000'},
    {name: 'Success Info Card', value: '0000'},
    {name: 'Warning Info Card', value: '0000'}
  ];
  contentCards = [
    {name: 'Card Name'},
    {name: 'Card Name'},
    {name: 'Card Name'},
    {name: 'Card Name'},
    {name: 'Card Name'}
  ];

  inDropdown = [];
  
  
  constructor(){

  }
  ngOnInit(): void {
    
  }


}
