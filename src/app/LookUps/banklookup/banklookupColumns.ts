import { ColumnTemplate } from '../../Global/column-model';

export class banklookupColumns {
  public static banklookupColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: 'BankCode',
      FieldName: 'BankCode',
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
      FieldDisplay: 'BankName',
      FieldName: 'BankName',
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
