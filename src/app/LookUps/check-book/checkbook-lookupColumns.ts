import { ColumnTemplate } from '../../Global/column-model';

export class CheckbookLookupColumns {
  public static CheckbookLookupColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: 'CheckbookCode',
      FieldName: 'CheckbookCode',
      FieldOrder: 1,
      FieldTypeID: 101,
      FieldWidth: 100,
      IsActive: true,
      IsEmailable: false,
      IsFilterable: true,
      IsPrintable: true,
      IsSortable: true,
      Islockable: true,
      Islocked: false
    },
    {
      FieldDisplay: 'CheckbookName',
      FieldName: 'CheckbookName',
      FieldOrder: 10,
      FieldTypeID: 3,
      FieldWidth: 100,
      IsActive: true,
      IsEmailable: false,
      IsFilterable: true,
      IsPrintable: true,
      IsSortable: true,
      Islockable: true,
      Islocked: false
    }
  ];
}
