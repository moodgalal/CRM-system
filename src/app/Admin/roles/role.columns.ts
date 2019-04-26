import { ColumnTemplate } from '../../Global/column-model';

export class RoleColumns {
  public static RoleColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'RoleID',
            FieldName: 'RoleID',
            FieldOrder: 10,
            FieldTypeID: -1,
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
            FieldDisplay: 'RoleName',
            FieldName: 'RoleName',
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
