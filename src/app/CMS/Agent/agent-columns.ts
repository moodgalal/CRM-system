import { ColumnTemplate } from "../../Global/column-model";

export class AgentColumns {
  public static agentColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: "AgentID",
      FieldName: "AgentID",
      FieldOrder: 10,
      FieldTypeID: 24,
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
      FieldDisplay: "FirstName",
      FieldName: "FirstName",
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
    },
    {
      FieldDisplay: "LastName",
      FieldName: "LastName",
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
    },
  ];
}
