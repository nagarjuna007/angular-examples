import { Component, Input, ViewChild, ContentChild, ElementRef, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element-two',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None  //None,Native,Emulated
})

export class ServerElementTwoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('ngOnInit called');
    console.log("Text " + this.header.nativeElement.textContent);
    console.log("Text cpntent of Paragraph: " + this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  onChangesFirst() {
    this.name = 'changed..!';
  }
  ngDoCheck() {
    console.log('ngDoCheck Called..!,');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit called..!');
    console.log("Text cpntent of Paragraph: " + this.paragraph.nativeElement.textContent)
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked called..!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called..!');
    console.log("Text " + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called..!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called..!');
  }

}