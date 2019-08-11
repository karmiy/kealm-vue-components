<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Table 表格</h1>
            <p>轻松创建具有不同风格的漂亮的表格。</p>
        </div>

        <!--基础表格-->
        <div class="detail-box">
            <h2>基础表格</h2>
            <p class="code-left-line">Demo</p>
            <sl-table :columns="columns" :dataSource="data">
                <span slot="customTitle">Name</span>
                <span slot="name" slot-scope="text">{{text}}</span>
                <span slot="action" slot-scope="record">
                    <a href="javascript:;">Action 一 {{ record.name }}</a>
                </span>
            </sl-table>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础表格结束-->

        <!--联动选择框-->
        <div class="detail-box">
            <h2>联动选择框</h2>
            <p class="code-left-line">Demo</p>
            <sl-table :rowSelection="rowSelection" :columns="linkageColumns" :dataSource="linkageData">
                <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
            </sl-table>
            <search-code :code="CodeRowSelection"></search-code>
        </div>
        <!--联动选择框结束-->

        <!--鼠标滑过及条纹效果-->
        <div class="detail-box">
            <h2>鼠标滑过及条纹效果</h2>
            <p>通过 striped hover设置条纹效果与鼠标滑过</p>
            <p class="code-left-line">Demo</p>
            <sl-table striped hover :columns="linkageColumns" :dataSource="linkageData" />
            <search-code :code="CodeHoverStriped"></search-code>
        </div>
        <!--鼠标滑过及条纹效果结束-->

        <!--自定义选择项-->
        <div class="detail-box">
            <h2>自定义选择项</h2>
            <p>通过 rowSelection.selections 自定义选择项，默认不显示下拉选项，设为 true 时显示默认选择项</p>
            <p class="code-left-line">Demo</p>
            <sl-table :rowSelection="rowCustomSelection" :columns="customColumns" :dataSource="customData" />
            <search-code :code="CodeRowSelectionCustom"></search-code>
        </div>
        <!--自定义选择项结束-->

        <!--筛选与排序-->
        <div class="detail-box">
            <h2>筛选与排序</h2>
            <p>columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。</p>
            <p>只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。</p>
            <p>务必指定 column.key</p>
            <p class="code-left-line">Demo</p>
            <div class="table-operations">
                <sl-button @click="setAgeSort">Sort age</sl-button>
                <sl-button @click="clearFilters">Clear filters</sl-button>
                <sl-button @click="clearAll">Clear filters and sorters</sl-button>
            </div>
            <sl-table :columns="sortFilterColumns" :dataSource="sortFilterData" @change="handleChange" />
            <search-code :code="CodeFilter"></search-code>
        </div>
        <!--筛选与排序结束-->

        <!--小表格-->
        <div class="detail-box">
            <h2>小表格</h2>
            <p class="code-left-line">Demo</p>
            <sl-table :columns="linkageColumns" :dataSource="linkageData" size="small" />
            <search-code :code="CodeSmallSize"></search-code>
        </div>
        <!--小表格结束-->

        <!--固定表头-->
        <div class="detail-box">
            <h2>固定表头</h2>
            <p>方便一页内展示大量数据。</p>
            <p>需要指定 column 的 width 属性，否则列头和内容可能不对齐。</p>
            <p class="code-left-line">Demo</p>
            <sl-table :columns="fixedHeaderColumns" :dataSource="fixedHeaderData" :pagination="{ pageSize: 50 }" :scroll="{ y: 240 }" />
            <search-code :code="CodeFixedHeader"></search-code>
        </div>
        <!--固定表头结束-->

        <!--固定列-->
        <div class="detail-box">
            <h2>固定列</h2>
            <p>对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 scroll.x 配合使用。</p>
            <p>若列头与内容不对齐或出现列重复，请指定列的宽度 width。</p>
            <p>建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x。</p>
            <p class="code-left-line">Demo</p>
            <div style="max-width: 1280px">
                <sl-table :columns="fixedColColumns" :dataSource="fixedColData" :scroll="{ x: 1300 }">
                    <a slot="action" slot-scope="text" href="javascript:;">action</a>
                </sl-table>
            </div>
            <search-code :code="CodeFixedColumns"></search-code>
        </div>
        <!--固定列结束-->

        <!--可编辑单元格-->
        <div class="detail-box">
            <h2>可编辑单元格</h2>
            <p>带单元格编辑功能的表格。</p>
            <p class="code-left-line">Demo</p>
            <sl-button class="editable-add-btn" @click="handleAdd">Add</sl-button>
            <sl-table bordered :dataSource="editData" :columns="editColumns">
                <template slot="name" slot-scope="text, record">
                    <sl-editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
                </template>
                <template slot="operation" slot-scope="text, record">
                    <a href="javascript:;">Delete</a>
                </template>
            </sl-table>
            <search-code :code="CodeEditCell"></search-code>
        </div>
        <!--可编辑单元格结束-->

        <!--合并单元格-->
        <div class="detail-box">
            <h2>合并单元格</h2>
            <p>表头只支持列合并，使用 column 里的 colSpan 进行设置。</p>
            <p>表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。</p>
            <p class="code-left-line">Demo</p>
            <sl-table :columns="spanColumns" :dataSource="spanData" bordered>
                <template slot="name" slot-scope="text">
                    <a href="javascript:;">{{text}}</a>
                </template>
            </sl-table>
            <search-code :code="CodeCombine"></search-code>
        </div>
        <!--合并单元格结束-->

        <!--表格嵌套-->
        <div class="detail-box">
            <h2>表格嵌套</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeNested"></search-code>
        </div>
        <!--表格嵌套结束-->

        <!--表格属性动态展示-->
        <div class="detail-box">
            <h2>表格属性动态展示</h2>
            <p class="code-left-line">Demo</p>
            <sl-form layout="inline" style="margin-bottom: 20px">
                <sl-form-item label="Bordered">
                    <sl-switch v-model="hasBordered" />
                </sl-form-item>
                <sl-form-item label="加载">
                    <sl-switch v-model="isLoading" />
                </sl-form-item>
                <sl-form-item label="是否分页">
                    <sl-switch v-model="hasPagination" />
                </sl-form-item>
                <sl-form-item label="Title">
                    <sl-switch v-model="hasTitle" />
                </sl-form-item>
                <sl-form-item label="表头">
                    <sl-switch v-model="hasHeader" />
                </sl-form-item>
                <sl-form-item label="Footer">
                    <sl-switch v-model="hasFooter" />
                </sl-form-item>
                <!--<sl-form-item label="Expandable">
                    <sl-switch v-model="isExpandable" />
                </sl-form-item>-->
                <sl-form-item label="复选框">
                    <sl-switch v-model="hasCheckbox" />
                </sl-form-item>
                <sl-form-item label="头部固定">
                    <sl-switch v-model="isHeaderFixed" />
                </sl-form-item>
                <sl-form-item label="暂无数据">
                    <sl-switch v-model="isEmptyData" />
                </sl-form-item>
                <sl-form-item label="简单分页">
                    <sl-switch v-model="isSimplePage" />
                </sl-form-item>
                <sl-form-item label="大小">
                    <sl-radio-group v-model="tableSize">
                        <sl-radio-button value="default">Default</sl-radio-button>
                        <sl-radio-button value="small">Small</sl-radio-button>
                    </sl-radio-group>
                </sl-form-item>
            </sl-form>
            <sl-table
                :columns="columns"
                :dataSource="isEmptyData ? [] : data"
                v-bind="dynamicProps"
            >
                <span v-if="hasTitle" slot="title" slot-scope="dataLst">
                    这是表格的Title
                </span>
                <span slot="customTitle">Name</span>
                <span slot="name" slot-scope="text">{{text}}</span>
                <span slot="action" slot-scope="record">
                    <a href="javascript:;">Action 一 {{ record.name }}</a>
                </span>
                <span v-if="hasFooter" slot="footer" slot-scope="dataLst">
                    这是表格的Footer
                </span>
            </sl-table>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--表格属性动态展示结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-table</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>bordered</td>
                    <td>是否展示外边框和列边框</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>striped</td>
                    <td>是否展示条纹效果</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>hover</td>
                    <td>是否展示鼠标滑动效果</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>childrenColumnName</td>
                    <td>指定树形结构的列名</td>
                    <td>string[]</td>
                    <td>children</td>
                </tr>
                <tr>
                    <td>columns</td>
                    <td>表格列的配置描述，具体项见下表</td>
                    <td>array</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>components</td>
                    <td>覆盖默认的 table 元素</td>
                    <td>array</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>components</td>
                    <td>覆盖默认的 table 元素</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>dataSource</td>
                    <td>数据数组</td>
                    <td>any[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>defaultExpandAllRows</td>
                    <td>初始时，是否展开所有行</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultExpandedRowKeys</td>
                    <td>默认展开的行</td>
                    <td>string[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expandedRowKeys</td>
                    <td>展开的行，控制属性</td>
                    <td>string[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expandedRowRender</td>
                    <td>额外的展开行</td>
                    <td>Function(record, index, indent, expanded):VNode | slot="expandedRowRender" slot-scope="record, index, indent, expanded"</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expandIcon</td>
                    <td>自定义展开图标</td>
                    <td>Function(props):VNode | slot="expandIcon" slot-scope="props"</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expandRowByClick</td>
                    <td>通过点击行来展开子行</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>footer</td>
                    <td>表格尾部</td>
                    <td>Function(currentPageData)|slot-scope</td>
                    <td></td>
                </tr>
                <tr>
                    <td>indentSize</td>
                    <td>展示树形数据时，每层缩进的宽度，以 px 为单位</td>
                    <td>number</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>loading</td>
                    <td>页面是否加载中</td>
                    <td>boolean|object</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>locale</td>
                    <td>默认文案设置，目前包括排序、过滤、空数据文案</td>
                    <td>object</td>
                    <td>filterConfirm: '确定'
                        filterReset: '重置'
                        emptyText: '暂无数据'</td>
                </tr>
                <tr>
                    <td>pagination</td>
                    <td>分页器，参考配置项或 pagination，设为 false 时不展示和进行分页</td>
                    <td>object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>rowClassName</td>
                    <td>表格行的类名</td>
                    <td>Function(record, index):string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>rowKey</td>
                    <td>表格行 key 的取值，可以是字符串或一个函数</td>
                    <td>string|Function(record):string</td>
                    <td>'key'</td>
                </tr>
                <tr>
                    <td>rowSelection</td>
                    <td>列表项是否可选择，配置项</td>
                    <td>object</td>
                    <td>null</td>
                </tr>
                <tr>
                    <td>scroll</td>
                    <td>设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }</td>
                    <td>{ x: number | true, y: number }</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>showHeader</td>
                    <td>是否显示表头</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>正常或迷你类型，default or small</td>
                    <td>string</td>
                    <td>'default'</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>表格标题</td>
                    <td>Function(currentPageData)|slot-scope</td>
                    <td></td>
                </tr>
                <tr>
                    <td>customHeaderRow</td>
                    <td>设置头部行属性</td>
                    <td>Function(column, index)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>customRow</td>
                    <td>设置行属性</td>
                    <td>Function(record, index)</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-rate 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">事件名称</th>
                    <th width="70%">说明</th>
                    <th width="15%">回调参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>expandedRowsChange</td>
                    <td>展开的行变化时触发</td>
                    <td>Function(expandedRows)</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>分页、排序、筛选变化时触发</td>
                    <td>Function(pagination, filters, sorter)</td>
                </tr>
                <tr>
                    <td>expand</td>
                    <td>点击展开图标时触发</td>
                    <td>Function(expanded, record)</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">customRow 用法</p>
            <p>适用于 <span class="high-item">customRow</span> <span class="high-item">customHeaderRow</span> <span class="high-item">customCell</span> <span class="high-item">customHeaderCell</span>。</p>
            <p>遵循<span class="highlight">Vue jsx</span>语法。</p>
            <search-code :code="CodeCustomRow" :expand="true" :visibleTitle="false"></search-code>
            <p class="row-in-round">Column</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>align</td>
                    <td>设置列内容的对齐方式</td>
                    <td>'left' | 'right' | 'center'</td>
                    <td>'left'</td>
                </tr>
                <tr>
                    <td>colSpan</td>
                    <td>表头列合并,设置为 0 时，不渲染</td>
                    <td>number</td>
                    <td></td>
                </tr>
                <tr>
                    <td>dataIndex</td>
                    <td>列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>filterDropdown</td>
                    <td>可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互</td>
                    <td>VNode | slot-scope</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>filterDropdownVisible</td>
                    <td>用于控制自定义筛选菜单是否可见</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>filtered</td>
                    <td>标识数据是否经过过滤，筛选图标会高亮</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>filteredValue</td>
                    <td>筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组</td>
                    <td>string[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>filterIcon</td>
                    <td>自定义 fiter 图标。</td>
                    <td>VNode | (filtered: boolean, column: Column) => vNode |slot |slot-scope</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>filterMultiple</td>
                    <td>是否多选</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>filters</td>
                    <td>表头的筛选菜单项</td>
                    <td>object[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>fixed</td>
                    <td>列是否固定，可选 true(等效于 left) 'left' 'right'</td>
                    <td>boolean|string</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>customRender</td>
                    <td>生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并,可参考demo 表格行/列合并</td>
                    <td>Function(text, record, index) {}|slot-scope</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>sorter</td>
                    <td>排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true</td>
                    <td>Function|boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>sortOrder</td>
                    <td>排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false</td>
                    <td>boolean|string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>列头显示文字</td>
                    <td>string|slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>列宽度</td>
                    <td>string|number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>customCell</td>
                    <td>设置单元格属性</td>
                    <td>Function(record, rowIndex)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>customHeaderCell</td>
                    <td>设置头部单元格属性</td>
                    <td>Function(column)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>onFilter</td>
                    <td>本地模式下，确定筛选的运行函数, 使用template或jsx时作为filter事件使用</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>onFilterDropdownVisibleChange</td>
                    <td>自定义筛选菜单可见变化时调用，使用template或jsx时作为filterDropdownVisibleChange事件使用</td>
                    <td>function(visible) {}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>slots</td>
                    <td>使用columns时，可以通过该属性配置支持slot的属性，如 slots: { filterIcon: 'XXX'}</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>scopedSlots</td>
                    <td>使用columns时，可以通过该属性配置支持slot-scope的属性，如 scopedSlots: { customRender: 'XXX'}</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">ColumnGroup</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>title</td>
                    <td>列头显示文字</td>
                    <td>string|slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>slots</td>
                    <td>使用columns时，可以通过该属性配置支持slot的属性，如 slots: { title: 'XXX'}</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">pagination</p>
            <p>分页的配置项，更多配置查看Pagination组建文档</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>position</td>
                    <td>指定分页显示的位置</td>
                    <td>'top' | 'bottom' | 'both'</td>
                    <td>'bottom'</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">rowSelection</p>
            <p>选择功能的配置</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>columnWidth</td>
                    <td>自定义列表选择框宽度</td>
                    <td>string|number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>columnTitle</td>
                    <td>自定义列表选择框标题</td>
                    <td>string|VNode</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>fixed</td>
                    <td>把选择框列固定在左边</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>getCheckboxProps</td>
                    <td>选择框的默认属性配置</td>
                    <td>Function(record)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>hideDefaultSelections</td>
                    <td>去掉『全选』『反选』两个默认选项</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selectedRowKeys</td>
                    <td>指定选中项的 key 数组，需要和 onChange 进行配合</td>
                    <td>string[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>selections</td>
                    <td>自定义选择配置项, 设为 true 时使用默认选择项</td>
                    <td>object[]|boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>多选/单选，checkbox or radio</td>
                    <td>string</td>
                    <td>'checkbox'</td>
                </tr>
                <tr>
                    <td>onChange</td>
                    <td>选中项发生变化时的回调</td>
                    <td>Function(selectedRowKeys, selectedRows)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>onSelect</td>
                    <td>用户手动选择/取消选择某列的回调</td>
                    <td>Function(record, selected, selectedRows, nativeEvent)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>onSelectAll</td>
                    <td>用户手动选择/取消选择所有列的回调</td>
                    <td>Function(selected, selectedRows, changeRows)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>onSelectInvert</td>
                    <td>用户手动选择反选的回调</td>
                    <td>Function(selectedRows)</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">selection</p>
            <p>自定义选择配置项</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>key</td>
                    <td>Vue 需要的 key，建议设置</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>选择项显示的文字</td>
                    <td>string|VNode</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>onSelect</td>
                    <td>选择项点击回调</td>
                    <td>Function(changeableRowKeys)</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <h2>注意</h2>
            <p>在 Table 中，<span class="high-item">dataSource</span> 和 <span class="high-item">columns</span> 里的数据值都需要指定 <span class="high-item">key</span> 值。对于 <span class="high-item">dataSource</span> 默认将每列数据的 <span class="high-item">key</span> 属性作为唯一的标识。</p>
            <p>如果你的数据没有这个属性，务必使用 <span class="high-item">rowKey</span> 来指定数据列的主键。若没有指定，控制台会出现缺少key的提示，表格组件也会出现各类奇怪的错误。</p>
            <search-code :code="CodeRowKey" :expand="true" :visibleTitle="false"></search-code>
        </div>
        <!--参数说明结束-->
        <!--striped-->
        <!--hover-->
    </div>
</template>
<script>
    import { CodeBasic, CodeRowSelection, CodeHoverStriped, CodeRowSelectionCustom, CodeFilter, CodeSmallSize, CodeFixedHeader, CodeFixedColumns, CodeEditCell, CodeCombine, CodeNested, CodeCustomRow, CodeRowKey } from "./table.code";

    /**
     * 合并单元格
     */
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
                CodeBasic,
                CodeRowSelection,
                CodeHoverStriped,
                CodeRowSelectionCustom,
                CodeFilter,
                CodeSmallSize,
                CodeFixedHeader,
                CodeFixedColumns,
                CodeEditCell,
                CodeCombine,
                CodeNested,
                CodeCustomRow,
                CodeRowKey,
                columns: [{ // 基本表格-columns
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
                data: [], // 基本表格-data
                linkageColumns: [{ // 联动选择框/鼠标划过/小表格-columns
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
                linkageData: [{ // 联动选择框/鼠标划过/小表格-data
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
                customColumns: [{ // 自定义选择项-columns
                  title: 'Name',
                  dataIndex: 'name',
                }, {
                  title: 'Age',
                  dataIndex: 'age',
                }, {
                  title: 'Address',
                  dataIndex: 'address',
                }],
                customData: [], // 自定义选择项-data
                selectedRowKeys: [], // 自定义选择项-选择的row key
                sortFilterData: [{ // 筛选与排序-data
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
                filteredInfo: null, // 筛选与排序-filter
                sortedInfo: null, // 筛选与排序-sort
                fixedHeaderColumns: [{ // 固定表头-columns
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
                fixedHeaderData: [], // 固定表头-data
                fixedColColumns: [ // 固定列-columns
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
                fixedColData: [{ // 固定列-data
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
                editData: [{ // 可编辑单元格-data
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
                count: 2, // 可编辑单元格-count
                editColumns: [{ // 可编辑单元格-columns
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
                spanData: [{ // 合并单元格-data
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
                spanColumns: [{ // 合并单元格-columns
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
                outerColumns: [ // 表格嵌套-外columns
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
                    { title: 'Version', dataIndex: 'version', key: 'version' },
                    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
                    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
                    { title: 'Action', key: 'operation', scopedSlots: { customRender: 'operation' } },
                ],
                outerData: [], // 表格嵌套-外datas
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
                innerData: [], // 表格嵌套-内datas
                /* 动态展示区域 */
                hasBordered: false,
                isLoading: false,
                hasPagination: true,
                hasTitle: false,
                hasHeader: true,
                hasFooter: false,
                isExpandable: false,
                hasCheckbox: true,
                isHeaderFixed: false,
                isEmptyData: false,
                isSimplePage: false,
                tableSize: 'default',
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        created() {
            // 基础表格
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
            // 自定义选择项
            const customData = [];
            for (let i = 0; i < 46; i++) {
                customData.push({
                    key: i,
                    name: `Edward King ${i}`,
                    age: 32,
                    address: `London, Park Lane no. ${i}`,
                });
            }
            this.customData = customData;

            // 固定表头
            const fixedHeaderData = [];
            for (let i = 0; i < 100; i++) {
                fixedHeaderData.push({
                    key: i,
                    name: `Edward King ${i}`,
                    age: 32,
                    address: `London, Park Lane no. ${i}`,
                });
            }
            this.fixedHeaderData = fixedHeaderData;

            // 表格嵌套
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
            this.outerData = outerData;
            const innerData = [];
            for (let i = 0; i < 3; ++i) {
                innerData.push({
                    key: i,
                    date: '2014-12-24 23:12:00',
                    name: 'This is production name',
                    upgradeNum: 'Upgraded: 56',
                });
            }
            this.innerData = innerData;
        },
        computed: {
          /**
           * 联动选择
           */
            rowSelection() {
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                    },
                    getCheckboxProps: record => ({
                        props: {
                            disabled: record.name === 'Disabled User', // Column configuration not to be checked
                            name: record.name,
                        }
                    }),
                }
            },
            /**
             * 自定义选择
             */
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
            /**
             * 排序与筛选-columns
             */
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
            },
            /**
             * 动态表格的props
             */
            dynamicProps() {
                return Object.assign(
                    {
                        bordered: this.hasBordered,
                        loading: this.isLoading,
                        pagination: this.hasPagination && {simple: this.isSimplePage},
                        showHeader: this.hasHeader,
                        size: this.tableSize,
                    },
                    this.hasCheckbox ? {rowSelection : this.rowSelection} : {},
                    this.isHeaderFixed ? { scroll: { y: 240 }} : {},
                )
            },
        },
        methods: {
            /**
             * 自定义选择-select change
             */
            onSelectChange (selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys
            },
            /**
             * 筛选与排序-change
             */
            handleChange (pagination, filters, sorter) {
                console.log('Various parameters', pagination, filters, sorter);
                this.filteredInfo = filters;
                this.sortedInfo = sorter;
            },
            /**
             * 筛选与排序-清除filter
             */
            clearFilters () {
                this.filteredInfo = null;
            },
            /**
             * 筛选与排序-清除all
             */
            clearAll () {
                this.filteredInfo = null;
                this.sortedInfo = null;
            },
            /**
             * 筛选与排序-age sort
             */
            setAgeSort () {
                this.sortedInfo = {
                    order: 'descend',
                    columnKey: 'age',
                }
            },
            /**
             * 可编辑单元格-cell change
             */
            onCellChange (key, dataIndex, value) {
                const editData = [...this.editData]
                const target = editData.find(item => item.key === key)
                if (target) {
                    target[dataIndex] = value
                    this.editData = editData
                }
            },
            /**
             * 可编辑单元格-add
             */
            handleAdd () {
                const { count, editData } = this
                const newData = {
                    key: count,
                    name: `Edward King ${count}`,
                    age: 32,
                    address: `London, Park Lane no. ${count}`,
                }
                this.editData = [...editData, newData]
                this.count = count + 1
            },
        }
    }
</script>
<style scoped>
    .table-operations {
        margin-bottom: 16px;
    }

    .table-operations > button {
        margin-right: 8px;
    }
    .highlight {
        color: #1394ff;
    }
    .high-item {
        display: inline-block;
        background-color: #f2f4f5;
        padding: 5px;
    }
</style>