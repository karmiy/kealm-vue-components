<template>
    <div class="page-box" ref="timePickerRef" >
        <div class="detail-box">
            <h1>Time Picker 时间选择器</h1>
            <p>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</p>
        </div>

        <!--基础时间选择器-->
        <div class="detail-box">
            <h2>基础时间选择器</h2>
            <p class="code-left-line">Demo</p>
            <sl-time-picker @change="onChange" :defaultOpenValue="defaultDate" />
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础时间选择器结束-->

        <!--附加内容-->
        <div class="detail-box">
            <h2>附加内容</h2>
            <p class="code-left-line">Demo</p>
            <sl-time-picker :open.sync="open" >
                <sl-button slot="addon" size="small" @click="handleClose">取消</sl-button>
                <sl-button slot="addon" size="small" type="primary" @click="handleClose">确定</sl-button>
            </sl-time-picker>
            <search-code :code="CodeAddon"></search-code>
        </div>
        <!--附加内容结束-->

        <!--禁用部分时间-->
        <div class="detail-box">
            <h2>禁用部分时间</h2>
            <p class="code-left-line">Demo</p>
            <sl-time-picker
                :defaultOpenValue="defaultDate"
                :disabledHours="() => [ 1, 2, 3 ]" :disabledMinutes="() => [ 20, 21, 22, 23, 24, 25 ]"
                :disabledSeconds="() => [ 20, 21, 22, 23, 24, 25 ]"
            />
            <search-code :code="CodeDisabledPart"></search-code>
        </div>
        <!--禁用部分时间结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-time-picker</p>
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
                    <td>addon</td>
                    <td>选择框底部显示自定义的内容</td>
                    <td>slot | slot-scope</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>allowEmpty</td>
                    <td>是否展示清除按钮</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>autoFocus</td>
                    <td>自动获取焦点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>clearText</td>
                    <td>清除按钮的提示文案</td>
                    <td>string</td>
                    <td>clear</td>
                </tr>
                <tr>
                    <td>defaultOpenValue</td>
                    <td>当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值</td>
                    <td>Date</td>
                    <td>new Date()</td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>默认时间</td>
                    <td>Date</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用全部操作</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabledHours</td>
                    <td>禁止选择部分小时选项</td>
                    <td>function()</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>disabledMinutes</td>
                    <td>禁止选择部分分钟选项</td>
                    <td>function(selectedHour)</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>disabledSeconds</td>
                    <td>禁止选择部分秒选项</td>
                    <td>function(selectedHour, selectedMinute)</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>展示的时间格式</td>
                    <td>string</td>
                    <td>"HH:mm:ss"</td>
                </tr>
                <tr>
                    <td>getPopupContainer</td>
                    <td>定义浮层的容器，默认为 body 上新建 div</td>
                    <td>function(trigger)</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>hideDisabledOptions</td>
                    <td>隐藏禁止选择的选项</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>inputReadOnly</td>
                    <td>设置输入框为只读（避免在移动设备上打开虚拟键盘）</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>hourStep</td>
                    <td>小时选项间隔</td>
                    <td>number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>minuteStep</td>
                    <td>分钟选项间隔</td>
                    <td>number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>secondStep</td>
                    <td>秒选项间隔</td>
                    <td>function()</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>open(.sync)</td>
                    <td>面板是否打开</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>没有值的时候显示的内容</td>
                    <td>string</td>
                    <td>"请选择时间"</td>
                </tr>
                <tr>
                    <td>popupClassName</td>
                    <td>弹出层类名</td>
                    <td>string</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>suffixIcon</td>
                    <td>自定义的选择框后缀图标</td>
                    <td>string | VNode | slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>use12Hours</td>
                    <td>使用 12 小时制，为 true 时 format 默认为 h:mm:ss a</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>当前时间</td>
                    <td>Date</td>
                    <td>无</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-time-picker 事件</p>
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
                    <td>时间发生变化的回调</td>
                    <td>function(time: Date, timeString: string): void</td>
                </tr>
                <tr>
                    <td>openChange</td>
                    <td>面板打开/关闭时的回调</td>
                    <td>function(open: boolean): void</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-time-picker 方法</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                    <tr>
                        <th width="50%">名称</th>
                        <th width="50%">描述</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>blur()</td>
                        <td>移除焦点</td>
                    </tr>
                    <tr>
                        <td>focus()</td>
                        <td>获取焦点</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeAddon, CodeDisabledPart, } from "./time-picker.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeAddon,
                CodeDisabledPart,
                open: false,
                defaultDate: new Date(),
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
            onChange(time, timeString){
                console.log(time, timeString);
            },
            handleClose(){
                this.open = false;
            }
        },
    }
</script>