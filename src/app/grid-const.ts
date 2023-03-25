export const COL_DEFS = [
    { headerName: 'EIN', field: 'createdByEIN', pinned: 'left', width: 100 },
    { headerName: 'Bypass Code', field: 'bypassCode', pinned: 'left', width: 150 },
    { headerName: 'Action', field: 'action', pinned: 'left', width: 100 },
    { headerName: 'Status',
        children: [
            { headerName: 'Old Value', field: 'statusOldValue', width: 100 },
            { headerName: 'New Value', field: 'statusNewValue', width: 100 }
        ]
    },
    { headerName: 'Partner',
        children: [
            { headerName: 'Old Value', field: 'partnerOldValue' },
            { headerName: 'New Value', field: 'partnerNewValue' }
        ]
    },
    { headerName: 'Notes',
        children: [
            { headerName: 'Old Value', field: 'notesOldValue' },
            { headerName: 'New Value', field: 'notesNewValue' }
        ]
    },
    { headerName: 'Timestamp',
        children: [
            { headerName: 'Created', field: 'createdTimestamp', width: 150 },
            { headerName: 'Updated', field: 'updatedTimestamp', width: 150 }
        ]
    }
];
export const ROW_DATA = [
    {
        createdByEIN: '45434234',
        bypassCode: 'xxx-yyy-zzz-12-45',
        action: 'ADD',
        statusNewValue: 'Active',
        partnerNewValue: 'LISA Enterprise LTD',
        notesNewValue: 'This is the first bypass code',
        createdTimestamp: '23/03/2023'
    },
    {
        createdByEIN: '45434234',
        bypassCode: 'xxx-yyy-zzz-12-45',
        action: 'UPDATE',
        statusOldValue: 'Active',
        statusNewValue: 'Inactive',
        partnerOldValue: 'LISA Enterprise LTD',
        partnerNewValue: 'RUPA Enterprises PVT LTD',
        notesOldValue: 'This is the first bypass code',
        notesNewValue: 'Thi is the updated notes value',
        createdTimestamp: '23/03/2023',
        updatedTimestamp: '24/03/2023'
    }
]
export interface AuditLog {
    createdByEIN: string;
    bypassCode: string;
    action: string;
    statusOldValue?: string;
    statusNewValue?: string;
    partnerOldValue?: string;
    notesOldValue?: string;
    notesNewValue?: string;
    createdTimestamp?: string;
    updatedTimestamp?: string;
}