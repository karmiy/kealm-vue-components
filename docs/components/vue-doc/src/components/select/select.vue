<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Select 下拉选择器</h1>
            <p>弹出一个下拉选择器给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</p>
            <p>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</p>
        </div>

        <!--基础下拉选择器-->
        <div class="detail-box">
            <h2>基础下拉选择器</h2>
            <p>单选下拉，带有重选效果。</p>
            <p class="code-left-line">Demo</p>
            <sl-select v-model="value" allowClear @change="handleChange">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础下拉选择器结束-->

        <!--三种大小-->
        <div class="detail-box">
            <h2>三种大小</h2>
            <p>三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 38px 和 24px ，默认高度为 30px。</p>
            <p class="code-left-line">Demo</p>
            <sl-select v-model="value" allowClear size="large" style="margin-right: 20px;">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="value" allowClear size="default" style="margin-right: 20px;">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="value" allowClear size="small">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeSize"></search-code>
        </div>
        <!--三种大小结束-->

        <!--多选下拉选择器-->
        <div class="detail-box">
            <h2>多选下拉选择器</h2>
            <p class="code-left-line">Demo</p>
            <p>多选下拉，可以通过maxMultipleCount控制最多选择的个数。本例的maxMultipleCount为3</p>
            <sl-select v-model="values" mode="multiple" :maxMultipleCount="3">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <p>多选下拉，可以通过maxTagCount控制最多显示的个数。本例的maxTagCount为3</p>
            <sl-select v-model="values" mode="multiple" :maxTagCount="3" allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <p>多选下拉，可以通过maxTagCount和tagWidth控制最多显示的个数和tag的宽度。本例的maxTagCount为3，tagWidth为60</p>
            <sl-select v-model="values" mode="multiple" :maxTagCount="3" :tagWidth="60" allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeMultiple"></search-code>
        </div>
        <!--多选下拉选择器结束-->

        <!--带搜索框-->
        <div class="detail-box">
            <h2>带搜索框</h2>
            <p>带有搜索框的下拉选择器，未匹配到输入框内的内容显示未匹配结果。</p>
            <p>搜索输入框根据多选与单选显示的位置有所不同。</p>
            <p class="code-left-line">Demo</p>
            <sl-select v-model="values" mode="multiple" showSearch allowClear style="margin-right: 20px">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="value" showSearch allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeSearch"></search-code>
        </div>
        <!--带搜索框结束-->

        <!--带全选/重选按钮的多选下拉框-->
        <div class="detail-box">
            <h2>带全选/重选按钮的多选下拉框</h2>
            <p>可以通过设置showSelectAll让全选按钮显示。</p>
            <p class="code-left-line">Demo</p>
            <sl-select v-model="values" mode="multiple" showSelectAll allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeSelectAll"></search-code>
        </div>
        <!--带全选/重选按钮的多选下拉框结束-->

        <!--带反选按钮的多选下拉框-->
        <div class="detail-box">
            <h2>带反选按钮的多选下拉框</h2>
            <p>可以通过设置showSelectInverse让反选按钮显示。</p>
            <p class="code-left-line">Demo</p>
            <sl-select v-model="values" mode="multiple" showSelectInverse>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeSelectInverse"></search-code>
        </div>
        <!--带反选按钮的多选下拉框结束-->

        <!--联动型下拉选择器-->
        <div class="detail-box">
            <h2>联动型下拉选择器</h2>
            <p>省市联动是最典型的例子。</p>
            <p class="code-left-line">Demo</p>
            <sl-select :defaultValue="provinceData[0]" style="margin-right: 20px" @change="handleProvinceChange">
                <sl-select-option v-for="province in provinceData" :key="province">{{province}}</sl-select-option>
            </sl-select>
            <sl-select v-model="secondCity">
                <sl-select-option v-for="city in cities" :key="city">{{city}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeCascade"></search-code>
        </div>
        <!--联动型下拉选择器结束-->

        <!--禁用下拉选择器-->
        <div class="detail-box">
            <h2>禁用下拉选择器</h2>
            <p class="code-left-line">Demo</p>
            <sl-select v-model="value" disabled style="margin-right: 20px">
                <sl-select-option v-for="item in listOfOption" :key="item.label + 'demo01'" :value="item.value">{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="values" mode="multiple" disabled>
                <sl-select-option v-for="item in listOfOption" key="item.label" :value="item.value">{{item.label}}</sl-select-option>
            </sl-select>
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--禁用下拉选择器结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-select</p>
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
                    <td>allowClear</td>
                    <td>显示可以清除当前选项的重选按钮</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>指定默认选中的条目</td>
                    <td>string|string[]|number|number[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>dropdownClassName</td>
                    <td>下拉菜单的 className 属性</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>dropdownStyle</td>
                    <td>下拉菜单的 style 属性</td>
                    <td>object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>filterOption</td>
                    <td>是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。</td>
                    <td>boolean or function(inputValue, option)</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>getPopupContainer</td>
                    <td>菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。</td>
                    <td>Function(triggerNode)</td>
                    <td>() => 父元素里最近拥有滚动条的元素</td>
                </tr>
                <tr>
                    <td>maxTagCount</td>
                    <td>最多显示多少个 tag</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>maxMultipleCount</td>
                    <td>最多选中多少个标签</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>tagWidth</td>
                    <td>限制标签宽度</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>showSelectAll</td>
                    <td>在多选模式下，设置该值可控制全选按钮显示状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>showSelectInverse</td>
                    <td>在多选模式下，设置该值可控制反选按钮显示状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>maxTagPlaceholder</td>
                    <td>隐藏 tag 时显示的内容</td>
                    <td>slot/function(omittedValues)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>mode</td>
                    <td>设置 Select 的模式为多选或标签</td>
                    <td>'default' | 'multiple' | 'tags'</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>notFoundContent</td>
                    <td>当下拉列表为空时显示的内容</td>
                    <td>string|slot</td>
                    <td>'Not Found'</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>选择框默认文字</td>
                    <td>string|slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>showSearch</td>
                    <td>显示搜索框，单选模式和多选模式效果不同</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>showArrow</td>
                    <td>是否显示下拉小箭头</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>选择框大小，可选 large small</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>removeIcon</td>
                    <td>自定义的多选框清除图标</td>
                    <td>VNode | slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>指定当前选中的条目</td>
                    <td>string|string[]|number|number[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>defaultOpen</td>
                    <td>是否默认展开下拉菜单</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>open</td>
                    <td>是否展开下拉菜单</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-select 事件</p>
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
                    <td>选中option时，调用此函数</td>
                    <td>function(value, option:Option/Array&lt;Option&gt;)</td>
                </tr>
                <tr>
                    <td>deselect</td>
                    <td>取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效</td>
                    <td>function(value，option:Option)</td>
                </tr>
                <tr>
                    <td>inputKeydown</td>
                    <td>键盘按下时回调</td>
                    <td>function</td>
                </tr>
                <tr>
                    <td>mouseenter</td>
                    <td>鼠标移入时回调</td>
                    <td>function</td>
                </tr>
                <tr>
                    <td>mouseleave</td>
                    <td>鼠标移出时回调</td>
                    <td>function</td>
                </tr>
                <tr>
                    <td>popupScroll</td>
                    <td>下拉列表滚动时的回调</td>
                    <td>function</td>
                </tr>
                <tr>
                    <td>search</td>
                    <td>文本框值变化时回调</td>
                    <td>function(value: string)</td>
                </tr>
                <tr>
                    <td>select</td>
                    <td>被选中时调用，参数为选中项的 value (或 key) 值</td>
                    <td>function(value, option:Option)</td>
                </tr>
                <tr>
                    <td>dropdownVisibleChange</td>
                    <td>展开下拉菜单的回调</td>
                    <td>function(open)</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-select-option</p>
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
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>选中该 Option 后，Select 的 title</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>默认根据此属性值进行筛选</td>
                    <td>string|number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>Option 器类名</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeSize, CodeSearch, CodeMultiple, CodeSelectAll, CodeSelectInverse, CodeCascade, CodeDisable, CodeBigList } from "./select.code";
    const provinceData = ['福建省', '广东省'];
    const cityData = {
      '福建省': [ '福州市', '厦门市', '莆田市' ],
      '广东省': [ '广州市', '佛山市', '深圳' ],
    };
    export default {
        data() {
            return {
              CodeBasic,
              CodeSize,
              CodeSearch,
              CodeMultiple,
              CodeSelectAll,
              CodeSelectInverse,
              CodeCascade,
              CodeDisable,
              CodeBigList,
              value: 'a10',
              values: ['a10', 'b11'],
              listOfOption: [],
              provinceData,
              cityData,
              cities: cityData[provinceData[0]],
              secondCity: cityData[provinceData[0]][0],
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        created() {
            const children = [];
            for (let i = 10; i < 36; i++) {
                children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
            }
            this.listOfOption = children;
        },
        methods: {
            handleChange(value) {
                console.log(`selected ${value}`);
            },
            handleProvinceChange(value) {
                this.cities = cityData[value]
                this.secondCity = cityData[value][0]
            },
            test(...rest) {
              console.log(1, rest);
            }
        },
    }
</script>
<style scoped>
</style>