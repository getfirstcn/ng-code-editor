import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import * as editor from 'monaco-editor/esm/vs/editor/editor.api';

@Component({
  selector: 'app-ng-code-editor',
  templateUrl: './ng-code-editor.component.html',
  styleUrls: ['./ng-code-editor.component.scss']
})
export class NgCodeEditorComponent implements OnInit {
  edit: any;
  // @ViewChild('con') conDiv: ElementRef;
  node: HTMLElement;
  @Input() code: string;
  @Input() languages = 'json';


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // this.edit = editor.editor.create(document.getElementById('container'), {
      this.node = this.elementRef.nativeElement.querySelector('#container');
      console.log(this.node);
      this.edit = editor.editor.create(this.node, {
      value: JSON.stringify(this.code),
      language: this.languages,
      // formatOnType: true,
      // formatOnPaste: true,
      // wordWrap: 'wordWrapColumn',
      // wrappingIndent: 'indent',
      // wordWrapMinified: true,
    });
    console.log(this.languages);
  }
  getEditValue() {
    const code = this.edit.getValue();
    console.log(code);
  }
  setEditValue() {
    this.edit.setValue('改变内容');
  }

}
