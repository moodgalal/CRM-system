import { ColumnTemplate } from '../../Global/column-model';

export class CaselookupColumns {
    public static CaselookupColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'CaseRef',
            FieldName: 'CaseRef',
            FieldOrder: 1,
            FieldTypeID: 101,
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
            FieldDisplay: 'CIFName',
            FieldName: 'CIFName',
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
        , {
            FieldDisplay: 'ContractName',
            FieldName: 'ContractName',
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
