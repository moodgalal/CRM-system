import { ColumnTemplate } from "../../Global/column-model";

export class AgentWorkQueueColumns {
  public static AgentWorkQueueColumns: Array<ColumnTemplate> =
  [
    {
      FieldDisplay: "Queue ID",
      FieldName: "AgentID",
      FieldOrder: 10,
      FieldTypeID: 25,
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
      FieldDisplay: "Name",
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
    }
  ];
}
