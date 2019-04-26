import { ColumnTemplate } from '../../../Global/column-model';

export class CityColumns {
    public static CityColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'CityID',
            FieldName: 'CityID',
            FieldOrder: 1,
            FieldTypeID: 406,
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
            FieldDisplay: 'CityName',
            FieldName: 'CityName',
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
