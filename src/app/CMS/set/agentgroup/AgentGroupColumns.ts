import { ColumnTemplate } from '../../../Global/column-model';

export class AgentGroupColumns {
  public static AgentGroupColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: 'AgentGroup',
      FieldName: 'AgentGroup',
      FieldOrder: 1,
      FieldTypeID: 3,
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
      FieldDisplay: 'AgentGroupName',
      FieldName: 'AgentGroupName',
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
