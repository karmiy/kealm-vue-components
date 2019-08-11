
export const CodeBasic =
`    <template>
        <div>
            <sl-date-picker @change="onChange" />
        </div>
    </template>
    <script>
        export default {
            methods: {
                onChange(date) {
                    console.log(date);
                }
            }
        }
    </script>`;

/* 日期时间选择框 */
export const CodeWithTime = 
`    <template>
        <div>
            <sl-date-picker showTime format="YYYY-MM-DD HH:mm:ss" @change="onChange" @ok="onOk" @cancel="onCancel" />
        </div>
    </template>
    <script>
        export default {
            methods: {
                onChange(date) {
                    console.log(date);
                },
                onOk(date) {
                  console.log(date);
                },
                onCancel() {
                  console.log('cancel');
                },
            }
        }
    </script>`;

/* 日期范围选择 */
export const CodeRange = 
`    <template>
        <div>
            // 日期范围选择
            <sl-range-picker @change="onChange" />
            // 带有快速选择按钮-日期
            <sl-range-picker @change="onChange" rangeBtnType="days" />
            <sl-range-picker @change="onChange" rangeBtnType="lastDays" />
            <sl-range-picker @change="onChange" rangeBtnType="lastWeeksAndMonths" />
            // 带有操作按钮-日期
            <sl-range-picker @change="onChange" rangeBtnType="days" showOperation />
            // 带有快速选择按钮-时间与日期
            <sl-range-picker @change="onChange" rangeBtnType="hours" showTime format="YYYY-MM-DD HH:mm:ss" />
            <sl-range-picker @change="onChange" rangeBtnType="days" showTime format="YYYY-MM-DD HH:mm:ss" />
            <sl-range-picker @change="onChange" rangeBtnType="lastDays" showTime format="YYYY-MM-DD HH:mm:ss" />
            <sl-range-picker @change="onChange" rangeBtnType="lastWeeksAndMonths" showTime format="YYYY-MM-DD HH:mm:ss" />
            <sl-range-picker @change="onChange" :rangeBtnType="['last24Hours', 'today' , 'lastThreeDays', 'lastWeek', 'lastMonth' ]" showTime format="YYYY-MM-DD HH:mm:ss" />
        </div>
    </template>
    <script>
        export default {
            methods: {
                onChange(date) {
                    console.log(date);
                },
            }
        }
    </script>`;

export const CodeDisabledDate = `    
    <template>
        <div>
            <sl-date-picker showTime format="YYYY-MM-DD HH:mm:ss" :disabledDate="disabledDate" :disabledTime="disabledTime" @change="onChange" />
            <sl-month-picker :disabledDate="disabledDate" placeholder="选择月份" @change="onChange" />
            <sl-range-picker @change="onChange" :showTime="{ hideDisabledOptions: true }" format="YYYY-MM-DD HH:mm:ss" :disabledDate="disabledDate" :disabledTime="disabledRangeTime" />
        </div>
    </template>
    <script>
        export default {
            methods: {
                onChange(date) {
                    console.log(date);
                },
                range(start, end) {
                    const result = [];
                    for (let i = start; i < end; i++) {
                        result.push(i);
                    }
                    return result;
                },
                disabledDate(current) {
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
            }
        }
    </script>`;

/* 日期范围最大值最小值限制 */
export const CodeLimit = 
`    <template>
        <div>
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
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                startValue: null,
                endValue: null,
                endOpen: false,
              }
            },
            methods: {
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
            }
        }
    </script>`

/* API */
export const CodeLocale =
`    import locale from "@salus/react-components/common/date-picker/locale/zh_CN";
      <DatePicker locale={locale} />
    `

export const CodeMoment =
  `    import moment from 'moment';
      moment.locale('zh-cn');
      <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
    `
