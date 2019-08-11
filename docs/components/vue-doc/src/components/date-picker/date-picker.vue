<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>DatePicker 日期选择框</h1>
            <p>输入或选择日期的控件。</p>
        </div>

        <!--基础日期选择框-->
        <div class="detail-box">
            <h2>基础日期选择框</h2>
            <p class="code-left-line">Demo</p>
            <sl-date-picker @change="onChange" />
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础日期选择框结束-->

        <!--日期时间选择框-->
        <div class="detail-box">
            <h2>日期时间选择框</h2>
            <p class="code-left-line">Demo</p>
            <sl-date-picker showTime format="YYYY-MM-DD HH:mm:ss" @change="onChange" @ok="onOk" @cancel="onCancel" />
            <search-code :code="CodeWithTime"></search-code>
        </div>
        <!--日期时间选择框结束-->

        <!--日期范围选择-->
        <div class="detail-box">
            <h2>日期范围选择</h2>
            <p class="code-left-line">Demo</p>
            <sl-range-picker @change="onChange" />
            <p class="row-in-round">带有快速选择按钮-日期</p>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="days" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="lastDays" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="lastWeeksAndMonths" />
            </div>
            <p class="row-in-round">带有操作按钮-日期</p>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="days" showOperation />
            </div>
            <p class="row-in-round">带有快速选择按钮-时间与日期</p>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="hours" showTime format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="days" showTime format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="lastDays" showTime format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" rangeBtnType="lastWeeksAndMonths" showTime format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" :rangeBtnType="['last24Hours', 'today' , 'lastThreeDays', 'lastWeek', 'lastMonth' ]" showTime format="YYYY-MM-DD HH:mm:ss" />
            </div>
            <search-code :code="CodeRange"></search-code>
        </div>
        <!--日期范围选择结束-->

        <!--不可选择的日期和时间-->
        <div class="detail-box">
            <h2>不可选择的日期和时间</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-date-picker showTime format="YYYY-MM-DD HH:mm:ss" :disabledDate="disabledDate" :disabledTime="disabledTime" @change="onChange" />
            </div>
            <div class="detail-block">
                <sl-month-picker :disabledDate="disabledDate" placeholder="选择月份" @change="onChange" />
            </div>
            <div class="detail-block">
                <sl-range-picker @change="onChange" :showTime="{ hideDisabledOptions: true }" format="YYYY-MM-DD HH:mm:ss" :disabledDate="disabledDate" :disabledTime="disabledRangeTime" />
            </div>
            <search-code :code="CodeDisabledDate"></search-code>
        </div>
        <!--不可选择的日期和时间结束-->

        <!--日期范围最大值最小值限制-->
        <div class="detail-box">
            <h2>日期范围最大值最小值限制</h2>
            <p class="code-left-line">Demo</p>
            <sl-date-picker
                :disabledDate="disabledStartDate"
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                v-model="startValue"
                @openChange="handleStartOpenChange"
            />
            <sl-date-picker
                :disabledDate="disabledEndDate"
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                v-model="endValue"
                :open="endOpen"
                @openChange="handleEndOpenChange"
            />
            <search-code :code="CodeLimit"></search-code>
        </div>
        <!--日期范围最大值最小值限制结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">DatePicker、MonthPicker、RangePicker、WeekPicker共享API</p>
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
                    <td>autoFocus</td>
                    <td>自动获取焦点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>allowClear</td>
                    <td>是否显示清除按钮</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>dateRender</td>
                    <td>作用域插槽，自定义日期单元格的内容</td>
                    <td>slot="dateRender" slot-scope="current, today"</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabledDate</td>
                    <td>不可选择的日期</td>
                    <td>(currentDate: Date) => boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>getCalendarContainer</td>
                    <td>定义浮层的容器，默认为 body 上新建 div</td>
                    <td>(trigger) => HTMLElement</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>open</td>
                    <td>控制弹层是否展开</td>
                    <td>boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>输入框提示文字</td>
                    <td>string|RangePicker[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>popupStyle</td>
                    <td>额外的弹出日历样式</td>
                    <td>object</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>dropdownClassName</td>
                    <td>额外的弹出日历 className</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>suffixIcon</td>
                    <td>自定义的选择框前缀图标</td>
                    <td>VNode | slot</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">共有的事件</p>
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
                    <td>openChange</td>
                    <td>弹出日历和关闭日历的回调</td>
                    <td>function(status)</td>
                </tr>
                <tr>
                    <td>panelChange</td>
                    <td>日期面板变化时的回调</td>
                    <td>function(value, mode)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">共同的方法</p>
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

            <p class="row-in-round">sl-date-picker</p>
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
                    <td>defaultValue</td>
                    <td>默认日期</td>
                    <td>Date</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabledTime</td>
                    <td>不可选择的时间</td>
                    <td>function(date)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>设置日期格式</td>
                    <td>string</td>
                    <td>"YYYY-MM-DD"</td>
                </tr>
                <tr>
                    <td>renderExtraFooter</td>
                    <td>在面板中添加额外的页脚</td>
                    <td>slot="renderExtraFooter"</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>showTime</td>
                    <td>增加时间选择功能</td>
                    <td>Object|boolean</td>
                    <td>TimePicker Options</td>
                </tr>
                <tr>
                    <td>showToday</td>
                    <td>是否展示“今天”按钮</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>日期</td>
                    <td>Date</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-date-picker事件</p>
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
                    <td>function(date)</td>
                </tr>
                <tr>
                    <td>ok</td>
                    <td>点击确定按钮的回调</td>
                    <td>function()</td>
                </tr>
                <tr>
                    <td>cancel</td>
                    <td>点击取消按钮的回调</td>
                    <td>function()</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-month-picker</p>
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
                    <td>defaultValue</td>
                    <td>默认日期</td>
                    <td>Date</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>设置日期格式</td>
                    <td>string</td>
                    <td>"YYYY-MM"</td>
                </tr>
                <tr>
                    <td>monthCellContentRender</td>
                    <td>自定义的月份内容渲染方法</td>
                    <td>slot="monthCellContentRender" slot-scope="date, locale"</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>renderExtraFooter</td>
                    <td>在面板中添加额外的页脚</td>
                    <td>slot="renderExtraFooter"</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>日期</td>
                    <td>Date</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-month-picker事件</p>
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
                    <td>function(date)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-week-picker</p>
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
                    <td>defaultValue</td>
                    <td>默认日期</td>
                    <td>Date</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>设置日期格式</td>
                    <td>string</td>
                    <td>"YYYY-wo"</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>日期</td>
                    <td>Date</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-week-picker事件</p>
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
                    <td>function(date)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-range-picker</p>
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
                    <td>defaultValue</td>
                    <td>默认日期</td>
                    <td>Date[]</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabledTime</td>
                    <td>不可选择的时间</td>
                    <td>function(dates: [Date, Date], partial: 'start'|'end')</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>设置日期格式</td>
                    <td>string</td>
                    <td>"YYYY-MM-DD HH:mm:ss"</td>
                </tr>
                <tr>
                    <td>showOperation</td>
                    <td>显示操作按钮，只有选择日期时有效</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>rangeBtnType</td>
                    <td>配置快速选择模板</td>
                    <td>RangeBtnType (备注：快速选择的配置类) :'hours'(近24/48/72小时类) | 'days'(今天/昨天类) | 'lastDays'(近3/7天类) | 'lastWeeksAndMonths'(周、月混合类)
                        CustomBtnType[ ] (备注：快速选择的配置项) : 'last24Hours'(近24小时) | 'last48Hours'(近48小时) | 'last72Hours'(近72小时) | 'today'(今天) | 'yesterday'(昨天) | 'lastThreeDays'(近三天) | 'lastSevenDays'(近七天) | 'lastWeek'(最近一周) |'lastTwoWeeks' (最近两周) | 'lastMonth'(最近一个月) | 'lastSixMonths' (最近六个月)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>showTime</td>
                    <td>增加时间选择功能</td>
                    <td>Object|boolean</td>
                    <td>TimePicker Options</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>日期</td>
                    <td>Date[]</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-range-picker事件</p>
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
                    <td>calendarChange</td>
                    <td>待选日期发生变化的回调</td>
                    <td>function(dates: [Date, Date])</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>时间发生变化的回调</td>
                    <td>function(dates: [Date, Date])</td>
                </tr>
                <tr>
                    <td>ok</td>
                    <td>点击确定按钮的回调</td>
                    <td>function(dates: [Date, Date])</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeWithTime, CodeRange, CodeDisabledDate, CodeLimit, CodeLocale, CodeMoment } from "./date-picker.code";

    export default {
        data() {
            return {
                CodeBasic,
                CodeWithTime,
                CodeRange,
                CodeDisabledDate,
                CodeLimit,
                CodeLocale,
                CodeMoment,
                startValue: null,
                endValue: null,
                endOpen: false,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        watch: {
          startValue(val) {
            console.log('startValue', val)
          },
          endValue(val) {
            console.log('endValue', val)
          }
        },
        methods: {
            /* week-picker有2个参数 */
            onChange(date,b) {
                console.log(date,b);
            },
            onOk(date) {
              console.log(date);
            },
            onCancel() {
              console.log('cancel');
            },
            /* 不可用日期 */
            range(start, end) {
                const result = [];
                for (let i = start; i < end; i++) {
                    result.push(i);
                }
                return result;
            },
            disabledDate(current) {
              // return current && current < this.moment().startOf('day');
              return current && current.valueOf() < Date.now();
            },
            disabledTime() {
                return {
                    disabledHours: () => this.range(0, 24).splice(4, 20),
                    disabledMinutes: () => this.range(30, 60),
                    disabledSeconds: () => [55, 56],
                };
            },
            disabledRangeTime(_, type) {
                if (type === 'start') {
                    return {
                        disabledHours: () => this.range(0, 60).splice(4, 20),
                        disabledMinutes: () => this.range(30, 60),
                        disabledSeconds: () => [55, 56],
                    };
                }
                return {
                    disabledHours: () => this.range(0, 60).splice(20, 4),
                    disabledMinutes: () => this.range(0, 31),
                    disabledSeconds: () => [55, 56],
                };
            },
            /* 最大最小日期范围 */
            disabledStartDate (startValue) {
                const endValue = this.endValue;
                if (!startValue || !endValue) {
                    return false;
                }
                return startValue.valueOf() > endValue.valueOf();
            },
            disabledEndDate (endValue) {
                const startValue = this.startValue;
                if (!endValue || !startValue) {
                    return false;
                }
                return startValue.valueOf() >= endValue.valueOf();
            },
            handleStartOpenChange (open) {
              if (!open) {
                    this.endOpen = true;
                }
            },
            handleEndOpenChange (open) {
                this.endOpen = open;
            },
        },
    }
</script>
