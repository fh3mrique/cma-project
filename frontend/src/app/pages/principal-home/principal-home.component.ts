import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface FlatTreeNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'Questionários',
    children: [
      { name: 'VARK' },
      { name: 'Honey-Alonso' }
    ]
  }
];

@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.component.html',
  styleUrls: ['./principal-home.component.scss']
})
export class PrincipalHomeComponent {
  showFiller = true;

  private _transformer = (node: TreeNode, level: number): FlatTreeNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;
}