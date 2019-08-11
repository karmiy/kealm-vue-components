<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Tree 树控件</h1>
            <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
        </div>

        <!--基础树形控件-->
        <div class="detail-box">
            <h2>基础树形控件</h2>
            <p class="code-left-line">Demo</p>
            <div class="tree-container">
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
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!-- 基础树形控件结束 -->

        <!-- 带连接线的树 -->
        <div class="detail-box">
            <h2>带连接线的树</h2>
            <p class="code-left-line">Demo</p>
            <div class="tree-container">
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
            <search-code :code="CodeLine"></search-code>
        </div>
        <!-- 带连接线的树结束 -->

        <!-- 节点可拖动的树 -->
        <div class="detail-box">
            <h2>节点可拖动的树</h2>
            <p class="code-left-line">Demo</p>
            <div class="tree-container">
                <sl-tree
                    class="draggable-tree"
                    :defaultExpandedKeys="expandedKeys"
                    draggable
                    @dragenter="onDragEnter"
                    @drop="onDrop"
                    :treeData="dragTreeData"
                />
            </div>
            <search-code :code="CodeDraggable"></search-code>
        </div>
        <!-- 节点可拖动的树结束 -->

        <!-- 文件树 -->
        <div class="detail-box">
            <h2>文件树</h2>
            <p class="code-left-line">Demo</p>
            <div class="tree-container">
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
            <search-code :code="CodeDirectory"></search-code>
        </div>
        <!--文件树结束-->

        <!--可搜索的树-->
        <div class="detail-box">
            <h2>可搜索的树</h2>
            <p class="code-left-line">Demo</p>
            <div class="tree-container">
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
            <search-code :code="CodeFilter"></search-code>
        </div>
        <!--可搜索的树结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-tree</p>
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
                    <td>treeData</td>
                    <td>节点的配置描述</td>
                    <td>array</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>autoExpandParent</td>
                    <td>是否自动展开父节点</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>checkedKeys(v-model)</td>
                    <td>（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联</td>
                    <td>string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>checkStrictly</td>
                    <td>checkable状态下节点选择完全受控（父子节点选中状态不再关联）</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultCheckedKeys</td>
                    <td>默认选中复选框的树节点</td>
                    <td>string[] | number[]	</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>defaultExpandAll</td>
                    <td>默认展开所有树节点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultExpandedKeys</td>
                    <td>默认展开指定的树节点</td>
                    <td>string[] | number[]	</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>defaultExpandParent</td>
                    <td>默认展开父节点</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>defaultSelectedKeys</td>
                    <td>默认选中的树节点</td>
                    <td>string[] | number[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>将树禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>draggable</td>
                    <td>设置节点可拖拽</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>expandedKeys(.sync)</td>
                    <td>（受控）展开指定的树节点</td>
                    <td>string[] | number[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>filterTreeNode</td>
                    <td>按需筛选树节点（高亮），返回true</td>
                    <td>function(node)	</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>loadData</td>
                    <td>异步加载数据</td>
                    <td>function(node)	</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>loadedKeys</td>
                    <td>（受控）已经加载的节点，需要配合 loadData 使用</td>
                    <td>string[] | number[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>支持点选多个节点（节点本身）</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selectedKeys(.sync)	</td>
                    <td>（受控）设置选中的树节点</td>
                    <td>string[] | number[]	</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>showIcon</td>
                    <td>是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>showLine</td>
                    <td>是否展示连接线</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-tree 事件</p>
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
                    <td>check</td>
                    <td>点击复选框触发</td>
                    <td>function(checkedKeys, e:{checked: bool, checkedNodes, node, event})</td>
                </tr>
                <tr>
                    <td>dragend</td>
                    <td>dragend 触发时调用</td>
                    <td>function({event, node})</td>
                </tr>
                <tr>
                    <td>dragenter</td>
                    <td>dragenter 触发时调用</td>
                    <td>function({event, node, expandedKeys})</td>
                </tr>
                <tr>
                    <td>dragleave</td>
                    <td>dragleave 触发时调用</td>
                    <td>function({event, node})</td>
                </tr>
                <tr>
                    <td>dragover</td>
                    <td>dragover 触发时调用</td>
                    <td>function({event, node})</td>
                </tr>
                <tr>
                    <td>dragstart</td>
                    <td>开始拖拽时调用</td>
                    <td>function({event, node})</td>
                </tr>
                <tr>
                    <td>drop</td>
                    <td>drop 触发时调用</td>
                    <td>function({event, node, dragNode, dragNodesKeys})</td>
                </tr>
                <tr>
                    <td>expand</td>
                    <td>展开/收起节点时触发</td>
                    <td>function(expandedKeys, {expanded: bool, node})</td>
                </tr>
                <tr>
                    <td>load</td>
                    <td>节点加载完毕时触发</td>
                    <td>function(loadedKeys, {event, node})</td>
                </tr>
                <tr>
                    <td>rightClick</td>
                    <td>响应右键点击</td>
                    <td>function({event, node})</td>
                </tr>
                <tr>
                    <td>select</td>
                    <td>点击树节点触发</td>
                    <td>function(selectedKeys, e:{selected: bool, selectedNodes, node, event})</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-tree-node</p>
            <p>结点描述数据对象，是 treeNodes 中的一项，TreeNode 使用相同的 API。</p>
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
                    <td>class</td>
                    <td>节点的 class</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>节点的 style</td>
                    <td>string|object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disableCheckbox</td>
                    <td>禁掉 checkbox</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁掉响应</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>自定义图标。可接收组件，props 为当前节点 props</td>
                    <td>slot|slot-scope</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>isLeaf</td>
                    <td>设置为叶子节点(设置了loadData时有效)</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！</td>
                    <td>string | number</td>
                    <td>内部计算出的节点位置</td>
                </tr>
                <tr>
                    <td>selectable</td>
                    <td>设置节点是否可被选中</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>标题</td>
                    <td>string|slot|slot-scope</td>
                    <td>'---'</td>
                </tr>
                <tr>
                    <td>slots</td>
                    <td>使用treeNodes时，可以通过该属性配置支持slot的属性，如 slots: { title: 'XXX'}</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>scopedSlots</td>
                    <td>使用columns时，可以通过该属性配置支持slot-scope的属性，如 scopedSlots: { title: 'XXX'}</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on</td>
                    <td>事件对象，仅在treeNodes使用方式中生效，如{click: () => {}}</td>
                    <td>object</td>
                    <td>'---'</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-directory-tree</p>
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
                    <td>expandAction</td>
                    <td>目录展开逻辑，可选 false 'click' 'doubleclick'</td>
                    <td>string</td>
                    <td>'click'</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeLine, CodeDraggable, CodeDirectory, CodeFilter } from "./tree.code";
    import { treeData, dragTreeData, searchTreeData } from './tree.data';
    /**
     * 可搜索-获取父节点的key
     */
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
    const dataList = []; // 扁平数据
    /**
     * 可搜索-制造扁平数据
     */
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
    /**
     * 可搜索-过滤isHide节点
     */
    const filterNodes = (nodes, value) => {
        if (!Array.isArray(nodes)) {
            return;
        }
        nodes.forEach(node => {
            let flag = node.title.includes(value);

            // 筛选children
            const children = node.children || [];
            if (children.length > 0) {
                filterNodes(children, value);
            }

            // 如果这个节点不包含该文本，观察其子节点里有一个是显示的，该节点就显示
            node.isHide = !flag && !children.some(child => !child.isHide);
        })
    }

    export default {
        data() {
            return {
                CodeBasic,
                CodeLine,
                CodeDraggable,
                CodeDirectory,
                CodeFilter,
                treeData, // 基础树形控件数据
                dragTreeData, // 可拖动树形控件数据
                searchTreeData, // 可搜索树形控件
                expandedKeys: ['0-0-0', '0-0-1'], // 基础树形控件/可拖拽树控件/可搜索 - 展开的节点
                autoExpandParent: true, // 基础树形控件/可搜索 - true的话，子节点展开状态，会使父节点不能折叠
                checkedKeys: ['0-0-0'], // 基础树形控件 - 选中的checkbox
                selectedKeys: ['0-0-1-2'], // 基础树形控件 - 选中状态（淡蓝背景色）
                searchValue: '', // 可搜索 - 查询字符串
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        watch: {
            checkedKeys(val) {
                console.log('onCheck', val)
            }
        },
        methods: {
            /**
             * 基础树形控件-展开收起回调
             */
            onExpand (expandedKeys) {
                console.log('onExpand', expandedKeys)
                this.expandedKeys = expandedKeys
                this.autoExpandParent = false
            },
            /**
             * 基础树形控件-选中回调
             */
            onCheck (checkedKeys) {
                console.log('onCheck', checkedKeys)
                this.checkedKeys = checkedKeys
            },
            /**
             * 基础树形控件-选择leaf回调
             */
            onSelect (selectedKeys, info) {
                console.log('onSelect', info)
                this.selectedKeys = selectedKeys
            },
            /**
             * 可拖拽树形控件-拖拽时进入某个位置触发
             */
            onDragEnter (info) {
                console.log(info)
                // expandedKeys 需要受控时设置
                // this.expandedKeys = info.expandedKeys
            },
            /**
             * 可拖拽树形控件-拖拽放下触发
             */
            onDrop (info) {
                console.log(info)
                const dropKey = info.node.eventKey // 拖到要放位置的节点，即被插入的节点
                const dragKey = info.dragNode.eventKey // 被拖的节点
                const dropPos = info.node.pos.split('-') // 拖到要放位置的节点
                const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]) // 判断要插入的位置（上方-1，下方1，内容0）
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
                // 找到被拖拽的那个对象
                let dragObj
                loop(data, dragKey, (item, index, arr) => {
                    arr.splice(index, 1)
                    dragObj = item
                })
                if (!info.dropToGap) {
                    // 拖拽到了内容上，查到这个内容节点末尾
                    loop(data, dropKey, (item) => {
                        item.children = item.children || [];
                        // where to insert 示例添加到尾部，可以是随意位置
                        item.children.push(dragObj);
                    });
                } else if ( // 被插入的节点有子节点，且它是展开状态，且是下方插入
                    (info.node.$children || []).length > 0
                    && info.node.expanded
                    && dropPosition === 1
                ) {
                    loop(data, dropKey, (item) => {
                        item.children = item.children || [];
                        // where to insert 示例添加到首部，可以是随意位置
                        item.children.unshift(dragObj);
                    });
                } else {
                    // 下方插入至节点下面，上方则节点上面
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
            /**
             * 可搜索-输入框改变
             */
            onChange (e) {
                const value = e.target.value
                // 获取展开节点（先找到节点名满足输入内容的节点的父级，再过滤重复）
                const expandedKeys = dataList.map((item) => {
                    if (item.title.indexOf(value) > -1) {
                        return getParentKey(item.key, this.searchTreeData)
                    }
                    return null
                }).filter((item, i, self) => item && self.indexOf(item) === i)
                // 匹配内容的节点线显示，其他隐藏
                filterNodes(this.searchTreeData, value);
                Object.assign(this, {
                    expandedKeys,
                    searchValue: value,
                    autoExpandParent: true,
                })
            },
        }
    }
</script>
<style scoped>
    @import './tree.scss';
</style>
