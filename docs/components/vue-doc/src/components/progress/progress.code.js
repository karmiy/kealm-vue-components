/* 基础进度条 */
export const CodeBasic =
`    <template>
        <div>
            <sl-progress :percent="30" />
            <sl-progress :percent="50" status="active" />
            <sl-progress :percent="70" status="exception" />
            <sl-progress :percent="100" />
            <sl-progress :percent="50" :showInfo="false" />
            <p>在较小区域内，可以添加size的属性，创建小型的进度条</p>
            <div class="progress-inner-smallbox">
                <sl-progress :percent="30" size="small" />
                <sl-progress :percent="50" status="active" size="small" />
                <sl-progress :percent="70" status="exception" size="small" />
                <sl-progress :percent="100" size="small" />
                <sl-progress :percent="50" :showInfo="false" size="small" />
            </div>
        </div>
    </template>`

/* 分段进度条 */
export const CodeSegment =
`    <template>
        <div>
            <sl-tooltip title="3 done / 3 in progress / 4 to do">
                <sl-progress :percent="60" :successPercent="30" />
            </sl-tooltip>
        </div>
    </template>`

/* 进度条动态效果 */
export const CodeDynamic =
`    <template>
        <div>
            <sl-progress :percent="percent" />
            <sl-button-group>
                <sl-button @click="decline" icon><i class="salus-icon-minus-o"></i></sl-button>
                <sl-button @click="increase" icon><i class="salus-icon-plus-o"></i></sl-button>
            </sl-button-group>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                percent: 0,
              }
            },
            methods: {
                increase() {
                    let percent = this.percent + 10;
                    if (percent > 100) {
                        percent = 100;
                    }
                    this.percent = percent
                },
                decline() {
                    let percent = this.percent - 10;
                    if (percent < 0) {
                        percent = 0;
                    }
                    this.percent = percent
                },
            }
        }
    </script>`

/* 进度圈 */
export const CodeCircle =
`    <template>
        <div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="75" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="70" status="exception" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="100" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="75" :width="80" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="70" status="exception" :width="80" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="100" :width="80" />
            </div>
        </div>
    </template>`

/* 进度条动态效果 */
export const CodeCircleDynamic =
`    <template>
        <div>
            <sl-progress type="circle" :percent="percent" />
            <sl-button-group>
                <sl-button @click="decline" icon><i class="salus-icon-minus-o"></i></sl-button>
                <sl-button @click="increase" icon><i class="salus-icon-plus-o"></i></sl-button>
            </sl-button-group>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                percent: 0,
              }
            },
            methods: {
                increase() {
                    let percent = this.percent + 10;
                    if (percent > 100) {
                        percent = 100;
                    }
                    this.percent = percent
                },
                decline() {
                    let percent = this.percent - 10;
                    if (percent < 0) {
                        percent = 0;
                    }
                    this.percent = percent
                },
            }
        }
    </script>`

/* 自定义格式 */
export const CodeFormat =
`    <template>
        <div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="75" :format="percent => \`\${percent} 天\`"/>
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="100" :format="() => 'Done'" />
            </div>
        </div>
    </template>`

/* 自定义进度条颜色 */
export const CodeBackground =
`    <template>
        <div>
            <p>通过innerColor修改内联颜色</p>
            <sl-progress :percent="75" innerColor="red" />
            <p>通过strokeColor修改进度条颜色</p>
            <sl-progress :percent="75" strokeColor="red" />
        </div>
    </template>`

/* 仪表盘 */
export const CodeDashboard =
`    <template>
        <div>
            <sl-progress type="dashboard" :percent="75" strokeLinecap="square" />
        </div>
    </template>`
