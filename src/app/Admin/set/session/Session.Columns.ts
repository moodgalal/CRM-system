import { ColumnTemplate } from '../../../Global/column-model';

export class SessionColumns {
    public static SessionColumns : Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'UserName',
            FieldName: 'UserName',
            FieldOrder: 1,
            FieldTypeID: 410,
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
            FieldDisplay: 'SequenceName',
            FieldName: 'SequenceName',
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
        ,
        {
            FieldDisplay: 'KaizenID',
            FieldName: 'KaizenID',
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
