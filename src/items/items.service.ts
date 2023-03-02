import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly item: Item[] = [
    {
      id: '123123',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },

    {
      id: '123123123123',
      name: 'Item Two',
      qty: 200,
      description: 'This is item two',
    },
  ];

}
