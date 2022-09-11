import { AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule, MatTreeNestedDataSource} from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import * as ace from 'ace-builds';

interface DirNode {
  name: string;
  children?: DirNode[];
}

enum Mode {
  files,
  editor,
  console
}

const TREE_DATA: DirNode[] = [
  {
    name: 'tools',
    children: [{name: 'decode.py'}, {name: 'date.py'}, {name: 'cloud.py'}],
  },
  {
    name: 'maps',
    children: [
      {
        name: 'modded',
        children: [{name: 'tpro.py'}, {name: 'No land.py'}],
      },
      {
        name: 'original',
        children: [{name: 'towerD.py'}, {name: 'roundabout.py'}],
      },
    ],
  },
  {
    name: 'myplugin.py'
  },
  {
    name: 'mykeyboard.py'
  }
];

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.html',
  styleUrls:['./workspace.scss']
})
export class Workspace implements OnInit, AfterViewInit {
  treeControl = new NestedTreeControl<DirNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<DirNode>();
  activeMode: Mode = Mode.files;
  aceEditor: any;
  aceConsole: any;
  logs: [string] = ['Connected to device'];
  @ViewChild('editor')
  private editor!: ElementRef<HTMLElement>;
  @ViewChild('console')
  private console!: ElementRef<HTMLElement>;

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: DirNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px');
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.10.0/src-noconflict');

    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setValue(' print("hello world")');
    this.aceEditor.setTheme('ace/theme/twilight');
    this.aceEditor.session.setMode('ace/mode/python');
    this.aceEditor.setOption('minLines',54);
    this.aceEditor.setOption('maxLines', Infinity);
    this.aceConsole = ace.edit(this.console.nativeElement);
    this.aceConsole.session.setValue('import ba \n ba.screenmessage("hello world")');
    this.aceConsole.setTheme('ace/theme/twilight');
    this.aceConsole.session.setMode('ace/mode/python');
    this.aceConsole.setOption('showGutter', false);
  }

  onSave(): void {
    console.log(this.aceEditor.session.getValue());
  }

  onModeChange(mode: Mode): void {
    this.activeMode = mode;
  }

  execute(): void {
    this.logs.push(this.aceConsole.session.getValue());
  }
}

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.html',
  styleUrls:['./workspace.scss']
})
export class WorkspaceList implements OnInit {
  breakpoint: number = 4;
  rowHeight: string = '3:1';

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 600) ? '3:1' : '2:1';
  }
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (event.target.innerWidth <= 600) ? '3:1' : '2:1';
  }
}

const routes: Routes = [
  {
    path : '',
    component: WorkspaceList
  },
  {path:':workspaceId', component: Workspace}
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTreeModule
  ],
  declarations:[WorkspaceList, Workspace]
})
export class WorkspaceModule {

}
