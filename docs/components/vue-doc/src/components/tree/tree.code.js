/* 基础树形控件 */
export const CodeBasic = 
`    <template>
        <div>
            <sl-tree
                    checkable
                    @expand="onExpand"
                    :expandedKeys="expandedKeys"
                    :autoExpandParent="autoExpandParent"
                    v-model="checkedKeys"
                    @select="onSelect"
                    :selectedKeys="selectedKeys"
                    :treeData="treeData"
                    multiple
                />
        </div>
    </template>
    <script>
        const treeData = [
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
        export default {
            data() {
              return {
                expandedKeys: ['0-0-0', '0-0-1'],
                autoExpandParent: true,
                checkedKeys: ['0-0-0'],
                selectedKeys: ['0-0-1-2'],
              }
            },
            watch: {
                checkedKeys(val) {
                    console.log('onCheck', val)
                }
            },
            methods: {
                onExpand (expandedKeys) {
                    console.log('onExpand', expandedKeys)
                    this.expandedKeys = expandedKeys
                    this.autoExpandParent = false
                },
                onCheck (checkedKeys) {
                    console.log('onCheck', checkedKeys)
                    this.checkedKeys = checkedKeys
                },
                onSelect (selectedKeys, info) {
                    console.log('onSelect', info)
                    this.selectedKeys = selectedKeys
                },
            }
        }
    </script>`

/* 带连接线的树 */
export const CodeLine = `
    <template>
        <div>
            <sl-tree
                    showLine
                    :defaultExpandedKeys="['0-0-0']"
                >
                <sl-tree-node key="0-0">
                    <span slot="title">parent 1</span>
                    <sl-tree-node title="parent 1-0" key="0-0-0">
                        <sl-tree-node title="parent 1-0-1" key="0-0-0-0">
                            <sl-tree-node title="leaf" key="0-0-0-0-0" />
                        </sl-tree-node>
                        <sl-tree-node title="parent 1-0-2" key="0-0-0-1">
                            <sl-tree-node title="leaf" key="0-0-0-1-0" />
                        </sl-tree-node>
                        <sl-tree-node title="leaf" key="0-0-0-2" />
                    </sl-tree-node>
                    <sl-tree-node title="parent 1-1" key="0-0-1">
                        <sl-tree-node title="leaf" key="0-0-1-0" />
                    </sl-tree-node>
                    <sl-tree-node title="parent 1-2" key="0-0-2">
                        <sl-tree-node title="leaf" key="0-0-2-0" />
                        <sl-tree-node title="leaf" key="0-0-2-1" />
                    </sl-tree-node>
                </sl-tree-node>
                <sl-tree-node key="0-1">
                    <span slot="title">parent 2</span>
                    <sl-tree-node title="parent 2-0" key="0-1-0">
                        <sl-tree-node title="leaf" key="0-1-0-0" />
                        <sl-tree-node title="leaf" key="0-1-0-1" />
                        <sl-tree-node title="leaf" key="0-1-0-2" />
                    </sl-tree-node>
                </sl-tree-node>
            </sl-tree>
        </div>
    </template>`

/* 节点可拖动的树 */
export const CodeDraggable = 
`    <template>
        <div>
            <sl-tree
                class="draggable-tree"
                :defaultExpandedKeys="expandedKeys"
                draggable
                @dragenter="onDragEnter"
                @drop="onDrop"
                :treeData="dragTreeData"
            />
        </div>
    </template>
    <script>
        const dragTreeData = [
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
        export default {
            data() {
              return {
                dragTreeData,
                expandedKeys: ['0-0-0', '0-0-1'],
              }
            },
            methods: {
                onDragEnter (info) {
                    console.log(info)
                    this.expandedKeys = info.expandedKeys
                },
                onDrop (info) {
                    console.log(info)
                    const dropKey = info.node.eventKey
                    const dragKey = info.dragNode.eventKey
                    const dropPos = info.node.pos.split('-')
                    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
                    const loop = (data, key, callback) => {
                        data.forEach((item, index, arr) => {
                            if (item.key === key) {
                                return callback(item, index, arr)
                            }
                            if (item.children) {
                                return loop(item.children, key, callback)
                            }
                        })
                    }
                    const data = [...this.dragTreeData];
                    let dragObj
                    loop(data, dragKey, (item, index, arr) => {
                        arr.splice(index, 1)
                        dragObj = item
                    })
                    if (!info.dropToGap) {
                        loop(data, dropKey, (item) => {
                            item.children = item.children || [];
                            item.children.push(dragObj);
                        });
                    } else if (
                        (info.node.$children || []).length > 0
                        && info.node.expanded
                        && dropPosition === 1
                    ) {
                        loop(data, dropKey, (item) => {
                            item.children = item.children || [];
                            item.children.unshift(dragObj);
                        });
                    } else {
                        let ar;
                        let i;
                        loop(data, dropKey, (item, index, arr) => {
                            ar = arr;
                            i = index;
                        });
                        if (dropPosition === -1) {
                            ar.splice(i, 0, dragObj);
                        } else {
                            ar.splice(i + 1, 0, dragObj);
                        }
                    }
                    this.dragTreeData = data
                },
            }
        }
    </script>`

/* 文件树 */
export const CodeDirectory = 
`    <template>
        <div>
            <sl-directory-tree
                multiple
                defaultExpandAll
            >
                <sl-tree-node key="0">
                    <span slot="title" class="folder-name">parent 0</span>
                    <span slot="title" class="folder-desc">salus created at 2018-09-10</span>
                    <sl-tree-node key="0-0">
                        <span slot="title" class="folder-name">parent 0-0</span>
                        <span slot="title" class="folder-desc">salus created at 2018-09-10</span>
                        <sl-tree-node key="0-0-0" isLeaf>
                            <span slot="title" class="folder-name">leaf 0-0-0</span>
                            <span slot="title" class="folder-desc">salus modified at 2018-09-10</span>
                        </sl-tree-node>
                        <sl-tree-node key="0-0-1" isLeaf>
                            <span slot="title" class="folder-name">leaf 0-0-1</span>
                            <span slot="title" class="folder-desc">salus modified at 2018-09-10</span>
                        </sl-tree-node>
                    </sl-tree-node>
                    <sl-tree-node key="0-1">
                        <span slot="title" class="folder-name">parent 0-1</span>
                        <span slot="title" class="folder-desc">salus created at 2018-09-10</span>
                        <sl-tree-node key="0-1-0" isLeaf>
                            <span slot="title" class="folder-name">leaf 0-1-0</span>
                            <span slot="title" class="folder-desc">salus modified at 2018-09-10</span>
                        </sl-tree-node>
                        <sl-tree-node key="0-1-1" isLeaf>
                            <span slot="title" class="folder-name">leaf 0-1-1</span>
                            <span slot="title" class="folder-desc">salus modified at 2018-09-10</span>
                        </sl-tree-node>
                    </sl-tree-node>
                </sl-tree-node>
                <sl-tree-node key="1">
                    <span slot="title" class="folder-name">parent 1</span>
                    <span slot="title" class="folder-desc">salus created at 2018-09-10</span>
                    <sl-tree-node key="1-0" isLeaf>
                        <span slot="title" class="folder-name">leaf 1-0</span>
                        <span slot="title" class="folder-desc">salus modified at 2018-09-10</span>
                    </sl-tree-node>
                    <sl-tree-node key="1-1" isLeaf>
                        <span slot="title" class="folder-name">leaf 1-1</span>
                        <span slot="title" class="folder-desc">salus modified at 2018-09-10</span>
                    </sl-tree-node>
                </sl-tree-node>
            </sl-directory-tree>
        </div>
    </template>`;

/* 带搜索框 */
export const CodeFilter = 
`    <template>
        <div>
            <sl-input-search style="margin-bottom: 8px" placeholder="Search" @change="onChange" />
            <sl-tree
                @expand="onExpand"
                :expandedKeys="expandedKeys"
                :autoExpandParent="autoExpandParent"
                :treeData="searchTreeData"
            >
                <template slot="title" slot-scope="{title}">
                    <span v-if="title.indexOf(searchValue) > -1">
                      {{title.substr(0, title.indexOf(searchValue))}}
                      <span style="color: #f50">{{searchValue}}</span>
                      {{title.substr(title.indexOf(searchValue) + searchValue.length)}}
                    </span>
                    <span v-else>{{title}}</span>
                </template>
            </sl-tree>
        </div>
    </template>
    <script>
        const searchTreeData = [
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
        
        const getParentKey = (key, tree) => {
            let parentKey
            for (let i = 0; i < tree.length; i++) {
                const node = tree[i]
                if (node.children) {
                    if (node.children.some(item => item.key === key)) {
                        parentKey = node.key
                    } else if (getParentKey(key, node.children)) {
                        parentKey = getParentKey(key, node.children)
                    }
                }
            }
            return parentKey
        }
        const dataList = [];
        const generateList = (data) => {
            for (let i = 0; i < data.length; i++) {
                const node = data[i]
                const key = node.key,
                    title = node.title;
                dataList.push({ key, title })
                if (node.children) {
                    generateList(node.children, node.key)
                }
            }
        }
        generateList(searchTreeData)
        
        const filterNodes = (nodes, value) => {
            if (!Array.isArray(nodes)) {
                return;
            }
            nodes.forEach(node => {
                let flag = node.title.includes(value);
    
                const children = node.children || [];
                if (children.length > 0) {
                    filterNodes(children, value);
                }
    
                node.isHide = !flag && !children.some(child => !child.isHide);
            })
        }
        export default {
            data() {
              return {
                searchTreeData,
                autoExpandParent: true,
                expandedKeys: ['0-0-0', '0-0-1'],
                searchValue: '',
              }
            },
            methods: {
                onChange (e) {
                    const value = e.target.value
                    const expandedKeys = dataList.map((item) => {
                        if (item.title.indexOf(value) > -1) {
                            return getParentKey(item.key, this.searchTreeData)
                        }
                        return null
                    }).filter((item, i, self) => item && self.indexOf(item) === i)
                    
                    filterNodes(this.searchTreeData, value);
                    Object.assign(this, {
                        expandedKeys,
                        searchValue: value,
                        autoExpandParent: true,
                    })
                },
            }
        }
    </script>`