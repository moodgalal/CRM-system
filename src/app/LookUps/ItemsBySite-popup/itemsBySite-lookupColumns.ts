import { ColumnTemplate } from '../../Global/column-model';

export class ItemsBySiteLookupColumns {
  public static ItemsBySiteLookupColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: 'ClientID',
      FieldName: 'ClientID',
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
      FieldDisplay: 'ClientName',
      FieldName: 'ClientName',
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
