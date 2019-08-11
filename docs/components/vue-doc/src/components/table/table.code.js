/* 基础表格 */
export const CodeBasic = `
    <template>
        <div>
            <sl-table :columns="columns" :dataSource="data">
                <span slot="customTitle">Name</span>
                <span slot="name" slot-scope="text">{{text}}</span>
                <span slot="action" slot-scope="record">
                    <a href="javascript:;">Action 一 {{ record.name }}</a>
                </span>
            </sl-table>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                columns: [{
                    dataIndex: 'name',
                    key: 'name',
                    slots: { title: 'customTitle' },
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                }, {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                }],
                data: [],
              }
            },
            created() {
                const data = [];
                for(let i = 0; i < 15; i++ ) {
                    data.push({
                        key    : i + 1,
                        name   : 'John Brown',
                        age    : 32,
                        address: 'New York No. 1 Lake Park'
                    })
                }
                this.data = data;
            },
        }
    </script>`

/* 联动选择框 */
export const CodeRowSelection =
`    <template>
        <div>
            <sl-table :rowSelection="rowSelection" :columns="linkageColumns" :dataSource="linkageData">
                <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
            </sl-table>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                linkageColumns: [{ // 联动选择框-columns
                    title: 'Name',
                    dataIndex: 'name',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                }],
                linkageData: [{ // 联动选择框-data
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Disabled User',
                    age: 99,
                    address: 'Sidney No. 1 Lake Park',
                }]
              }
            },
            computed: {
                rowSelection() {
                    return {
                        onChange: (selectedRowKeys, selectedRows) => {
                            console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
                        },
                        getCheckboxProps: record => ({
                            props: {
                                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                                name: record.name,
                            }
                        }),
                    }
                }
            },
        }
    </script>`

/* 鼠标滑过及条纹效果 */
export const CodeHoverStriped =
`    <template>
        <div>
            <sl-table striped hover :columns="linkageColumns" :dataSource="linkageData" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                linkageColumns: [{ // 联动选择框-columns
                    title: 'Name',
                    dataIndex: 'name',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                }],
                linkageData: [{ // 联动选择框-data
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Disabled User',
                    age: 99,
                    address: 'Sidney No. 1 Lake Park',
                }]
              }
            },
        }
    </script>`

/* 自定义选择项 */
export const CodeRowSelectionCustom =
`    <template>
        <div>
            <sl-table :rowSelection="rowCustomSelection" :columns="customColumns" :dataSource="customData" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                customColumns: [{
                  title: 'Name',
                  dataIndex: 'name',
                }, {
                  title: 'Age',
                  dataIndex: 'age',
                }, {
                  title: 'Address',
                  dataIndex: 'address',
                }],
                customData: [],
                selectedRowKeys: [],
              }
            },
            created() {
                const customData = [];
                for (let i = 0; i < 46; i++) {
                    customData.push({
                        key: i,
                        name: \`Edward King \${i}\`,
                        age: 32,
                        address: \`London, Park Lane no. \${i}\`,
                    });
                }
                this.customData = customData;
            },
            computed: {
                rowCustomSelection() {
                    const { selectedRowKeys } = this;
                    return {
                        selectedRowKeys,
                        onChange: this.onSelectChange,
                        hideDefaultSelections: true,
                        selections: [{
                            key: 'all-data',
                            text: 'Select All Data',
                            onSelect: () => {
                                this.selectedRowKeys = [...Array(46).keys()]; // 0...45
                            },
                        }, {
                            key: 'odd',
                            text: 'Select Odd Row',
                            onSelect: (changableRowKeys) => {
                                let newSelectedRowKeys = [];
                                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                                    if (index % 2 !== 0) {
                                        return false;
                                    }
                                    return true;
                                });
                                this.selectedRowKeys = newSelectedRowKeys;
                            },
                        }, {
                            key: 'even',
                            text: 'Select Even Row',
                            onSelect: (changableRowKeys) => {
                                let newSelectedRowKeys = [];
                                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                                    if (index % 2 !== 0) {
                                        return true;
                                    }
                                    return false;
                                });
                                this.selectedRowKeys = newSelectedRowKeys;
                            },
                        }],
                        onSelection: this.onSelection,
                    }
                },
            },
        }
    </script>`

/* 筛选与排序开始 */
export const CodeFilter =
`    <template>
        <div>
            <div class="table-operations">
                <sl-button @click="setAgeSort">Sort age</sl-button>
                <sl-button @click="clearFilters">Clear filters</sl-button>
                <sl-button @click="clearAll">Clear filters and sorters</sl-button>
            </div>
            <sl-table :columns="sortFilterColumns" :dataSource="sortFilterData" @change="handleChange" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                sortFilterData: [{
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Jim Red',
                    age: 32,
                    address: 'London No. 2 Lake Park',
                }],
                filteredInfo: null,
                sortedInfo: null,
              }
            },
            computed: {
                sortFilterColumns() {
                    let { sortedInfo, filteredInfo } = this;
                    sortedInfo = sortedInfo || {};
                    filteredInfo = filteredInfo || {};
                    const columns = [{
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                        filters: [
                            { text: 'Joe', value: 'Joe' },
                            { text: 'Jim', value: 'Jim' },
                        ],
                        filteredValue: filteredInfo.name || null,
                        onFilter: (value, record) => record.name.includes(value),
                        sorter: (a, b) => a.name.length - b.name.length,
                        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                    }, {
                        title: 'Age',
                        dataIndex: 'age',
                        key: 'age',
                        sorter: (a, b) => a.age - b.age,
                        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                    }, {
                        title: 'Address',
                        dataIndex: 'address',
                        key: 'address',
                        filters: [
                            { text: 'London', value: 'London' },
                            { text: 'New York', value: 'New York' },
                        ],
                        filteredValue: filteredInfo.address || null,
                        onFilter: (value, record) => record.address.includes(value),
                        sorter: (a, b) => a.address.length - b.address.length,
                        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                    }];
                    return columns;
                }
            },
            methods: {
                handleChange (pagination, filters, sorter) {
                    console.log('Various parameters', pagination, filters, sorter);
                    this.filteredInfo = filters;
                    this.sortedInfo = sorter;
                },
                clearFilters () {
                    this.filteredInfo = null;
                },
                clearAll () {
                    this.filteredInfo = null;
                    this.sortedInfo = null;
                },
                setAgeSort () {
                    this.sortedInfo = {
                        order: 'descend',
                        columnKey: 'age',
                    }
                }
            }
        }
    </script>`

/* 小表格 */
export const CodeSmallSize =
`    <template>
        <div>
            <sl-table :columns="linkageColumns" :dataSource="linkageData" size="small" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                linkageColumns: [{
                    title: 'Name',
                    dataIndex: 'name',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                }],
                linkageData: [{
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Disabled User',
                    age: 99,
                    address: 'Sidney No. 1 Lake Park',
                }],
              }
            },
        }
    </script>`

/* 固定表头 */
export const CodeFixedHeader =
`    <template>
        <div>
            <sl-table :columns="fixedHeaderColumns" :dataSource="fixedHeaderData" :pagination="{ pageSize: 50 }" :scroll="{ y: 240 }" />
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                fixedHeaderColumns: [{
                    title: 'Name',
                    dataIndex: 'name',
                    width: 150,
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    width: 150,
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                }],
                fixedHeaderData: [],
              }
            },
            created() {
                const fixedHeaderData = [];
                for (let i = 0; i < 100; i++) {
                    fixedHeaderData.push({
                        key: i,
                        name: \`Edward King \${i}\`,
                        age: 32,
                        address: \`London, Park Lane no. \${i}\`,
                    });
                }
                this.fixedHeaderData = fixedHeaderData;
            },
        }
    </script>`

/* 固定列 */
export const CodeFixedColumns =
`    <template>
        <div>
            <sl-table :columns="fixedColColumns" :dataSource="fixedColData" :scroll="{ x: 1300 }">
                <a slot="action" slot-scope="text" href="javascript:;">action</a>
            </sl-table>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                fixedColColumns: [
                    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
                    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
                    { title: 'Column 1', dataIndex: 'address', key: '1' },
                    { title: 'Column 2', dataIndex: 'address', key: '2' },
                    { title: 'Column 3', dataIndex: 'address', key: '3' },
                    { title: 'Column 4', dataIndex: 'address', key: '4' },
                    { title: 'Column 5', dataIndex: 'address', key: '5' },
                    { title: 'Column 6', dataIndex: 'address', key: '6' },
                    { title: 'Column 7', dataIndex: 'address', key: '7' },
                    { title: 'Column 8', dataIndex: 'address', key: '8' },
                    {
                        title: 'Action',
                        key: 'operation',
                        fixed: 'right',
                        width: 100,
                        scopedSlots: { customRender: 'action' },
                    },
                ],
                fixedColData: [{
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 40,
                    address: 'London Park',
                }],
            },
        }
    </script>`

/* 可编辑单元格 */
export const CodeEditCell =
`    <template>
        <div>
            <sl-button class="editable-add-btn" @click="handleAdd">Add</sl-button>
            <sl-table bordered :dataSource="editData" :columns="editColumns">
                <template slot="name" slot-scope="text, record">
                    <sl-editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
                </template>
                <template slot="operation" slot-scope="text, record">
                    <a href="javascript:;">Delete</a>
                </template>
            </sl-table>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                editData: [{
                    key: '0',
                    name: 'Edward King 0',
                    age: '32',
                    address: 'London, Park Lane no. 0',
                }, {
                    key: '1',
                    name: 'Edward King 1',
                    age: '32',
                    address: 'London, Park Lane no. 1',
                }],
                count: 2,
                editColumns: [{
                    title: 'name',
                    dataIndex: 'name',
                    width: '30%',
                    scopedSlots: { customRender: 'name' },
                }, {
                    title: 'age',
                    dataIndex: 'age',
                }, {
                    title: 'address',
                    dataIndex: 'address',
                }, {
                    title: 'operation',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                }],
              },
            },
            methods: {
                onCellChange (key, dataIndex, value) {
                    const editData = [...this.editData]
                    const target = editData.find(item => item.key === key)
                    if (target) {
                        target[dataIndex] = value
                        this.editData = editData
                    }
                },
                handleAdd () {
                    const { count, editData } = this
                    const newData = {
                        key: count,
                        name: \`Edward King \${count}\`,
                        age: 32,
                        address: \`London, Park Lane no. \${count}\`,
                    }
                    this.editData = [...editData, newData]
                    this.count = count + 1
                },
            }
        }
    </script>`

/* 合并单元格 */
export const CodeCombine =
`    <template>
        <div>
            <sl-table :columns="spanColumns" :dataSource="spanData" bordered>
                <template slot="name" slot-scope="text">
                    <a href="javascript:;">{{text}}</a>
                </template>
            </sl-table>
        </div>
    </template>
    <script>
         const renderContent = (value, row, index) => {
            const obj = {
                children: value,
                attrs: {},
            };
            if (index === 4) {
                obj.attrs.colSpan = 0;
            }
            return obj;
        };
        export default {
            data() {
              return {
                spanData: [{
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    tel: '0571-22098909',
                    phone: 18889898989,
                    address: 'New York No. 1 Lake Park',
                }, {
                    key: '2',
                    name: 'Jim Green',
                    tel: '0571-22098333',
                    phone: 18889898888,
                    age: 42,
                    address: 'London No. 1 Lake Park',
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    tel: '0575-22098909',
                    phone: 18900010002,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Jim Red',
                    age: 18,
                    tel: '0575-22098909',
                    phone: 18900010002,
                    address: 'London No. 2 Lake Park',
                }, {
                    key: '5',
                    name: 'Jake White',
                    age: 18,
                    tel: '0575-22098909',
                    phone: 18900010002,
                    address: 'Dublin No. 2 Lake Park',
                }],
                spanColumns: [{
                    title: 'Name',
                    dataIndex: 'name',
                    customRender: (text, row, index) => {
                        if (index < 4) {
                            return text;
                        }
                        return {
                            children: text,
                            attrs: {
                                colSpan: 5,
                            },
                        };
                    },
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    customRender: renderContent,
                }, {
                    title: 'Home phone',
                    colSpan: 2,
                    dataIndex: 'tel',
                    customRender: (value, row, index) => {
                        const obj = {
                            children: value,
                            attrs: {},
                        };
                        if (index === 2) {
                            obj.attrs.rowSpan = 2;
                        }
                        // These two are merged into above cell
                        if (index === 3) {
                            obj.attrs.rowSpan = 0;
                        }
                        if (index === 4) {
                            obj.attrs.colSpan = 0;
                        }
                        return obj;
                    },
                }, {
                    title: 'Phone',
                    colSpan: 0,
                    dataIndex: 'phone',
                    customRender: renderContent,
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                    customRender: renderContent,
                }],
              },
            },
        }
    </script>`

/* 表格嵌套 */
export const CodeNested =
`    <template>
        <div>
            <sl-table :columns="outerColumns" :dataSource="outerData" class="components-table-demo-nested">
                <a slot="operation" slot-scope="text" href="javascript:;">Publish</a>
                <sl-table
                    slot="expandedRowRender"
                    slot-scope="text"
                    :columns="innerColumns"
                    :dataSource="innerData"
                    :pagination="false"
                >
                    <span slot="status" slot-scope="text">
                        <sl-badge status="success" />Finished
                    </span>
                    <span slot="operation" slot-scope="text" class="table-operation">
                        <a href="javascript:;">Pause</a>
                        <a href="javascript:;">Stop</a>
                        <sl-dropdown>
                          <sl-menu slot="overlay">
                            <sl-menu-item>
                              Action 1
                            </sl-menu-item>
                            <sl-menu-item>
                              Action 2
                            </sl-menu-item>
                          </sl-menu>
                          <a href="javascript:;">
                            More
                          </a>
                        </sl-dropdown>
                      </span>
                </sl-table>
            </sl-table>
        </div>
    </template>
    <script>
        const outerData = [];
        for (let i = 0; i < 3; ++i) {
            outerData.push({
                key: i,
                name: 'Screem',
                platform: 'iOS',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: 'Jack',
                createdAt: '2014-12-24 23:12:00',
            });
        }
        const innerData = [];
        for (let i = 0; i < 3; ++i) {
            innerData.push({
                key: i,
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
        export default {
            data() {
              return {
                  outerColumns: [ // 表格嵌套-外columns
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
                    { title: 'Version', dataIndex: 'version', key: 'version' },
                    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
                    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
                    { title: 'Action', key: 'operation', scopedSlots: { customRender: 'operation' } },
                ],
                outerData, // 表格嵌套-外datas
                innerColumns: [ // 表格嵌套-内columns
                    { title: 'Date', dataIndex: 'date', key: 'date' },
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    { title: 'Status', key: 'state', scopedSlots: { customRender: 'status' } },
                    { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                    {
                        title: 'Action',
                        dataIndex: 'operation',
                        key: 'operation',
                        scopedSlots: { customRender: 'operation' },
                    },
                ],
                innerData, // 表格嵌套-内datas
              }  
            },
        }
    </script>`

/* customRow 用法 */
export const CodeCustomRow  =
`    <Table
      customRow={(record) => {
        return {
          props: {
            xxx... //属性
          },
          on: { // 事件
            click: () => {},       // 点击行
            mouseenter: () => {},  // 鼠标移入行
            xxxx...
          },
    
        };
      )}
      customHeaderRow={(column) => {
        return {
          on: {
            click: () => {},        // 点击表头行
          }
        };
      )}
    />`

/* rowKey注意 */
export const CodeRowKey  =
`    // 比如你的数据主键是 uid
    return <Table rowKey="uid" />;
    // 或
    return <Table rowKey={record => record.uid} />;`



