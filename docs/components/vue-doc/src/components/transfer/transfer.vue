<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Transfer 穿梭框</h1>
            <p>双栏穿梭选择框。</p>
        </div>

        <!--基础样式-->
        <div class="detail-box">
            <h2>基础样式</h2>
            <p class="code-left-line">Demo</p>
            <sl-transfer
                :dataSource="mockData"
                :titles="['Source', 'Target']"
                :targetKeys="targetKeys"
                :selectedKeys="selectedKeys"
                @change="handleChange"
                @selectChange="handleSelectChange"
                @scroll="handleScroll"
                :render="item=>item.title"
            />
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础样式结束-->

        <!--带搜索的穿梭框-->
        <div class="detail-box">
            <h2>带搜索的穿梭框</h2>
            <p class="code-left-line">Demo</p>
            <sl-transfer
                :dataSource="mockData"
                showSearch
                :filterOption="filterOption"
                :targetKeys="targetKeys"
                @change="handleChange"
                @search="handleSearch"
                :render="item=>item.title"
            >
            </sl-transfer>
            <search-code :code="CodeSearch"></search-code>
        </div>
        <!--带搜索的穿梭框结束-->

        <!--自定义footer-->
        <div class="detail-box">
            <h2>自定义footer</h2>
            <p class="code-left-line">Demo</p>
            <sl-transfer
                :dataSource="mockData"
                :targetKeys="targetKeys"
                @change="handleChange"
                :render="item=>item.title"
                :filterSource="filterSource"
                :filterTarget="filterTarget"
            >
                <sl-select v-model="selectSource" allowClear slot="sourceFooter" slot-scope="props" placeholder="请选择标签" @change="footerSelectChange($event, props.direction)">
                    <sl-select-option v-for="item in props.dataSource" :key="item.key" :disabled="item.disabled" >{{item.title}}</sl-select-option>
                </sl-select>
                <sl-select v-model="selectTarget" allowClear slot="targetFooter" slot-scope="props" placeholder="请选择标签" @change="footerSelectChange($event, props.direction)">
                    <sl-select-option v-for="item in props.dataSource" :key="item.key" :disabled="item.disabled" >{{item.title}}</sl-select-option>
                </sl-select>
            </sl-transfer>
            <search-code :code="CodeFooterCustom"></search-code>
        </div>
        <!--自定义footer结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-transfer</p>
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
                    <td>dataSource</td>
                    <td>数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外</td>
                    <td>[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>filterOption</td>
                    <td>接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td>
                    <td>(inputValue, option): boolean</td>
                    <td></td>
                </tr>
                <tr>
                    <td>footer</td>
                    <td>可以设置为一个 作用域插槽</td>
                    <td>slot="footer" slot-scope="props"</td>
                    <td></td>
                </tr>
                <tr>
                    <td>sourceFooter</td>
                    <td>左侧的footer，没有则取slot="footer"</td>
                    <td>slot="sourceFooter" slot-scope="props"</td>
                    <td></td>
                </tr>
                <tr>
                    <td>targetFooter</td>
                    <td>右侧的footer，没有则取slot="footer"</td>
                    <td>slot="targetFooter" slot-scope="props"</td>
                    <td></td>
                </tr>
                <tr>
                    <td>lazy</td>
                    <td>Transfer 使用了 [vc-lazy-load]优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载</td>
                    <td>object|boolean</td>
                    <td>{ height: 32, offset: 32 }</td>
                </tr>
                <tr>
                    <td>listStyle</td>
                    <td>两个穿梭框的自定义样式</td>
                    <td>object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>locale</td>
                    <td>各种语言</td>
                    <td>object</td>
                    <td>{ itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容' }</td>
                </tr>
                <tr>
                    <td>operations</td>
                    <td>操作文案集合，顺序从上至下</td>
                    <td>string[]</td>
                    <td>['>', '<']</td>
                </tr>
                <tr>
                    <td>render</td>
                    <td>每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title</td>
                    <td>Function(record)	</td>
                    <td></td>
                </tr>
                <tr>
                    <td>selectedKeys</td>
                    <td>设置哪些项应该被选中</td>
                    <td>string[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>showSearch</td>
                    <td>是否显示搜索框</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>targetKeys</td>
                    <td>显示在右侧框数据的key集合</td>
                    <td>string[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>titles</td>
                    <td>标题集合，顺序从左至右</td>
                    <td>string[]</td>
                    <td>['', '']</td>
                </tr>
                <tr>
                    <td>rowKey</td>
                    <td>dataSource里的数据值需要指定 key 值。对于 dataSource 默认将每列数据的 key 属性作为唯一的标识，没有则需要使用rowKey指定数据列主键</td>
                    <td>Function</td>
                    <td>record => record.key</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-transfer 事件</p>
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
                    <td>change</td>
                    <td>选项在两栏之间转移时的回调函数</td>
                    <td>(targetKeys, direction, moveKeys): void</td>
                </tr>
                <tr>
                    <td>scroll</td>
                    <td>选项列表滚动时的回调函数</td>
                    <td>(direction, event): void</td>
                </tr>
                <tr>
                    <td>search</td>
                    <td>搜索框内容时改变时的回调函数</td>
                    <td>(direction: 'left'|'right', value: string): void</td>
                </tr>
                <tr>
                    <td>selectChange</td>
                    <td>选中项发生改变时的回调函数</td>
                    <td>(sourceSelectedKeys, targetSelectedKeys): void</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeSearch, CodeFooterCustom } from "./transfer.code";

    export default {
        data() {
            const mockData = [];
            for (let i = 0; i < 20; i++) {
                mockData.push({
                    key: (i + 1).toString(),
                    title: `content${i + 1}`,
                    description: `description of content${i + 1}`,
                    disabled: i % 3 < 1,
                });
            }
            /*const oriTargetKeys = mockData
                .filter(item => item.key % 3 > 1)
                .map(item => item.key);*/
            const oriTargetKeys = [], oltTargetKeys = [];
            mockData.forEach(item => {
              item.key % 3 > 1 ? oriTargetKeys.push(item.key) : oltTargetKeys.push(item.key);
            })
            return {
                CodeBasic,
                CodeSearch,
                CodeFooterCustom,
                mockData,
                sourceKeys: oltTargetKeys,
                targetKeys: oriTargetKeys,
                selectedKeys: ['1', '4'],
                filterSource: oltTargetKeys, // 左侧过滤条件
                filterTarget: oriTargetKeys, // 右侧过滤条件
                selectSource: undefined, // 下拉选择器选中
                selectTarget: undefined, // 下拉选择器选中
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            /**
             * 基本示例/带搜索框-change
             */
            handleChange(nextTargetKeys, direction, moveKeys) {
                this.filterTarget = this.targetKeys = nextTargetKeys
                this.filterSource = this.sourceKeys = this.mockData.filter(item => !nextTargetKeys.includes(item.key)).map(item => item.key)
                this.selectSource = this.selectTarget = undefined

                console.log('targetKeys: ', nextTargetKeys);
                console.log('direction: ', direction);
                console.log('moveKeys: ', moveKeys);
            },
            /**
             * 基本示例-selectChange
             */
            handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
                this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]

                console.log('sourceSelectedKeys: ', sourceSelectedKeys);
                console.log('targetSelectedKeys: ', targetSelectedKeys);
            },
            /**
             * 基本示例-scroll
             */
            handleScroll(direction, e) {
                console.log('direction:', direction);
                console.log('target:', e.target);
            },
            /**
             * 带搜索框-filter
             */
            filterOption(inputValue, option) {
                return option.description.indexOf(inputValue) > -1;
            },
            /**
             * 带搜索框-search
             */
            handleSearch (dir, value) {
                console.log('search:', dir, value);
            },
            /**
             * 下拉选择器选中
             */
            footerSelectChange(value, direction) {
                if(direction === 'right') {
                    this.filterTarget = value ? [this.targetKeys.find(key => key === value)] : [...this.targetKeys];
                }else {
                    this.filterSource = value? [this.sourceKeys.find(key => key === value)] : [...this.sourceKeys];
                }
            }
        }
    }
</script>
<style scoped>
</style>