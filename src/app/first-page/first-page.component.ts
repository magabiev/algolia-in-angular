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
  getSearchMenu = () => {
    return this.algolia.searchMenu.slice(0,5);
  }
  getCategory = () => {
    return this.algolia.category.slice(0,9);
  }
  getLogo = () => {
    return this.algolia.logo.slice(0,1);
  }
  getPlaceholder = () => {
    return this.algolia.placeHolder.slice(0,1);
  }
  getBlockHeader = () => {
    return this.algolia.blockHeader.slice(0,1);
  }
  getBlocks = () => {
    return this.algolia.blocks.slice(0,12);
  }
  showEvent({detail}){
    console.log(detail);
  }
  ngOnInit(): void {
  }
}
