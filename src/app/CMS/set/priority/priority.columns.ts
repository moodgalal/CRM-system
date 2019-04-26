import { ColumnTemplate } from '../../../Global/column-model';

export class priorityColumns {
    public static priorityColumns: Array<ColumnTemplate> =
        [
            {
                FieldDisplay: 'PriorityID',
                FieldName: 'PriorityID',
                FieldOrder: 1,
                FieldTypeID: 107,
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
                FieldDisplay: 'PriorityName',
                FieldName: 'PriorityName',
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
            },
            {
                FieldDisplay: 'PriorityColor',
                FieldName: 'PriorityColor',
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
