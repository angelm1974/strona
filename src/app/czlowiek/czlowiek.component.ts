import { Component, OnInit } from '@angular/core';
import { FIZYCY } from '../mock-fizycy';
@Component({
  selector: 'app-czlowiek',
  templateUrl: './czlowiek.component.html',
  styleUrls: ['./czlowiek.component.scss']
})
export class CzlowiekComponent implements OnInit {
  dane = FIZYCY;
  constructor() { }


  ngOnInit(): void {
  }

}
