import { ColumnTemplate } from '../../../Global/column-model';

export class NationalityColumns {
    public static NationalityColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'NationalityID',
            FieldName: 'NationalityID',
            FieldOrder: 1,
            FieldTypeID: 407,
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
            FieldDisplay: 'NationalityName',
            FieldName: 'NationalityName',
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
