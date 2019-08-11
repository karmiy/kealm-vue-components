<template>
    <div class="page-box salus-scrollbar layout" ref="page">
        <div class="detail-box">
            <h1>Progress 进度条</h1>
            <p>展示操作的当前进度。</p>
        </div>

        <!--基础进度条-->
        <div class="detail-box">
            <h2>基础进度条</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础进度条结束-->

        <!--分段进度条-->
        <div class="detail-box">
            <h2>分段进度条</h2>
            <p class="code-left-line">Demo</p>
            <sl-tooltip title="3 done / 3 in progress / 4 to do">
                <sl-progress :percent="60" :successPercent="30" />
            </sl-tooltip>
            <search-code :code="CodeSegment"></search-code>
        </div>
        <!--分段进度条结束-->

        <!--进度条动态效果-->
        <div class="detail-box">
            <h2>进度条动态效果</h2>
            <p class="code-left-line">Demo</p>
            <sl-progress :percent="percent" />
            <sl-button-group>
                <sl-button @click="decline" icon><i class="salus-icon-minus-o"></i></sl-button>
                <sl-button @click="increase" icon><i class="salus-icon-plus-o"></i></sl-button>
            </sl-button-group>
            <search-code :code="CodeDynamic"></search-code>
        </div>
        <!--进度条动态效果结束-->

        <!--进度圈-->
        <div class="detail-box">
            <h2>进度圈</h2>
            <p class="code-left-line">Demo</p>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="75" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="70" status="exception" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="100" />
            </div>
            <p>在较小区域内，可以添加width的属性，创建小型的进度条</p>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="75" :width="80" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="70" status="exception" :width="80" />
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="100" :width="80" />
            </div>
            <search-code :code="CodeCircle"></search-code>
        </div>
        <!--进度圈结束-->

        <!--进度圈动态效果-->
        <div class="detail-box">
            <h2>进度圈动态效果</h2>
            <p class="code-left-line">Demo</p>
            <sl-progress type="circle" :percent="percent" />
            <sl-button-group>
                <sl-button @click="decline" icon><i class="salus-icon-minus-o"></i></sl-button>
                <sl-button @click="increase" icon><i class="salus-icon-plus-o"></i></sl-button>
            </sl-button-group>
            <search-code :code="CodeCircleDynamic"></search-code>
        </div>
        <!--进度圈动态效果结束-->

        <!--自定义文字格式-->
        <div class="detail-box">
            <h2>自定义文字格式</h2>
            <p class="code-left-line">Demo</p>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="75" :format="percent => `${percent} 天`"/>
            </div>
            <div class="progress-circle-demo">
                <sl-progress type="circle" :percent="100" :format="() => 'Done'" />
            </div>
            <search-code :code="CodeFormat"></search-code>
        </div>
        <!--自定义文字格式结束-->

        <!--自定义进度条颜色-->
        <div class="detail-box">
            <h2>自定义进度条颜色</h2>
            <p class="code-left-line">Demo</p>
            <p>通过innerColor修改内联颜色</p>
            <sl-progress :percent="75" innerColor="red" />
            <p>通过strokeColor修改进度条颜色</p>
            <sl-progress :percent="75" strokeColor="red" />
            <search-code :code="CodeBackground"></search-code>
        </div>
        <!--自定义进度条颜色结束-->

        <!--仪表盘-->
        <div class="detail-box">
            <h2>仪表盘</h2>
            <p class="code-left-line">Demo</p>
            <sl-progress type="dashboard" :percent="75" strokeLinecap="square" />
            <search-code :code="CodeDashboard"></search-code>
        </div>
        <!--仪表盘结束-->

        <!--参数说明开始-->
        <div class="detail-box" id="API">
            <h2>API</h2>
            <p class="row-in-round" id="Anchor-Props">sl-progress</p>
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
                    <td>format</td>
                    <td>内容的模板函数</td>
                    <td>function(percent, successPercent)</td>
                    <td>percent => percent + '%'</td>
                </tr>
                <tr>
                    <td>gapDegree (type=circle)</td>
                    <td>圆形进度条缺口角度，可取值 0 ~ 360</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>gapPosition (type=circle)</td>
                    <td>圆形进度条缺口位置</td>
                    <td>Enum{ 'top', 'bottom', 'left', 'right' }</td>
                    <td>'top'</td>
                </tr>
                <tr>
                    <td>percent</td>
                    <td>百分比</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>showInfo</td>
                    <td>是否显示进度数值或状态图标</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>状态，可选：normal success exception active</td>
                    <td>string</td>
                    <td>'normal'</td>
                </tr>
                <tr>
                    <td>strokeWidth (type=line)</td>
                    <td>进度条线的宽度，单位 px</td>
                    <td>number</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>strokeWidth (type=circle)</td>
                    <td>圆形进度条线的宽度，单位是进度条画布宽度的百分比</td>
                    <td>number</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>strokeColor</td>
                    <td>进度条的色彩</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>innerColor</td>
                    <td>内联的色彩</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>successPercent</td>
                    <td>已完成的分段百分比，type="line" 时有效</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>类型，可选 line circle dashboard</td>
                    <td>string</td>
                    <td>'line'</td>
                </tr>
                <tr>
                    <td>width (type=circle)</td>
                    <td>圆形进度条画布宽度，单位 px</td>
                    <td>number</td>
                    <td>120</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeSegment, CodeDynamic, CodeCircle, CodeCircleDynamic, CodeFormat, CodeBackground, CodeDashboard } from "./progress.code";

    export default {
        data() {
            return {
              CodeBasic,
              CodeSegment,
              CodeDynamic,
              CodeCircle,
              CodeCircleDynamic,
              CodeFormat,
              CodeBackground,
              CodeDashboard,
              percent: 0,
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
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
</script>
<style scoped>
    @import './progress.scss';
</style>