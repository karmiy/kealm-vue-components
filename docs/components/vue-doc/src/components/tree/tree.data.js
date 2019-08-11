/* 基础树形数据 */
export const treeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                  { title: '0-0-0-0', key: '0-0-0-0' },
                  { title: '0-0-0-1', key: '0-0-0-1' },
                  { title: '0-0-0-2', key: '0-0-0-2' },
                ],
              },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                  { title: '0-0-1-0', key: '0-0-1-0' },
                  { title: '0-0-1-1', key: '0-0-1-1' },
                  { title: '0-0-1-2', key: '0-0-1-2' },
                ],
              },
              {
                title: '0-0-2',
                key: '0-0-2',
              }
        ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    }
]

/* 可拖动树形数据 */
export const dragTreeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            }
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            {
                title: '0-1-0',
                key: '0-1-0',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0' },
                    { title: '0-1-0-1', key: '0-1-0-1' },
                    { title: '0-1-0-2', key: '0-1-0-2' },
                ],
            },
            {
                title: '0-1-1',
                key: '0-1-1',
                children: [
                    { title: '0-1-1-0', key: '0-1-1-0' },
                    { title: '0-1-1-1', key: '0-1-1-1' },
                    { title: '0-1-1-2', key: '0-1-1-2' },
                ],
            },
            {
                title: '0-1-2',
                key: '0-1-2',
            },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    }
]

/* 可搜索树形数据 */
export const searchTreeData = [
    {
        title: '0-0',
        key: '0-0',
        scopedSlots: {title: "title"},
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                scopedSlots: {title: "title"},
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0', scopedSlots: {title: "title"} },
                    { title: '0-0-0-1', key: '0-0-0-1', scopedSlots: {title: "title"} },
                    { title: '0-0-0-2', key: '0-0-0-2', scopedSlots: {title: "title"} },
                    { title: '0-0-0-3', key: '0-0-0-3', scopedSlots: {title: "title"} },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                scopedSlots: {title: "title"},
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0', scopedSlots: {title: "title"} },
                    { title: '0-0-1-1', key: '0-0-1-1', scopedSlots: {title: "title"} },
                    { title: '0-0-1-2', key: '0-0-1-2', scopedSlots: {title: "title"} },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
                scopedSlots: {title: "title"},
            }
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        scopedSlots: {title: "title"},
        children: [
            {
                title: '0-1-0',
                key: '0-1-0',
                scopedSlots: {title: "title"},
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', scopedSlots: {title: "title"} },
                    { title: '0-1-0-1', key: '0-1-0-1', scopedSlots: {title: "title"} },
                    { title: '0-1-0-2', key: '0-1-0-2', scopedSlots: {title: "title"} },
                ],
            },
            {
                title: '0-1-1',
                key: '0-1-1',
                scopedSlots: {title: "title"},
                children: [
                    { title: '0-1-1-0', key: '0-1-1-0', scopedSlots: {title: "title"} },
                    { title: '0-1-1-1', key: '0-1-1-1', scopedSlots: {title: "title"} },
                    { title: '0-1-1-2', key: '0-1-1-2', scopedSlots: {title: "title"} },
                ],
            },
            {
                title: '0-1-2',
                key: '0-1-2',
                scopedSlots: {title: "title"},
            },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
        scopedSlots: {title: "title"},
    }
]