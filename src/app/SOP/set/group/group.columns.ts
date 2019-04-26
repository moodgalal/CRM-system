import { ColumnTemplate } from '../../../Global/column-model';

export class SOP00011Columns {
    public static SOP00011Columns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'GroupID',
            FieldName: 'GroupID',
            FieldOrder: 1,
            FieldTypeID: 125,
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
            FieldDisplay: 'GroupName',
            FieldName: 'GroupName',
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
