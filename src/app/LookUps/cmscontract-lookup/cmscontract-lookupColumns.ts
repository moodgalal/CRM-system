import { ColumnTemplate } from '../../Global/column-model';

export class CmscontractLookupColumns {
  public static CmscontractLookupColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: 'ContractID',
      FieldName: 'ContractID',
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
      FieldDisplay: 'ContractName',
      FieldName: 'ContractName',
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
