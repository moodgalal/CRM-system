import { ColumnTemplate } from '../../../Global/column-model';

export class ReligionColumns {
    public static ReligionColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'ReligionID',
            FieldName: 'ReligionID',
            FieldOrder: 1,
            FieldTypeID: 408,
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
            FieldDisplay: 'ReligionName',
            FieldName: 'ReligionName',
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
