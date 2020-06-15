import { Component, OnInit } from '@angular/core';
import {AlgoliaService} from "../algolia.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private algolia: AlgoliaService) { }
  getHeader = () => {
    return this.algolia.header.slice(0,1);
  }
  getBlocks = () => {
    return this.algolia.blockSection.slice(0,1);
  }
  ngOnInit(): void {
  }

}
