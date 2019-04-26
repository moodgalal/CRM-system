import { ColumnTemplate } from '../../../Global/column-model';

export class SOP00014Columns {
    public static SOP00014Columns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'StatusID',
            FieldName: 'StatusID',
            FieldOrder: 1,
            FieldTypeID: 123,
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
            FieldDisplay: 'StatusName',
            FieldName: 'StatusName',
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
