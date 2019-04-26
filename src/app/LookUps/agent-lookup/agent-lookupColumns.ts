import { ColumnTemplate } from '../../Global/column-model';

export class AgentLookupColumns {
  public static AgentLookupColumns: Array<ColumnTemplate> =
  [
    {
          FieldDisplay: 'AgentID',
          FieldName: 'AgentID',
      FieldOrder: 1,
      FieldTypeID: 101,
      FieldWidth: 70,
      IsActive: true,
      IsEmailable: false,
      IsFilterable: true,
      IsPrintable: true,
      IsSortable: true,
      Islockable: true,
      Islocked: false
    },
    {
        FieldDisplay: 'FirstName',
        FieldName: 'FirstName',
      FieldOrder: 10,
      FieldTypeID: 3,
      FieldWidth: 75,
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
