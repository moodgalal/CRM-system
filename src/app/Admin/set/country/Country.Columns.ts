import { ColumnTemplate } from '../../../Global/column-model';

export class CountryColumns {
    public static CountryColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'CountryID',
            FieldName: 'CountryID',
            FieldOrder: 1,
            FieldTypeID: 405,
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
            FieldDisplay: 'CountryName',
            FieldName: 'CountryName',
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
