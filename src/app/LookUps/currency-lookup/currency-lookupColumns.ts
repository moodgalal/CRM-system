import { ColumnTemplate } from '../../Global/column-model';

export class CurrencyLookupColumns {
  public static CurrencyLookupColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: 'Code',
      FieldName: 'CurrencyCode',
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
      FieldDisplay: 'Currency Name',
      FieldName: 'CurrencyName',
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
