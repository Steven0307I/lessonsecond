import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() data!: { title: string; subtitle: string; footer: string };
  @Output() myEvent = new EventEmitter<{ title: string; subtitle: string }>();
  constructor() {}
  sender() {
    this.myEvent.emit({ title: this.data.title, subtitle: this.data.subtitle });
  }
  ngOnInit(): void {}
}
