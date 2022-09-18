import {
  Directive,
  EventEmitter,
  Output,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[dragDropFile]',
})
export class DragDropFileUploadDirective {
  @Output() fileDropped = new EventEmitter<any>();
  @HostBinding('style.border-color') private background = 'rgb(155 149 149)';
  // Dragover Event
  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = 'rgb(16 149 243)';
  }
  // Dragleave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = 'rgb(155 149 149)';
  }
  // Drop Event
  @HostListener('drop', ['$event']) public drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = 'rgb(155 149 149)';
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
